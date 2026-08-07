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
  hero: '/images/occupational-health-hero.webp',
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
      'Clinician-led occupational health support that protects employees, helps employers meet their duties and enables clear, evidence-based decisions about fitness for work.',
    points: [
      'Pre-employment and pre-placement health screening',
      'Fitness-for-work and return-to-work assessments',
      'Role-specific health surveillance, including audiometry, spirometry and vision screening',
      'Phlebotomy and other clinically indicated screening services',
      'Clear clinical guidance and practical workplace recommendations',
    ],
    icon: Stethoscope,
    featured: true,
  },
  {
    id: 'absence',
    title: 'Absence & Case Management',
    description:
      'Structured clinical support for short-term, recurring and long-term absence, giving employees an appropriate route back to work and managers clear, impartial guidance.',
    points: [
      'Early intervention and clinical case review',
      'Support for recurring, complex and long-term absence',
      'Return-to-work planning and workplace adjustments',
      'Functional recommendations for fair, informed HR decisions',
      'Ongoing review and case coordination where required',
    ],
    icon: ClipboardList,
    featured: true,
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
      'Risk assessments, DSE assessments, safety statements, EHS audits and incident investigation, seamlessly integrated with your occupational health programme.',
    points: [
      'Risk assessments',
      'DSE assessments',
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
      'Every assessment is delivered by registered Occupational Health Specialists and trained clinicians, not generic wellness vendors.',
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
      'Book a consultation with OccUhealth to discuss your organisation\'s occupational health requirements, workforce profile and priorities.',
  },
  {
    title: 'Tailor Your Programme',
    description:
      'Speak with our team to create an occupational health programme tailored to your organisation\'s needs, risks and working environment.',
  },
  {
    title: 'Plan & Deliver',
    description:
      'We coordinate appointments, onsite clinics, referrals and documentation, delivering services nationwide with minimal disruption.',
  },
  {
    title: 'Review & Support',
    description:
      'Receive clear clinical guidance and management reporting, with ongoing case support as your organisation\'s needs evolve.',
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
    imagePosition: 'center bottom',
  },
  {
    name: "Cathy O'Reilly",
    role: 'Co-Founder | Director',
    phone: '086 309 5495',
    phoneHref: 'tel:+353863095495',
    initials: 'CO',
    image: '/images/cathy-portrait.webp',
    imagePosition: 'center bottom',
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
