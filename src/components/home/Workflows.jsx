import { Share2, Zap, Database, Mail, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const nodes = [
  { icon: <Mail size={24} />, label: "Webhook", color: "text-blue-500" },
  { icon: <Zap size={24} />, label: "Trigger", color: "text-amber-500" },
  { icon: <Database size={24} />, label: "Supabase", color: "text-emerald-500" },
  { icon: <Share2 size={24} />, label: "API", color: "text-purple-500" },
];

export default function Workflows() {
  return (
    <section className="py-20 px-6" id="tools">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-[3rem] p-10 md:p-20 border border-gray-100 shadow-sm overflow-hidden relative">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="flex-1 space-y-8">
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tighter leading-tight">
                N8N <span className="text-brand-blue">AUTOMATION</span> EXPERT
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Je construis des écosystèmes autonomes qui libèrent votre temps. 
                De la synchronisation de données à l'IA générative, vos workflows sont mon terrain de jeu.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['API Integration', 'Data Sync', 'AI Workflows', 'Error Handling'].map((skill) => (
                  <div key={skill} className="flex items-center gap-3 font-bold text-gray-800">
                    <div className="w-2 h-2 rounded-full bg-brand-green"></div>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 bg-brand-lila/50 rounded-[2.5rem] p-12 relative flex items-center justify-center min-h-[400px]">
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-4 relative z-10">
                {nodes.map((node, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col md:flex-row items-center gap-4"
                  >
                    <div className="w-24 h-24 bg-white rounded-3xl shadow-xl flex flex-col items-center justify-center gap-2 border border-white hover:scale-110 transition-transform cursor-pointer group">
                      <div className={`${node.color} group-hover:scale-110 transition-transform`}>
                        {node.icon}
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">{node.label}</span>
                    </div>
                    {i < nodes.length - 1 && (
                      <ArrowRight className="text-gray-300 hidden md:block" />
                    )}
                  </motion.div>
                ))}
              </div>
              {/* Decorative background grid */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#0060ae 1px, transparent 1px), linear-gradient(90deg, #0060ae 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
