import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import { projects } from '../content/projects';

export default function Home(){
 return <div>
  <Hero/>
  <section className="max-w-5xl mx-auto px-4">
   <SectionTitle title="Featured Projects"/>
   <div className="grid md:grid-cols-3 gap-6">
    {projects.slice(0,3).map(p=><div key={p.id} className="bg-gray-100 p-6 rounded-2xl shadow">
      <h3 className="text-xl font-semibold">{p.title}</h3>
      <p className="text-sm mt-2">{p.summary}</p>
    </div>)}
   </div>
  </section>
 </div>;
}
