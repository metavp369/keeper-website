import { useState } from "react";
import { Link } from "react-router-dom";
import { FadeIn, SectionLabel, SectionHeading, GlassCard } from "@/components/shared";
import {
  BarChart3, Bell, Shield, Eye, FileText, Scale, Clock,
  ChevronRight, ArrowRight, Building2, MapPin, Check, AlertTriangle,
  DollarSign, Activity
} from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const valuationData = [
  { month: "Jan", value: 82 },
  { month: "Feb", value: 84 },
  { month: "Mar", value: 83 },
  { month: "Apr", value: 86 },
  { month: "May", value: 88 },
  { month: "Jun", value: 87 },
  { month: "Jul", value: 90 },
  { month: "Aug", value: 92 },
  { month: "Sep", value: 91 },
  { month: "Oct", value: 94 },
  { month: "Nov", value: 96 },
  { month: "Dec", value: 98 },
];

const properties = [
  { id: 1, name: "Vasant Kunj Apartment", city: "Delhi NCR", type: "3BHK Apartment", status: "protected", health: 94, alerts: 0 },
  { id: 2, name: "Andheri West Villa", city: "Mumbai", type: "Villa", status: "protected", health: 88, alerts: 1 },
  { id: 3, name: "Sector 150 Plot", city: "Noida", type: "Plot", status: "attention", health: 72, alerts: 2 },
];

const alerts = [
  { type: "info", text: "Quarterly inspection completed — Delhi NCR", time: "2 hours ago", icon: Eye },
  { type: "warning", text: "Society maintenance due — Mumbai", time: "1 day ago", icon: Clock },
  { type: "success", text: "Legal notice delivered — Noida", time: "3 days ago", icon: Scale },
  { type: "info", text: "Document vault backup completed", time: "5 days ago", icon: FileText },
];

const approvals = [
  { title: "Plumbing Repair Estimate", property: "Delhi NCR", amount: "₹12,500", status: "pending" },
  { title: "Annual Property Tax", property: "Mumbai", amount: "₹45,000", status: "approved" },
  { title: "Boundary Wall Repair", property: "Noida", amount: "₹28,000", status: "pending" },
];

const tabs = [
  { id: "overview", label: "Overview", icon: BarChart3 },
  { id: "alerts", label: "Alerts", icon: Bell },
  { id: "inspections", label: "Inspections", icon: Eye },
  { id: "legal", label: "Legal Queue", icon: Scale },
  { id: "approvals", label: "Approvals", icon: Check },
  { id: "financials", label: "Financials", icon: DollarSign },
];

function StatusBadge({ status }) {
  const config = {
    protected: { color: "bg-[#10B981]/10 text-[#10B981]", dot: "bg-[#10B981]", label: "Protected" },
    attention: { color: "bg-[#F59E0B]/10 text-[#F59E0B]", dot: "bg-[#F59E0B]", label: "Attention" },
    action: { color: "bg-[#EF4444]/10 text-[#EF4444]", dot: "bg-[#EF4444]", label: "Action Needed" },
  };
  const c = config[status] || config.protected;
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${c.color}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
      {c.label}
    </span>
  );
}

function OverviewTab() {
  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total Properties", value: "3", icon: Building2, color: "#F59E0B" },
          { label: "Protected", value: "100%", icon: Shield, color: "#10B981" },
          { label: "Active Alerts", value: "3", icon: Bell, color: "#F59E0B" },
          { label: "Pending Approvals", value: "2", icon: Check, color: "#3B82F6" },
        ].map(stat => (
          <div key={stat.label} className="bg-[#0A192F]/50 rounded-xl p-4 border border-white/5">
            <div className="flex items-center gap-2 mb-2">
              <stat.icon size={14} style={{ color: stat.color }} />
              <span className="text-[10px] text-[#64748B] uppercase tracking-wider">{stat.label}</span>
            </div>
            <p className="text-2xl font-light text-[#F8FAFC]">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Valuation Chart */}
      <div className="bg-[#0A192F]/50 rounded-xl p-6 border border-white/5">
        <h4 className="text-sm text-[#64748B] mb-4">Portfolio Valuation Trend (Lakhs)</h4>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={valuationData}>
              <defs>
                <linearGradient id="goldGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F59E0B" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#F59E0B" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#64748B', fontSize: 11 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748B', fontSize: 11 }} />
              <Tooltip
                contentStyle={{ background: '#112240', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8 }}
                labelStyle={{ color: '#64748B' }}
                itemStyle={{ color: '#F59E0B' }}
              />
              <Area type="monotone" dataKey="value" stroke="#F59E0B" strokeWidth={2} fill="url(#goldGrad)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Properties */}
      <div className="space-y-3">
        <h4 className="text-sm text-[#64748B]">Your Properties</h4>
        {properties.map(p => (
          <div key={p.id} className="flex items-center justify-between p-4 bg-[#0A192F]/50 rounded-xl border border-white/5 hover:border-white/10 transition-all cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#F59E0B]/10 flex items-center justify-center">
                <Building2 size={18} className="text-[#F59E0B]" />
              </div>
              <div>
                <p className="text-sm text-[#F8FAFC] font-medium">{p.name}</p>
                <p className="text-xs text-[#64748B]">{p.city} · {p.type}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <p className="text-xs text-[#64748B]">Health Score</p>
                <p className={`text-sm font-medium ${p.health >= 90 ? 'text-[#10B981]' : p.health >= 80 ? 'text-[#F59E0B]' : 'text-[#EF4444]'}`}>{p.health}%</p>
              </div>
              <StatusBadge status={p.status} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AlertsTab() {
  return (
    <div className="space-y-3">
      {alerts.map((alert, i) => {
        const colors = { info: "#3B82F6", warning: "#F59E0B", success: "#10B981" };
        return (
          <div key={i} className="flex items-start gap-4 p-4 bg-[#0A192F]/50 rounded-xl border border-white/5">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${colors[alert.type]}15` }}>
              <alert.icon size={16} style={{ color: colors[alert.type] }} />
            </div>
            <div className="flex-1">
              <p className="text-sm text-[#F8FAFC]">{alert.text}</p>
              <p className="text-xs text-[#64748B] mt-1">{alert.time}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ApprovalsTab() {
  return (
    <div className="space-y-3">
      {approvals.map((item, i) => (
        <div key={i} className="flex items-center justify-between p-4 bg-[#0A192F]/50 rounded-xl border border-white/5">
          <div>
            <p className="text-sm text-[#F8FAFC]">{item.title}</p>
            <p className="text-xs text-[#64748B]">{item.property} · {item.amount}</p>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            item.status === "pending" ? "bg-[#F59E0B]/10 text-[#F59E0B]" : "bg-[#10B981]/10 text-[#10B981]"
          }`}>
            {item.status === "pending" ? "Pending Approval" : "Approved"}
          </span>
        </div>
      ))}
    </div>
  );
}

function PlaceholderTab({ title }) {
  return (
    <div className="flex items-center justify-center py-16">
      <div className="text-center">
        <p className="text-[#64748B]">{title} module preview</p>
        <p className="text-xs text-[#64748B] mt-2">Schedule a live demo to see this in action</p>
      </div>
    </div>
  );
}

export default function DemoDashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");

  const renderTab = () => {
    switch (activeTab) {
      case "overview": return <OverviewTab />;
      case "alerts": return <AlertsTab />;
      case "approvals": return <ApprovalsTab />;
      case "inspections": return <PlaceholderTab title="Inspections" />;
      case "legal": return <PlaceholderTab title="Legal Queue" />;
      case "financials": return <PlaceholderTab title="Financial Summary" />;
      default: return <OverviewTab />;
    }
  };

  return (
    <div data-testid="demo-dashboard-page" className="pt-20">
      {/* Hero */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#112240]/50 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6 md:px-8 text-center">
          <FadeIn><SectionLabel>Demo</SectionLabel></FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-6xl tracking-tight font-light text-[#F8FAFC] mt-4">
              Your <span className="font-accent italic text-[#F59E0B]">Command Center</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-4 text-lg text-[#64748B] max-w-2xl mx-auto">
              Preview the KEEPER dashboard experience. This is a visual demo — schedule a live walkthrough for the full experience.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Dashboard */}
      <section className="pb-24 md:pb-32" data-testid="demo-dashboard">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <FadeIn>
            <GlassCard className="overflow-hidden">
              {/* Dashboard Header */}
              <div className="flex items-center gap-2 px-6 py-4 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
                <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                <div className="w-3 h-3 rounded-full bg-[#10B981]" />
                <span className="ml-3 text-xs text-[#64748B]">KEEPER Dashboard — Demo Mode</span>
              </div>

              {/* Tabs */}
              <div className="flex overflow-x-auto border-b border-white/5 px-4">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-3 text-sm whitespace-nowrap transition-all border-b-2 ${
                      activeTab === tab.id
                        ? "border-[#F59E0B] text-[#F59E0B]"
                        : "border-transparent text-[#64748B] hover:text-[#F8FAFC]"
                    }`}
                    data-testid={`dashboard-tab-${tab.id}`}
                  >
                    <tab.icon size={14} />
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Content */}
              <div className="p-6">
                {renderTab()}
              </div>
            </GlassCard>
          </FadeIn>

          {/* CTA */}
          <FadeIn delay={0.2}>
            <div className="text-center mt-12">
              <p className="text-[#64748B] mb-4">Want to see the full experience?</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#F59E0B] text-[#0A192F] hover:bg-[#D97706] font-semibold px-8 py-4 rounded-lg transition-all duration-300 gold-glow"
                data-testid="demo-cta"
              >
                Schedule a Live Demo <ArrowRight size={18} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
