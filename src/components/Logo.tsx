type LogoProps = {
  variant?: 'brand' | 'inverse' | 'inverseBlue'
  className?: string
}

const logoSources = {
  brand: '/brand/wordmark-blue.svg',
  inverse: '/brand/wordmark-inverse.svg',
  inverseBlue: '/brand/wordmark-white-blue.svg',
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
