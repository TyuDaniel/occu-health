import type { LucideIcon } from 'lucide-react'
import {
  Activity,
  AudioLines,
  BadgeCheck,
  BarChart3,
  Brain,
  ClipboardList,
  GraduationCap,
  PersonStanding,
  ShieldCheck,
  Stethoscope,
  TestTubes,
} from 'lucide-react'

export type Service = {
  id: string
  title: string
  description: string
  items: Array<{ title: string; description: string }>
  icon: LucideIcon
  image?: { src: string; alt: string }
}

export type WellnessCapability = {
  title: string
  description: string
  examples: string
  icon: LucideIcon
}

export const images = {
  hero: '/images/workplace-safety-inspection.webp',
}

export const navLinks = [
  { label: 'About us', href: '#who-we-are' },
  { label: 'Services', href: '#services' },
  { label: 'Why OccUhealth', href: '#value-we-bring' },
  { label: 'Programmes', href: '#packages' },
]

export const services: Service[] = [
  {
    id: 'occupational-health',
    title: 'Occupational Health Management',
    description:
      'Clinician-led Occupational Health services that support employee health, attendance and productivity while helping employers meet their legal and duty-of-care responsibilities.',
    items: [
      { title: 'Pre-employment & fitness-for-work assessments', description: 'Assessing an employee’s health in relation to the requirements of their role, including fitness for specific duties and workplace environments.' },
      { title: 'Absence & case management', description: 'Independent clinical assessments and practical recommendations to support employees experiencing illness, injury or prolonged absence.' },
      { title: 'Return-to-work assessments', description: 'Supporting safe and sustainable returns following illness, injury, surgery or extended absence, with recommendations for reasonable adjustments where appropriate.' },
      { title: 'Medical surveillance', description: 'Tailored health surveillance programmes designed around workplace risks and regulatory requirements, including respiratory and lung function testing, hearing and vision screening, occupational blood testing, skin assessments, vaccinations and other role-specific health assessments.' },
      { title: 'Statutory & regulatory compliance', description: 'Supporting employers in meeting occupational health and workplace health requirements through appropriate assessment, surveillance and documentation.' },
      { title: 'Health assessments & referrals', description: 'Confidential clinical assessments designed around the individual employee and the demands of their role.' },
      { title: 'Workplace health advice', description: 'Accessible clinical guidance for managers and HR teams on health-related workplace matters.' },
    ],
    icon: Stethoscope,
    image: {
      src: '/images/occuhealth-personal-consultation.webp',
      alt: 'A workplace health conversation taking place on site.',
    },
  },
  {
    id: 'environmental-health-safety',
    title: 'Environmental Health & Safety',
    description:
      'Practical workplace assessments that identify risks, protect employees and help organisations maintain a safe and compliant working environment.',
    items: [
      { title: 'Noise assessments', description: 'Identifying workplace noise risks and recommending appropriate control measures to protect employees.' },
      { title: 'Radon assessments', description: 'Workplace radon testing and assessment to identify potential exposure and support appropriate mitigation.' },
      { title: 'Air quality assessments', description: 'Assessing workplace environmental conditions and identifying potential risks affecting employee health.' },
      { title: 'DSE/VDU assessments', description: 'Display Screen Equipment assessments to identify ergonomic risks and support healthier, more comfortable working environments.' },
      { title: 'Ergonomic assessments', description: 'Practical recommendations to reduce musculoskeletal risks and improve workplace set-up.' },
      { title: 'Workplace risk assessments', description: 'Identifying hazards, evaluating risk and recommending appropriate control measures.' },
      { title: 'Health & safety audits', description: 'Reviewing workplace practices and documentation to identify areas for improvement.' },
      { title: 'Audit & inspection preparation', description: 'Supporting organisations in preparing for internal and external health & safety audits and inspections.' },
    ],
    icon: ClipboardList,
    image: {
      src: '/images/workplace-safety-inspection.png',
      alt: 'A safety specialist reviewing equipment in an industrial workplace.',
    },
  },
  {
    id: 'strategic-advisory-training',
    title: 'Strategic Advisory & Training',
    description:
      'Expert advice, policy development and practical training that help organisations embed health, safety and wellbeing into everyday business practices.',
    items: [
      { title: 'Policy development & review', description: 'Developing practical workplace health, safety and wellbeing policies that reflect your organisation and its specific risks.' },
      { title: 'Health & safety training', description: 'Practical training including First Aid, Manual Handling, DSE, Fire Safety, and other workplace health and safety courses.' },
      { title: 'Toolbox talks', description: 'Short, focused sessions addressing specific workplace hazards, safe working practices and key health and safety topics.' },
      { title: 'Management training', description: 'Equipping managers with the knowledge and confidence to manage workplace health, absence, employee wellbeing and safety effectively.' },
      { title: 'Employee training', description: 'Practical training designed to improve awareness, encourage safer working practices and support employee health.' },
      { title: 'Tailored workshops', description: 'Interactive sessions developed around your workforce, industry and organisational priorities.' },
      { title: 'Strategic occupational health consultancy', description: 'Providing expert guidance to help organisations develop effective occupational health strategies.' },
      { title: 'Health & wellbeing strategy', description: 'Helping organisations move from reactive health management towards a more proactive approach to workforce health.' },
      { title: 'Workplace health reviews', description: 'Reviewing existing processes and identifying opportunities to improve employee health, compliance and organisational outcomes.' },
    ],
    icon: GraduationCap,
  },
  {
    id: 'workforce-wellbeing',
    title: 'Workforce Wellbeing',
    description:
      'Evidence-based workplace wellbeing programmes designed to promote healthier employees, improve engagement and support long-term workforce health.',
    items: [
      { title: 'Onsite wellbeing screening', description: 'Convenient workplace health checks designed to give employees greater insight into key health indicators. Flexible packages that can be tailored to the size, needs and priorities of your workforce.' },
      { title: 'Workforce wellbeing programmes', description: 'Structured programmes supporting physical health, lifestyle and overall employee wellbeing.' },
      { title: 'Health promotion initiatives', description: 'Targeted campaigns and initiatives designed to raise awareness around key health topics.' },
      { title: 'Employee engagement initiatives', description: 'Interactive workplace activities that encourage participation and help make wellbeing part of workplace culture.' },
      { title: 'Resilience & stress management', description: 'Workshops and initiatives supporting employees in managing workplace pressures and maintaining resilience.' },
      { title: 'Health awareness days', description: 'Onsite events focused on specific health topics and designed to encourage employee engagement.' },
    ],
    icon: Activity,
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

export const wellnessCapabilities: WellnessCapability[] = [
  {
    title: 'Core health checks',
    description:
      'Practical, clinician-led checks that give employees a clear picture of their current health.',
    examples: 'Blood pressure, pulse, oxygen saturation, BMI and lifestyle review',
    icon: Activity,
  },
  {
    title: 'Clinical screening',
    description:
      'Targeted testing selected around workforce demographics, workplace risks and programme goals.',
    examples: 'Cholesterol, glucose, phlebotomy, cardiovascular risk and ECG',
    icon: TestTubes,
  },
  {
    title: 'Hearing & respiratory health',
    description:
      'Role-appropriate surveillance and testing for teams exposed to noise, dust or respiratory hazards.',
    examples: 'Audiometry, hearing checks and spirometry',
    icon: AudioLines,
  },
  {
    title: 'Musculoskeletal support',
    description:
      'Early identification of physical strain, with practical guidance employees and managers can act on.',
    examples: 'Musculoskeletal review, ergonomic assessment and work ability guidance',
    icon: PersonStanding,
  },
  {
    title: 'Mental wellbeing & fatigue',
    description:
      'Confidential screening that helps identify patterns early and supports healthier, more resilient teams.',
    examples: 'Stress, burnout, sleep and fatigue assessment',
    icon: Brain,
  },
  {
    title: 'Insight & action planning',
    description:
      'Useful outputs for individuals and decision-makers, without compromising employee confidentiality.',
    examples: 'Personal summaries, anonymised trends, action plans and management reporting',
    icon: BarChart3,
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
    imagePosition: 'center 36%',
  },
  {
    name: "Cathy O'Reilly",
    role: 'Co-Founder | Director',
    phone: '086 309 5495',
    phoneHref: 'tel:+353863095495',
    initials: 'CO',
    image: '/images/cathy-portrait.webp',
    imagePosition: 'center 36%',
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
