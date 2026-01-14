import { motion } from 'framer-motion';

const stats = [
  { label: "PROJETS COMPLÉTÉS", value: "+46" },
  { label: "ANNÉES D'EXPÉRIENCE", value: "+5" },
  { label: "WORKFLOWS N8N", value: "+100" },
];

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-brand-blue font-bold tracking-[0.2em] text-sm mb-4 uppercase">
                Yusuf - Fullstack Developer
              </h2>
              <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black leading-[0.8] mb-8 text-gray-900 tracking-tighter">
                SOFTWARE <br />
                <span className="text-brand-blue">ENGINEER</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-xl leading-relaxed">
                Spécialisé dans la création d'expériences utilisateur intuitives et l'automatisation de processus complexes.
              </p>
            </motion.div>
          </div>
          
          <div className="lg:col-span-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-6"
            >
              {stats.map((stat, i) => (
                <div key={i} className="border-t border-gray-200 pt-6">
                  <div className="text-4xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-xs font-bold text-gray-400 tracking-widest uppercase">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Marquee effect inspired by Sawad */}
        <div className="mt-20 border-y border-gray-200 py-8 overflow-hidden flex whitespace-nowrap">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="flex gap-20 text-2xl font-black uppercase text-gray-300 items-center"
          >
            <span>n8n Expert</span>
            <div className="w-3 h-3 bg-brand-green rounded-full"></div>
            <span>React Developer</span>
            <div className="w-3 h-3 bg-brand-blue rounded-full"></div>
            <span>Automation Strategist</span>
            <div className="w-3 h-3 bg-brand-green rounded-full"></div>
            <span>UI/UX Designer</span>
            <div className="w-3 h-3 bg-brand-blue rounded-full"></div>
            {/* Duplicated for seamless loop */}
            <span>n8n Expert</span>
            <div className="w-3 h-3 bg-brand-green rounded-full"></div>
            <span>React Developer</span>
            <div className="w-3 h-3 bg-brand-blue rounded-full"></div>
            <span>Automation Strategist</span>
            <div className="w-3 h-3 bg-brand-green rounded-full"></div>
            <span>UI/UX Designer</span>
            <div className="w-3 h-3 bg-brand-blue rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
