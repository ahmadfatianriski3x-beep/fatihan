import { motion } from 'motion/react';
import { Mail, Send, Linkedin, Github, Twitter, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 tech-grid">
      <div className="max-w-7xl mx-auto px-4">
        <div className="glass-card rounded-2xl overflow-hidden border border-[#1E2330] shadow-2xl">
          <div className="grid md:grid-cols-2">
            {/* Info Side */}
            <div className="p-12 bg-[#11141D] border-r border-[#1E2330] space-y-12">
              <div className="space-y-4">
                <h2 className="text-4xl font-display font-bold leading-tight">
                  Reach out for <br />
                  <span className="text-[#38BDF8]">Collaborations</span>
                </h2>
                <p className="text-[#94A3B8]">
                  Looking for an infrastructure consultant or a DevOps expert? 
                  Let's discuss how I can help your team scale efficiently.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="p-3 rounded-lg bg-[#1E2330] text-[#38BDF8] group-hover:scale-110 transition-transform">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[#94A3B8] uppercase tracking-wider">Email Me</div>
                    <div className="text-[#F8FAFC]">ahmadfatianriski3x@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="p-3 rounded-lg bg-[#1E2330] text-[#38BDF8] group-hover:scale-110 transition-transform">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[#94A3B8] uppercase tracking-wider">Base Location</div>
                    <div className="text-[#F8FAFC]">Jakarta, Indonesia (GMT+7)</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                 <div className="text-xs font-mono text-[#94A3B8] uppercase tracking-wider">Social Channels</div>
                 <div className="flex gap-4">
                    {[
                      { icon: Linkedin, href: '#' },
                      { icon: Github, href: '#' },
                      { icon: Twitter, href: '#' },
                    ].map((social, i) => (
                      <a 
                        key={i} 
                        href={social.href}
                        className="w-10 h-10 rounded bg-[#1E2330] flex items-center justify-center text-[#94A3B8] hover:text-[#38BDF8] hover:bg-[#38BDF8]/10 transition-all border border-[#1E2330] hover:border-[#38BDF8]/30"
                      >
                        <social.icon size={20} />
                      </a>
                    ))}
                 </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="p-12 space-y-8">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-[#94A3B8] uppercase tracking-widest">Full_Name</label>
                    <input 
                       type="text" 
                       placeholder="e.g. John Doe"
                       className="w-full bg-[#11141D] border border-[#1E2330] rounded p-3 text-sm focus:border-[#38BDF8] outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-[#94A3B8] uppercase tracking-widest">Email_Address</label>
                    <input 
                       type="email" 
                       placeholder="john@company.com"
                       className="w-full bg-[#11141D] border border-[#1E2330] rounded p-3 text-sm focus:border-[#38BDF8] outline-none transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-[#94A3B8] uppercase tracking-widest">Subject_Scope</label>
                  <select className="w-full bg-[#11141D] border border-[#1E2330] rounded p-3 text-sm focus:border-[#38BDF8] outline-none transition-colors appearance-none">
                     <option>Infrastructure Consultation</option>
                     <option>DevOps Pipeline Build</option>
                     <option>Migration Support</option>
                     <option>General Inquiry</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-[#94A3B8] uppercase tracking-widest">Message_Body</label>
                  <textarea 
                     rows={5}
                     placeholder="Describe your project requirement..."
                     className="w-full bg-[#11141D] border border-[#1E2330] rounded p-3 text-sm focus:border-[#38BDF8] outline-none transition-colors resize-none"
                  ></textarea>
                </div>
                <button className="w-full py-4 bg-[#38BDF8] text-[#0A0C10] font-bold rounded hover:bg-[#7DD3FC] transition-all flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(56,189,248,0.2)]">
                  Transmit Message
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-[#94A3B8] text-xs font-mono">
           © {new Date().getFullYear()} AHMAD FATHAN RIZKY // ALL SYSTEMS OPERATIONAL
        </div>
      </div>
    </section>
  );
}
