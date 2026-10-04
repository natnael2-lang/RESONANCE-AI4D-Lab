import { useInView } from '../hooks/useInView';

// Fades and lifts its children in when scrolled into view. `delay` (ms) lets
// siblings stagger. With reduced motion, content is simply shown.
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const [ref, inView] = useInView();
  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: inView ? `${delay}ms` : '0ms' }}
      className={`transition-all duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
