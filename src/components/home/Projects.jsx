import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "Najm AI SaaS Template",
    category: "Development • Design",
    image: "bg-blue-600"
  },
  {
    title: "DamasFree Real Estate",
    category: "Automation • Web",
    image: "bg-emerald-600"
  },
  {
    title: "Bayt Analytics Platform",
    category: "SaaS • n8n",
    image: "bg-indigo-600"
  }
];

export default function Projects() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter">
            RECENT <br /> <span className="text-brand-blue">PROJECTS</span>
          </h2>
          <a href="#" className="mb-4 text-brand-blue font-bold flex items-center gap-2 hover:underline">
            Voir tout <ArrowUpRight size={20} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className={`aspect-video rounded-[2.5rem] ${project.image} mb-8 overflow-hidden relative shadow-lg transition-transform duration-500 group-hover:scale-[1.02]`}>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
                <div className="absolute top-10 right-10 w-16 h-16 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 shadow-xl">
                  <ArrowUpRight size={32} className="text-brand-blue" />
                </div>
              </div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                {project.category}
              </p>
              <h3 className="text-3xl font-black text-gray-900 tracking-tight">
                {project.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
