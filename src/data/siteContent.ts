import type { LucideIcon } from 'lucide-react'
import {
  Activity,
  BadgeCheck,
  BarChart3,
  Building2,
  CalendarCheck,
  ClipboardCheck,
  ClipboardList,
  Factory,
  GraduationCap,
  HandHeart,
  HeartPulse,
  LockKeyhole,
  MapPin,
  ShieldCheck,
  Stethoscope,
  UsersRound,
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
  hero:
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1800&q=80',
  consultation:
    'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=80',
  workplace:
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=80',
}

export const navLinks = [
  { label: 'Who We Are', href: '#who-we-are' },
  { label: 'Services', href: '#services' },
  { label: 'Why Occuhealth', href: '#why-occuhealth' },
  { label: 'Wellness', href: '#wellness' },
  { label: 'Contact', href: '#contact' },
]

export const services: Service[] = [
  {
    id: 'occupational-health',
    title: 'Occupational Health Management',
    description:
      'Clinical Occupational Health support that helps organisations make fair, informed and timely workforce decisions.',
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
    id: 'ehs',
    title: 'Environmental Health & Safety',
    description:
      'Practical EHS support built around the real risk profile of each workplace, from audit to action.',
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
      'Evidence-based wellbeing initiatives designed to support resilience, engagement and long-term performance.',
    points: ['Employee resilience', 'Engagement', 'Targeted programmes'],
    icon: HeartPulse,
  },
  {
    id: 'advisory',
    title: 'Strategic Advisory, Workshops & Training',
    description:
      'Expert consultancy, policy development and practical manager or employee workshops shaped around your organisation.',
    points: ['Policy development', 'Manager workshops', 'Employee workshops'],
    icon: GraduationCap,
  },
  {
    id: 'absence',
    title: 'Absence & Case Management',
    description:
      'Support for short and long-term absence, helping HR teams balance employee care with defensible decisions.',
    points: ['Case management', 'Employee support', 'Cost reduction'],
    icon: ClipboardList,
  },
  {
    id: 'compliance',
    title: 'Statutory Compliance',
    description:
      'Structured support for Irish and European workplace health and safety obligations, without overcomplication.',
    points: ['Compliance frameworks', 'Defensible process', 'Clear records'],
    icon: BadgeCheck,
  },
]

export const valueColumns = [
  {
    title: 'For Your Organisation',
    items: [
      'Health and safety compliance',
      'Stronger recruitment support',
      'Better absence management',
      'Improved retention',
      'Sustainable OH and EHS strategy',
      'Single-vendor simplicity',
    ],
  },
  {
    title: 'For Your Employees',
    items: [
      'Improved physical and mental wellbeing',
      'Safer working environments',
      'Faster access to clinical guidance',
      'Joined-up health and workplace risk support',
      'Prevention before escalation',
      'Better support at critical moments',
    ],
  },
]

export const keyOutcomes = [
  {
    title: 'Integrated Risk Intelligence',
    description:
      'Clinical OH insight and EHS risk management work together, so workplace hazards inform health decisions and health insights shape safety priorities.',
  },
  {
    title: 'Unified Compliance Assurance',
    description:
      'One partner managing OH and EHS obligations reduces gaps, duplication and fragmented responsibility.',
  },
  {
    title: 'Performance-Driven Outcomes',
    description:
      'Reduced absenteeism, lower incident rates and a healthier workforce support productivity, cost control and stronger ESG outcomes.',
  },
]

export const wellnessFeatures: Feature[] = [
  {
    title: 'Clinician-Led',
    description:
      'Assessments delivered by qualified Occupational Health professionals and trained clinicians.',
    icon: Stethoscope,
  },
  {
    title: 'Confidential by Design',
    description:
      'Individual health information remains confidential, with employer insights provided at an appropriate anonymised group level.',
    icon: LockKeyhole,
  },
  {
    title: 'Actionable Insights',
    description:
      'Workforce-level trends help inform targeted and practical wellbeing priorities.',
    icon: BarChart3,
  },
  {
    title: 'Onsite Delivery',
    description:
      'Occuhealth clinicians bring the screening clinic to the workplace, reducing disruption and improving accessibility.',
    icon: MapPin,
  },
]

export const businessCase = [
  'Workforce health risks often go undetected.',
  'Absence carries a significant operational cost.',
  'Preventative wellbeing programmes can create measurable organisational value.',
  'Lifestyle factors contribute to long-term workforce health challenges.',
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
    title: 'Premium OH-led Programme',
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
    label: 'Personal wellness summary',
    bronze: true,
    silver: true,
    gold: true,
  },
  {
    label: 'Anonymous employer trend report',
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
      'Discuss organisation needs, workforce size and the appropriate service.',
  },
  {
    title: 'We Plan Your Clinic',
    description:
      'Confirm requirements, employee information and the clinic schedule.',
  },
  {
    title: 'Clinic Day',
    description:
      'Clinicians arrive onsite and establish a private screening area.',
  },
  {
    title: 'Results Delivered',
    description:
      'Employees receive appropriate personal outcomes and employer-level reporting is prepared.',
  },
  {
    title: 'Act on the Insights',
    description:
      'Use the findings to guide targeted workplace wellbeing and HR strategy.',
  },
]

export const differentiators: Feature[] = [
  {
    title: 'Integrated Expertise',
    description: 'Clinical and workplace risk perspectives working together.',
    icon: Activity,
  },
  {
    title: 'Flexible Service Model',
    description:
      'From ad hoc SME support to contracted onsite services for larger organisations.',
    icon: Building2,
  },
  {
    title: 'Practical Outcomes',
    description:
      'Clear, solutions-driven support designed around compliance, workforce wellbeing and business performance.',
    icon: ClipboardCheck,
  },
]

export const contactPeople = [
  {
    name: 'Sharon Cleary',
    role: 'Co-Founder | Director',
    initials: 'SC',
    image: '/images/sharon-portrait.jpg',
    imagePosition: 'center 58%',
  },
  {
    name: "Cathy O'Reilly",
    role: 'Co-Founder | Director',
    initials: 'CO',
    image: '/images/cathy-portrait.jpg',
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
    label: 'Integrated OH and EHS',
    icon: HandHeart,
  },
  {
    label: 'Workplace-led delivery',
    icon: UsersRound,
  },
  {
    label: 'Practical clinical guidance',
    icon: CalendarCheck,
  },
  {
    label: 'Compliance-focused support',
    icon: Factory,
  },
]
