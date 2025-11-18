import { motion } from 'framer-motion'
import {
  Home,
  Settings,
  Building2,
  Briefcase,
  Wrench,
  Phone,
  ClipboardList,
  Pencil,
  Factory,
  HardHat,
  ShieldCheck,
  FileText,
  Wind,
  Cog,
  BarChart3,
  CheckCircle2,
  Target,
  RefreshCw,
  TrendingUp
} from 'lucide-react'
import './Version2.css'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as any
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94] as any
    }
  }
}

function Version2() {
  const sections = [
    {
      icon: Home,
      title: 'Startseite',
      number: '01',
      items: ['Hero-Section', 'Positionierung', 'Schnellzugang', 'Vertrauenselemente'],
      gradient: 'from-[#2C5F8D] to-[#1e4a6d]'
    },
    {
      icon: Settings,
      title: 'Lösungen',
      number: '02',
      items: ['Entstaubungstechnik', 'Oberflächentechnik', 'Wärmerückgewinnung', 'Kabinenbau'],
      gradient: 'from-[#3b7eb5] to-[#2C5F8D]'
    },
    {
      icon: Building2,
      title: 'Unternehmen',
      number: '03',
      items: ['Über uns / Geschichte', 'Referenzen', 'Social Proof', 'Team'],
      gradient: 'from-[#4a90c9] to-[#356CA5]'
    },
    {
      icon: Briefcase,
      title: 'Karriere',
      number: '04',
      items: ['Stellenangebote', 'Easy Apply', 'Unternehmenskultur'],
      gradient: 'from-[#5BA3D0] to-[#4189bb]'
    },
    {
      icon: Wrench,
      title: 'Service',
      number: '05',
      items: ['Wartung & Reparatur', 'Ersatzteile', 'Notfall-Kontakt'],
      gradient: 'from-[#2873a8] to-[#1d5d8c]'
    },
    {
      icon: Phone,
      title: 'Kontakt',
      number: '06',
      items: ['Formular', 'Ansprechpartner', 'Anfahrt / Karte'],
      gradient: 'from-[#6bb6e0] to-[#4a9dd4]'
    }
  ]

  const processSteps = [
    {
      icon: ClipboardList,
      title: 'Analyse & Planung',
      description: 'Bedarfsanalyse vor Ort',
      number: '01'
    },
    {
      icon: Pencil,
      title: 'Konstruktion',
      description: 'CAD-Planung & Auslegung',
      number: '02'
    },
    {
      icon: Factory,
      title: 'Fertigung',
      description: 'Im eigenen Werk',
      number: '03'
    },
    {
      icon: HardHat,
      title: 'Montage',
      description: 'Installation & Einweisung',
      number: '04'
    },
    {
      icon: ShieldCheck,
      title: 'Service',
      description: 'Wartung & Support',
      number: '05'
    }
  ]

  const technicalDownloads = [
    { icon: FileText, label: 'Filteranlagen' },
    { icon: Wind, label: 'Ventilatoren' },
    { icon: Cog, label: 'Rohrteile' },
    { icon: BarChart3, label: 'Datenblätter' }
  ]

  const benefits = [
    {
      icon: CheckCircle2,
      title: 'Struktur-Vorteile',
      description: 'Max. 2 Ebenen tief, klare Hierarchie, mobile-optimiert, SEO-freundlich'
    },
    {
      icon: Target,
      title: 'Marketing-Fokus',
      description: 'Technische Details ausgelagert, visuelle Produktdarstellung, Conversion-CTAs'
    },
    {
      icon: RefreshCw,
      title: 'Konsistenz',
      description: '5-Step-Prozess als Wiedererkennungsmerkmal auf allen Produktseiten'
    },
    {
      icon: TrendingUp,
      title: 'Umfang',
      description: '17 Hauptseiten, 6 Nav-Bereiche, 4 PDF-Downloads, 3 Pflichtseiten'
    }
  ]

  return (
    <div className="v2-body">
      <div className="v2-container">
        <motion.div
          className="v2-sticky-badge"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="v2-sticky-icon">
            <Target className="w-5 h-5" />
          </div>
          <h3>Projektziele</h3>
          <ul>
            <li>Modern & professionell</li>
            <li>Klare Struktur</li>
            <li>Mobile-first</li>
            <li>Conversion-fokus</li>
          </ul>
        </motion.div>

        <motion.header
          className="v2-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="v2-header-badge"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          >
            Website Relaunch
          </motion.div>
          <h1>Strategisches Konzept</h1>
          <p className="v2-subtitle">Meeting Dokumentation | November 2025</p>
        </motion.header>

        <motion.div
          className="v2-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className="v2-card"
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className={`v2-card-gradient bg-gradient-to-br ${section.gradient}`}>
                <div className="v2-card-number">{section.number}</div>
                <div className="v2-card-icon">
                  <section.icon className="w-10 h-10" strokeWidth={1.5} />
                </div>
                <h2>{section.title}</h2>
                <ul>
                  {section.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.section
          className="v2-process-section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="v2-process-header">
            <span className="v2-process-badge">Signature Element</span>
            <h2>Der 5-Step-Prozess</h2>
            <p>Wird auf allen Produktseiten identisch eingebunden</p>
          </div>

          <div className="v2-process-grid">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="v2-process-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="v2-process-number">{step.number}</div>
                <div className="v2-process-icon">
                  <step.icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="v2-tech-section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="v2-tech-header">
            <h3>Technische Downloads</h3>
            <p>Nicht in Navigation – als PDF-Downloads auf Produktseiten</p>
          </div>
          <div className="v2-tech-grid">
            {technicalDownloads.map((item, index) => (
              <motion.div
                key={index}
                className="v2-tech-badge"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <item.icon className="w-5 h-5" strokeWidth={2} />
                <span>{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.div
          className="v2-benefits-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="v2-benefit-card"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="v2-benefit-icon">
                <benefit.icon className="w-6 h-6" strokeWidth={2} />
              </div>
              <h4>{benefit.title}</h4>
              <p>{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.footer
          className="v2-footer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Bereit für die Umsetzung</h2>
          <p>Klare Struktur · Professionell · Conversion-optimiert</p>
        </motion.footer>
      </div>
    </div>
  )
}

export default Version2
