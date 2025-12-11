import { Link } from 'react-router-dom';

export default function Navbar(){
 return <nav className="bg-gray-700 text-yellow-400 py-4 flex justify-center gap-8 font-semibold">
  <Link to="/">Home</Link>
  <Link to="/projects">Projects</Link>
  <Link to="/blog">Blog</Link>
  <Link to="/contact">Contact</Link>
  <a href="/Resume_Emmanuel%20Kimutai.pdf" download>CV</a>
 </nav>;
}