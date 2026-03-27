import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import {
  Activity,
  ArrowRight,
  BedDouble,
  CheckCircle2,
  ChevronDown,
  Clock,
  Droplets,
  Heart,
  Home,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Star,
  Stethoscope,
  TestTube2,
  Truck,
  Wind,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

// ─── Data ────────────────────────────────────────────────────────────────────

const rentalServices = [
  {
    icon: <Wind className="w-7 h-7" />,
    title: "Oxygen Cylinder / Concentrator",
    desc: "Emergency oxygen supply at home with concentrators and cylinders available 24/7.",
  },
  {
    icon: <Activity className="w-7 h-7" />,
    title: "BIPAP / CPAP Machine",
    desc: "Advanced BIPAP & CPAP therapy machines for sleep apnea and respiratory support.",
  },
  {
    icon: <BedDouble className="w-7 h-7" />,
    title: "Hospital Bed",
    desc: "Adjustable hospital-grade beds with rails for safe and comfortable home care.",
  },
  {
    icon: <Droplets className="w-7 h-7" />,
    title: "Suction Pump / Syringe Pump",
    desc: "Medical-grade suction and syringe pumps for precise medication delivery.",
  },
  {
    icon: <Heart className="w-7 h-7" />,
    title: "IV Stand & Pressure Mattresses",
    desc: "IV stands, Nimbus, Air & Alternating Pressure Mattresses for bedridden patients.",
  },
  {
    icon: <Home className="w-7 h-7" />,
    title: "Nursing, Pathology & ICU Setup",
    desc: "Professional nursing care, blood home collection & complete ICU setup at home.",
  },
];

const productCategories = [
  {
    icon: <Activity className="w-8 h-8" />,
    title: "CPAP & BIPAP Machines",
    desc: "Resmed, BMC, Philips — full range for sleep therapy.",
    count: "15+ models",
  },
  {
    icon: <Wind className="w-8 h-8" />,
    title: "Oxygen Concentrators",
    desc: "Portable & stationary concentrators for home & clinical use.",
    count: "10+ models",
  },
  {
    icon: <BedDouble className="w-8 h-8" />,
    title: "Wheelchairs & Mobility",
    desc: "Foldable, motorised & bariatric wheelchairs for all needs.",
    count: "8+ models",
  },
  {
    icon: <TestTube2 className="w-8 h-8" />,
    title: "Polysomnography & Spirometry",
    desc: "Diagnostic devices for sleep study and lung function testing.",
    count: "5+ models",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "ECG & Para Monitor",
    desc: "Multi-parameter monitors and ECG machines for vital monitoring.",
    count: "6+ models",
  },
  {
    icon: <Stethoscope className="w-8 h-8" />,
    title: "Pulse Oximeter & More",
    desc: "Fingertip & table-top pulse oximeters plus accessories.",
    count: "12+ models",
  },
];

const diagnosticServices = [
  {
    title: "Home Sleep Study (Level 3)",
    detail: "OSA / CSA Detection",
    desc: "Portable sleep apnea testing in the comfort of your home.",
  },
  {
    title: "Polysomnography (Level 2)",
    detail: "Full Sleep Lab Study",
    desc: "Comprehensive overnight sleep study for accurate diagnosis.",
  },
  {
    title: "Lung Function Test (Spirometry)",
    detail: "Asthma, COPD, ILD",
    desc: "Assess breathing capacity for respiratory conditions at home.",
  },
  {
    title: "24-Hr Ambulatory BP Monitoring",
    detail: "Uncontrolled Hypertension",
    desc: "Continuous blood pressure monitoring over 24 hours.",
  },
  {
    title: "Blood Pathological Tests",
    detail: "Home Collection Available",
    desc: "All types of blood tests with convenient home sample collection.",
  },
];

const brands = ["ResMed", "BMC", "Philips", "Sanrai", "Deckmount", "Contec"];

const whyUs = [
  {
    icon: <Clock className="w-8 h-8" />,
    title: "24/7 Emergency Support",
    desc: "Round-the-clock helpline for urgent respiratory care needs.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "2-Hour Response",
    desc: "Emergency delivery within 2 hours anywhere in Kolkata.",
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Home Delivery",
    desc: "All equipment delivered and set up at your doorstep.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Certified Equipment",
    desc: "All devices are ISO & CE certified from trusted global brands.",
  },
];

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Products", href: "#products" },
    { label: "Sleep Lab", href: "#diagnostics" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "border-b border-border"
      }`}
    >
      {/* Utility Bar */}
      <div className="bg-navy text-navy-foreground py-1.5 px-4 text-xs">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <span className="hidden sm:block">
            Serving Kolkata since 2017 · Respiratory &amp; Sleep Care
            Specialists
          </span>
          <span className="sm:hidden">Respitronic · Kolkata</span>
          <a
            href="tel:9836419292"
            className="flex items-center gap-1.5 font-semibold hover:text-white transition-colors"
            data-ocid="utility.link"
          >
            <Phone className="w-3 h-3" />
            24/7 Emergency: 9836419292 / 6290905622
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="max-w-[1200px] mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2"
          data-ocid="nav.link"
        >
          <img
            src="/assets/generated/respitronic-logo-transparent.dim_300x100.png"
            alt="Respitronic Medical Equipment"
            className="h-12 w-auto object-contain"
          />
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[oklch(0.35_0_0)] hover:text-primary transition-colors"
              data-ocid="nav.link"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Button asChild size="sm" data-ocid="nav.primary_button">
            <a href="tel:9836419292" className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" />
              Call Now
            </a>
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 rounded-md text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          type="button"
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          {mobileOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden bg-white border-t border-border"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-foreground py-2 border-b border-border last:border-0"
                  data-ocid="nav.link"
                >
                  {l.label}
                </a>
              ))}
              <Button asChild className="mt-2" data-ocid="nav.primary_button">
                <a href="tel:9836419292">Call Now: 9836419292</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-white to-[oklch(0.97_0.015_245)] py-16 lg:py-24"
    >
      <div className="max-w-[1200px] mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <div className="flex items-center gap-2">
            <Badge className="bg-[oklch(0.93_0.04_252)] text-primary border-0 font-semibold px-3 py-1">
              <Star className="w-3 h-3 mr-1 inline" /> Kolkata's Trusted
              Respiratory Care
            </Badge>
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-[oklch(0.13_0_0)] leading-tight">
            Expert Respiratory &amp;{" "}
            <span className="text-primary">Medical Equipment</span> Services
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
            Providing home delivery of oxygen, BIPAP, CPAP, hospital beds and
            ICU setup within <strong>2 hours</strong> anywhere in Kolkata.
            Available <strong>24/7</strong> for your emergency needs.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button size="lg" asChild data-ocid="hero.primary_button">
              <a href="#services" className="flex items-center gap-2">
                Request Service <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              data-ocid="hero.secondary_button"
            >
              <a href="tel:9836419292" className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> Call Now
              </a>
            </Button>
          </div>
          <div className="flex flex-wrap gap-5 pt-2">
            {[
              {
                label: "Years of Service",
                value: `${new Date().getFullYear() - 2017}+`,
              },
              { label: "Equipment Types", value: "50+" },
              { label: "Response Time", value: "2 hrs" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-extrabold text-primary">
                  {s.value}
                </div>
                <div className="text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-card-hover">
            <img
              src="/assets/generated/hero-medical.dim_800x600.jpg"
              alt="Respitronic medical care at home"
              className="w-full h-[400px] object-cover"
              loading="eager"
            />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-card-hover px-5 py-4 flex items-center gap-3 border border-border">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">
                Always Available
              </div>
              <div className="text-sm font-bold text-foreground">
                24/7 Support
              </div>
            </div>
          </div>
          {/* Second badge */}
          <div className="absolute -top-4 -right-4 bg-primary text-white rounded-2xl shadow-card-hover px-4 py-3 text-center">
            <div className="text-2xl font-extrabold">2hr</div>
            <div className="text-xs font-medium opacity-90">
              Emergency Response
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Rental Services ──────────────────────────────────────────────────────────

function RentalServicesSection() {
  return (
    <section id="services" className="py-16 lg:py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-[oklch(0.93_0.04_252)] text-primary border-0 mb-3">
            Home Services
          </Badge>
          <h2 className="text-3xl font-bold text-foreground">
            Home Rental Services
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Emergency medical equipment on rent — delivered and set up at your
            home within hours.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rentalServices.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              data-ocid={`services.item.${i + 1}`}
            >
              <Card className="h-full border-border hover:shadow-card-hover hover:border-primary/30 transition-all duration-300 rounded-xl">
                <CardContent className="p-6 flex flex-col gap-4">
                  <div className="w-14 h-14 rounded-xl bg-[oklch(0.93_0.04_252)] flex items-center justify-center text-primary">
                    {s.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-base mb-1">
                      {s.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild size="lg" data-ocid="services.primary_button">
            <a href="tel:9836419292" className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> Call for Rental: 9836419292
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

// ─── Products ─────────────────────────────────────────────────────────────────

function ProductsSection() {
  return (
    <section
      id="products"
      className="py-16 lg:py-20 bg-[oklch(0.97_0.015_245)]"
    >
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-primary/10 text-primary border-0 mb-3">
            For Sale
          </Badge>
          <h2 className="text-3xl font-bold text-foreground">
            Medical Equipment for Sale
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Wide range of certified medical devices from leading global brands.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productCategories.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              data-ocid={`products.item.${i + 1}`}
            >
              <Card className="h-full bg-white border-border hover:shadow-card-hover hover:border-primary/30 transition-all duration-300 rounded-xl">
                <CardContent className="p-6 flex flex-col gap-4">
                  <div className="flex items-start justify-between">
                    <div className="w-14 h-14 rounded-xl bg-[oklch(0.93_0.04_252)] flex items-center justify-center text-primary">
                      {p.icon}
                    </div>
                    <Badge variant="secondary" className="text-xs font-medium">
                      {p.count}
                    </Badge>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-base mb-1">
                      {p.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{p.desc}</p>
                  </div>
                  <a
                    href="#contact"
                    className="text-sm text-primary font-semibold flex items-center gap-1 mt-auto hover:gap-2 transition-all"
                    data-ocid="products.link"
                  >
                    Get Quote <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Brands ───────────────────────────────────────────────────────────────────

function BrandsSection() {
  return (
    <section className="py-10 bg-white border-y border-border">
      <div className="max-w-[1200px] mx-auto px-4">
        <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
          Trusted Brands We Carry
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {brands.map((b) => (
            <div
              key={b}
              className="px-6 py-2.5 rounded-full bg-[oklch(0.97_0.015_245)] border border-border text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-colors"
            >
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Diagnostic Services ──────────────────────────────────────────────────────

function DiagnosticsSection() {
  return (
    <section id="diagnostics" className="py-16 lg:py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-[oklch(0.93_0.04_252)] text-primary border-0 mb-3">
            Sleep Lab &amp; Diagnostics
          </Badge>
          <h2 className="text-3xl font-bold text-foreground">
            Diagnostic Services at Home
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Advanced diagnostic tests performed at your home by trained
            professionals.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {diagnosticServices.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              data-ocid={`diagnostics.item.${i + 1}`}
            >
              <div className="flex gap-4 p-5 rounded-xl border border-border bg-white hover:border-primary/30 hover:shadow-card transition-all duration-300">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-foreground text-sm mb-0.5">
                    {d.title}
                  </div>
                  <Badge
                    variant="outline"
                    className="text-xs mb-2 text-primary border-primary/30"
                  >
                    {d.detail}
                  </Badge>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {d.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild size="lg" data-ocid="diagnostics.primary_button">
            <a href="#contact" className="flex items-center gap-2">
              Book a Test <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────

function AboutSection() {
  return (
    <section id="about" className="py-16 lg:py-20 bg-[oklch(0.97_0.015_245)]">
      <div className="max-w-[1200px] mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-5"
        >
          <Badge className="bg-primary/10 text-primary border-0 w-fit">
            About Us
          </Badge>
          <h2 className="text-3xl font-bold text-foreground">
            Kolkata's Premier Respiratory Care Company
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Founded on <strong>17 January 2017</strong>, Respitronic was born
            out of a commitment to make quality respiratory and sleep care
            accessible to every family in Kolkata. Located in Tollygunge, we
            have grown to become West Bengal's most trusted name in medical
            equipment rental and sales.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We specialise in CPAP/BIPAP therapy, sleep study diagnostics, home
            oxygen therapy, and emergency ICU setup. Our 24-hour helpline
            ensures that no patient goes without critical equipment during an
            emergency.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-2">
            {[
              { label: "Founded", value: "Jan 2017" },
              { label: "Location", value: "Tollygunge, Kolkata" },
              { label: "Support", value: "24/7 Emergency" },
              { label: "Delivery", value: "2-Hr Response" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-lg p-4 border border-border"
              >
                <div className="text-xs text-muted-foreground">
                  {item.label}
                </div>
                <div className="font-semibold text-foreground text-sm">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right stats */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 gap-4"
        >
          {[
            {
              num: `${new Date().getFullYear() - 2017}+`,
              label: "Years of Excellence",
              bg: "bg-primary",
            },
            {
              num: "5000+",
              label: "Patients Served",
              bg: "bg-[oklch(0.48_0.13_252)]",
            },
            {
              num: "50+",
              label: "Equipment Types",
              bg: "bg-[oklch(0.55_0.1_200)]",
            },
            {
              num: "24/7",
              label: "Always Available",
              bg: "bg-[oklch(0.32_0.1_255)]",
            },
          ].map((s) => (
            <div
              key={s.label}
              className={`${s.bg} text-white rounded-2xl p-8 flex flex-col justify-center items-center text-center`}
            >
              <div className="text-4xl font-extrabold">{s.num}</div>
              <div className="text-sm font-medium opacity-90 mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Why Choose Us ────────────────────────────────────────────────────────────

function WhyUsSection() {
  return (
    <section className="py-14 bg-primary">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-white">
            Why Choose Respitronic?
          </h2>
          <p className="text-white/70 text-sm mt-2">
            Everything you need, when you need it most.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyUs.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-white/10 hover:bg-white/15 transition-colors"
            >
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center text-white">
                {w.icon}
              </div>
              <div className="font-semibold text-white">{w.title}</div>
              <p className="text-white/70 text-sm">{w.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────

function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    setForm({ name: "", phone: "", service: "", message: "" });
    toast.success("Message sent! We'll contact you within 2 hours.", {
      description: "Our team is available 24/7 for emergencies.",
    });
  };

  return (
    <section id="contact" className="py-16 lg:py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-[oklch(0.93_0.04_252)] text-primary border-0 mb-3">
            Get in Touch
          </Badge>
          <h2 className="text-3xl font-bold text-foreground">Contact Us</h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Reach out for equipment rental, purchase, or diagnostic services.
            Emergency calls answered 24/7.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Info column */}
          <div className="flex flex-col gap-6">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-[oklch(0.93_0.04_252)] rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-sm text-foreground">
                  Address
                </div>
                <p className="text-muted-foreground text-sm mt-0.5">
                  5 Somnath Lahiri Sarani, Tollygunge,
                  <br />
                  Kolkata, West Bengal 700033
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-[oklch(0.93_0.04_252)] rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-sm text-foreground">
                  24/7 Helpline
                </div>
                <a
                  href="tel:9836419292"
                  className="text-primary font-medium block mt-0.5"
                  data-ocid="contact.link"
                >
                  9836419292
                </a>
                <a
                  href="tel:6290905622"
                  className="text-primary font-medium block"
                  data-ocid="contact.link"
                >
                  6290905622
                </a>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-[oklch(0.93_0.04_252)] rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-sm text-foreground">
                  Working Hours
                </div>
                <p className="text-muted-foreground text-sm mt-0.5">
                  24 hours, 7 days a week
                  <br />
                  Emergency response within 2 hours
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden border border-border h-52 mt-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.6!2d88.3432!3d22.4993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027110a3c3de29%3A0x1b3c2c2c8f3c9c8a!2sTollygunge%2C+Kolkata%2C+West+Bengal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Respitronic Location - Tollygunge Kolkata"
              />
            </div>
          </div>

          {/* Contact form */}
          <Card className="border-border shadow-card" data-ocid="contact.panel">
            <CardContent className="p-6">
              <h3 className="font-bold text-lg text-foreground mb-5">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="contact-name">Full Name *</Label>
                    <Input
                      id="contact-name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, name: e.target.value }))
                      }
                      required
                      data-ocid="contact.input"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="contact-phone">Phone Number *</Label>
                    <Input
                      id="contact-phone"
                      type="tel"
                      placeholder="Mobile number"
                      value={form.phone}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, phone: e.target.value }))
                      }
                      required
                      data-ocid="contact.input"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="contact-service">Service Needed</Label>
                  <Input
                    id="contact-service"
                    placeholder="e.g. CPAP rental, Oxygen concentrator, Sleep study"
                    value={form.service}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, service: e.target.value }))
                    }
                    data-ocid="contact.input"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="contact-message">Message</Label>
                  <Textarea
                    id="contact-message"
                    placeholder="Tell us more about your requirements…"
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, message: e.target.value }))
                    }
                    data-ocid="contact.textarea"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={submitting}
                  className="w-full"
                  data-ocid="contact.submit_button"
                >
                  {submitting ? "Sending…" : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="max-w-[1200px] mx-auto px-4 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <img
            src="/assets/generated/respitronic-logo-transparent.dim_300x100.png"
            alt="Respitronic"
            className="h-10 w-auto object-contain brightness-200"
          />
          <p className="text-sm opacity-75 leading-relaxed">
            Respiratory &amp; Sleep Care specialists in Kolkata since January
            2017. Providing emergency medical equipment 24/7.
          </p>
          <div className="flex items-center gap-2 text-sm opacity-80">
            <MapPin className="w-4 h-4 flex-shrink-0" />
            <span>5 Somnath Lahiri Sarani, Tollygunge, Kolkata 700033</span>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-bold text-white mb-4">Quick Links</h4>
          <ul className="flex flex-col gap-2">
            {[
              { label: "Home", href: "#home" },
              { label: "About Us", href: "#about" },
              { label: "Rental Services", href: "#services" },
              { label: "Products for Sale", href: "#products" },
              { label: "Sleep Lab", href: "#diagnostics" },
              { label: "Contact Us", href: "#contact" },
            ].map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm opacity-75 hover:opacity-100 hover:text-white transition-opacity"
                  data-ocid="footer.link"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold text-white mb-4">Contact</h4>
          <div className="flex flex-col gap-3">
            <a
              href="tel:9836419292"
              className="flex items-center gap-2 text-sm opacity-75 hover:opacity-100 transition-opacity"
              data-ocid="footer.link"
            >
              <Phone className="w-4 h-4" /> 9836419292
            </a>
            <a
              href="tel:6290905622"
              className="flex items-center gap-2 text-sm opacity-75 hover:opacity-100 transition-opacity"
              data-ocid="footer.link"
            >
              <Phone className="w-4 h-4" /> 6290905622
            </a>
            <div className="flex items-center gap-2 text-sm opacity-75">
              <Clock className="w-4 h-4" /> 24/7 Emergency Helpline
            </div>
            <div className="mt-2 flex flex-col gap-1">
              <p className="text-xs opacity-60 font-semibold uppercase tracking-wider">
                Brands
              </p>
              <p className="text-sm opacity-75">
                ResMed · BMC · Philips · Sanrai · Deckmount · Contec
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-bold text-white mb-4">Stay Updated</h4>
          <p className="text-sm opacity-75 mb-4">
            Get health tips and equipment updates.
          </p>
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="Your email"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-white/60"
              data-ocid="footer.input"
            />
            <Button size="icon" variant="secondary" data-ocid="footer.button">
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="mt-6">
            <div className="inline-flex items-center gap-1.5 bg-green-500/20 text-green-300 rounded-full px-3 py-1.5 text-xs font-semibold">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Online · 24/7 Support Active
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs opacity-60">
          <span>
            © {year} Respitronic. All Rights Reserved. Tollygunge, Kolkata.
          </span>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            Built with ❤️ using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Toaster richColors position="top-right" />
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <RentalServicesSection />
        <ProductsSection />
        <BrandsSection />
        <DiagnosticsSection />
        <AboutSection />
        <WhyUsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
