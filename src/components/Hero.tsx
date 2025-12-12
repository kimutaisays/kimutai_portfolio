import { motion } from 'framer-motion';

export default function Hero(){
 return <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}
  className="text-center py-16 px-4">
  <img src="/emmanuel-kimutai.jpg" className="w-48 h-48 mx-auto rounded-full border-4 border-yellow-400 shadow"/>
  <h1 className="text-4xl font-bold mt-4 text-gray-700">Kimutai Emmanuel</h1>
  <p className="text-yellow-500 text-lg mt-2">Value, Integrity, and Impact</p>
  <a href="/Resume_Emmanuel%20Kimutai.pdf" download
   className="mt-4 inline-block bg-yellow-400 text-gray-800 px-6 py-3 rounded-xl font-semibold shadow">Download CV</a>
 </motion.div>;
}
