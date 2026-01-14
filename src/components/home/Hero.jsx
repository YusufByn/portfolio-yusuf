import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="pt-40 pb-20 px-6 overflow-hidden min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50, rotate: 5 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="bg-white border-4 border-black p-8 shadow-neo-lg relative"
            >
              <div className="absolute -top-4 -right-4 bg-brand-blue text-white px-4 py-1 border-2 border-black shadow-neo-sm font-bold rotate-3">
                AVAILABLE FOR HIRE
              </div>
              
              <h2 className="font-bold tracking-widest text-sm mb-4 uppercase bg-brand-lila inline-block px-2 border border-black">
                Fullstack Developer
              </h2>
              <h1 className="text-5xl md:text-7xl font-black leading-none mb-6 text-black uppercase">
                Building <span className="text-brand-blue stroke-black">Digital</span><br />
                <span className="bg-brand-green text-white px-2">Chaos</span> into<br />
                Order.
              </h1>
              <p className="text-xl text-black font-medium border-l-4 border-black pl-4 mb-8 max-w-lg">
                J'automatise ce qui est ennuyeux et je développe ce qui est complexe. Expert n8n & React.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="neo-button bg-brand-blue text-white px-8 py-4 text-lg hover:rotate-1">
                  VOIR MES PROJETS
                </button>
                <button className="neo-button bg-white text-black px-8 py-4 text-lg hover:-rotate-1">
                  TÉLÉCHARGER CV
                </button>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-5 relative">
            <motion.div 
              animate={{ rotate: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="aspect-square bg-brand-green border-4 border-black shadow-neo-lg rounded-full flex items-center justify-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-20"></div>
              <div className="text-[12rem] font-black text-white/90 leading-none select-none">
                Y.
              </div>
              
              {/* Floating Badges */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-10 right-0 bg-white border-2 border-black p-3 shadow-neo rotate-12"
              >
                <span className="font-bold text-xl">React ⚛️</span>
              </motion.div>
              
              <motion.div 
                animate={{ y: [10, -10, 10] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 left-0 bg-white border-2 border-black p-3 shadow-neo -rotate-12"
              >
                <span className="font-bold text-xl">n8n 🚀</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
