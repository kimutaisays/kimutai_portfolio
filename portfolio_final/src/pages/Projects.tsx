import { projects } from '../content/projects';
import ProjectCard from '../components/ProjectCard';
import SectionTitle from '../components/SectionTitle';

export default function Projects(){
 return <div className="max-w-6xl mx-auto px-4 py-12">
  <SectionTitle title="Projects"/>
  <div className="grid md:grid-cols-3 gap-6">
   {projects.map(p=><ProjectCard key={p.id} {...p}/>)}
  </div>
 </div>;
}