import { motion } from 'motion/react';
import { Cloud, Lock, Terminal, Activity, Monitor, GitBranch } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      name: 'Cloud & Infrastructure',
      icon: Cloud,
      skills: ['AWS (EC2, S3, RDS)', 'GCP', 'Azure', 'Terraform', 'Docker', 'Kubernetes']
    },
    {
      name: 'DevOps & CI/CD',
      icon: GitBranch,
      skills: ['Jenkins', 'GitHub Actions', 'GitLab CI', 'Ansible', 'Helm', 'ArgoCD']
    },
    {
      name: 'Security & Networking',
      icon: Lock,
      skills: ['VPN/VPC', 'Firewalls', 'SIEM', 'Pentesting', 'SSL/TLS', 'IDS/IPS']
    },
    {
      name: 'Monitoring & Ops',
      icon: Activity,
      skills: ['Prometheus', 'Grafana', 'ELK Stack', 'Zabbix', 'Site Reliability', 'Nagios']
    },
    {
      name: 'Programming & Scripting',
      icon: Terminal,
      skills: ['Python', 'Bash', 'Go', 'Powershell', 'Node.js', 'Linux Kernel']
    },
    {
      name: 'OS & Virtualization',
      icon: Monitor,
      skills: ['Ubuntu/RHEL', 'Debian', 'VMware ESXi', 'Proxmox', 'Xen', 'Hyper-V']
    }
  ];

  return (
    <section id="skills" className="py-24 tech-grid">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-display font-bold">Tech Stack & Expertise<span className="text-[#38BDF8]">.</span></h2>
          <p className="text-[#94A3B8] max-w-2xl mx-auto italic">
            "A diverse set of technologies utilized to build resilient systems."
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-8 rounded-xl border border-[#1E2330] hover:border-[#38BDF8]/50 transition-all group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-[#38BDF8]/10 text-[#38BDF8] group-hover:bg-[#38BDF8] group-hover:text-[#0A0C10] transition-colors">
                  <cat.icon size={24} />
                </div>
                <h3 className="text-lg font-bold tracking-tight">{cat.name}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span 
                    key={skill} 
                    className="text-xs px-2.5 py-1 rounded bg-[#11141D] text-[#94A3B8] border border-[#1E2330] hover:border-[#38BDF8]/30 hover:text-[#38BDF8] transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Decorative hardware lines */}
              <div className="mt-8 flex gap-1 opacity-20">
                {[1, 2, 3, 4, 5, 6].map(j => (
                  <div key={j} className="w-full h-1 bg-gradient-to-r from-[#38BDF8] to-transparent" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
