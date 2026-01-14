const tools = [
  { name: "Framer", desc: "Website Builder", icon: "F" },
  { name: "React", desc: "Frontend Library", icon: "R" },
  { name: "n8n", desc: "Automation Tool", icon: "N" },
  { name: "Tailwind", desc: "CSS Framework", icon: "T" },
  { name: "Supabase", desc: "Backend Service", icon: "S" },
  { name: "Figma", desc: "Design Tool", icon: "D" },
];

export default function Stacks() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter mb-16">
          PREMIUM <br /> <span className="text-brand-blue">TOOLS</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, idx) => (
            <div key={idx} className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-blue/20 transition-all duration-300 group">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-brand-lila rounded-2xl flex items-center justify-center text-2xl font-black text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                  {tool.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{tool.name}</h3>
                  <p className="text-sm text-gray-400 font-medium">{tool.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
