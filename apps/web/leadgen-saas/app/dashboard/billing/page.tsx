"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import {
  CreditCard,
  Download,
  Check,
  Crown,
  Calendar,
  Users,
  MessageSquare,
  Shield,
  Clock,
  AlertCircle,
} from "lucide-react"
import { mockBilling } from "@/lib/mock-data"

export default function BillingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly")
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [showPlanModal, setShowPlanModal] = useState(false)
  const { currentPlan, trialInfo, paymentMethod, invoices, plans } = mockBilling

  const getUsagePercentage = (current: number, limit: number) => {
    if (limit === -1) return 0 // unlimited
    return Math.min((current / limit) * 100, 100)
  }

  const formatPrice = (monthlyPrice: number, annualPrice: number) => {
    if (billingCycle === "annual") {
      const monthlySavings = monthlyPrice - annualPrice / 12
      return {
        price: Math.round(annualPrice / 12),
        savings: Math.round(monthlySavings),
        period: "month",
        billed: "annually",
      }
    }
    return {
      price: monthlyPrice,
      savings: 0,
      period: "month",
      billed: "monthly",
    }
  }

  return (
    <div className="p-4 lg:p-6 space-y-4 lg:space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold font-display text-white">Billing & Subscription</h1>
        <p className="text-muted-1 mt-1">Manage your subscription and billing information</p>
      </div>

      {/* Trial Banner */}
      <Card className="glass-card border-brand-red/30 bg-brand-red/5">
        <CardContent className="p-4">
          <div className="flex flex-col space-y-3 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-brand-red/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-brand-red" />
              </div>
              <div className="min-w-0">
                <h3 className="text-white font-semibold">Free Trial Active</h3>
                <p className="text-muted-1 text-sm">
                  {trialInfo.daysRemaining} days remaining • Trial ends on{" "}
                  {new Date(trialInfo.endsAt).toLocaleDateString()}
                </p>
              </div>
            </div>
            <Button
              className="bg-brand-red hover:bg-brand-red-hover neon-glow w-full sm:w-auto"
              onClick={() => setShowPlanModal(true)}
            >
              Upgrade Now
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Main Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 lg:gap-6">
        {/* Current Plan & Usage */}
        <div className="xl:col-span-2 space-y-4 lg:space-y-6">
          {/* Current Plan */}
          <Card className="glass-card border-white/10">
            <CardHeader>
              <div className="flex flex-col space-y-3 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
                <div>
                  <CardTitle className="text-white flex items-center">
                    <Crown className="w-5 h-5 mr-2 text-brand-red" />
                    Current Plan: {currentPlan.name}
                  </CardTitle>
                  <CardDescription className="text-muted-1">
                    ${currentPlan.price}/{currentPlan.billing}
                  </CardDescription>
                </div>
                <Button
                  variant="outline"
                  onClick={() => setShowPlanModal(true)}
                  className="border-brand-red/30 text-brand-red hover:bg-brand-red/10 bg-transparent w-full sm:w-auto"
                >
                  Change Plan
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {currentPlan.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-muted-1 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Usage */}
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Usage This Month</CardTitle>
              <CardDescription className="text-muted-1">Track your current usage against plan limits</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="flex flex-col space-y-1 sm:flex-row sm:justify-between sm:items-center sm:space-y-0">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-muted-1" />
                    <span className="text-white">Leads</span>
                  </div>
                  <span className="text-muted-1 text-sm">
                    {currentPlan.usage.leads.current.toLocaleString()} /{" "}
                    {currentPlan.usage.leads.limit.toLocaleString()}
                  </span>
                </div>
                <Progress
                  value={getUsagePercentage(currentPlan.usage.leads.current, currentPlan.usage.leads.limit)}
                  className="h-2 bg-white/10"
                />
              </div>

              <div className="space-y-3">
                <div className="flex flex-col space-y-1 sm:flex-row sm:justify-between sm:items-center sm:space-y-0">
                  <div className="flex items-center space-x-2">
                    <MessageSquare className="w-4 h-4 text-muted-1" />
                    <span className="text-white">Messages</span>
                  </div>
                  <span className="text-muted-1 text-sm">
                    {currentPlan.usage.messages.current.toLocaleString()} /{" "}
                    {currentPlan.usage.messages.limit.toLocaleString()}
                  </span>
                </div>
                <Progress
                  value={getUsagePercentage(currentPlan.usage.messages.current, currentPlan.usage.messages.limit)}
                  className="h-2 bg-white/10"
                />
              </div>

              {getUsagePercentage(currentPlan.usage.leads.current, currentPlan.usage.leads.limit) > 80 && (
                <div className="flex items-start space-x-2 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                  <AlertCircle className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span className="text-yellow-400 text-sm">
                    You're approaching your lead limit. Consider upgrading your plan.
                  </span>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Invoices */}
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Recent Invoices</CardTitle>
              <CardDescription className="text-muted-1">Download your billing history</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {invoices.map((invoice) => (
                  <div
                    key={invoice.id}
                    className="flex flex-col space-y-3 sm:flex-row sm:items-center sm:justify-between sm:space-y-0 p-3 rounded-lg border border-white/10 hover:border-brand-red/30 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-brand-red/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CreditCard className="w-5 h-5 text-brand-red" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-white font-medium truncate">{invoice.description}</p>
                        <p className="text-muted-1 text-sm">{new Date(invoice.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between sm:justify-end sm:space-x-3">
                      <div className="text-left sm:text-right">
                        <p className="text-white font-medium">${invoice.amount}</p>
                        <Badge
                          className={
                            invoice.status === "paid"
                              ? "bg-green-500/20 text-green-400 border-green-500/30"
                              : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                          }
                        >
                          {invoice.status}
                        </Badge>
                      </div>
                      <Button variant="ghost" size="sm" className="text-muted-1 hover:text-white">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Payment Method */}
        <div className="space-y-4 lg:space-y-6">
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Payment Method</CardTitle>
              <CardDescription className="text-muted-1">Manage your payment information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 rounded-lg border border-white/10 bg-surface-1">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-brand-red/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CreditCard className="w-5 h-5 text-brand-red" />
                    </div>
                    <div>
                      <p className="text-white font-medium">
                        {paymentMethod.brand} •••• {paymentMethod.last4}
                      </p>
                      <p className="text-muted-1 text-sm">
                        Expires {paymentMethod.expiryMonth}/{paymentMethod.expiryYear}
                      </p>
                    </div>
                  </div>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Active</Badge>
                </div>
              </div>

              <Button
                variant="outline"
                onClick={() => setShowPaymentModal(true)}
                className="w-full border-white/20 text-white hover:bg-white/5 bg-transparent"
              >
                Update Payment Method
              </Button>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button
                variant="outline"
                className="w-full justify-start border-white/20 text-white hover:bg-white/5 bg-transparent"
              >
                <Download className="w-4 h-4 mr-2" />
                Download All Invoices
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start border-white/20 text-white hover:bg-white/5 bg-transparent"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Billing History
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start border-white/20 text-white hover:bg-white/5 bg-transparent"
              >
                <Shield className="w-4 h-4 mr-2" />
                Security Settings
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Plan Selection Modal */}
      <Dialog open={showPlanModal} onOpenChange={setShowPlanModal}>
        <DialogContent className="max-w-[95vw] sm:max-w-6xl bg-surface-1 border-white/10 text-white max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-white font-display">Choose Your Plan</DialogTitle>
            <DialogDescription className="text-muted-1">
              Select the plan that best fits your business needs
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6">
            {/* Billing Toggle */}
            <div className="flex flex-col items-center space-y-2 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <span className={billingCycle === "monthly" ? "text-white" : "text-muted-1"}>Monthly</span>
              <div className="relative">
                <input
                  type="checkbox"
                  id="billing-toggle"
                  className="sr-only"
                  checked={billingCycle === "annual"}
                  onChange={(e) => setBillingCycle(e.target.checked ? "annual" : "monthly")}
                />
                <label htmlFor="billing-toggle" className="flex items-center cursor-pointer">
                  <div className="w-14 h-8 bg-surface-1 rounded-full border border-white/20 relative">
                    <div
                      className={`w-6 h-6 bg-brand-red rounded-full absolute top-1 transition-transform duration-200 ${
                        billingCycle === "annual" ? "translate-x-7" : "translate-x-1"
                      }`}
                    ></div>
                  </div>
                </label>
              </div>
              <span className={billingCycle === "annual" ? "text-white" : "text-muted-1"}>Annual</span>
              {billingCycle === "annual" && (
                <Badge className="bg-brand-red/20 text-brand-red border-brand-red/30">Save 20%</Badge>
              )}
            </div>

            {/* Plans */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {plans.map((plan) => {
                const pricing = formatPrice(plan.monthlyPrice, plan.annualPrice)
                const isCurrentPlan = plan.name.toLowerCase() === currentPlan.name.toLowerCase()

                return (
                  <Card
                    key={plan.id}
                    className={`glass-card transition-all duration-300 ${
                      plan.popular
                        ? "border-brand-red relative neon-glow"
                        : isCurrentPlan
                          ? "border-green-500/50"
                          : "border-white/10 hover:border-brand-red/30"
                    }`}
                  >
                    {plan.popular && (
                      <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-brand-red text-white">
                        Most Popular
                      </Badge>
                    )}
                    <CardHeader className="text-center pb-8">
                      <CardTitle className="text-2xl text-white font-display">{plan.name}</CardTitle>
                      <CardDescription className="text-muted-1">{plan.description}</CardDescription>
                      <div className="mt-6">
                        <span className="text-5xl font-bold text-white">${pricing.price}</span>
                        <span className="text-muted-1">/{pricing.period}</span>
                        {pricing.billed === "annually" && (
                          <div className="text-sm text-green-400 mt-1">Save ${pricing.savings}/month</div>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-4 mb-8">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="w-5 h-5 text-brand-red mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-muted-1 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        className={`w-full ${
                          isCurrentPlan
                            ? "bg-green-500/20 text-green-400 border-green-500/30 cursor-not-allowed"
                            : plan.popular
                              ? "bg-brand-red hover:bg-brand-red-hover neon-glow"
                              : "bg-transparent border-brand-red text-brand-red hover:bg-brand-red hover:text-white"
                        }`}
                        variant={plan.popular ? "default" : "outline"}
                        disabled={isCurrentPlan}
                      >
                        {isCurrentPlan ? "Current Plan" : "Choose Plan"}
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Payment Method Modal */}
      <Dialog open={showPaymentModal} onOpenChange={setShowPaymentModal}>
        <DialogContent className="max-w-md bg-surface-1 border-white/10 text-white">
          <DialogHeader>
            <DialogTitle className="text-white font-display">Update Payment Method</DialogTitle>
            <DialogDescription className="text-muted-1">
              Add or update your payment information (Stripe integration placeholder)
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-white">Card Number</Label>
              <Input
                placeholder="1234 5678 9012 3456"
                className="bg-surface-1 border-white/10 text-white placeholder:text-muted-1"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-white">Expiry Date</Label>
                <Input
                  placeholder="MM/YY"
                  className="bg-surface-1 border-white/10 text-white placeholder:text-muted-1"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-white">CVC</Label>
                <Input placeholder="123" className="bg-surface-1 border-white/10 text-white placeholder:text-muted-1" />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-white">Cardholder Name</Label>
              <Input
                placeholder="John Doe"
                className="bg-surface-1 border-white/10 text-white placeholder:text-muted-1"
              />
            </div>

            <div className="flex justify-end space-x-3 pt-4">
              <Button
                variant="outline"
                onClick={() => setShowPaymentModal(false)}
                className="border-white/20 text-white hover:bg-white/5 bg-transparent"
              >
                Cancel
              </Button>
              <Button
                onClick={() => {
                  alert("Payment method updated successfully! (This is a placeholder)")
                  setShowPaymentModal(false)
                }}
                className="bg-brand-red hover:bg-brand-red-hover neon-glow"
              >
                Update Payment Method
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
