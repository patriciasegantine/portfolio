interface ProjectSectionProps {
  number: string;
  title: string;
  text?: string;
  items?: string[];
  columns?: boolean;
}

const ProjectItem = ({ number, title, text, items, columns = false }: ProjectSectionProps) => {
  return (
    <section className="grid gap-8 border-t border-line py-12 lg:grid-cols-[0.55fr_1.45fr] lg:gap-16 xl:gap-24">
      <div>
        <p className="eyebrow">{number}</p>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] text-primary md:text-4xl">{title}</h2>
      </div>

      <div>
        {text && <p className="text-lg leading-relaxed text-secondary">{text}</p>}
        {items && items.length > 0 && (
          <ul className={`grid gap-x-8 ${columns ? 'md:grid-cols-2' : ''}`}>
            {items.map((item, index) => (
              <li key={item} className={`flex gap-3 border-line py-4 ${columns ? (index >= 2 ? 'border-t' : '') : (index > 0 ? 'border-t' : '')}`}>
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-accent" aria-hidden="true" />
                <span className="text-sm leading-relaxed text-secondary md:text-base">{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default ProjectItem;
