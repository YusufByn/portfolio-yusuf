const stacks = [
  { name: "Frontend", items: ["React", "Tailwind", "Framer", "TypeScript"], color: "bg-brand-lila" },
  { name: "Backend", items: ["Node.js", "Supabase", "PostgreSQL", "API Rest"], color: "bg-blue-100" },
  { name: "Automation", items: ["n8n", "Webhooks", "Make", "Python"], color: "bg-green-100" },
];

export default function Stacks() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-black text-center mb-16 uppercase underline decoration-4 decoration-brand-blue underline-offset-8">
          Arsenal Technique
        </h2>
        
        <div className="space-y-8">
          {stacks.map((category, idx) => (
            <div key={idx} className={`border-4 border-black shadow-neo p-6 ${category.color} relative hover:translate-x-2 transition-transform`}>
              <div className="absolute -top-5 -left-2 bg-black text-white px-4 py-1 font-bold uppercase transform -rotate-2 border border-white">
                {category.name}
              </div>
              <div className="flex flex-wrap gap-4 mt-2">
                {category.items.map(item => (
                  <span key={item} className="bg-white border-2 border-black px-4 py-2 font-bold shadow-neo-sm hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-default">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
