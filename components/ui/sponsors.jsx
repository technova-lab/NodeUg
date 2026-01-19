import { motion } from "framer-motion";

const sponsors = [
  { name: "TechCorp", logo: "TC" },
  { name: "InnovateLabs", logo: "IL" },
  { name: "CloudScale", logo: "CS" },
  { name: "DataFlow", logo: "DF" },
  { name: "NextGen", logo: "NG" },
  { name: "Velocity", logo: "VL" }
];

export function Sponsors() {
  return (
    <section className="py-16 px-4 border-y bg-white">
      <div className="container mx-auto">
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }}  className="text-center mb-12">
          <p className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-8">
            Meet our Sponsors
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center group cursor-pointer"
            >
              <div className="flex flex-col items-center gap-2 opacity-40 hover:opacity-100 transition-opacity">
                <motion.div whileHover={{ scale: 1.1 , rotate: 5}} 
                transition={{ type: "spring", stiffness: 300 }}
                className="w-16 h-16 rounded-xl bg-linear-to-br from-gray-100 to-gray-200 flex items-center justify-center group-hover:from-blue-50 group-hover:to-purple-50 transition-colors">
                  <span className="text-xl font-bold text-gray-600 group-hover:text-blue-600 transition-colors">
                    {sponsor.logo}
                  </span>
                </motion.div>
                <span className="text-sm font-medium text-gray-600">
                  {sponsor.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}