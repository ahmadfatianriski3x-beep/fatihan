import { motion } from 'motion/react';
import { Shield, Server, Code, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="about" className="relative pt-32 pb-20 overflow-hidden tech-grid min-h-[90vh] flex items-center">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#38BDF8]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
        <div className="grid lg:grid-template-columns-[1.2fr_0.8fr] gap-12 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/20"
            >
              <div className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
              <span className="text-xs font-mono text-[#38BDF8] tracking-widest uppercase">Available for New Projects</span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-display font-bold leading-[0.9] tracking-tight"
              >
                Ahmad Fatihan <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#818CF8]">
                  Rizky.
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="max-w-lg text-lg text-[#94A3B8] leading-relaxed"
              >
                IT Engineer specializing in high-performance infrastructure, 
                automated DevOps pipelines, and cloud-native security orchestration.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <button className="px-8 py-4 bg-[#38BDF8] text-[#0A0C10] font-bold rounded hover:bg-[#7DD3FC] transition-all flex items-center gap-2 group shadow-[0_0_20px_rgba(56,189,248,0.3)]">
                View My Work
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-[#1E2330] border border-[#38BDF8]/30 text-[#F8FAFC] font-bold rounded hover:bg-[#1E2330]/80 transition-all">
                About Me
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-[#1E2330]"
            >
              {[
                { icon: Server, label: 'Cloud Infra', value: '4+ Years' },
                { icon: Shield, label: 'Cyber Security', value: 'CompTIA+' },
                { icon: Code, label: 'DevOps', value: 'GitOps' },
              ].map((stat, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex items-center gap-2 text-[#38BDF8]">
                    <stat.icon size={16} />
                    <span className="text-[10px] font-mono tracking-widest uppercase opacity-70">{stat.label}</span>
                  </div>
                  <div className="text-lg font-display font-medium">{stat.value}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.4, type: 'spring' }}
            className="hidden lg:block relative"
          >
            {/* Terminal Window Mockup */}
            <div className="glass-card rounded-lg overflow-hidden shadow-2xl relative z-10">
              <div className="terminal-header">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                <div className="ml-4 text-[10px] font-mono text-[#94A3B8]">ahmad@it-eng: ~</div>
              </div>
              <div className="p-6 font-mono text-sm space-y-3">
                <div className="flex gap-2">
                  <span className="text-[#38BDF8]">$</span>
                  <span className="text-[#F8FAFC]">whoami</span>
                </div>
                <div className="text-[#94A3B8]">
                  {">"} Senior IT Engineer & Infrastructure Architect
                </div>
                <div className="flex gap-2">
                  <span className="text-[#38BDF8]">$</span>
                  <span className="text-[#F8FAFC]">ls skills/core</span>
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[#38BDF8]">
                  <span>k8s_clusters/</span>
                  <span>ci_cd_pipelines/</span>
                  <span>cloud_arch/</span>
                  <span>cyber_sec/</span>
                  <span>automation_scripts/</span>
                  <span>networking/</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-[#38BDF8]">$</span>
                  <span className="text-[#F8FAFC]">ping -c 1 production</span>
                </div>
                <div className="text-green-400">
                  64 bytes from production: icmp_seq=1 ttl=64 time=0.042 ms
                </div>
                <div className="flex gap-2 pt-4">
                  <span className="text-[#38BDF8] animate-pulse">_</span>
                </div>
              </div>
            </div>

            {/* Floating Accents */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#38BDF8]/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#818CF8]/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
