import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Settings, Users, BarChart } from "lucide-react";

const services = [
  {
    icon: Rocket,
    title: "Custom Web Application Development",
    description: "End-to-end development of scalable web applications using Go and modern microservices architecture. From concept to deployment, I deliver high-performance solutions tailored to your business needs.",
  },
  {
    icon: Settings,
    title: "Microservices Architecture",
    description: "Design and implementation of microservices systems that scale. I help migrate monolithic applications to microservices and optimize existing distributed systems for better performance.",
  },
  {
    icon: Users,
    title: "Technical Consulting",
    description: "Expert guidance on technology stack selection, system architecture, and best practices. I help teams make informed decisions and avoid common pitfalls in large-scale application development.",
  },
  {
    icon: BarChart,
    title: "Performance Optimization",
    description: "Comprehensive performance audits and optimization of existing systems. I identify bottlenecks and implement solutions to dramatically improve application speed and efficiency.",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-card/50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive development services to bring your ideas to life and 
            scale your business with robust, high-performance solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-effect p-8 rounded-2xl hover:scale-105 transition-transform duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-primary to-accent mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
