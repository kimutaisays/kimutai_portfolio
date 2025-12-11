import { useParams } from 'react-router-dom';
import { posts } from '../content/posts';
import SectionTitle from '../components/SectionTitle';

export default function BlogPost(){
 const {slug}=useParams();
 const post=posts.find(p=>p.slug===slug);
 if(!post) return <div className='p-10'>Not found</div>;

 return <div className="max-w-3xl mx-auto px-4 py-12">
  <SectionTitle title={post.title}/>
  <div className="text-gray-500 text-sm mb-4">{post.date}</div>
  {post.content.split('\n').map((line,i)=><p key={i} className="mb-4">{line}</p>)}
 </div>;
}