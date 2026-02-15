import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { ShieldIcon } from "@/components/Icons";
import { Search, FileText, Layers, Code, Rocket, LifeBuoy, Lock, Eye, FileCheck, Server, Key, AlertTriangle } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const steps = [
  { icon: <Search size={22} />, title: "Discovery & Assessment", desc: "Deep-dive into your current Salesforce org, business processes, technical debt, and growth objectives. Stakeholder interviews and system audit.", duration: "Week 1-2" },
  { icon: <FileText size={22} />, title: "Architecture Design", desc: "Create comprehensive solution architecture documents, data models, integration maps, security frameworks, and detailed technical specifications.", duration: "Week 3-4" },
  { icon: <Layers size={22} />, title: "Proof of Concept", desc: "Build targeted POCs to validate architecture decisions, test integrations, and demonstrate feasibility to stakeholders before full build.", duration: "Week 5-6" },
  { icon: <Code size={22} />, title: "Iterative Build", desc: "Agile delivery using Salesforce DX, scratch orgs, and CI/CD pipelines. Two-week sprints with demos and continuous stakeholder feedback.", duration: "Week 7-16" },
  { icon: <Rocket size={22} />, title: "Launch & Go-Live", desc: "Phased rollout with comprehensive testing, data migration, user training, and hypercare support. Zero-downtime deployment strategy.", duration: "Week 17-18" },
  { icon: <LifeBuoy size={22} />, title: "Optimize & Evolve", desc: "Post-launch monitoring, performance optimization, user adoption analysis, and roadmap planning for future enhancements.", duration: "Ongoing" },
];

const securityLayers = [
  { icon: <Lock size={22} />, title: "Platform Encryption", desc: "Salesforce Shield Platform Encryption with tenant-specific key management and deterministic encryption for search." },
  { icon: <Eye size={22} />, title: "Event Monitoring", desc: "Real-time event monitoring, login forensics, and anomaly detection using Salesforce Shield Event Monitoring." },
  { icon: <FileCheck size={22} />, title: "Field Audit Trail", desc: "10-year field history tracking with compliance-grade audit trails for regulated industries." },
  { icon: <Key size={22} />, title: "Identity & Access", desc: "SSO/SAML integration, MFA enforcement, OAuth 2.0 flows, and zero-trust architecture patterns." },
  { icon: <Server size={22} />, title: "Data Governance", desc: "Data classification, masking policies, retention rules, and cross-border data residency compliance." },
  { icon: <AlertTriangle size={22} />, title: "Threat Detection", desc: "Automated threat detection, IP whitelisting, session management, and incident response procedures." },
];

const complianceFrameworks = [
  { name: "SOC 2 Type II", desc: "Service Organization Control audit compliance" },
  { name: "HIPAA", desc: "Healthcare data protection & privacy" },
  { name: "GDPR", desc: "European data protection regulation" },
  { name: "PCI-DSS", desc: "Payment card industry data security" },
  { name: "ISO 27001", desc: "Information security management" },
  { name: "FedRAMP", desc: "Federal risk & authorization" },
];

const ProcessSecurity = () => {
  const [diagramOpen, setDiagramOpen] = useState(false);

  return (
    <PageTransition>
      {/* Process Section */}
      <section id="process" className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4">Methodology</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">How I <span className="text-gradient">Work</span></h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A proven, structured approach to delivering enterprise Salesforce solutions—from discovery through launch and beyond.
            </p>
          </motion.div>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex items-start gap-6 mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary glow-primary -translate-x-1.5 mt-6 z-10" />
                <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-0" : "md:pl-0"}`}>
                  <div className="glass-card-hover p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">{step.icon}</div>
                      <span className="text-xs font-semibold text-primary">{step.duration}</span>
                    </div>
                    <h3 className="text-base font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="py-24">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20 mb-4">Trust & Safety</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Security & <span className="text-gradient">Compliance</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Every architecture decision begins with security. I design systems that protect sensitive data while meeting the most rigorous compliance requirements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {securityLayers.map((layer, i) => (
              <motion.div key={layer.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="glass-card-hover p-7">
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4">{layer.icon}</div>
                <h3 className="text-base font-bold text-foreground mb-2">{layer.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{layer.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Compliance */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-bold text-center mb-8">Compliance <span className="text-gradient">Frameworks</span></h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {complianceFrameworks.map((fw) => (
                <div key={fw.name} className="glass-card p-5 text-center">
                  <div className="text-primary font-bold text-sm mb-1">{fw.name}</div>
                  <div className="text-xs text-muted-foreground">{fw.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Security Architecture Diagram */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-20">
            <h2 className="text-2xl font-bold text-center mb-8">Security <span className="text-gradient">Architecture</span> Blueprint</h2>
            <div
              className="diagram-placeholder h-72 md:h-80 max-w-4xl mx-auto relative group cursor-pointer"
              onClick={() => setDiagramOpen(true)}
            >
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <div className="text-center space-y-4">
                  <ShieldIcon className="w-16 h-16 text-primary/40 mx-auto" />
                  <div className="flex flex-wrap justify-center gap-3">
                    {["Encryption Layer", "IAM", "Audit Trail", "DLP", "SIEM"].map((n) => (
                      <span key={n} className="glass rounded-lg px-4 py-2 text-xs text-muted-foreground">{n}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                <span className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm">View Full Diagram →</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security Diagram Dialog */}
      <Dialog open={diagramOpen} onOpenChange={setDiagramOpen}>
        <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto bg-background border-border">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Security <span className="text-gradient">Architecture</span> Blueprint</DialogTitle>
          </DialogHeader>
          <div className="space-y-6 py-4">
            {[
              { layer: "Perimeter Security", items: ["WAF / CDN", "DDoS Protection", "IP Whitelisting", "Rate Limiting"], color: "text-destructive" },
              { layer: "Identity & Access Management", items: ["SSO / SAML 2.0", "MFA Enforcement", "OAuth 2.0 Flows", "Session Management"], color: "text-accent" },
              { layer: "Data Protection", items: ["Shield Encryption", "Field Audit Trail", "Data Masking", "Backup & Recovery"], color: "text-primary" },
              { layer: "Monitoring & Response", items: ["Event Monitoring", "SIEM Integration", "Anomaly Detection", "Incident Response"], color: "text-muted-foreground" },
            ].map((section) => (
              <div key={section.layer}>
                <div className={`text-xs font-bold ${section.color} mb-2`}>{section.layer}</div>
                <div className="grid grid-cols-4 gap-2">
                  {section.items.map((item) => (
                    <div key={item} className="glass-card p-3 text-center text-xs font-medium text-foreground">{item}</div>
                  ))}
                </div>
              </div>
            ))}
            <p className="text-xs text-muted-foreground text-center mt-4">
              Defense-in-depth security architecture with four layers of protection from perimeter to data level.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </PageTransition>
  );
};

export default ProcessSecurity;
