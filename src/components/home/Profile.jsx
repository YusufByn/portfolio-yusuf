import { FileText, ArrowUpRight } from 'lucide-react';

export default function Profile() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="relative group">
            <div className="aspect-[4/5] bg-gray-200 rounded-[2.5rem] overflow-hidden relative shadow-2xl">
              {/* Image Placeholder */}
              <div className="w-full h-full bg-brand-blue/10 flex items-center justify-center text-brand-blue text-6xl font-black italic select-none">
                YUSUF
              </div>
              <div className="absolute inset-0 bg-brand-blue/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            {/* CV Badge */}
            <a 
              href="#" 
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-green text-white rounded-full flex flex-col items-center justify-center gap-1 shadow-xl hover:scale-110 transition-transform duration-300 group"
            >
              <FileText size={24} />
              <span className="text-[10px] font-black uppercase tracking-tighter">Mon CV</span>
              <ArrowUpRight size={16} className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter leading-tight">
              PASSIONNÉ PAR LE DÉVELOPPEMENT <br />
              <span className="text-brand-blue">D'EXPÉRIENCES UNIQUES.</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Basé à Paris, je combine mes compétences techniques en React et Node.js avec une expertise poussée en automatisation n8n pour transformer des idées complexes en produits digitaux performants.
            </p>
            <div className="space-y-6 pt-6">
              <div className="flex items-center gap-6 border-b border-gray-200 pb-6">
                <span className="text-brand-blue font-bold text-lg w-20">2023 - Pr.</span>
                <div>
                  <h4 className="font-bold text-xl">Freelance Engineer</h4>
                  <p className="text-gray-500">Stratégie & Développement</p>
                </div>
              </div>
              <div className="flex items-center gap-6 border-b border-gray-200 pb-6">
                <span className="text-brand-blue font-bold text-lg w-20">2021 - 23</span>
                <div>
                  <h4 className="font-bold text-xl">Automation Specialist</h4>
                  <p className="text-gray-500">Digital Solutions Agency</p>
                </div>
              </div>
            </div>
            <button className="bg-brand-blue text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-brand-blue/90 transition-all flex items-center gap-3">
              Travaillons ensemble
              <ArrowUpRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
