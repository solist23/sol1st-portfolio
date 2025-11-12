import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "E-Commerce Microservices Platform",
    description: "Built a complete e-commerce backend with order processing, inventory management, and payment integration using Go microservices.",
    tech: ["Go", "Docker", "Kubernetes", "PostgreSQL", "Redis"],
    metrics: "Handles 100K+ daily transactions",
  },
  {
    title: "Real-Time Analytics System",
    description: "Developed a real-time data processing pipeline for analyzing user behavior and generating insights at scale.",
    tech: ["Go", "Apache Kafka", "TimescaleDB", "Grafana"],
    metrics: "Processes 1M+ events/hour",
  },
  {
    title: "API Gateway & Auth Service",
    description: "Created a high-performance API gateway with OAuth2 authentication, rate limiting, and load balancing.",
    tech: ["Go", "Redis", "JWT", "Nginx", "MongoDB"],
    metrics: "99.99% uptime",
  },
  {
    title: "Distributed Job Scheduler",
    description: "Built a fault-tolerant distributed job scheduling system for processing background tasks across multiple nodes.",
    tech: ["Go", "RabbitMQ", "etcd", "Docker Swarm"],
    metrics: "Manages 500K+ jobs daily",
  },
  {
    title: "Financial Trading Platform",
    description: "Developed ultra-low latency trading engine with real-time market data processing and order execution.",
    tech: ["Go", "WebSockets", "PostgreSQL", "Redis Streams"],
    metrics: "<1ms response time",
  },
  {
    title: "Content Delivery Network",
    description: "Architected a global CDN system with edge caching, dynamic content optimization, and DDoS protection.",
    tech: ["Go", "Varnish", "S3", "CloudFront", "Terraform"],
    metrics: "Serves 10TB+ monthly",
  },
];

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="section-padding">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A showcase of successful projects demonstrating expertise in Go development 
            and microservices architecture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-border/50 bg-card">
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-sm">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="text-sm font-semibold text-primary">
                      {project.metrics}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
