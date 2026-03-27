"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { DATA } from "@/data/resume";

function AIServiceCard({
  service,
  index,
}: {
  service: (typeof DATA.aiAutomation.services)[number];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 40, scale: 0.95 }
      }
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative"
    >
      {/* Glow effect on hover */}
      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-violet-600/0 via-cyan-500/0 to-fuchsia-500/0 group-hover:from-violet-600/20 group-hover:via-cyan-500/20 group-hover:to-fuchsia-500/20 transition-all duration-700 blur-xl opacity-0 group-hover:opacity-100" />

      <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl p-6 h-full transition-all duration-500 group-hover:border-white/[0.15] group-hover:bg-white/[0.06] dark:border-white/[0.08] dark:bg-white/[0.03] dark:group-hover:border-white/[0.15] dark:group-hover:bg-white/[0.06]">
        {/* Shimmer line at top */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-violet-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        {/* Floating orb */}
        <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-gradient-to-br from-violet-500/10 to-cyan-500/10 blur-2xl group-hover:from-violet-500/20 group-hover:to-cyan-500/20 transition-all duration-700" />

        {/* Icon */}
        <motion.div
          className="text-4xl mb-4 inline-block"
          whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.4 }}
        >
          {service.icon}
        </motion.div>

        {/* Title */}
        <h3 className="text-lg font-bold mb-2 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent group-hover:from-violet-400 group-hover:to-cyan-400 transition-all duration-500">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground/80 mb-4 leading-relaxed">
          {service.description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-1.5">
          {service.tech.map((t: string) => (
            <span
              key={t}
              className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20 group-hover:bg-violet-500/15 group-hover:border-violet-500/30 transition-all duration-300"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Bottom gradient line */}
        <div className="absolute bottom-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
}

function FloatingParticle({ delay, x, y }: { delay: number; x: string; y: string }) {
  return (
    <motion.div
      className="absolute w-1 h-1 rounded-full bg-violet-400/30"
      style={{ left: x, top: y }}
      animate={{
        y: [0, -20, 0],
        opacity: [0.3, 0.8, 0.3],
        scale: [1, 1.5, 1],
      }}
      transition={{
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  );
}

export default function AIAutomationSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { aiAutomation } = DATA;

  return (
    <section id="ai-automation" ref={sectionRef} className="relative py-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-fuchsia-500/3 rounded-full blur-3xl" />

        {/* Floating particles */}
        <FloatingParticle delay={0} x="10%" y="20%" />
        <FloatingParticle delay={0.5} x="85%" y="15%" />
        <FloatingParticle delay={1} x="50%" y="70%" />
        <FloatingParticle delay={1.5} x="25%" y="80%" />
        <FloatingParticle delay={2} x="75%" y="45%" />
        <FloatingParticle delay={0.8} x="40%" y="30%" />
        <FloatingParticle delay={1.2} x="60%" y="85%" />
        <FloatingParticle delay={1.8} x="15%" y="55%" />
      </div>

      {/* Content */}
      <div className="relative z-10 space-y-12 w-full">
        {/* Header */}
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-400 backdrop-blur-sm">
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                ⚙️
              </motion.span>
              AI & Automation
            </span>
          </motion.div>

          {/* Title with gradient */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-3xl font-bold tracking-tighter sm:text-5xl"
          >
            <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              {aiAutomation.headline}
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="max-w-[700px] text-muted-foreground md:text-lg/relaxed"
          >
            {aiAutomation.subheadline}
          </motion.p>

          {/* Animated divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="h-[2px] w-24 bg-gradient-to-r from-violet-500 via-cyan-500 to-fuchsia-500 rounded-full"
          />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {aiAutomation.services.map((service, index) => (
            <AIServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex justify-center"
        >
          <a
            href={DATA.contact.social.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-medium transition-all duration-300"
          >
            {/* Button glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-600 opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-600 blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300" />

            <span className="relative z-10 text-white">
              Let&apos;s Automate Your Business
            </span>
            <motion.span
              className="relative z-10"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
