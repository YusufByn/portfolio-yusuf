import { Share2, Zap, Database, Mail } from 'lucide-react';

const nodes = [
  { icon: <Mail size={24} />, label: "Webhook" },
  { icon: <Zap size={24} />, label: "Process" },
  { icon: <Database size={24} />, label: "Store" },
  { icon: <Share2 size={24} />, label: "Deploy" },
];

export default function Workflows() {
  return (
    <section className="py-20 px-6 bg-brand-lila" id="tools">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white border-4 border-black shadow-neo-lg p-8 md:p-12 relative overflow-hidden">
          {/* Decorative Grid Background */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-brand-green text-white border-2 border-black px-4 py-1 font-bold text-sm mb-6 shadow-neo-sm -rotate-2">
                WORKFLOW AUTOMATION
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-none">
                J'automatise <br/><span className="bg-brand-blue text-white px-2">votre chaos.</span>
              </h2>
              <p className="text-lg font-medium border-l-4 border-brand-green pl-6 mb-8">
                Connectez vos APIs, synchronisez vos bases de données et dormez tranquille. Je m'occupe des tuyaux.
              </p>
              
              <ul className="space-y-4">
                {['Zapier Killer', 'Complex Logic', 'Custom Nodes'].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 bg-black text-white flex items-center justify-center font-bold text-xs border border-black shadow-[2px_2px_0px_rgba(0,0,0,0.5)]">✓</div>
                    <span className="font-bold uppercase tracking-wide">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-brand-blue/10 border-4 border-black p-8 shadow-neo relative min-h-[300px] flex items-center justify-center">
              <div className="flex flex-col md:flex-row items-center gap-4">
                {nodes.map((node, i) => (
                  <div key={i} className="flex flex-col md:flex-row items-center gap-4">
                    <div className="w-20 h-20 bg-white border-2 border-black shadow-neo flex flex-col items-center justify-center gap-2 hover:scale-110 transition-transform cursor-pointer z-10">
                      {node.icon}
                      <span className="text-[10px] font-black uppercase">{node.label}</span>
                    </div>
                    {i < nodes.length - 1 && (
                      <div className="w-1 md:w-8 h-8 md:h-1 bg-black"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
