import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: "Accueil", path: "/" },
  { name: "Projets", path: "/#projects" },
  { name: "Outils", path: "/#tools" },
];

export default function Header() {
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-6">
      <nav className="max-w-5xl mx-auto flex justify-between items-center bg-white/70 backdrop-blur-2xl rounded-3xl px-8 py-4 shadow-xl border border-white/20">
        <Link to="/" className="text-2xl font-black text-gray-900 tracking-tighter">
          YUSUF<span className="text-brand-blue">.</span>
        </Link>
        
        <div className="hidden md:flex gap-10 items-center">
          {navLinks.map(link => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="text-sm font-black uppercase tracking-widest text-gray-400 hover:text-brand-blue transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="bg-brand-green text-white px-8 py-3 rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 transition-transform shadow-lg shadow-brand-green/20"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button - simplified */}
        <button className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5">
          <div className="w-6 h-0.5 bg-gray-900 rounded-full"></div>
          <div className="w-6 h-0.5 bg-gray-900 rounded-full"></div>
        </button>
      </nav>
    </header>
  );
}
