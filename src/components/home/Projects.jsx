import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "Najm AI SaaS",
    category: "Development",
    desc: "Plateforme SaaS complète avec intégration AI.",
    color: "bg-blue-500"
  },
  {
    title: "Damas Estate",
    category: "Automation",
    desc: "Système de gestion immobilière automatisé.",
    color: "bg-brand-green"
  },
  {
    title: "Bayt Analytics",
    category: "Data Viz",
    desc: "Dashboard financier temps réel pour fintech.",
    color: "bg-purple-500"
  }
];

export default function Projects() {
  return (
    <section className="py-20 px-6 bg-white border-y-4 border-black" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <h2 className="text-6xl font-black uppercase text-black drop-shadow-[4px_4px_0px_rgba(0,0,0,0.2)]">
            Selected <br/> Works
          </h2>
          <div className="bg-brand-lila border-2 border-black p-4 shadow-neo max-w-sm rotate-1">
            <p className="font-medium">
              Une sélection de projets où le code rencontre la créativité brute.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="neo-box p-0 flex flex-col hover:-translate-y-2 hover:shadow-neo-lg transition-transform group">
              <div className={`h-48 ${project.color} border-b-2 border-black flex items-center justify-center relative overflow-hidden`}>
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grid-noise.png')] opacity-20"></div>
                 <span className="text-6xl font-black text-white/30 group-hover:text-white/60 transition-colors">
                   0{index + 1}
                 </span>
              </div>
              <div className="p-6 bg-white flex-grow flex flex-col justify-between">
                <div>
                  <span className="bg-black text-white px-2 py-1 text-xs font-bold uppercase mb-3 inline-block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-black mb-2 leading-tight">{project.title}</h3>
                  <p className="text-gray-600 font-medium mb-6 leading-snug">
                    {project.desc}
                  </p>
                </div>
                <button className="w-full border-2 border-black py-3 font-bold uppercase hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-2">
                  Voir le projet <ArrowUpRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
