import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full py-20 px-6 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-3xl font-black text-gray-900 tracking-tighter mb-6 block">
              YUSUF<span className="text-brand-blue">.</span>
            </Link>
            <p className="text-lg text-gray-500 max-w-xs leading-relaxed">
              Créer des solutions digitales élégantes et automatisées pour les entreprises de demain.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-8">Navigation</h4>
            <ul className="space-y-4">
              {['Accueil', 'Projets', 'Outils', 'Contact'].map(item => (
                <li key={item}>
                  <Link to={item === 'Contact' ? '/contact' : '/'} className="font-bold text-gray-900 hover:text-brand-blue transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-8">Social</h4>
            <ul className="space-y-4">
              {['LinkedIn', 'GitHub', 'Twitter', 'Dribbble'].map(item => (
                <li key={item}>
                  <a href="#" className="font-bold text-gray-900 hover:text-brand-blue transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-gray-100 gap-6">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">
            © {new Date().getFullYear()} YUSUF DEV. TOUS DROITS RÉSERVÉS.
          </p>
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">
            MADE BY <span className="text-gray-900">YUSUF</span> WITH <span className="text-brand-blue">REACT</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
