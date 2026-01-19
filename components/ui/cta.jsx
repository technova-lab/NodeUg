import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export function CTA() {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-linear-to-br from-orange-600 to-purple-500 rounded-3xl p-12 md:p-16 text-center text-white"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Ready to Better Your Workflow?
          </motion.h2>
        <div className="rounded-3xl p-12 md:p-16 text-center text-white">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-xl mb-8 max-w-2xl mx-auto opacity-90"
          >
            Join 10,000+ teams who are already working smarter with NodeUg.
            Start your journey today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              onClick={() => { navigate("/login"); }}
              className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 cursor-pointer"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            {/*
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 text-lg px-8"
            >
              Schedule a Demo
            </Button>
            */}
          </motion.div>

          {/*
          <p className="mt-6 text-sm opacity-75">
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 cursor-pointer" onClick={() => {navigate("/login")}}>
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            {/* <Button size="lg" variant="outline" className="border-white text-purple bg-purple hover:bg-white/10 text-lg px-8">
              Schedule a Demo
            </Button> */}
          </div>
          {/* <p className="mt-6 text-sm opacity-75">
            Free 14-day trial • No credit card required • Cancel anytime
          </p>
          */}
        </motion.div>
      </div>
    </section>
  );
}
