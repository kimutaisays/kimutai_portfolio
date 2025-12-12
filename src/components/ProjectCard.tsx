export default function ProjectCard({title,summary}:{title:string,summary:string}){
 return <div className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
  <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
  <p className="text-gray-700 text-sm">{summary}</p>
 </div>;
}
