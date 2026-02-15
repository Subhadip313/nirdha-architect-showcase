import { useState } from "react";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { Building2, Stethoscope, Landmark, ShoppingCart, Factory, Plane, Mail, MapPin, Globe, Linkedin, Send } from "lucide-react";

const industries = [
  { icon: <Building2 size={28} />, name: "Technology & SaaS", desc: "Scaling CRM platforms for high-growth tech companies with complex subscription models and partner ecosystems.", examples: ["B2B SaaS platforms", "ISV Partners", "Tech Startups"] },
  { icon: <Stethoscope size={28} />, name: "Healthcare & Life Sciences", desc: "HIPAA-compliant Salesforce Health Cloud implementations with patient data management and provider integrations.", examples: ["Hospital networks", "Pharma companies", "Health insurers"] },
  { icon: <Landmark size={28} />, name: "Financial Services", desc: "Salesforce Financial Services Cloud solutions with regulatory compliance, wealth management, and banking integrations.", examples: ["Banks", "Insurance", "Wealth management"] },
  { icon: <ShoppingCart size={28} />, name: "Retail & Commerce", desc: "Omnichannel commerce architectures connecting Salesforce Commerce Cloud, Order Management, and loyalty programs.", examples: ["E-commerce brands", "Retail chains", "D2C companies"] },
  { icon: <Factory size={28} />, name: "Manufacturing", desc: "Manufacturing Cloud implementations with ERP integration, supply chain visibility, and dealer/distributor portals.", examples: ["Industrial OEMs", "CPG companies", "Distributors"] },
  { icon: <Plane size={28} />, name: "Travel & Hospitality", desc: "Customer 360 solutions for airlines, hotels, and travel companies with real-time personalization and loyalty.", examples: ["Airlines", "Hotel chains", "Travel platforms"] },
];

const clientTypes = [
  "Fortune 500 enterprises seeking digital transformation",
  "Mid-market companies scaling their Salesforce investment",
  "Salesforce ISV partners building managed packages",
  "SI partners needing architecture guidance",
  "Startups building on the Salesforce platform",
];

const ClientsContact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:hello@nirdha.in?subject=Architecture Inquiry from ${formData.name}&body=${formData.message}`;
  };

  return (
    <PageTransition>
      {/* Clients Section */}
      <section id="clients" className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4">Industries & Clients</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Who I <span className="text-gradient">Work With</span></h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              I partner with organizations across industries who are serious about leveraging Salesforce as a strategic platform for growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {industries.map((ind, i) => (
              <motion.div key={ind.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="glass-card-hover p-7">
                <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">{ind.icon}</div>
                <h3 className="text-base font-bold text-foreground mb-2">{ind.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{ind.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {ind.examples.map((ex) => (
                    <span key={ex} className="px-2.5 py-1 rounded-md text-xs font-medium bg-muted text-muted-foreground">{ex}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card p-8 md:p-12 max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Ideal <span className="text-gradient">Client Profile</span></h2>
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

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's <span className="text-gradient">Connect</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Ready to architect your next Salesforce solution? Let's discuss how I can help transform your enterprise cloud strategy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="space-y-6">
              <div className="glass-card p-8 space-y-6">
                <h3 className="text-xl font-bold text-foreground">Contact Details</h3>
                <div className="space-y-5">
                  {[
                    { icon: <Mail size={18} />, label: "Email", value: "hello@nirdha.in" },
                    { icon: <Globe size={18} />, label: "Website", value: "nirdha.in" },
                    { icon: <MapPin size={18} />, label: "Location", value: "Available Worldwide" },
                    { icon: <Linkedin size={18} />, label: "LinkedIn", value: "Connect on LinkedIn" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">{item.icon}</div>
                      <div>
                        <div className="text-xs text-muted-foreground">{item.label}</div>
                        <div className="text-sm font-medium text-foreground">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="glass-card p-8">
                <h3 className="text-base font-bold text-foreground mb-3">What to Expect</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {["Response within 24 hours", "Free 30-minute discovery call", "NDA available upon request"].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
                <h3 className="text-xl font-bold text-foreground mb-2">Send a Message</h3>
                {[
                  { key: "name", label: "Full Name", type: "text", placeholder: "John Smith" },
                  { key: "email", label: "Email", type: "email", placeholder: "john@company.com" },
                  { key: "company", label: "Company", type: "text", placeholder: "Acme Corp" },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="text-sm font-medium text-foreground block mb-1.5">{field.label}</label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={formData[field.key as keyof typeof formData]}
                      onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      required={field.key !== "company"}
                    />
                  </div>
                ))}
                <div>
                  <label className="text-sm font-medium text-foreground block mb-1.5">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    required
                  />
                </div>
                <button type="submit" className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5">
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default ClientsContact;
