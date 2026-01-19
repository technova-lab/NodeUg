import {
  Zap,
  Shield,
  Users,
  BarChart3,
  Globe,
  CodeXml
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Zap,
    title: "Peer-to-Peer Networking",
    description:
      "Designed for young Ugandan developers, our platform enables fast peer-to-peer connections for sharing code, solving errors, and collaborating on real-world projects."
  },
  {
    icon: Shield,
    title: "Secure Communication",
    description:
      "End-to-end peer-to-peer encryption ensures your data and conversations remain private across LANs and direct messaging."
  },
  {
    icon: Users,
    title: "Project Collaboration",
    description:
      "Collaborate on projects where active developers can receive, review, and explain code in real time."
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Gain actionable insights with analytics that track productivity, collaboration, and project progress."
  },
  {
    icon: Globe,
    title: "Wide Access",
    description:
      "Communicate via LAN for offline access or the internet for global developer collaboration."
  },
  {
    icon: CodeXml,
    title: "Terminal Powered",
    description:
      "Leverage terminal-style commands for advanced development and power-user workflows."
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Everything You Need to Build Software
          </h2>
          <p className="text-xl text-gray-600">
            Powerful features designed to help you collaborate, create, and ship better software.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1 + 0.2,
                    type: "spring"
                  }}
                  className="w-12 h-12 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4"
                >
                  <Icon className="h-6 w-6 text-white" />
                </motion.div>

                <h3 className="text-xl font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Secondary Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="https://images.unsplash.com/photo-1739298061740-5ed03045b280?auto=format&fit=crop&w=1080&q=80"
              alt="Team collaboration"
              className="rounded-3xl shadow-xl w-full"
            />
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-3xl font-bold mb-4">
              Built for Developers of All Kinds
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Whether you’re a Python developer or work with any other language,
              NodeUg adapts to your workflow and scales with your ambitions.
            </p>

            <ul className="space-y-4">
              {[
                {
                  title: "Unlimited Projects",
                  description:
                    "Create and manage as many projects as you need without restrictions."
                },
                {
                  title: "Custom Workflows",
                  description:
                    "Design workflows that align perfectly with your development process."
                },
                {
                  title: "Developer Collaboration",
                  description:
                    "Connect with 100+ developers for debugging, reviews, and idea exchange."
                }
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <strong>{item.title}:</strong> {item.description}
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
