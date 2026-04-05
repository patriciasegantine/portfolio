interface ProjectSectionProps {
  title: string;
  text?: string;
  items?: string[];
}

const ProjectItem = ({ title, text, items }: ProjectSectionProps) => {
  return (
    <section className="py-6 border-b border-zinc-200/80 dark:border-zinc-700/80 last:border-b-0">
      <h2 className="text-xl font-medium text-primary mb-3">{title}</h2>
      {text && <p className="text-secondary dark:text-secondary leading-relaxed">{text}</p>}
      {items && items.length > 0 && (
        <ul className="space-y-2 text-secondary dark:text-secondary leading-relaxed">
          {items.map((item) => (
            <li key={item}>{`- ${item}`}</li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default ProjectItem;
