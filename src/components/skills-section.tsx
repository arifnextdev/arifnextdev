"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const CATEGORIES = [
  { id: "all",      label: "All Skills",     emoji: "⚡", color: "#a78bfa", bg: "rgba(167,139,250,0.15)", glow: "rgba(167,139,250,0.3)"  },
  { id: "frontend", label: "Frontend",        emoji: "🎨", color: "#60a5fa", bg: "rgba(96,165,250,0.15)",  glow: "rgba(96,165,250,0.3)"   },
  { id: "backend",  label: "Backend",         emoji: "⚙️", color: "#34d399", bg: "rgba(52,211,153,0.15)",  glow: "rgba(52,211,153,0.3)"   },
  { id: "database", label: "Database",        emoji: "🗄️", color: "#f59e0b", bg: "rgba(245,158,11,0.15)",  glow: "rgba(245,158,11,0.3)"   },
  { id: "devops",   label: "DevOps & Cloud",  emoji: "☁️", color: "#f87171", bg: "rgba(248,113,113,0.15)", glow: "rgba(248,113,113,0.3)"  },
  { id: "ai",       label: "AI & Scraping",   emoji: "🤖", color: "#c084fc", bg: "rgba(192,132,252,0.15)", glow: "rgba(192,132,252,0.3)"  },
  { id: "design",   label: "Design",          emoji: "✏️", color: "#fb923c", bg: "rgba(251,146,60,0.15)",  glow: "rgba(251,146,60,0.3)"   },
  { id: "seo",      label: "SEO & CMS",       emoji: "📈", color: "#4ade80", bg: "rgba(74,222,128,0.15)",  glow: "rgba(74,222,128,0.3)"   },
] as const;

type CategoryId = (typeof CATEGORIES)[number]["id"];

interface Skill {
  name: string;
  category: Exclude<CategoryId, "all">;
  icon: string;
  level: "expert" | "advanced" | "intermediate";
}

const SKILLS: Skill[] = [
  // ── Frontend ──
  // React: official atom logo emoji
  { name: "React",         category: "frontend", icon: "⚛️", level: "expert"   },
  // Next.js: official black triangle logo
  { name: "Next.js",       category: "frontend", icon: "▲",  level: "expert"   },
  // Vue.js: 🔰 green V-shield shape matches Vue logo
  { name: "Vue.js",        category: "frontend", icon: "🔰", level: "advanced" },
  // Nuxt.js: green mountain/leaf — Nuxt brand is green
  { name: "Nuxt.js",       category: "frontend", icon: "🌿", level: "advanced" },
  // React Native: mobile phone with arrow = cross-platform mobile
  { name: "React Native",  category: "frontend", icon: "📲", level: "advanced" },
  // TypeScript: blue diamond = TS blue branding
  { name: "TypeScript",    category: "frontend", icon: "🔷", level: "expert"   },
  // Tailwind: wind/wave matches tailwind name
  { name: "Tailwind CSS",  category: "frontend", icon: "🌊", level: "expert"   },
  // Redux: purple circular arrow = state cycle
  { name: "Redux",         category: "frontend", icon: "🔄", level: "advanced" },
  // Zustand: bear is Zustand's official mascot
  { name: "Zustand",       category: "frontend", icon: "🐻", level: "advanced" },
  // Socket.io: lightning = real-time fast connection
  { name: "Socket.io",     category: "frontend", icon: "⚡", level: "advanced" },
  // Framer Motion: clapperboard = animation/motion
  { name: "Framer Motion", category: "frontend", icon: "🎬", level: "advanced" },

  // ── Backend ──
  // Node.js: green heart = Node's signature green color
  { name: "Node.js",    category: "backend", icon: "💚", level: "expert"   },
  // NestJS: cat is the NestJS official mascot
  { name: "NestJS",     category: "backend", icon: "🐈", level: "expert"   },
  // Express: fire = fast/lightweight
  { name: "Express",    category: "backend", icon: "🔥", level: "expert"   },
  // REST API: chain link = connected endpoints
  { name: "REST API",   category: "backend", icon: "🔗", level: "expert"   },
  // oRPC: satellite dish = remote procedure calls
  { name: "oRPC",       category: "backend", icon: "📡", level: "advanced" },
  // Prisma: triangle prism = Prisma logo shape
  { name: "Prisma",     category: "backend", icon: "🔺", level: "expert"   },
  // JWT: key = tokens/auth
  { name: "JWT",        category: "backend", icon: "🗝️", level: "expert"   },
  // OAuth2: shield = secure authorization
  { name: "OAuth2",     category: "backend", icon: "🛡️", level: "advanced" },
  // Passport.js: ticket/pass = identity passport
  { name: "Passport.js",category: "backend", icon: "🎫", level: "advanced" },
  // Clerk: user silhouette = user management
  { name: "Clerk",      category: "backend", icon: "👤", level: "advanced" },
  // BetterAuth: padlock = authentication security
  { name: "BetterAuth", category: "backend", icon: "🔒", level: "advanced" },
  // RabbitMQ: rabbit = official RabbitMQ mascot
  { name: "RabbitMQ",   category: "backend", icon: "🐇", level: "advanced" },

  // ── Database ──
  // PostgreSQL: elephant = official Postgres logo
  { name: "PostgreSQL", category: "database", icon: "🐘", level: "expert"   },
  // MongoDB: leaf = MongoDB's green leaf logo
  { name: "MongoDB",    category: "database", icon: "🍃", level: "expert"   },
  // MySQL: dolphin = MySQL's official mascot "Sakila"
  { name: "MySQL",      category: "database", icon: "🐬", level: "advanced" },
  // Redis: red circle = Redis brand color
  { name: "Redis",      category: "database", icon: "🔴", level: "advanced" },

  // ── DevOps & Cloud ──
  // Docker: whale = Docker's official logo
  { name: "Docker",         category: "devops", icon: "🐳", level: "expert"       },
  // Nginx: globe = web server / proxy
  { name: "Nginx",          category: "devops", icon: "🌐", level: "advanced"     },
  // GitHub Actions: repeat arrows = CI/CD automation loop
  { name: "GitHub Actions", category: "devops", icon: "🔁", level: "advanced"     },
  // AWS: cloud = Amazon Web Services
  { name: "AWS",            category: "devops", icon: "☁️", level: "intermediate" },
  // EC2: computer disk = compute server instance
  { name: "EC2",            category: "devops", icon: "💽", level: "advanced"     },
  // VPS: wrench = manual server management
  { name: "VPS",            category: "devops", icon: "🔧", level: "expert"       },
  // Dokploy: package box = deployment packaging
  { name: "Dokploy",        category: "devops", icon: "📦", level: "advanced"     },
  // Coolify: snowflake = "cool" + self-hosted brand
  { name: "Coolify",        category: "devops", icon: "❄️", level: "advanced"     },

  // ── AI & Scraping ──
  // Python: snake = Python logo
  { name: "Python",        category: "ai", icon: "🐍", level: "advanced" },
  // Web Scraping: spider web = scraping the web
  { name: "Web Scraping",  category: "ai", icon: "🕸️", level: "expert"   },
  // Selenium: robot = browser automation
  { name: "Selenium",      category: "ai", icon: "🤖", level: "expert"   },
  // BeautifulSoup: tea cup = "soup" in the name
  { name: "BeautifulSoup", category: "ai", icon: "🍵", level: "expert"   },
  // Puppeteer: matryoshka = puppet/controlled browser
  { name: "Puppeteer",     category: "ai", icon: "🪆", level: "advanced" },
  // Scrapy: spider = spider crawling the web
  { name: "Scrapy",        category: "ai", icon: "🕷️", level: "advanced" },

  // ── Design ──
  // Figma: paintbrush = design tool
  { name: "Figma",             category: "design", icon: "🖌️", level: "advanced" },
  // Canva: artist palette = graphic design
  { name: "Canva",             category: "design", icon: "🎨", level: "expert"   },
  // Adobe Illustrator: pen nib = vector illustration
  { name: "Adobe Illustrator", category: "design", icon: "✒️", level: "advanced" },
  // Adobe Photoshop: mountain landscape = image editing
  { name: "Adobe Photoshop",   category: "design", icon: "🏔️", level: "advanced" },

  // ── SEO & CMS ──
  // WordPress: memo/post = content publishing
  { name: "WordPress",            category: "seo", icon: "📝", level: "advanced" },
  // SEO: magnifying glass = search optimization
  { name: "SEO",                  category: "seo", icon: "🔍", level: "expert"   },
  // SEMrush: bar chart = analytics/rankings
  { name: "SEMrush",              category: "seo", icon: "📊", level: "advanced" },
  // Google Analytics: line chart = traffic analytics
  { name: "Google Analytics",     category: "seo", icon: "📈", level: "advanced" },
  // Google Search Console: right-pointing magnifier = search indexing
  { name: "Google Search Console",category: "seo", icon: "🔎", level: "advanced" },
];

const LEVEL_DOT: Record<Skill["level"], string> = {
  expert:       "#7c3aed",
  advanced:     "#2563eb",
  intermediate: "#059669",
};

const LEVEL_LABEL: Record<Skill["level"], string> = {
  expert:       "Expert",
  advanced:     "Advanced",
  intermediate: "Intermediate",
};

export default function SkillsSection() {
  const [active, setActive] = useState<CategoryId>("all");
  const [hovered, setHovered] = useState<string | null>(null);

  const activeCat = CATEGORIES.find((c) => c.id === active)!;
  const filtered = active === "all" ? SKILLS : SKILLS.filter((s) => s.category === active);

  return (
    <section id="skills" className="w-full">
      {/* ── Category filter tabs ── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-wrap gap-2 mb-6"
      >
        {CATEGORIES.map((cat) => {
          const isActive = active === cat.id;
          const count = cat.id === "all" ? SKILLS.length : SKILLS.filter((s) => s.category === cat.id).length;
          return (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.4rem 0.9rem",
                borderRadius: "9999px",
                border: `1px solid ${isActive ? cat.color : "rgba(139,92,246,0.2)"}`,
                background: isActive ? cat.bg : "rgba(255,255,255,0.03)",
                color: isActive ? cat.color : "var(--muted-foreground)",
                boxShadow: isActive ? `0 0 14px ${cat.glow}` : "none",
                transform: isActive ? "translateY(-1px)" : "none",
                fontSize: "0.8rem",
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.2s ease",
                backdropFilter: "blur(6px)",
                whiteSpace: "nowrap",
              }}
            >
              <span>{cat.emoji}</span>
              <span>{cat.label}</span>
              <span
                style={{
                  minWidth: "1.3rem",
                  height: "1.3rem",
                  padding: "0 0.3rem",
                  borderRadius: "9999px",
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: isActive ? cat.color : "rgba(139,92,246,0.2)",
                  color: isActive ? "#000" : "var(--muted-foreground)",
                  transition: "all 0.2s",
                }}
              >
                {count}
              </span>
            </button>
          );
        })}
      </motion.div>

      {/* ── Legend ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        className="flex items-center gap-4 mb-6 flex-wrap"
      >
        <span className="text-xs text-muted-foreground">
          Showing{" "}
          <span className="font-semibold text-foreground">{filtered.length}</span> skills
          {active !== "all" && (
            <>
              {" "}in{" "}
              <span style={{ color: activeCat.color }}>{activeCat.emoji} {activeCat.label}</span>
            </>
          )}
        </span>
        <div className="flex items-center gap-3 ml-auto">
          {(["expert", "advanced", "intermediate"] as Skill["level"][]).map((lvl) => (
            <div key={lvl} className="flex items-center gap-1.5">
              <div
                style={{
                  width: 8, height: 8, borderRadius: "50%",
                  background: LEVEL_DOT[lvl],
                  boxShadow: `0 0 5px ${LEVEL_DOT[lvl]}`,
                }}
              />
              <span style={{ fontSize: "0.7rem", color: "var(--muted-foreground)" }}>
                {LEVEL_LABEL[lvl]}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Skills grid ── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3">
        {filtered.map((skill, i) => {
          const catInfo = CATEGORIES.find((c) => c.id === skill.category)!;
          const isHov = hovered === skill.name;

          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.88, y: 12 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{
                duration: 0.35,
                delay: Math.min(i * 0.025, 0.55),
                ease: [0.22, 1, 0.36, 1],
              }}
              onMouseEnter={() => setHovered(skill.name)}
              onMouseLeave={() => setHovered(null)}
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "1.15rem 0.75rem 0.9rem",
                borderRadius: "1rem",
                border: `1px solid ${isHov ? catInfo.color + "70" : "rgba(139,92,246,0.18)"}`,
                background: isHov
                  ? `rgba(20,15,40,0.75)`
                  : "rgba(12,9,25,0.55)",
                backdropFilter: "blur(12px)",
                overflow: "hidden",
                cursor: "default",
                textAlign: "center",
                boxShadow: isHov
                  ? `inset 0 1px 0 rgba(255,255,255,0.06), 0 8px 30px rgba(0,0,0,0.4), 0 0 20px ${catInfo.glow}`
                  : "inset 0 1px 0 rgba(255,255,255,0.04), 0 2px 16px rgba(0,0,0,0.25)",
                transform: isHov ? "translateY(-4px) scale(1.03)" : "translateY(0) scale(1)",
                transition: "all 0.25s cubic-bezier(0.22,1,0.36,1)",
              }}
            >
              {/* Top glow (always subtle, stronger on hover) */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `radial-gradient(circle at 50% 0%, ${catInfo.glow}, transparent 70%)`,
                  opacity: isHov ? 1 : 0.35,
                  transition: "opacity 0.3s",
                  pointerEvents: "none",
                }}
              />

              {/* Level dot — top right */}
              <div
                style={{
                  position: "absolute",
                  top: "0.5rem",
                  right: "0.5rem",
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: LEVEL_DOT[skill.level],
                  boxShadow: `0 0 6px ${LEVEL_DOT[skill.level]}`,
                }}
                title={LEVEL_LABEL[skill.level]}
              />

              {/* Emoji icon — ALWAYS visible */}
              <span
                style={{
                  fontSize: "1.75rem",
                  lineHeight: 1,
                  marginBottom: "0.5rem",
                  display: "block",
                  filter: isHov ? "drop-shadow(0 0 6px rgba(255,255,255,0.3))" : "none",
                  transition: "filter 0.25s, transform 0.25s",
                  transform: isHov ? "scale(1.15)" : "scale(1)",
                }}
              >
                {skill.icon}
              </span>

              {/* Skill name */}
              <span
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  color: isHov ? "white" : "var(--foreground)",
                  lineHeight: 1.3,
                  position: "relative",
                  zIndex: 1,
                  transition: "color 0.2s",
                }}
              >
                {skill.name}
              </span>

              {/* Category mini-badge — ALWAYS visible */}
              <span
                style={{
                  marginTop: "0.45rem",
                  fontSize: "0.62rem",
                  padding: "0.1rem 0.45rem",
                  borderRadius: "9999px",
                  border: `1px solid ${catInfo.color}50`,
                  background: `${catInfo.color}18`,
                  color: catInfo.color,
                  fontWeight: 500,
                  letterSpacing: "0.02em",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {catInfo.emoji} {catInfo.label}
              </span>

              {/* Bottom accent line — always visible, glows on hover */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: "20%",
                  right: "20%",
                  height: 2,
                  borderRadius: "9999px",
                  background: `linear-gradient(90deg, transparent, ${catInfo.color}, transparent)`,
                  opacity: isHov ? 1 : 0.4,
                  transition: "opacity 0.25s",
                }}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
