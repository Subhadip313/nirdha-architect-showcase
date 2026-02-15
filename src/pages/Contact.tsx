import { useState } from "react";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { Mail, MapPin, Globe, Linkedin, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Static site - would integrate with email service
    window.location.href = `mailto:hello@nirdha.in?subject=Architecture Inquiry from ${formData.name}&body=${formData.message}`;
  };

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
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Let's <span className="text-gradient">Connect</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Ready to architect your next Salesforce solution? Let's discuss how I can help
              transform your enterprise cloud strategy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="glass-card p-8 space-y-6">
                <h2 className="text-xl font-bold text-foreground">Contact Details</h2>
                <div className="space-y-5">
                  {[
                    { icon: <Mail size={18} />, label: "Email", value: "hello@nirdha.in" },
                    { icon: <Globe size={18} />, label: "Website", value: "nirdha.in" },
                    { icon: <MapPin size={18} />, label: "Location", value: "Available Worldwide" },
                    { icon: <Linkedin size={18} />, label: "LinkedIn", value: "Connect on LinkedIn" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                        {item.icon}
                      </div>
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
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    Response within 24 hours
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    Free 30-minute discovery call
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    NDA available upon request
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
                <h2 className="text-xl font-bold text-foreground mb-2">Send a Message</h2>
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
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5"
                >
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

export default Contact;
