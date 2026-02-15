import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { Search, FileText, Layers, Code, Rocket, LifeBuoy } from "lucide-react";

const steps = [
  {
    icon: <Search size={22} />,
    title: "Discovery & Assessment",
    desc: "Deep-dive into your current Salesforce org, business processes, technical debt, and growth objectives. Stakeholder interviews and system audit.",
    duration: "Week 1-2",
  },
  {
    icon: <FileText size={22} />,
    title: "Architecture Design",
    desc: "Create comprehensive solution architecture documents, data models, integration maps, security frameworks, and detailed technical specifications.",
    duration: "Week 3-4",
  },
  {
    icon: <Layers size={22} />,
    title: "Proof of Concept",
    desc: "Build targeted POCs to validate architecture decisions, test integrations, and demonstrate feasibility to stakeholders before full build.",
    duration: "Week 5-6",
  },
  {
    icon: <Code size={22} />,
    title: "Iterative Build",
    desc: "Agile delivery using Salesforce DX, scratch orgs, and CI/CD pipelines. Two-week sprints with demos and continuous stakeholder feedback.",
    duration: "Week 7-16",
  },
  {
    icon: <Rocket size={22} />,
    title: "Launch & Go-Live",
    desc: "Phased rollout with comprehensive testing, data migration, user training, and hypercare support. Zero-downtime deployment strategy.",
    duration: "Week 17-18",
  },
  {
    icon: <LifeBuoy size={22} />,
    title: "Optimize & Evolve",
    desc: "Post-launch monitoring, performance optimization, user adoption analysis, and roadmap planning for future enhancements.",
    duration: "Ongoing",
  },
];

const Process = () => {
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
              Methodology
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              How I <span className="text-gradient">Work</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A proven, structured approach to delivering enterprise Salesforce solutions—from
              discovery through launch and beyond.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex items-start gap-6 mb-12 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary glow-primary -translate-x-1.5 mt-6 z-10" />

                {/* Card */}
                <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-0" : "md:pl-0"}`}>
                  <div className="glass-card-hover p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                        {step.icon}
                      </div>
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
    </PageTransition>
  );
};

export default Process;
