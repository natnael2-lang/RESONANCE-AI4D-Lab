import { focusAreas } from '../data/content';

// The brand motif: concentric rings (a signal "resonating") with the four
// focus areas as nodes on them. Waves travel outward from the centre.
// Purely decorative, so hidden from screen readers; static for reduced motion.
const RINGS = [52, 92, 132, 172, 196];
const NODE_ANGLES = [-50, 20, 130, 215]; // degrees
const NODE_RADII = [132, 172, 92, 132];
const WAVES = [0, 2, 4]; // animation delays in seconds

export default function Ripples({ className = '', waves = true }) {
  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden="true" focusable="false">
      <g fill="none" stroke="currentColor">
        {RINGS.map((r, i) => (
          <circle
            key={r}
            cx="200"
            cy="200"
            r={r}
            strokeWidth={i === RINGS.length - 1 ? 1 : 1.5}
            className="animate-pulse-ring motion-reduce:animate-none"
            style={{ animationDelay: `${i * 0.7}s` }}
          />
        ))}
        {waves &&
          WAVES.map((d) => (
            <circle
              key={d}
              cx="200"
              cy="200"
              r="196"
              strokeWidth="2"
              className="animate-ripple-out motion-reduce:hidden"
              style={{ animationDelay: `${d}s`, transformBox: 'fill-box', transformOrigin: 'center' }}
            />
          ))}
      </g>
      {focusAreas.slice(0, NODE_ANGLES.length).map((f, i) => {
        const a = (NODE_ANGLES[i] * Math.PI) / 180;
        const r = NODE_RADII[i];
        return (
          <circle
            key={f.id}
            cx={200 + r * Math.cos(a)}
            cy={200 + r * Math.sin(a)}
            r="11"
            className={`${f.node} animate-pulse-ring motion-reduce:animate-none`}
            style={{ animationDelay: `${i * 1.1}s`, animationDuration: '3.5s' }}
          />
        );
      })}
      <circle cx="200" cy="200" r="36" className="fill-brand-500" />
      <text
        x="200"
        y="207"
        textAnchor="middle"
        className="fill-white"
        style={{ font: '700 19px "Playfair Display Variable", Georgia, serif', letterSpacing: '0.03em' }}
      >
        AI4D
      </text>
    </svg>
  );
}
