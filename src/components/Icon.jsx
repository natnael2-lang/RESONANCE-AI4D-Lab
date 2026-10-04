const paths = {
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
  chevron: <path d="m6 9 6 6 6-6" />,
  external: <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />,
  health: (
    <>
      <path d="M12 21s-7-4.4-9-9.2C1.8 8.2 4 5 7.2 5c1.9 0 3.3 1 4.8 2.8C13.5 6 14.900 5 16.800 5 20 5 22.200 8.200 21 11.800 19 16.600 12 21 12 21Z" />
      <path d="M12 9.500v5M9.500 12h5" />
    </>
  ),
  agriculture: (
    <>
      <path d="M12 21V8" />
      <path d="M12 8c0-3 1.800-5 4-5 0 3-1.200 5-4 5ZM12 8c0-3-1.800-5-4-5 0 3 1.200 5 4 5Z" />
      <path d="M12 14c0-2.500 1.600-4.200 3.500-4.200 0 2.600-1.100 4.200-3.500 4.200ZM12 14c0-2.500-1.600-4.200-3.500-4.200 0 2.600 1.100 4.200 3.500 4.200Z" />
    </>
  ),
  governance: (
    <>
      <path d="M12 3v18M7 21h10M5 7h14" />
      <path d="m5 7-3 7a3.500 3.500 0 0 0 6 0L5 7ZM19 7l-3 7a3.500 3.500 0 0 0 6 0l-3-7Z" />
    </>
  ),
  energy: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />,
  bulb: (
    <>
      <path d="M9 18h6M10 21h4" />
      <path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3Z" />
    </>
  ),
  sprout: (
    <>
      <path d="M12 21v-9" />
      <path d="M12 12c0-3.5-2.5-6-6-6 0 3.5 2.5 6 6 6ZM12 14c0-3 2.2-5 5.5-5 0 3-2.2 5-5.5 5Z" />
    </>
  ),
  community: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M16.5 14.2c2.6.2 4.5 2.4 4.5 5.3" />
    </>
  ),
};

export default function Icon({ name, className = 'h-5 w-5', strokeWidth = 1.8 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}