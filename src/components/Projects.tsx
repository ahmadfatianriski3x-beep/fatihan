import { motion } from 'motion/react';
import { ExternalLink, Github, Layers, Globe, Server } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Hybrid Cloud Orchestration',
      description: 'Built a zero-trust network infrastructure across GCP and AWS using HashiCorp Vault for secrets management and Consul for service mesh.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop',
      stats: { nodes: '120+', latency: '<15ms', uptime: '99.9%' },
      tags: ['Terraform', 'Vault', 'AWS', 'GCP']
    },
    {
      title: 'Automated CI/CD for Banking',
      description: 'Reduced deployment time by 80% for a Fintech startup by implementing a multi-stage Jenkins pipeline with automated security scanning (SonarQube).',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=1000&auto=format&fit=crop',
      stats: { speedup: '80%', coverage: '94%', failed: '0.2%' },
      tags: ['Jenkins', 'Docker', 'SonarQube', 'Go']
    },
    {
      title: 'Zero-Downtime DB Migration',
      description: 'Managed a massive migration of a production MongoDB cluster to PostgreSQL using Kafka for data streaming and synchronization.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000&auto=format&fit=crop',
      stats: { total: '4TB+', rows: '500M', sync: 'Live' },
      tags: ['PostgreSQL', 'Kafka', 'Python', 'Docker']
    }
  ];

  return (
    <section id="projects" className="py-24 bg-[#0A0C10]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4">
            <h2 className="text-4xl font-display font-bold">Technical Deployments<span className="text-[#38BDF8]">.</span></h2>
            <p className="text-[#94A3B8] max-w-xl">A selection of architecture implementations and automation projects I've spearheaded.</p>
          </div>
          <div className="flex gap-4">
             <div className="flex flex-col items-center">
                <span className="text-2xl font-bold font-mono">15+</span>
                <span className="text-[10px] text-[#94A3B8] uppercase tracking-widest">Projects</span>
             </div>
             <div className="w-px h-10 bg-[#1E2330]" />
             <div className="flex flex-col items-center">
                <span className="text-2xl font-bold font-mono text-[#38BDF8]">100%</span>
                <span className="text-[10px] text-[#94A3B8] uppercase tracking-widest">Uptime</span>
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col glass-card rounded-xl overflow-hidden hover:ring-1 ring-[#38BDF8]/50 transition-all shadow-xl"
            >
              <div className="aspect-video relative overflow-hidden">
                 <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C10] to-transparent" />
                 
                 {/* Project Type Icon Overlay */}
                 <div className="absolute top-4 right-4 bg-[#0A0C10]/80 p-2 rounded-lg backdrop-blur border border-[#1E2330]">
                    <Server size={16} className="text-[#38BDF8]" />
                 </div>
              </div>

              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold tracking-tight group-hover:text-[#38BDF8] transition-colors">{project.title}</h3>
                  <p className="text-sm text-[#94A3B8] leading-relaxed line-clamp-3">{project.description}</p>
                </div>

                <div className="pt-4 border-t border-[#1E2330] space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(project.stats).map(([key, val]) => (
                      <div key={key} className="space-y-0.5">
                        <div className="text-[10px] uppercase font-mono text-[#94A3B8] opacity-60">{key}</div>
                        <div className="text-xs font-bold text-[#F8FAFC]">{val}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-2">
                       {project.tags.slice(0, 3).map((tag, idx) => (
                          <div key={idx} className="w-8 h-8 rounded-full border-2 border-[#11141D] bg-[#1E2330] flex items-center justify-center text-[8px] font-bold text-[#38BDF8]">
                             {tag[0]}
                          </div>
                       ))}
                    </div>
                    <div className="flex gap-3">
                      <button className="text-[#94A3B8] hover:text-[#38BDF8] transition-colors"><Github size={18} /></button>
                      <button className="text-[#94A3B8] hover:text-[#38BDF8] transition-colors"><ExternalLink size={18} /></button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
