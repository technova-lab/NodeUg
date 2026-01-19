import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


export function Hero() {

  let navigate = useNavigate();

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm">
               New: Terminal Powered Application
            </motion.div>
            
            <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-5xl lg:text-6xl font-bold leading-tight">
              Work Smarter, Not Harder with{" "}
              <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                NodeUg
              </span>
            </motion.h1>
            
            <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-xl text-gray-600">
              Streamline your workflow, boost productivity, and collaborate seamlessly with developers all around Uganda. 
              The all-in-one platform trusted by 10,000+ developers worldwide.
            </motion.p>
            
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 cursor-pointer" onClick={() => { navigate("/login"); }}>
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              {/* <Button size="lg" variant="outline" className="text-lg px-8">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button> */}
            </motion.div>
            
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }} className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold">10K+</div>
                <div className="text-gray-600">Active Developers</div>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div>
                <div className="text-3xl font-bold">4.9/5</div>
                <div className="text-gray-600">User Rating</div>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div>
                <div className="text-3xl font-bold">99.9%</div>
                <div className="text-gray-600">Uptime</div>
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.3 }} className="relative">
            <div className="absolute inset-0 bg-linear-to-br from-blue-400 to-purple-600 rounded-3xl blur-3xl opacity-20"></div>
            <img
              src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Dashboard preview"
              className="relative rounded-3xl shadow-2xl w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
