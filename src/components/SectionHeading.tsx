import type { ReactNode } from 'react'

type SectionHeadingProps = {
  title: string
  accent?: string
  children?: ReactNode
  align?: 'left' | 'center'
  inverse?: boolean
}

export function SectionHeading({
  title,
  accent,
  children,
  align = 'left',
  inverse = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`section-heading section-heading--${align}${inverse ? ' section-heading--inverse' : ''}`}
    >
      <h2>
        {accent ? (
          <>
            <span className="accent">{accent}</span> {title}
          </>
        ) : (
          title
        )}
      </h2>
      {children ? <p>{children}</p> : null}
    </div>
  )
}
