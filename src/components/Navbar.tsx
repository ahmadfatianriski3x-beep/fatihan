import { motion } from 'motion/react';
import { Terminal, Cpu, Database, Mail, User } from 'lucide-react';

export default function Navbar() {
  const navItems = [
    { name: 'About', icon: User, href: '#about' },
    { name: 'Experience', icon: Cpu, href: '#experience' },
    { name: 'Skills', icon: Database, href: '#skills' },
    { name: 'Contact', icon: Mail, href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#1E2330] bg-[#0A0C10]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="bg-[#38BDF8] p-1.5 rounded">
            <Terminal size={18} className="text-[#0A0C10]" />
          </div>
          <span className="font-display font-bold tracking-tight text-lg">
            AFR<span className="text-[#38BDF8]">.IO</span>
          </span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group flex items-center gap-2 text-sm font-medium text-[#94A3B8] hover:text-[#38BDF8] transition-colors"
            >
              <item.icon size={14} className="group-hover:scale-110 transition-transform" />
              {item.name}
            </motion.a>
          ))}
        </div>

        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-1.5 rounded bg-[#1E2330] border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-mono hover:bg-[#38BDF8]/10 transition-colors"
        >
          DOWNLOAD_CV
        </motion.button>
      </div>
    </nav>
  );
}
