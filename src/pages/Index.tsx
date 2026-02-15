import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import { CloudIcon, ShieldIcon, IntegrationIcon } from "@/components/Icons";

const roles = [
  "Salesforce Technical Architect",
  "Integration Specialist",
  "Security & Compliance Expert",
  "Cloud Solutions Designer",
];

const TypingEffect = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(current.slice(0, text.length + 1));
          if (text.length === current.length) {
            setTimeout(() => setDeleting(true), 2000);
          }
        } else {
          setText(current.slice(0, text.length - 1));
          if (text.length === 0) {
            setDeleting(false);
            setRoleIndex((i) => (i + 1) % roles.length);
          }
        }
      },
      deleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <span className="text-gradient">
      {text}
      <span className="animate-pulse-glow text-primary">|</span>
    </span>
  );
};

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "50+", label: "Enterprise Projects" },
  { value: "200+", label: "Integrations Built" },
  { value: "99.9%", label: "System Uptime" },
];

const highlights = [
  {
    icon: <CloudIcon className="w-7 h-7" />,
    title: "Cloud Architecture",
    desc: "Designing scalable, multi-cloud Salesforce ecosystems for enterprise clients.",
  },
  {
    icon: <ShieldIcon className="w-7 h-7" />,
    title: "Security-First",
    desc: "Every architecture decision starts with security, compliance, and data governance.",
  },
  {
    icon: <IntegrationIcon className="w-7 h-7" />,
    title: "Seamless Integration",
    desc: "Connecting Salesforce with ERPs, data lakes, and third-party platforms.",
  },
];

const Index = () => {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero bg-grid overflow-hidden">
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl animate-float" style={{ animationDelay: "3s" }} />

        <div className="container mx-auto px-6 pt-24 pb-20 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-muted-foreground mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              Available for Enterprise Engagements
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
              <span className="text-foreground">I'm a</span>
              <br />
              <TypingEffect />
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Designing and delivering enterprise-grade Salesforce solutions that scale.
              15+ years architecting secure, integrated cloud ecosystems for Fortune 500 companies.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-base hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                Let's Talk Architecture
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/expertise"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl glass text-foreground font-semibold text-base hover:bg-muted/60 transition-all duration-300"
              >
                View Expertise
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="glass-card p-4"
                >
                  <div className="text-2xl md:text-3xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <ChevronDown className="text-muted-foreground animate-bounce" size={24} />
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Architecting the <span className="text-gradient">Future</span> of Enterprise Cloud
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                As a Salesforce Technical Architect with over 15 years of experience, I specialize in
                designing complex, multi-cloud enterprise solutions. My expertise spans Sales Cloud,
                Service Cloud, Experience Cloud, Marketing Cloud, and MuleSoft integrations.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I bring a security-first mindset to every engagement, ensuring that solutions meet
                rigorous compliance standards including SOC 2, HIPAA, GDPR, and industry-specific
                regulations. My approach combines deep technical knowledge with strategic business alignment.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Salesforce CTA", "MuleSoft Certified", "AWS Solutions Architect", "Heroku Architect"].map((cert) => (
                  <span key={cert} className="px-3 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                    {cert}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              {highlights.map((item, i) => (
                <div key={item.title} className="glass-card-hover p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              System <span className="text-gradient">Architecture</span> Overview
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              High-level view of a typical enterprise Salesforce ecosystem I design and implement.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="diagram-placeholder h-80 md:h-96 max-w-4xl mx-auto relative group cursor-pointer"
          >
            {/* Diagram nodes */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-8 p-8 w-full max-w-2xl">
                {["Sales Cloud", "Service Cloud", "MuleSoft ESB", "Experience Cloud", "Marketing Cloud", "Data Lake"].map((node, i) => (
                  <div key={node} className="glass rounded-lg p-3 text-center text-xs font-medium text-muted-foreground">
                    {node}
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
              <span className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm">
                View Full Diagram →
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Index;
