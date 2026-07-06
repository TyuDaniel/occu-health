type LogoProps = {
  variant?: 'brand' | 'inverse' | 'inverseBlue'
  className?: string
}

const logoSources = {
  brand: '/logos/Horizontal%20Logo_Blue%20Green%20Trans.svg',
  inverse: '/logos/Horizontal%20Logo_White%20Green%20Trans.svg',
  inverseBlue: '/logos/Horizontal%20Logo_White%20Blue%20Trans.svg',
}

export function Logo({ variant = 'brand', className = '' }: LogoProps) {
  return (
    <a
      className={`brand-logo brand-logo--${variant}${className ? ` ${className}` : ''}`}
      href="#top"
      aria-label="OccUhealth home"
    >
      <img src={logoSources[variant]} alt="OccUhealth" />
    </a>
  )
}
