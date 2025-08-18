const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const axios = require("axios");

const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key-change-in-production";
const FACEBOOK_APP_ID = process.env.FACEBOOK_APP_ID || "your-facebook-app-id";
const FACEBOOK_APP_SECRET = process.env.FACEBOOK_APP_SECRET || "your-facebook-app-secret";
const REDIRECT_URI = process.env.REDIRECT_URI || "http://localhost:3000/auth/facebook/callback";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Middleware de autenticação
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Bearer TOKEN

  if (!token) {
    return res.status(401).json({ error: "Token de acesso necessário" });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Token inválido" });
    }
    req.user = user;
    next();
  });
};

// Simulação de banco de dados em memória (em produção, use um banco real)
const users = [
  {
    id: 1,
    email: "admin@example.com",
    password: bcrypt.hashSync("password123", 10),
    name: "Admin User",
    facebookAccessToken: null,
    facebookUserId: null,
    facebookPages: []
  }
];

const leads = [
  {
    id: 1,
    userId: 1,
    facebookLeadId: "fb_lead_123",
    name: "João Silva",
    email: "joao@empresa.com",
    phone: "+55 11 99999-9999",
    company: "Empresa ABC",
    status: "new",
    source: "facebook_lead_ads",
    created_at: new Date().toISOString(),
    formData: {
      full_name: "João Silva",
      email: "joao@empresa.com",
      phone: "+55 11 99999-9999",
      company: "Empresa ABC",
      interest: "produto premium"
    },
    adId: "ad_123",
    adSetId: "adset_456",
    campaignId: "campaign_789"
  }
];

const followUpMessages = [
  {
    id: 1,
    userId: 1,
    leadId: 1,
    message: "Olá João! Vi que você se interessou pelo nosso produto. Podemos agendar uma demonstração?",
    status: "sent",
    sent_at: new Date().toISOString(),
    channel: "email"
  }
];

// Endpoint de login tradicional
app.post("/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email e senha são obrigatórios" });
    }

    const user = users.find(u => u.email === email);
    if (!user) {
      return res.status(401).json({ error: "Credenciais inválidas" });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ error: "Credenciais inválidas" });
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: "24h" }
    );

    res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        facebookConnected: !!user.facebookAccessToken
      }
    });
  } catch (error) {
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

// Endpoint para iniciar conexão com Facebook
app.get("/auth/facebook/connect", authenticateToken, (req, res) => {
  const facebookAuthUrl = `https://www.facebook.com/v18.0/dialog/oauth?client_id=${FACEBOOK_APP_ID}&redirect_uri=${REDIRECT_URI}&scope=ads_management,ads_read,business_management,pages_read_engagement,pages_show_list`;
  
  res.json({
    authUrl: facebookAuthUrl,
    message: "Redirecione o usuário para esta URL para conectar com Facebook"
  });
});

// Callback do Facebook OAuth
app.get("/auth/facebook/callback", async (req, res) => {
  try {
    const { code } = req.query;
    
    if (!code) {
      return res.status(400).json({ error: "Código de autorização não fornecido" });
    }

    // Trocar código por access token
    const tokenResponse = await axios.get(`https://graph.facebook.com/v18.0/oauth/access_token`, {
      params: {
        client_id: FACEBOOK_APP_ID,
        client_secret: FACEBOOK_APP_SECRET,
        redirect_uri: REDIRECT_URI,
        code
      }
    });

    const { access_token } = tokenResponse.data;

    // Obter informações do usuário
    const userResponse = await axios.get(`https://graph.facebook.com/v18.0/me`, {
      params: {
        access_token,
        fields: 'id,name,email'
      }
    });

    const facebookUser = userResponse.data;

    // Obter páginas do usuário
    const pagesResponse = await axios.get(`https://graph.facebook.com/v18.0/me/accounts`, {
      params: {
        access_token,
        fields: 'id,name,access_token'
      }
    });

    const pages = pagesResponse.data.data;

    // Atualizar usuário com dados do Facebook
    const userIndex = users.findIndex(u => u.id === 1); // Em produção, buscar por ID do usuário logado
    if (userIndex !== -1) {
      users[userIndex].facebookAccessToken = access_token;
      users[userIndex].facebookUserId = facebookUser.id;
      users[userIndex].facebookPages = pages;
    }

    res.json({
      success: true,
      message: "Conta do Facebook conectada com sucesso!",
      user: {
        facebookUserId: facebookUser.id,
        facebookName: facebookUser.name,
        pagesCount: pages.length
      }
    });

  } catch (error) {
    console.error("Erro na callback do Facebook:", error.response?.data || error.message);
    res.status(500).json({ error: "Erro ao conectar com Facebook" });
  }
});

// Endpoint para sincronizar leads do Facebook
app.post("/leads/sync-facebook", authenticateToken, async (req, res) => {
  try {
    const user = users.find(u => u.id === req.user.userId);
    
    if (!user || !user.facebookAccessToken) {
      return res.status(400).json({ error: "Conta do Facebook não conectada" });
    }

    const { pageId } = req.body;
    
    if (!pageId) {
      return res.status(400).json({ error: "ID da página é obrigatório" });
    }

    // Buscar formulários de lead da página
    const formsResponse = await axios.get(`https://graph.facebook.com/v18.0/${pageId}/leadgen_forms`, {
      params: {
        access_token: user.facebookAccessToken,
        fields: 'id,name,status'
      }
    });

    const forms = formsResponse.data.data;
    const newLeads = [];

    // Para cada formulário, buscar leads
    for (const form of forms) {
      try {
        const leadsResponse = await axios.get(`https://graph.facebook.com/v18.0/${form.id}/leads`, {
          params: {
            access_token: user.facebookAccessToken,
            fields: 'id,created_time,field_data,ad_id,adset_id,campaign_id'
          }
        });

        const formLeads = leadsResponse.data.data;

        for (const lead of formLeads) {
          // Verificar se lead já existe
          const existingLead = leads.find(
            l => l.facebookLeadId === lead.id && l.userId === req.user.userId
          );

          if (!existingLead) {
            // Processar dados do formulário
            const formData = {};
            if (lead.field_data) {
              lead.field_data.forEach(field => {
                formData[field.name] = field.values[0];
              });
            }

            const newLead = {
              id: leads.length + 1,
              userId: req.user.userId,
              facebookLeadId: lead.id,
              name: formData.full_name || formData.name || formData.nome || "Nome não informado",
              email: formData.email || formData.e_mail || "",
              phone: formData.phone || formData.telefone || formData.phone_number || "",
              company: formData.company || formData.empresa || formData.business || "",
              status: "new",
              source: "facebook_lead_ads",
              created_at: lead.created_time,
              formData,
              adId: lead.ad_id,
              adSetId: lead.adset_id,
              campaignId: lead.campaign_id
            };

            leads.push(newLead);
            newLeads.push(newLead);
          }
        }
      } catch (formError) {
        console.error(`Erro ao buscar leads do formulário ${form.id}:`, formError.message);
      }
    }

    res.json({
      success: true,
      message: `${newLeads.length} novos leads sincronizados`,
      leads: newLeads,
      formsCount: forms.length
    });

  } catch (error) {
    console.error("Erro na sincronização:", error.response?.data || error.message);
    res.status(500).json({ error: "Erro ao sincronizar leads do Facebook" });
  }
});

// Endpoint para listar páginas do Facebook do usuário
app.get("/facebook/pages", authenticateToken, (req, res) => {
  try {
    const user = users.find(u => u.id === req.user.userId);
    
    if (!user || !user.facebookAccessToken) {
      return res.status(400).json({ error: "Conta do Facebook não conectada" });
    }

    res.json({
      pages: user.facebookPages,
      total: user.facebookPages.length
    });
  } catch (error) {
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

// Endpoint para listar leads (apenas do usuário autenticado)
app.get("/leads/list", authenticateToken, (req, res) => {
  try {
    const userLeads = leads.filter(lead => lead.userId === req.user.userId);
    
    // Aplicar filtros opcionais
    const { status, source, search } = req.query;
    let filteredLeads = userLeads;

    if (status && status !== "all") {
      filteredLeads = filteredLeads.filter(lead => lead.status === status);
    }

    if (source && source !== "all") {
      filteredLeads = filteredLeads.filter(lead => lead.source === source);
    }

    if (search) {
      const searchLower = search.toLowerCase();
      filteredLeads = filteredLeads.filter(lead =>
        lead.name.toLowerCase().includes(searchLower) ||
        lead.email.toLowerCase().includes(searchLower) ||
        lead.company.toLowerCase().includes(searchLower)
      );
    }

    res.json({
      leads: filteredLeads,
      total: filteredLeads.length
    });
  } catch (error) {
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

// Endpoint para atualizar lead
app.put("/leads/:id", authenticateToken, (req, res) => {
  try {
    const leadId = parseInt(req.params.id);
    const leadIndex = leads.findIndex(
      l => l.id === leadId && l.userId === req.user.userId
    );

    if (leadIndex === -1) {
      return res.status(404).json({ error: "Lead não encontrado" });
    }

    const updatedLead = { ...leads[leadIndex], ...req.body };
    leads[leadIndex] = updatedLead;

    res.json({
      success: true,
      lead: updatedLead
    });
  } catch (error) {
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

// Endpoint fake para envio de follow-up
app.post("/follow-up/send", authenticateToken, (req, res) => {
  try {
    const { leadIds, message, channel = "email" } = req.body;

    if (!leadIds || !Array.isArray(leadIds) || leadIds.length === 0) {
      return res.status(400).json({ error: "IDs dos leads são obrigatórios" });
    }

    if (!message) {
      return res.status(400).json({ error: "Mensagem é obrigatória" });
    }

    // Verificar se todos os leads pertencem ao usuário
    const userLeads = leads.filter(
      lead => leadIds.includes(lead.id) && lead.userId === req.user.userId
    );

    if (userLeads.length !== leadIds.length) {
      return res.status(403).json({ error: "Alguns leads não pertencem ao usuário" });
    }

    // Simular envio de mensagens
    const sentMessages = [];
    const failedMessages = [];

    userLeads.forEach(lead => {
      // Simular sucesso/falha (90% de sucesso)
      const success = Math.random() > 0.1;
      
      if (success) {
        const followUp = {
          id: followUpMessages.length + 1,
          userId: req.user.userId,
          leadId: lead.id,
          message,
          status: "sent",
          sent_at: new Date().toISOString(),
          channel
        };

        followUpMessages.push(followUp);
        sentMessages.push({
          leadId: lead.id,
          leadName: lead.name,
          status: "sent"
        });
      } else {
        failedMessages.push({
          leadId: lead.id,
          leadName: lead.name,
          status: "failed",
          error: "Falha na entrega"
        });
      }
    });

    res.json({
      success: true,
      message: `${sentMessages.length} mensagens enviadas com sucesso`,
      sent: sentMessages,
      failed: failedMessages,
      total: userLeads.length
    });

  } catch (error) {
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

// Endpoint para listar follow-ups
app.get("/follow-up/list", authenticateToken, (req, res) => {
  try {
    const userFollowUps = followUpMessages.filter(
      followUp => followUp.userId === req.user.userId
    );

    res.json({
      followUps: userFollowUps,
      total: userFollowUps.length
    });
  } catch (error) {
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

// Endpoint de health check
app.get("/health", (req, res) => {
  res.status(200).json({ 
    message: "API funcionando",
    timestamp: new Date().toISOString(),
    endpoints: {
      auth: ["/auth/login", "/auth/facebook/connect", "/auth/facebook/callback"],
      facebook: ["/facebook/pages", "/leads/sync-facebook"],
      leads: ["/leads/list", "/leads/:id"],
      followUp: ["/follow-up/send", "/follow-up/list"]
    }
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
  console.log(`📊 Endpoints disponíveis:`);
  console.log(`   - POST /auth/login - Login`);
  console.log(`   - GET /auth/facebook/connect - Conectar Facebook`);
  console.log(`   - GET /auth/facebook/callback - Callback Facebook`);
  console.log(`   - GET /facebook/pages - Listar páginas`);
  console.log(`   - POST /leads/sync-facebook - Sincronizar leads`);
  console.log(`   - GET /leads/list - Listar leads`);
  console.log(`   - PUT /leads/:id - Atualizar lead`);
  console.log(`   - POST /follow-up/send - Enviar follow-up`);
  console.log(`   - GET /follow-up/list - Listar follow-ups`);
  console.log(`   - GET /health - Health check`);
});
