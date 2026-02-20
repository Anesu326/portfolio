function ProjectCard({ title, description }) {
  return (
    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:shadow-[0_0_25px_rgba(99,102,241,0.4)] transition">
      <h3 className="text-2xl font-semibold text-indigo-400">{title}</h3>
      <p className="mt-4 text-neutral-400">{description}</p>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard
            title="Trading Engine"
            description="Real-time algorithmic trading system with backtesting and performance analytics."
          />
          <ProjectCard
            title="Gate Management System"
            description="Role-based access control system with logging and secure authentication."
          />
        </div>
      </div>
    </section>
  )
}