import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { Building2, Stethoscope, Landmark, ShoppingCart, Factory, Plane } from "lucide-react";

const industries = [
  {
    icon: <Building2 size={28} />,
    name: "Technology & SaaS",
    desc: "Scaling CRM platforms for high-growth tech companies with complex subscription models and partner ecosystems.",
    examples: ["B2B SaaS platforms", "ISV Partners", "Tech Startups"],
  },
  {
    icon: <Stethoscope size={28} />,
    name: "Healthcare & Life Sciences",
    desc: "HIPAA-compliant Salesforce Health Cloud implementations with patient data management and provider integrations.",
    examples: ["Hospital networks", "Pharma companies", "Health insurers"],
  },
  {
    icon: <Landmark size={28} />,
    name: "Financial Services",
    desc: "Salesforce Financial Services Cloud solutions with regulatory compliance, wealth management, and banking integrations.",
    examples: ["Banks", "Insurance", "Wealth management"],
  },
  {
    icon: <ShoppingCart size={28} />,
    name: "Retail & Commerce",
    desc: "Omnichannel commerce architectures connecting Salesforce Commerce Cloud, Order Management, and loyalty programs.",
    examples: ["E-commerce brands", "Retail chains", "D2C companies"],
  },
  {
    icon: <Factory size={28} />,
    name: "Manufacturing",
    desc: "Manufacturing Cloud implementations with ERP integration, supply chain visibility, and dealer/distributor portals.",
    examples: ["Industrial OEMs", "CPG companies", "Distributors"],
  },
  {
    icon: <Plane size={28} />,
    name: "Travel & Hospitality",
    desc: "Customer 360 solutions for airlines, hotels, and travel companies with real-time personalization and loyalty.",
    examples: ["Airlines", "Hotel chains", "Travel platforms"],
  },
];

const clientTypes = [
  "Fortune 500 enterprises seeking digital transformation",
  "Mid-market companies scaling their Salesforce investment",
  "Salesforce ISV partners building managed packages",
  "SI partners needing architecture guidance",
  "Startups building on the Salesforce platform",
];

const WhoIWorkWith = () => {
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
              Industries & Clients
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Who I <span className="text-gradient">Work With</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              I partner with organizations across industries who are serious about leveraging
              Salesforce as a strategic platform for growth.
            </p>
          </motion.div>

          {/* Industries */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="glass-card-hover p-7"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  {ind.icon}
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">{ind.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{ind.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {ind.examples.map((ex) => (
                    <span key={ex} className="px-2.5 py-1 rounded-md text-xs font-medium bg-muted text-muted-foreground">
                      {ex}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Ideal Client */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl font-bold mb-6">
              Ideal <span className="text-gradient">Client Profile</span>
            </h2>
            <ul className="space-y-3 text-left max-w-xl mx-auto">
              {clientTypes.map((type) => (
                <li key={type} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  {type}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default WhoIWorkWith;
