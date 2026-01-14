import { motion } from 'framer-motion';
import { Send, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <main className="pt-32 pb-20 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-6xl md:text-[6rem] font-black text-gray-900 tracking-tighter leading-[0.9] mb-12">
              LET'S WORK <br /> <span className="text-brand-blue">TOGETHER</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-md leading-relaxed mb-12">
              Prêt à automatiser vos workflows ou à créer une application web incroyable ? Discutons-en.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:hello@yusuf.dev" className="block text-2xl font-bold text-gray-900 hover:text-brand-blue transition-colors">
                hello@yusuf.dev
              </a>
              <div className="flex gap-8">
                {['LinkedIn', 'GitHub', 'Twitter'].map(social => (
                  <a key={social} href="#" className="font-bold text-gray-400 hover:text-brand-blue uppercase tracking-widest text-sm transition-colors">
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-[2.5rem] p-10 md:p-12 shadow-2xl border border-gray-100"
          >
            <form className="space-y-8">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">Nom Complet</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-50 border-none rounded-2xl px-6 py-5 focus:ring-2 focus:ring-brand-blue transition-all font-medium"
                  placeholder="Jean Dupont"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-gray-50 border-none rounded-2xl px-6 py-5 focus:ring-2 focus:ring-brand-blue transition-all font-medium"
                  placeholder="jean@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">Budget</label>
                <select className="w-full bg-gray-50 border-none rounded-2xl px-6 py-5 focus:ring-2 focus:ring-brand-blue transition-all font-medium appearance-none">
                  <option>Sélectionnez un budget...</option>
                  <option>&lt; 3k €</option>
                  <option>3k - 5k €</option>
                  <option>5k - 10k €</option>
                  <option>10k € +</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">Votre Message</label>
                <textarea 
                  rows="4"
                  className="w-full bg-gray-50 border-none rounded-2xl px-6 py-5 focus:ring-2 focus:ring-brand-blue transition-all font-medium"
                  placeholder="Décrivez votre projet..."
                ></textarea>
              </div>
              <button className="w-full bg-brand-green text-white py-6 rounded-2xl font-black text-xl flex items-center justify-center gap-3 hover:opacity-90 transition-opacity group">
                Envoyer le message
                <Send size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
