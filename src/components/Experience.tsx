import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Senior Infrastructure Engineer',
      company: 'TechFlow Solutions',
      period: '2022 - Present',
      location: 'Jakarta, Indonesia',
      description: 'Led the migration of legacy on-premise systems to AWS multi-region architecture. Automated deployment pipelines using Terraform and Jenkins.',
      tags: ['AWS', 'Kubernetes', 'Terraform', 'CI/CD']
    },
    {
      title: 'System Administrator',
      company: 'Global Net Corp',
      period: '2020 - 2022',
      location: 'Bandung, Indonesia',
      description: 'Managed enterprise-grade networking equipment and virtualized server environments. Implemented security protocols and disaster recovery plans.',
      tags: ['Linux', 'VMware', 'Cisco', 'Network Security']
    },
    {
      title: 'IT Support / Junior Engineer',
      company: 'Startup Hub',
      period: '2018 - 2020',
      location: 'Remote',
      description: 'Provided technical support and assisted in server maintenance for 50+ clients. Configured VPNs and resolved hardware/software bottlenecks.',
      tags: ['Troubleshooting', 'Powershell', 'Helpdesk']
    }
  ];

  return (
    <section id="experience" className="py-24 bg-[#0A0C10] border-y border-[#1E2330]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4">
            <h2 className="text-4xl font-display font-bold">Experience Timeline<span className="text-[#38BDF8]">.</span></h2>
            <p className="text-[#94A3B8] max-w-xl">A record of my professional journey in building and maintaining technical infrastructures.</p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#38BDF8] uppercase tracking-widest bg-[#38BDF8]/10 px-3 py-1 rounded">
            <Briefcase size={14} />
            6+ Years Professional
          </div>
        </div>

        <div className="space-y-8 relative before:absolute before:left-0 md:before:left-1/2 before:top-0 before:bottom-0 before:w-px before:bg-[#1E2330]">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative grid md:grid-cols-2 gap-8 ${index % 2 === 0 ? '' : 'md:text-right'}`}
            >
              {/* Dot on timeline */}
              <div className="absolute left-[-5px] md:left-1/2 md:translate-x-[-50%] top-2 w-2.5 h-2.5 rounded-full bg-[#38BDF8] ring-4 ring-[#38BDF8]/20 z-10" />

              <div className={index % 2 === 0 ? '' : 'md:order-2'}>
                <div className="glass-card p-6 rounded-lg border-l-4 border-l-[#38BDF8] space-y-4">
                  <div className={`flex flex-col ${index % 2 === 0 ? 'items-start' : 'md:items-end'} gap-2`}>
                    <span className="text-sm font-mono text-[#38BDF8] bg-[#38BDF8]/10 px-2 py-0.5 rounded">{exp.period}</span>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-[#94A3B8] text-sm italic">
                      <MapPin size={14} />
                      {exp.company} • {exp.location}
                    </div>
                  </div>
                  <p className="text-[#94A3B8] text-sm leading-relaxed">{exp.description}</p>
                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'justify-start' : 'md:justify-end'}`}>
                    {exp.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase font-mono tracking-wider bg-[#1E2330] px-2 py-1 rounded text-[#94A3B8]">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="hidden md:flex items-center justify-center pointer-events-none opacity-20">
                 <div className="text-8xl font-display font-black text-[#1E2330]">0{index + 1}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
