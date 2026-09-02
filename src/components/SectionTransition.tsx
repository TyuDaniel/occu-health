type SectionTransitionTone =
  | 'blue-to-light'
  | 'light-to-blue'
  | 'light-to-light'
  | 'blue-to-blue'
  | 'split-to-light'

type SectionTransitionProps = {
  tone: SectionTransitionTone
  flip?: boolean
}

export function SectionTransition({ tone, flip = false }: SectionTransitionProps) {
  const isSplitTransition = tone === 'split-to-light'

  return (
    <div
      className={`section-transition section-transition--${tone}`}
      data-flip={flip || undefined}
      aria-hidden="true"
    >
      <svg viewBox="0 0 1600 28" preserveAspectRatio="none">
        <g transform={flip ? 'translate(1600 0) scale(-1 1)' : undefined}>
          <path
            className="section-transition__fill"
            d={
              isSplitTransition
                ? 'M0 14C145 21 260 8 416 16c170 9 238-5 392-8 157-3 222 12 392 13 140 1 255-22 400-11V28H0Z'
                : 'M0 0H1600V10C1455-1 1340 22 1200 21c-170-1-235-16-392-13-154 3-222 17-392 8C260 8 145 21 0 14Z'
            }
          />
          <path
            className="section-transition__line section-transition__line--accent"
            d="M0 11C145 18 260 5 416 13c170 9 238-5 392-8 157-3 222 12 392 13 140 1 255-22 400-11"
          />
          <path
            className="section-transition__line section-transition__line--contrast"
            d="M0 14C145 21 260 8 416 16c170 9 238-5 392-8 157-3 222 12 392 13 140 1 255-22 400-11"
          />
        </g>
      </svg>
    </div>
  )
}
