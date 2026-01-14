import { motion } from 'framer-motion';
import { Send, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <main className="pt-32 pb-20 px-6 min-h-screen bg-brand-lila">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white border-4 border-black shadow-neo-lg p-8 md:p-12 relative"
        >
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-brand-blue text-white border-4 border-black px-8 py-2 font-black text-2xl uppercase shadow-neo rotate-2">
            Contact Me
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h1 className="text-4xl font-black mb-6 uppercase">Let's build <br/> something <span className="bg-brand-green px-2 text-white">crazy.</span></h1>
              <p className="font-medium text-lg mb-8 border-l-4 border-black pl-4">
                Vous avez une idée ? Un projet ? Ou juste envie de dire bonjour ? Remplissez ce formulaire brut de décoffrage.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 font-bold border-2 border-black p-4 bg-brand-lila shadow-neo-sm">
                  <Mail className="shrink-0" />
                  <span>hello@yusuf.dev</span>
                </div>
                <div className="flex items-center gap-4 font-bold border-2 border-black p-4 bg-brand-lila shadow-neo-sm">
                  <MapPin className="shrink-0" />
                  <span>Paris, France</span>
                </div>
              </div>
            </div>

            <form className="space-y-6">
              <div className="space-y-2">
                <label className="font-black uppercase text-sm">Nom</label>
                <input type="text" className="neo-input w-full" placeholder="VOTRE NOM" />
              </div>
              <div className="space-y-2">
                <label className="font-black uppercase text-sm">Email</label>
                <input type="email" className="neo-input w-full" placeholder="VOTRE@EMAIL.COM" />
              </div>
              <div className="space-y-2">
                <label className="font-black uppercase text-sm">Message</label>
                <textarea rows="4" className="neo-input w-full" placeholder="VOTRE MESSAGE..."></textarea>
              </div>
              <button className="neo-button w-full bg-black text-white hover:bg-gray-900 py-4 flex items-center justify-center gap-3 text-lg">
                ENVOYER <Send size={20} />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
