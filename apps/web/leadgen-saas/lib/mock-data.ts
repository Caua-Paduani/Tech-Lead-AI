// Mock data for testing the application
export const mockLeads = [
  {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah@techcorp.com",
    company: "TechCorp",
    phone: "+1 (555) 123-4567",
    message:
      "Interested in scaling our lead generation efforts. Looking for a solution that can handle WhatsApp and email outreach.",
    source: "landing_page",
    status: "new",
    created_at: "2025-01-08T10:30:00Z",
    updated_at: "2025-01-08T10:30:00Z",
  },
  {
    id: "2",
    name: "Mike Chen",
    email: "mike@startupxyz.com",
    company: "StartupXYZ",
    phone: "+1 (555) 234-5678",
    message: "Need help with automated outreach for our B2B sales team.",
    source: "referral",
    status: "contacted",
    created_at: "2025-01-08T09:15:00Z",
    updated_at: "2025-01-08T11:45:00Z",
  },
  {
    id: "3",
    name: "Emma Davis",
    email: "emma@growthlab.com",
    company: "GrowthLab",
    phone: "+1 (555) 345-6789",
    message: "Looking to improve our conversion rates with better lead nurturing.",
    source: "social_media",
    status: "qualified",
    created_at: "2025-01-08T08:00:00Z",
    updated_at: "2025-01-08T12:30:00Z",
  },
  {
    id: "4",
    name: "Alex Rodriguez",
    email: "alex@innovateco.com",
    company: "InnovateCo",
    phone: "+1 (555) 456-7890",
    message: "Want to explore WhatsApp automation for our customer outreach.",
    source: "landing_page",
    status: "new",
    created_at: "2025-01-08T07:45:00Z",
    updated_at: "2025-01-08T07:45:00Z",
  },
  {
    id: "5",
    name: "Lisa Wang",
    email: "lisa@scaleup.io",
    company: "ScaleUp",
    phone: "+1 (555) 567-8901",
    message: "Need a comprehensive solution for lead management and automated follow-ups.",
    source: "webinar",
    status: "contacted",
    created_at: "2025-01-07T16:20:00Z",
    updated_at: "2025-01-08T09:10:00Z",
  },
]

export const mockTemplates = [
  {
    id: "1",
    name: "Welcome Email",
    channel: "email",
    subject: "Welcome to {{company_name}}!",
    content:
      "Hi {{first_name}},\n\nThank you for your interest in our lead generation platform. We're excited to help you scale your outreach efforts.\n\nBest regards,\nThe AceOfHeartsLeads Team",
    variables: ["first_name", "company_name"],
    created_at: "2025-01-08T10:00:00Z",
  },
  {
    id: "2",
    name: "Follow-up WhatsApp",
    channel: "whatsapp",
    subject: "",
    content:
      "Hi {{first_name}}! 👋\n\nJust following up on your interest in automating your lead outreach. Would you like to schedule a quick 15-minute demo to see how we can help {{company_name}}?\n\nLet me know what works for you!",
    variables: ["first_name", "company_name"],
    created_at: "2025-01-08T10:00:00Z",
  },
  {
    id: "3",
    name: "Demo Invitation",
    channel: "email",
    subject: "Ready to see AceOfHeartsLeads in action?",
    content:
      "Hi {{first_name}},\n\nI hope this email finds you well. I wanted to reach out personally to see if you'd be interested in a personalized demo of our platform.\n\nWe've helped companies like {{company_name}} increase their response rates by up to 300%. I'd love to show you how we can do the same for you.\n\nAre you available for a 20-minute call this week?\n\nBest,\n{{sender_name}}",
    variables: ["first_name", "company_name", "sender_name"],
    created_at: "2025-01-08T10:00:00Z",
  },
]

export const mockCampaigns = [
  {
    id: "1",
    name: "Q1 Product Launch",
    description: "Email campaign for new product launch targeting existing leads",
    status: "active",
    channel: "email",
    leads_count: 245,
    messages_sent: 180,
    responses: 42,
    created_at: "2025-01-05T10:00:00Z",
    steps: [
      {
        id: "1",
        step_order: 1,
        step_type: "message",
        content: "Initial product announcement email",
        delay_hours: 0,
      },
      {
        id: "2",
        step_order: 2,
        step_type: "delay",
        content: "",
        delay_hours: 72,
      },
      {
        id: "3",
        step_order: 3,
        step_type: "message",
        content: "Follow-up with demo invitation",
        delay_hours: 0,
      },
    ],
  },
  {
    id: "2",
    name: "WhatsApp Outreach",
    description: "Personal WhatsApp messages for high-value prospects",
    status: "active",
    channel: "whatsapp",
    leads_count: 89,
    messages_sent: 67,
    responses: 15,
    created_at: "2025-01-06T14:30:00Z",
    steps: [
      {
        id: "1",
        step_order: 1,
        step_type: "message",
        content: "Personal introduction message",
        delay_hours: 0,
      },
      {
        id: "2",
        step_order: 2,
        step_type: "delay",
        content: "",
        delay_hours: 48,
      },
      {
        id: "3",
        step_order: 3,
        step_type: "message",
        content: "Follow-up with value proposition",
        delay_hours: 0,
      },
    ],
  },
]

export const mockAnalytics = {
  overview: {
    totalLeads: 1234,
    messagesSent: 5678,
    responseRate: 23.5,
    conversions: 89,
    trends: {
      leads: 12,
      messages: 8,
      responseRate: -2,
      conversions: 15,
    },
  },
  chartData: {
    messagesOverTime: [
      { date: "2025-01-01", email: 120, whatsapp: 80, total: 200 },
      { date: "2025-01-02", email: 150, whatsapp: 95, total: 245 },
      { date: "2025-01-03", email: 180, whatsapp: 110, total: 290 },
      { date: "2025-01-04", email: 160, whatsapp: 125, total: 285 },
      { date: "2025-01-05", email: 200, whatsapp: 140, total: 340 },
      { date: "2025-01-06", email: 220, whatsapp: 160, total: 380 },
      { date: "2025-01-07", email: 190, whatsapp: 145, total: 335 },
    ],
    responseRates: [
      { channel: "Email", rate: 18.5, responses: 342, sent: 1850 },
      { channel: "WhatsApp", rate: 31.2, responses: 187, sent: 599 },
      { channel: "LinkedIn", rate: 12.8, responses: 45, sent: 352 },
    ],
    conversionFunnel: [
      { stage: "Leads Captured", count: 1234, percentage: 100 },
      { stage: "Messages Sent", count: 987, percentage: 80 },
      { stage: "Responses Received", count: 234, percentage: 19 },
      { stage: "Qualified Leads", count: 156, percentage: 13 },
      { stage: "Conversions", count: 89, percentage: 7 },
    ],
    campaignPerformance: [
      { name: "Q1 Product Launch", sent: 245, responses: 42, rate: 17.1, conversions: 12 },
      { name: "WhatsApp Outreach", sent: 89, responses: 15, rate: 16.9, conversions: 8 },
      { name: "Follow-up Sequence", sent: 156, responses: 28, rate: 17.9, conversions: 15 },
      { name: "Cold Email Campaign", sent: 320, responses: 45, rate: 14.1, conversions: 18 },
    ],
  },
}

export const mockBilling = {
  currentPlan: {
    name: "Growth",
    price: 79,
    billing: "monthly",
    features: [
      "Up to 5,000 leads/month",
      "Advanced WhatsApp automation",
      "Email sequences & templates",
      "Advanced analytics & reporting",
      "Priority support",
      "Custom integrations",
    ],
    usage: {
      leads: { current: 2847, limit: 5000 },
      messages: { current: 4231, limit: 10000 },
    },
  },
  trialInfo: {
    daysRemaining: 12,
    endsAt: "2025-01-20T23:59:59Z",
  },
  paymentMethod: {
    type: "card",
    last4: "4242",
    brand: "Visa",
    expiryMonth: 12,
    expiryYear: 2027,
  },
  invoices: [
    {
      id: "inv_001",
      date: "2025-01-01",
      amount: 79,
      status: "paid",
      description: "Growth Plan - January 2025",
      downloadUrl: "#",
    },
    {
      id: "inv_002",
      date: "2024-12-01",
      amount: 79,
      status: "paid",
      description: "Growth Plan - December 2024",
      downloadUrl: "#",
    },
    {
      id: "inv_003",
      date: "2024-11-01",
      amount: 79,
      status: "paid",
      description: "Growth Plan - November 2024",
      downloadUrl: "#",
    },
  ],
  plans: [
    {
      id: "starter",
      name: "Starter",
      description: "Perfect for small businesses",
      monthlyPrice: 29,
      annualPrice: 290,
      features: [
        "Up to 1,000 leads/month",
        "WhatsApp messaging",
        "Email campaigns",
        "Basic analytics",
        "Email support",
      ],
      limits: {
        leads: 1000,
        messages: 2000,
      },
    },
    {
      id: "growth",
      name: "Growth",
      description: "For growing businesses",
      monthlyPrice: 79,
      annualPrice: 790,
      features: [
        "Up to 5,000 leads/month",
        "Advanced WhatsApp automation",
        "Email sequences & templates",
        "Advanced analytics & reporting",
        "Priority support",
        "Custom integrations",
      ],
      limits: {
        leads: 5000,
        messages: 10000,
      },
      popular: true,
    },
    {
      id: "pro",
      name: "Pro",
      description: "For large organizations",
      monthlyPrice: 199,
      annualPrice: 1990,
      features: [
        "Unlimited leads",
        "White-label solution",
        "Advanced AI automation",
        "Custom reporting & dashboards",
        "Dedicated success manager",
        "Full API access",
      ],
      limits: {
        leads: -1, // unlimited
        messages: -1, // unlimited
      },
    },
  ],
}
