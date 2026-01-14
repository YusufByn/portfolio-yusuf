import { FileText, Download } from 'lucide-react';

export default function Profile() {
  return (
    <section className="py-20 px-6 bg-brand-blue border-y-4 border-black">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white border-4 border-black shadow-neo-lg p-6 md:p-12 rotate-1">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="shrink-0">
              <div className="w-64 h-64 bg-gray-200 border-4 border-black shadow-neo relative overflow-hidden">
                {/* Photo Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center bg-brand-green/20">
                  <span className="text-6xl font-black opacity-20 rotate-45">PHOTO</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-center py-2 font-bold uppercase tracking-widest text-sm">
                  Yusuf • Dev
                </div>
              </div>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase leading-[0.9]">
                Qui est ce <br/><span className="text-brand-blue stroke-black" style={{WebkitTextStroke: '2px black', color: 'transparent'}}>type ?</span>
              </h2>
              <p className="text-xl font-medium mb-8 bg-brand-lila p-4 border-2 border-black shadow-neo-sm inline-block rotate-[-1deg]">
                Développeur Fullstack obsédé par la performance et l'automatisation. Basé à Paris.
              </p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-6">
                <button className="neo-button bg-brand-green text-white px-6 py-3 flex items-center gap-3 text-sm md:text-base">
                  <Download size={20} />
                  TÉLÉCHARGER CV
                </button>
                <button className="neo-button bg-white text-black px-6 py-3 flex items-center gap-3 text-sm md:text-base">
                  <FileText size={20} />
                  MON HISTOIRE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
