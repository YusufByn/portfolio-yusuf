import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: "Accueil", path: "/" },
  { name: "Projets", path: "/#projects" },
  { name: "Outils", path: "/#tools" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-6 pointer-events-none">
      <nav className="max-w-6xl mx-auto flex justify-between items-center pointer-events-auto">
        <Link to="/" className="neo-button bg-white px-4 py-2 rotate-[-2deg] hover:rotate-0 text-xl font-black text-black no-underline">
          YUSUF<span className="text-brand-blue">.DEV</span>
        </Link>
        
        <div className="hidden md:flex gap-4 items-center">
          {navLinks.map(link => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="neo-button bg-white px-4 py-2 hover:bg-brand-lila hover:-translate-y-1 text-sm text-black no-underline"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="neo-button bg-brand-green text-white px-6 py-2 hover:bg-green-700 hover:-rotate-2 no-underline"
          >
            ME CONTACTER
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden neo-button bg-white w-12 h-12 flex flex-col justify-center items-center gap-1.5">
          <div className="w-6 h-0.5 bg-black"></div>
          <div className="w-6 h-0.5 bg-black"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </button>
      </nav>
    </header>
  );
}
