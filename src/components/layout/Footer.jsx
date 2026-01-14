import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full py-12 px-6 bg-black text-white border-t-8 border-brand-blue">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-black mb-2">YUSUF.</h2>
          <p className="font-mono text-gray-400">© 2026. NO RIGHTS RESERVED.</p>
        </div>
        
        <div className="flex gap-6">
          {['LINKEDIN', 'GITHUB', 'TWITTER'].map(link => (
            <a key={link} href="#" className="font-bold border-2 border-white px-4 py-2 hover:bg-white hover:text-black transition-colors shadow-[4px_4px_0px_0px_#2563eb]">
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
