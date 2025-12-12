import { posts } from '../content/posts';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';

export default function Blog(){
 return <div className="max-w-4xl mx-auto px-4 py-12">
  <SectionTitle title="Blog"/>
  <div className="space-y-6 mt-6">
   {posts.map(p=><Link key={p.slug} to={'/blog/'+p.slug}
     className="block bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg">
     <div className="text-gray-500 text-sm">{p.date}</div>
     <div className="text-xl font-semibold mt-1">{p.title}</div>
     <p className="text-sm mt-2">{p.excerpt}</p>
   </Link>)}
  </div>
 </div>;
}
