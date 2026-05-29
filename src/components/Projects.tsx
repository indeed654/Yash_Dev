import { projects } from '../data/portfolio'

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden px-6 sm:px-12 md:px-20 lg:px-28 py-20 sm:py-24 bg-white/45">
      <div className="absolute right-0 top-12 h-72 w-72 translate-x-1/3 rounded-full bg-blue-200/25 blur-3xl transition-transform duration-200 hover:scale-105" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="text-[13px] font-medium text-blue-500 mb-3">Featured Projects</p>
          <h2 className="text-[1.75rem] sm:text-[2.25rem] leading-[1.15] font-medium text-gray-900 tracking-tight max-w-2xl">
            Systems that connect intelligence, security, automation, and ownership.
          </h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex min-h-[360px] flex-col rounded-[1.5rem] border border-gray-200/80 bg-[#f0f0ee]/70 p-5 backdrop-blur transition-all duration-200 hover:-translate-y-1 hover:scale-[1.01] hover:border-blue-200 hover:bg-white/80 hover:shadow-[0_28px_90px_rgba(17,24,39,0.09)]"
            >
              <h3 className="text-[18px] leading-snug font-medium text-gray-900">{project.title}</h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/80 bg-white/75 px-3 py-1.5 text-[12px] font-medium text-blue-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="mt-6 grid gap-2">
                {project.features.map((feature) => (
                  <li key={feature} className="flex gap-2 text-[13px] leading-6 text-gray-600">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-7">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-[13px] font-medium text-blue-500 transition-colors duration-200 hover:text-blue-600 group"
                >
                  Discuss project
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
