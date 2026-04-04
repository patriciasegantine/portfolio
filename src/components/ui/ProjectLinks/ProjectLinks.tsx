import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface ProjectLinksProps {
  github?: string;
  liveDemo?: string;
}

const ProjectLinks = ({ github, liveDemo }: ProjectLinksProps) => {
  if (!github && !liveDemo) {
    return null;
  }

  return (
    <section id="project-links" className="rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800/50 p-6">
      <h2 className="text-xl font-medium text-primary-dark dark:text-zinc-50 mb-4">Links</h2>
      <div className="flex flex-wrap gap-3">
        {liveDemo && (
          <a
            href={liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 text-white
             hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors"
          >
            <FaExternalLinkAlt className="w-4 h-4" />
            <span>Live Demo</span>
          </a>
        )}

        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-700/50
             text-zinc-800 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700/80 transition-colors border-2 border-zinc-200 dark:border-zinc-700"
          >
            <FaGithub className="w-5 h-5" />
            <span>GitHub</span>
          </a>
        )}
      </div>
    </section>
  );
};

export default ProjectLinks;
