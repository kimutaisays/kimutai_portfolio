import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';

export default function App(){
 return <Layout>
  <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/projects" element={<Projects/>}/>
   <Route path="/blog" element={<Blog/>}/>
   <Route path="/blog/:slug" element={<BlogPost/>}/>
   <Route path="/contact" element={<Contact/>}/>
  </Routes>
 </Layout>;
}
