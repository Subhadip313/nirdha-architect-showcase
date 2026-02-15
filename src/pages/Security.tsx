import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { ShieldIcon } from "@/components/Icons";
import { Lock, Eye, FileCheck, Server, Key, AlertTriangle } from "lucide-react";

const complianceFrameworks = [
  { name: "SOC 2 Type II", desc: "Service Organization Control audit compliance" },
  { name: "HIPAA", desc: "Healthcare data protection & privacy" },
  { name: "GDPR", desc: "European data protection regulation" },
  { name: "PCI-DSS", desc: "Payment card industry data security" },
  { name: "ISO 27001", desc: "Information security management" },
  { name: "FedRAMP", desc: "Federal risk & authorization" },
];

const securityLayers = [
  {
    icon: <Lock size={22} />,
    title: "Platform Encryption",
    desc: "Salesforce Shield Platform Encryption with tenant-specific key management and deterministic encryption for search.",
  },
  {
    icon: <Eye size={22} />,
    title: "Event Monitoring",
    desc: "Real-time event monitoring, login forensics, and anomaly detection using Salesforce Shield Event Monitoring.",
  },
  {
    icon: <FileCheck size={22} />,
    title: "Field Audit Trail",
    desc: "10-year field history tracking with compliance-grade audit trails for regulated industries.",
  },
  {
    icon: <Key size={22} />,
    title: "Identity & Access",
    desc: "SSO/SAML integration, MFA enforcement, OAuth 2.0 flows, and zero-trust architecture patterns.",
  },
  {
    icon: <Server size={22} />,
    title: "Data Governance",
    desc: "Data classification, masking policies, retention rules, and cross-border data residency compliance.",
  },
  {
    icon: <AlertTriangle size={22} />,
    title: "Threat Detection",
    desc: "Automated threat detection, IP whitelisting, session management, and incident response procedures.",
  },
];

const Security = () => {
  return (
    <PageTransition>
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20 mb-4">
              Trust & Safety
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Security & <span className="text-gradient">Compliance</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Every architecture decision begins with security. I design systems that protect
              sensitive data while meeting the most rigorous compliance requirements.
            </p>
          </motion.div>

          {/* Security Layers */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {securityLayers.map((layer, i) => (
              <motion.div
                key={layer.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="glass-card-hover p-7"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4">
                  {layer.icon}
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">{layer.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{layer.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Compliance Frameworks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-center mb-8">
              Compliance <span className="text-gradient">Frameworks</span>
            </h2>
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <h2 className="text-2xl font-bold text-center mb-8">
              Security <span className="text-gradient">Architecture</span> Blueprint
            </h2>
            <div className="diagram-placeholder h-72 md:h-80 max-w-4xl mx-auto relative group cursor-pointer">
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
                <span className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm">
                  View Full Diagram →
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Security;
