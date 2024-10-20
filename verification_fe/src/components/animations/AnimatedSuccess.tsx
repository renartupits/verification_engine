function AnimatedSuccess() {
  return (
    <div className="flex items-center justify-center w-full h-full transform rounded-full bg-primary animate-scale-in">
      <div className="w-1/3 h-1/3 transform opacity-0 animate-spin-in [animation-delay:600ms]">
        <svg
          className="fill-white pointer-events-none"
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.40913 17.5568L2.43868 12.5864C1.88004 12.0278 0.977619 12.0278 0.418979 12.5864C-0.13966 13.145 -0.13966 14.0474 0.418979 14.6061L6.40645 20.5936C6.96509 21.1522 7.8675 21.1522 8.42614 20.5936L23.581 5.43867C24.1397 4.88004 24.1397 3.97762 23.581 3.41898C23.0224 2.86034 22.12 2.86034 21.5613 3.41898L7.40913 17.5568Z"
          />
        </svg>
      </div>
    </div>
  );
}

export default AnimatedSuccess;
