export const CenteredSpinner = () => {
  return (
    <div className="flex justify-center items-center">
      <Spinner />
    </div>
  )
}

export const Spinner = () => {
  return (
    <div role="status">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="200"
        height="200"
        viewBox="0 0 200 200"
        fill="none"
        className="text-primary w-8 h-8"
      >
        <defs>
          <linearGradient id="spinner-secondHalf">
            <stop offset="0%" stopOpacity="0" stopColor="currentColor" />
            <stop offset="100%" stopOpacity="0.5" stopColor="currentColor" />
          </linearGradient>
          <linearGradient id="spinner-firstHalf">
            <stop offset="0%" stopOpacity="1" stopColor="currentColor" />
            <stop offset="100%" stopOpacity="0.5" stopColor="currentColor" />
          </linearGradient>
        </defs>

        <g strokeWidth="20">
          <path
            stroke="url(#spinner-secondHalf)"
            d="M 14 100 A 86 86 0 0 1 186 100"
          />
          <path
            stroke="url(#spinner-firstHalf)"
            d="M 186 100 A 86 86 0 0 1 14 100"
          />

          <path
            stroke="currentColor"
            strokeLinecap="round"
            d="M 14 100 A 86 86 0 0 1 14 92"
          />
        </g>
        <animateTransform
          from="0 0 0"
          to="360 0 0"
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1300ms"
        />
      </svg>
    </div>
  )
}
