import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import {
  CloudIcon,
  ShieldIcon,
  PlugIcon,
  AnalyticsIcon,
  IntegrationIcon,
  GearIcon,
} from "@/components/Icons";

const expertiseAreas = [
  {
    icon: <CloudIcon className="w-8 h-8" />,
    title: "Salesforce Platform Architecture",
    description:
      "End-to-end design of multi-cloud Salesforce ecosystems including Sales Cloud, Service Cloud, Experience Cloud, and Platform Events. I architect solutions that handle millions of records with optimal performance.",
    skills: ["Sales Cloud", "Service Cloud", "Experience Cloud", "Platform Events", "Custom Metadata", "Apex & LWC"],
  },
  {
    icon: <IntegrationIcon className="w-8 h-8" />,
    title: "Enterprise Integration & MuleSoft",
    description:
      "Designing API-led connectivity patterns using MuleSoft Anypoint Platform. Building robust integration layers connecting Salesforce with ERPs (SAP, Oracle), data warehouses, and legacy systems.",
    skills: ["MuleSoft Anypoint", "REST/SOAP APIs", "Event-Driven Architecture", "SAP Integration", "ETL Pipelines", "API Gateway"],
  },
  {
    icon: <ShieldIcon className="w-8 h-8" />,
    title: "Security & Compliance Architecture",
    description:
      "Implementing enterprise-grade security frameworks including Shield Platform Encryption, Event Monitoring, and Field Audit Trail. Ensuring compliance with SOC 2, HIPAA, GDPR, and PCI-DSS.",
    skills: ["Salesforce Shield", "Platform Encryption", "SSO/SAML", "Data Masking", "Compliance Automation", "Zero Trust"],
  },
  {
    icon: <AnalyticsIcon className="w-8 h-8" />,
    title: "Data Architecture & Analytics",
    description:
      "Designing data models, migration strategies, and analytics architectures. Leveraging Tableau CRM, Einstein Analytics, and custom reporting for data-driven decision making.",
    skills: ["Tableau CRM", "Einstein Analytics", "Data Modeling", "ETL/ELT", "Big Objects", "External Objects"],
  },
  {
    icon: <GearIcon className="w-8 h-8" />,
    title: "DevOps & Release Management",
    description:
      "Establishing CI/CD pipelines, source control strategies, and automated testing frameworks. Implementing Salesforce DX, scratch orgs, and package-based development for agile delivery.",
    skills: ["Salesforce DX", "CI/CD Pipelines", "Scratch Orgs", "GitHub Actions", "Automated Testing", "Package Development"],
  },
  {
    icon: <PlugIcon className="w-8 h-8" />,
    title: "Performance & Scalability",
    description:
      "Optimizing Salesforce orgs for high-volume data processing, large-scale batch operations, and real-time event handling. Ensuring sub-second response times and 99.9% uptime SLAs.",
    skills: ["Governor Limits Optimization", "Async Processing", "Caching Strategies", "Load Testing", "Bulk API", "CDC/Platform Events"],
  },
];

const Expertise = () => {
  return (
    <PageTransition>
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4">
              Core Competencies
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Areas of <span className="text-gradient">Expertise</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Deep technical proficiency across the full Salesforce ecosystem, from platform
              architecture to enterprise integration and security.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseAreas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card-hover p-8 flex flex-col"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                  {area.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{area.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                  {area.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {area.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-muted text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Architecture Diagram */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <h2 className="text-2xl font-bold text-center mb-8">
              Enterprise <span className="text-gradient">Integration</span> Architecture
            </h2>
            <div className="diagram-placeholder h-72 md:h-96 max-w-5xl mx-auto relative group cursor-pointer">
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="w-full max-w-3xl">
                  <div className="flex justify-center mb-6">
                    <div className="glass rounded-lg px-6 py-3 text-sm font-medium text-primary">
                      Salesforce Platform
                    </div>
                  </div>
                  <div className="flex justify-center gap-4 mb-6">
                    <div className="w-px h-8 bg-primary/30" />
                  </div>
                  <div className="flex justify-center mb-6">
                    <div className="glass rounded-lg px-6 py-3 text-sm font-medium text-accent">
                      MuleSoft API Layer
                    </div>
                  </div>
                  <div className="flex justify-center gap-4 mb-6">
                    <div className="flex gap-12">
                      <div className="w-px h-8 bg-accent/30" />
                      <div className="w-px h-8 bg-accent/30" />
                      <div className="w-px h-8 bg-accent/30" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {["SAP ERP", "Data Warehouse", "Legacy Systems"].map((sys) => (
                      <div key={sys} className="glass rounded-lg p-3 text-center text-xs font-medium text-muted-foreground">
                        {sys}
                      </div>
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

export default Expertise;
