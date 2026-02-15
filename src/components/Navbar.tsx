import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", hash: "#home", label: "Home" },
  { to: "/", hash: "#expertise", label: "Expertise" },
  { to: "/process-security", hash: "#process", label: "Process" },
  { to: "/process-security", hash: "#security", label: "Security" },
  { to: "/clients-contact", hash: "#clients", label: "Clients" },
  { to: "/clients-contact", hash: "#contact", label: "Contact" },
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  // Handle hash scrolling after navigation
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  const handleNavClick = (to: string, hash: string) => {
    if (location.pathname === to) {
      // Same page, just scroll
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(to + hash);
    }
  };

  const isActive = (to: string, hash: string) => {
    return location.pathname === to && location.hash === hash;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-3" : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link to="/" className="text-xl font-bold tracking-tight">
          <span className="text-gradient">Nirdha</span>
          <span className="text-foreground/60">.in</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.to, link.hash)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                isActive(link.to, link.hash)
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass mx-4 mt-2 rounded-xl overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => {
                    handleNavClick(link.to, link.hash);
                    setMobileOpen(false);
                  }}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all text-left ${
                    isActive(link.to, link.hash)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
