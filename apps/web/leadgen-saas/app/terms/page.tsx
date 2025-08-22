import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, FileText, Scale, AlertTriangle, Heart, Calendar, Mail } from "lucide-react"
import Link from "next/link"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-dark">
      {/* Header */}
      <header className="border-b border-white/10 bg-surface-1/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-brand-red rounded-xl flex items-center justify-center neon-glow">
              <Heart className="w-6 h-6 text-white fill-white" />
            </div>
            <span className="text-2xl font-bold font-display text-white">LeadFlow</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-muted-1 hover:text-white" asChild>
              <Link href="/auth/login">Sign In</Link>
            </Button>
            <Button className="bg-brand-red hover:bg-brand-red-hover neon-glow" asChild>
              <Link href="/auth/signup">Start Free Trial</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="w-20 h-20 bg-brand-red/20 rounded-xl flex items-center justify-center mx-auto mb-6">
            <Scale className="w-10 h-10 text-brand-red" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">Terms of Service</h1>
          <p className="text-xl text-muted-1 mb-8">
            These terms govern your use of LeadFlow and outline our mutual rights and responsibilities.
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-muted-1">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              Last updated: August 2025
            </div>
            <div className="flex items-center">
              <FileText className="w-4 h-4 mr-2" />
              Version 2.1
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-12 px-4 bg-surface-1/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-display text-white mb-4">Terms at a Glance</h2>
            <p className="text-muted-1">Key points about using our service</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glass-card border-white/10 text-center p-6">
              <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Fair Usage</h3>
              <p className="text-muted-1 text-sm">
                Use our platform responsibly and in compliance with applicable laws and regulations.
              </p>
            </Card>

            <Card className="glass-card border-white/10 text-center p-6">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Clear Rights</h3>
              <p className="text-muted-1 text-sm">
                Understand your rights and our responsibilities as a service provider.
              </p>
            </Card>

            <Card className="glass-card border-white/10 text-center p-6">
              <div className="w-16 h-16 bg-brand-red/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Scale className="w-8 h-8 text-brand-red" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Legal Protection</h3>
              <p className="text-muted-1 text-sm">
                Terms designed to protect both parties and ensure fair business practices.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-12">
            {/* Acceptance of Terms */}
            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center">
                  <FileText className="w-6 h-6 mr-3 text-brand-red" />
                  Acceptance of Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-1">
                <p>
                  By accessing or using LeadFlow ("Service"), you agree to be bound by these Terms of Service
                  ("Terms"). If you disagree with any part of these terms, you may not access the Service.
                </p>
                <p>
                  These Terms apply to all visitors, users, and others who access or use the Service. By using our
                  Service, you represent that you are at least 18 years old and have the legal capacity to enter into
                  these Terms.
                </p>
                <div className="bg-brand-red/10 border border-brand-red/20 rounded-lg p-4">
                  <p className="text-white font-semibold mb-2">Important Notice</p>
                  <p>
                    These Terms constitute a legally binding agreement between you and LeadFlow. Please read them
                    carefully before using our Service.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Description of Service */}
            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center">
                  <Shield className="w-6 h-6 mr-3 text-brand-red" />
                  Description of Service
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-1">
                <p>LeadFlow is a B2B lead generation and automated outreach platform that enables users to:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Capture and manage leads from multiple sources</li>
                  <li>Create and send automated WhatsApp and email campaigns</li>
                  <li>Track campaign performance and analytics</li>
                  <li>Access customer support and training resources</li>
                </ul>
                <p>
                  We reserve the right to modify, suspend, or discontinue any part of the Service at any time, with or
                  without notice, though we will make reasonable efforts to notify users of significant changes.
                </p>
              </CardContent>
            </Card>

            {/* User Accounts and Registration */}
            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center">
                  <FileText className="w-6 h-6 mr-3 text-brand-red" />
                  User Accounts and Registration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-1">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Account Creation</h4>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>You must provide accurate and complete information during registration</li>
                    <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                    <li>You must notify us immediately of any unauthorized use of your account</li>
                    <li>One person or legal entity may not maintain more than one free account</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Account Responsibilities</h4>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>You are responsible for all activities that occur under your account</li>
                    <li>You must keep your contact information up to date</li>
                    <li>You may not share your account with others or allow others to access your account</li>
                    <li>You must comply with all applicable laws when using the Service</li>
                  </ul>
                </div>

                <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
                  <p className="text-orange-400 font-semibold mb-2">Account Security</p>
                  <p>
                    Use strong passwords and enable two-factor authentication when available. We are not liable for
                    losses resulting from unauthorized account access due to weak security practices.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Acceptable Use Policy */}
            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-3 text-brand-red" />
                  Acceptable Use Policy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-1">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Permitted Uses</h4>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Legitimate business-to-business lead generation and outreach</li>
                    <li>Compliance with all applicable anti-spam and privacy laws</li>
                    <li>Respectful communication with prospects and customers</li>
                    <li>Proper attribution when sharing or referencing our Service</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Prohibited Uses</h4>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Sending unsolicited spam or bulk messages to consumers (B2C)</li>
                    <li>Violating CAN-SPAM, GDPR, LGPD, or other applicable regulations</li>
                    <li>Uploading or transmitting malicious code, viruses, or harmful content</li>
                    <li>Attempting to gain unauthorized access to our systems or other users' accounts</li>
                    <li>Using the Service for illegal activities or to promote illegal products/services</li>
                    <li>Impersonating others or providing false information</li>
                    <li>Scraping or harvesting data from the Service without permission</li>
                  </ul>
                </div>

                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                  <p className="text-red-400 font-semibold mb-2">Enforcement</p>
                  <p>
                    Violation of this Acceptable Use Policy may result in immediate suspension or termination of your
                    account. We reserve the right to investigate suspected violations and cooperate with law
                    enforcement.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Payment Terms */}
            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center">
                  <FileText className="w-6 h-6 mr-3 text-brand-red" />
                  Payment Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-1">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Billing and Payments</h4>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Subscription fees are billed in advance on a monthly or annual basis</li>
                    <li>All fees are non-refundable except as required by law</li>
                    <li>You authorize us to charge your payment method for all fees</li>
                    <li>Prices may change with 30 days' notice to existing subscribers</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Free Trials</h4>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Free trials are limited to one per customer</li>
                    <li>No payment method required during trial period</li>
                    <li>Trial accounts have access to full features with usage limits</li>
                    <li>Trials automatically expire after 14 days unless upgraded</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Cancellation and Refunds</h4>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>You may cancel your subscription at any time from your account settings</li>
                    <li>Cancellation takes effect at the end of your current billing period</li>
                    <li>No refunds for partial months or unused portions of annual plans</li>
                    <li>Data export available for 30 days after cancellation</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center">
                  <Shield className="w-6 h-6 mr-3 text-brand-red" />
                  Intellectual Property Rights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-1">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Our Rights</h4>
                  <p className="mb-3">
                    The Service and its original content, features, and functionality are owned by LeadFlow and
                    are protected by:
                  </p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>
                      International copyright, trademark, patent, trade secret, and other intellectual property laws
                    </li>
                    <li>All trademarks, service marks, and logos used in the Service</li>
                    <li>Proprietary algorithms, software, and technical implementations</li>
                    <li>Documentation, training materials, and support content</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Your Rights</h4>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>You retain ownership of all content and data you upload to the Service</li>
                    <li>You grant us a limited license to use your content to provide the Service</li>
                    <li>You may export your data at any time during your subscription</li>
                    <li>You are responsible for ensuring you have rights to any content you upload</li>
                  </ul>
                </div>

                <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                  <p className="text-purple-400 font-semibold mb-2">License Grant</p>
                  <p>
                    We grant you a limited, non-exclusive, non-transferable license to use the Service in accordance
                    with these Terms during your subscription period.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Privacy and Data Protection */}
            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center">
                  <Shield className="w-6 h-6 mr-3 text-brand-red" />
                  Privacy and Data Protection
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-1">
                <p>
                  Your privacy is important to us. Our collection and use of personal information is governed by our
                  <Link href="/privacy" className="text-brand-red hover:underline mx-1">
                    Privacy Policy
                  </Link>
                  , which is incorporated into these Terms by reference.
                </p>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Data Processing</h4>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>We process your data only as necessary to provide the Service</li>
                    <li>You are responsible for compliance with data protection laws for your contacts</li>
                    <li>We implement appropriate security measures to protect your data</li>
                    <li>Data is stored in secure, geographically distributed data centers</li>
                  </ul>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                  <p className="text-blue-400 font-semibold mb-2">Your Responsibilities</p>
                  <p>
                    You must ensure you have proper consent and legal basis for processing any personal data of your
                    contacts through our Service, including compliance with GDPR, LGPD, and other applicable laws.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-3 text-brand-red" />
                  Limitation of Liability
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-1">
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                  <p className="text-yellow-400 font-semibold mb-2">Important Legal Notice</p>
                  <p>Please read this section carefully as it limits our liability and affects your legal rights.</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Service Availability</h4>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>The Service is provided "as is" without warranties of any kind</li>
                    <li>We do not guarantee uninterrupted or error-free operation</li>
                    <li>We are not liable for third-party service interruptions or failures</li>
                    <li>Scheduled maintenance may temporarily affect service availability</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Limitation of Damages</h4>
                  <p className="mb-3">
                    To the maximum extent permitted by law, LeadFlow shall not be liable for:
                  </p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Indirect, incidental, special, consequential, or punitive damages</li>
                    <li>Loss of profits, revenue, data, or business opportunities</li>
                    <li>Damages resulting from your use or inability to use the Service</li>
                    <li>Any amount exceeding the fees paid by you in the 12 months preceding the claim</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Indemnification</h4>
                  <p>
                    You agree to indemnify and hold harmless LeadFlow from any claims, damages, or expenses arising
                    from your use of the Service, violation of these Terms, or infringement of any rights of another
                    party.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Termination */}
            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center">
                  <FileText className="w-6 h-6 mr-3 text-brand-red" />
                  Termination
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-1">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Termination by You</h4>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>You may terminate your account at any time through your account settings</li>
                    <li>Termination takes effect at the end of your current billing period</li>
                    <li>You remain responsible for all charges incurred before termination</li>
                    <li>Data export is available for 30 days after termination</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Termination by Us</h4>
                  <p className="mb-3">We may terminate or suspend your account immediately if you:</p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Violate these Terms or our Acceptable Use Policy</li>
                    <li>Fail to pay fees when due</li>
                    <li>Engage in fraudulent or illegal activities</li>
                    <li>Pose a security risk to the Service or other users</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Effect of Termination</h4>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Your right to use the Service ceases immediately</li>
                    <li>We may delete your data after the retention period</li>
                    <li>Provisions that should survive termination remain in effect</li>
                    <li>Outstanding payment obligations continue</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Governing Law */}
            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center">
                  <Scale className="w-6 h-6 mr-3 text-brand-red" />
                  Governing Law and Disputes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-1">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Applicable Law</h4>
                  <p>
                    These Terms are governed by and construed in accordance with the laws of [Jurisdiction], without
                    regard to its conflict of law provisions. Any disputes arising from these Terms or your use of the
                    Service will be subject to the exclusive jurisdiction of the courts in [Jurisdiction].
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Dispute Resolution</h4>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>We encourage resolving disputes through direct communication first</li>
                    <li>Formal disputes may be subject to binding arbitration</li>
                    <li>Class action lawsuits are waived to the extent permitted by law</li>
                    <li>Small claims court remains available for qualifying disputes</li>
                  </ul>
                </div>

                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <p className="text-green-400 font-semibold mb-2">Contact Us First</p>
                  <p>
                    Before pursuing legal action, please contact our support team at
                    <a  className="text-brand-red hover:underline mx-1">
                      techleadadm@gmail.com
                    </a>
                    to discuss your concerns.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Changes to Terms */}
            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center">
                  <FileText className="w-6 h-6 mr-3 text-brand-red" />
                  Changes to These Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-1">
                <p>We reserve the right to modify these Terms at any time. When we make changes, we will:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Update the "Last updated" date at the top of this page</li>
                  <li>Notify you via email for material changes</li>
                  <li>Provide in-app notifications when you log in</li>
                  <li>Give you 30 days' notice for significant changes that affect your rights</li>
                </ul>
                <p>
                  Your continued use of the Service after changes take effect constitutes acceptance of the revised
                  Terms. If you disagree with the changes, you must stop using the Service and may terminate your
                  account.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center">
                  <Mail className="w-6 h-6 mr-3 text-brand-red" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-1">
                <p>If you have questions about these Terms of Service, please contact us:</p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Legal Team</h4>
                    <div className="space-y-2">
                      <p>
                        <strong className="text-white">Email:</strong>{" "}
                        <a  className="text-brand-red hover:underline">
                          techleadadm@gmail.com
                        </a>
                      </p>
                      <p>
                        <strong className="text-white">Response Time:</strong> Within 5 business days
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">General Support</h4>
                    <div className="space-y-2">
                      <p>
                        <strong className="text-white">Email:</strong>{" "}
                        <a  className="text-brand-red hover:underline">
                          techleadadm@gmail.com
                        </a>
                      </p>
                      <p>
                        <strong className="text-white">For:</strong> General questions and technical support
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-brand-red/10 to-transparent">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold font-display text-white mb-6">Ready to get started?</h2>
          <p className="text-xl text-muted-1 mb-8">
            By using LeadFlow, you agree to these terms. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-brand-red hover:bg-brand-red-hover neon-glow font-semibold" asChild>
              <Link href="/auth/signup">Start Free Trial</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/5 bg-transparent"
              asChild
            >
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface-1 text-white py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-brand-red rounded-xl flex items-center justify-center neon-glow">
                  <Heart className="w-6 h-6 text-white fill-white" />
                </div>
                <span className="text-2xl font-bold font-display">LeadFlow</span>
              </Link>
              <p className="text-muted-1 mb-6 max-w-md">
                The all-in-one platform for B2B lead capture and automated outreach on WhatsApp and email.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-muted-1 hover:text-white">
                  Twitter
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-1 hover:text-white">
                  LinkedIn
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-1 hover:text-white">
                  GitHub
                </Button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Product</h3>
              <ul className="space-y-3 text-muted-1">
                <li>
                  <Link href="/#features" className="hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/#pricing" className="hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Company</h3>
              <ul className="space-y-3 text-muted-1">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Legal</h3>
              <ul className="space-y-3 text-muted-1">
                <li>
                  <Link href="/terms" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-muted-1">
            <p>&copy; 2025 LeadFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
