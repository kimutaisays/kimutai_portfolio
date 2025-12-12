export default function Contact(){
 return <div className="max-w-xl mx-auto px-4 py-12">
  <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Contact</h2>
  <form className="space-y-4" action="https://formspree.io/f/REPLACE" method="POST">
   <input className="w-full border p-3 rounded-xl" name="name" placeholder="Your name"/>
   <input className="w-full border p-3 rounded-xl" name="email" placeholder="Your email"/>
   <textarea className="w-full border p-3 h-32 rounded-xl" name="message" placeholder="Your message"/>
   <button className="bg-yellow-400 text-gray-800 font-bold w-full py-3 rounded-xl">Send</button>
  </form>
 </div>;
}
