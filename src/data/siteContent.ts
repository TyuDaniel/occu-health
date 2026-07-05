import type { LucideIcon } from 'lucide-react'
import {
  BadgeCheck,
  BarChart3,
  ClipboardList,
  GraduationCap,
  HeartPulse,
  LockKeyhole,
  MapPin,
  ShieldCheck,
  Stethoscope,
} from 'lucide-react'

export type Service = {
  id: string
  title: string
  description: string
  points: string[]
  icon: LucideIcon
  featured?: boolean
}

export type Feature = {
  title: string
  description: string
  icon: LucideIcon
}

export type ProcessStep = {
  title: string
  description: string
}

export type BusinessCaseItem = {
  stat: string
  description: string
}

export type WellnessPackage = {
  id: 'bronze' | 'silver' | 'gold'
  name: string
  duration: string
  title: string
  tone: 'bronze' | 'silver' | 'gold'
}

export type PackageRow = {
  label: string
  group?: string
  bronze: boolean
  silver: boolean
  gold: boolean
}

export const images = {
  hero:
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1800&q=80',
}

export const navLinks = [
  { label: 'Who We Are', href: '#who-we-are' },
  { label: 'Services', href: '#services' },
  { label: 'Wellness', href: '#wellness' },
  { label: 'Contact', href: '#contact' },
]

export const services: Service[] = [
  {
    id: 'occupational-health',
    title: 'Occupational Health Management',
    description:
      'Fitness for work assessments, pre-employment screening, health surveillance and return to work support, defensible clinical guidance every time.',
    points: [
      'Fitness for work assessments',
      'Pre-employment screening',
      'Health surveillance',
      'Return-to-work support',
    ],
    icon: Stethoscope,
    featured: true,
  },
  {
    id: 'absence',
    title: 'Absence & Case Management',
    description:
      'Structured, evidence based management of short and long-term absence, reducing costs, supporting employees and enabling fair HR decisions.',
    points: [
      'Short and long-term absence',
      'Reducing costs',
      'Supporting employees',
      'Fair HR decisions',
    ],
    icon: ClipboardList,
  },
  {
    id: 'compliance',
    title: 'Statutory Compliance',
    description:
      'Fully compliant with Irish, European and global legislative frameworks.',
    points: [
      'Safety, Health & Welfare at Work Act',
      'Chemical Regulations',
      'EU Occupational Safety and Health Directives',
      'REACH',
    ],
    icon: BadgeCheck,
  },
  {
    id: 'ehs',
    title: 'Environmental Health & Safety',
    description:
      'Risk assessments, safety statements, EHS audits and incident investigation, seamlessly integrated with your occupational health programme.',
    points: [
      'Risk assessments',
      'Safety statements',
      'EHS audits',
      'Incident investigation',
    ],
    icon: ShieldCheck,
  },
  {
    id: 'wellbeing',
    title: 'Workforce Wellbeing Programmes',
    description:
      'Evidence based wellbeing initiatives that strengthen employee resilience, engagement and long-term performance.',
    points: [
      'Employee resilience',
      'Engagement',
      'Long-term performance',
    ],
    icon: HeartPulse,
  },
  {
    id: 'advisory',
    title: 'Strategic Advisory, Workshops & Training',
    description:
      'Expert consultancy, policy development, training, and tailored workshops for managers and employees, designed to align with your organisation\'s culture and specific risk profile.',
    points: [
      'Expert consultancy',
      'Policy development',
      'Training',
      'Tailored workshops',
    ],
    icon: GraduationCap,
  },
]

export const valueColumns = [
  {
    title: 'For Your Organisation',
    items: [
      'Comply with health & safety legislation',
      'Support and strengthen recruitment processes',
      'Manage absence effectively and reduce absenteeism',
      'Improve employee retention and reduce turnover',
      'Develop a strategic, sustainable approach to occupational health and EHS',
      'Lower insurance and liability exposure through proactive risk management',
      'Single-vendor simplicity across OH and EHS disciplines',
    ],
  },
  {
    title: 'For Your Employees',
    items: [
      'Improved physical and mental wellbeing',
      'Safer, healthier working environments',
      'Increased productivity and performance',
      'Confidence that health, safety and wellbeing are actively supported',
      'Faster access to clinical guidance',
      'A joined-up approach to health risks and physical workplace hazards',
      'Proactive programmes that prevent issues before they escalate',
    ],
  },
]

export const keyOutcomes = [
  {
    title: 'Integrated Risk Intelligence',
    description:
      'Clinical OH insight and EHS risk management working together; hazard identification informs health decisions, health data shapes safety priorities.',
  },
  {
    title: 'Unified Compliance Assurance',
    description:
      'One partner managing both OH and EHS obligations means no gaps, no duplication and full alignment across audits, inspections and regulatory reviews.',
  },
  {
    title: 'Performance-Driven Outcomes',
    description:
      'Reduced absenteeism, lower incident rates and a healthier workforce translate directly into cost savings, productivity gains and stronger ESG credentials.',
  },
]

export const wellnessFeatures: Feature[] = [
  {
    title: 'Clinician-Led',
    description:
      'Every assessment is delivered by registered Occupational Health Nurses and trained clinicians, not generic wellness vendors.',
    icon: Stethoscope,
  },
  {
    title: 'GDPR Guaranteed',
    description:
      'Individual results are strictly confidential. Employers receive only anonymised, group-level reports. Zero individual data sharing.',
    icon: LockKeyhole,
  },
  {
    title: 'Actionable Insights',
    description:
      'Your anonymous employer report benchmarks your workforce against national Irish data (Healthy Ireland / SLAN) and provides prioritised recommendations.',
    icon: BarChart3,
  },
  {
    title: 'Onsite Delivery',
    description:
      'We come to you. Our clinicians set up a fully equipped screening clinic at your premises, with minimal disruption and maximum uptake.',
    icon: MapPin,
  },
]

export const businessCase: BusinessCaseItem[] = [
  {
    stat: '1 in 4',
    description: 'Irish employees has undiagnosed high blood pressure',
  },
  {
    stat: '€1,500+',
    description: 'average employer cost per employee absent day (IBEC)',
  },
  {
    stat: 'ROI 3:1',
    description: 'average return on corporate wellness investment',
  },
  {
    stat: '37%',
    description:
      'of long-term absences are due to preventable lifestyle conditions',
  },
]

export const wellnessPackages: WellnessPackage[] = [
  {
    id: 'bronze',
    name: 'Bronze',
    duration: '15 minutes per employee',
    title: 'Essential Health',
    tone: 'bronze',
  },
  {
    id: 'silver',
    name: 'Silver',
    duration: '20-25 minutes per employee',
    title: 'Enhanced Screening + Blood Tests',
    tone: 'silver',
  },
  {
    id: 'gold',
    name: 'Gold',
    duration: '30-45 minutes per employee',
    title: 'Premium OH-Led Programme',
    tone: 'gold',
  },
]

export const packageRows: PackageRow[] = [
  {
    label: 'Blood pressure, pulse and oxygen saturation',
    bronze: true,
    silver: true,
    gold: true,
  },
  {
    label: 'Height, weight and BMI',
    bronze: true,
    silver: true,
    gold: true,
  },
  {
    label: 'Lifestyle, smoking and alcohol review',
    bronze: true,
    silver: true,
    gold: true,
  },
  {
    label: 'Stress and fatigue screening (PHQ-4)',
    bronze: true,
    silver: true,
    gold: true,
  },
  {
    label: 'Personal wellness summary and anonymous employer trend report',
    bronze: true,
    silver: true,
    gold: true,
  },
  {
    group: 'Everything in Bronze, plus:',
    label: 'Finger-prick cholesterol and glucose (POCT)',
    bronze: false,
    silver: true,
    gold: true,
  },
  {
    label: 'Cardiovascular risk assessment (SCORE2)',
    bronze: false,
    silver: true,
    gold: true,
  },
  {
    label: 'Expanded mental wellbeing and burnout review',
    bronze: false,
    silver: true,
    gold: true,
  },
  {
    label: 'Sleep and fatigue assessment',
    bronze: false,
    silver: true,
    gold: true,
  },
  {
    group: 'Everything in Silver, plus:',
    label: '12-lead ECG (heart tracing)',
    bronze: false,
    silver: false,
    gold: true,
  },
  {
    label: 'Spirometry / lung function testing',
    bronze: false,
    silver: false,
    gold: true,
  },
  {
    label: 'Musculoskeletal and ergonomic assessment',
    bronze: false,
    silver: false,
    gold: true,
  },
  {
    label: 'OH Nurse consultation and work ability review',
    bronze: false,
    silver: false,
    gold: true,
  },
  {
    label: 'Individual wellness action plan',
    bronze: false,
    silver: false,
    gold: true,
  },
  {
    label: 'Executive wellbeing report and ESG metrics',
    bronze: false,
    silver: false,
    gold: true,
  },
]

export const processSteps: ProcessStep[] = [
  {
    title: 'Book a Consultation',
    description:
      'Contact Occuhealth to discuss your organisation\'s needs, headcount and preferred package. We provide a tailored quote and sign a Data Processing Agreement before any clinic takes place.',
  },
  {
    title: 'We Plan Your Clinic',
    description:
      'We confirm your room requirements, send employee information sheets and set the clinic schedule with appointment slots depending on package.',
  },
  {
    title: 'Clinic Day',
    description:
      'Our clinicians arrive onsite, set up a private confidential screening area and conduct individual assessments using pre-calibrated, quality-controlled equipment.',
  },
  {
    title: 'Results Delivered',
    description:
      'Employees receive their personal wellness summary on the day. Your anonymised employer report is delivered within 10 working days of the clinic.',
  },
  {
    title: 'Act on the Insights',
    description:
      'Use your tailored recommendations to design targeted wellbeing interventions, support your HR strategy and evidence your ESG commitments.',
  },
]

export const contactPeople = [
  {
    name: 'Sharon Cleary',
    role: 'Co-Founder | Director',
    phone: '083 885 1340',
    phoneHref: 'tel:+353838851340',
    initials: 'SC',
    image: '/images/sharon-portrait.webp',
    imagePosition: 'center 38%',
  },
  {
    name: "Cathy O'Reilly",
    role: 'Co-Founder | Director',
    phone: '086 309 5495',
    phoneHref: 'tel:+353863095495',
    initials: 'CO',
    image: '/images/cathy-portrait.webp',
    imagePosition: 'center 46%',
  },
]

export const trustItems = [
  'Occupational Health',
  'Environmental Health & Safety',
  'Workforce Wellbeing',
]

export const proofSignals = [
  {
    label: 'Reduced Absenteeism',
    icon: ClipboardList,
  },
  {
    label: 'Lower Regulatory Risk',
    icon: ShieldCheck,
  },
  {
    label: 'Increased Productivity',
    icon: BarChart3,
  },
  {
    label: 'Compliant Focused',
    icon: BadgeCheck,
  },
]

export const complianceNote = {
  title: 'Statutory Compliance',
  description:
    'We are fully compliant with Irish, European and global legislative frameworks. This includes the Safety, Health & Welfare at Work Act, Chemical Regulations, EU Occupational Safety and Health Directives, REACH, and all sector-specific obligations.',
  standards:
    'Our approach reflects international best practice, drawing on standards such as ISO 45001, ISO 14001 and OHSAS guidelines.',
}
