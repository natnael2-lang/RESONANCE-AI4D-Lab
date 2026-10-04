import Reveal from './Reveal';

// Section title (the site's own wording) with a short green rule above it.
export default function SectionHeading({ title, id }) {
  return (
    <Reveal className="max-w-2xl">
      <span className="block h-1 w-14 rounded-full bg-brand-400" aria-hidden="true" />
      <h2 id={id} className="mt-4 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
        {title}
      </h2>
    </Reveal>
  );
}
