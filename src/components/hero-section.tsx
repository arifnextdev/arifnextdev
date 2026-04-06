"use client";

import { DATA } from "@/data/resume";
import { motion, AnimatePresence } from "framer-motion";
import {
	ArrowDownToLine,
	Github,
	Linkedin,
	Mail,
	MapPin,
	MessageCircle,
	Sparkles,
	Code2,
	Cpu,
	Globe,
	Layers,
	ExternalLink,
} from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useEffect, useState } from "react";

const ROLES = [
	"Full Stack Developer",
	"AI Automation Engineer",
	"Backend Architect",
	"React & Next.js Expert",
];

const STATS = [
	{ value: "3+", label: "Years Exp", icon: "🚀" },
	{ value: "20+", label: "Projects", icon: "📦" },
	{ value: "10+", label: "Clients", icon: "🤝" },
	{ value: "80%", label: "Automation Gain", icon: "⚡" },
];

const TECH_BADGES = [
	{ label: "Next.js", icon: "▲", pos: "top-8 right-8" },
	{ label: "Node.js", icon: "📗", pos: "top-28 -left-10" },
	{ label: "Docker", icon: "🐳", pos: "bottom-28 -right-12" },
	{ label: "Python", icon: "🐍", pos: "bottom-8 left-8" },
];

const SOCIALS = [
	{ href: DATA.contact.social.GitHub.url, icon: Github, label: "GitHub" },
	{ href: DATA.contact.social.LinkedIn.url, icon: Linkedin, label: "LinkedIn" },
	{
		href: DATA.contact.social.whatsapp.url,
		icon: MessageCircle,
		label: "WhatsApp",
	},
	{ href: `mailto:${DATA.contact.email}`, icon: Mail, label: "Email" },
];

function RoleCycler() {
	const [index, setIndex] = useState(0);
	useEffect(() => {
		const id = setInterval(() => setIndex((i) => (i + 1) % ROLES.length), 2800);
		return () => clearInterval(id);
	}, []);
	return (
		<div className="h-10 sm:h-12 flex items-center justify-center overflow-hidden">
			<AnimatePresence mode="wait">
				<motion.span
					key={index}
					initial={{ y: 40, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ y: -40, opacity: 0 }}
					transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
					className="hero-role-text text-xl sm:text-2xl font-semibold"
				>
					{ROLES[index]}
				</motion.span>
			</AnimatePresence>
		</div>
	);
}

export default function HeroSection() {
	return (
		<section
			id="hero"
			className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
		>
			{/* ── Mesh / grid background ── */}
			<div aria-hidden className="hero-mesh absolute inset-0 z-0" />

			{/* ── Ambient gradient orbs ── */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
			>
				<div className="hero-orb hero-orb-1" />
				<div className="hero-orb hero-orb-2" />
				<div className="hero-orb hero-orb-3" />
			</div>

			{/* ── Noise texture overlay ── */}
			<div aria-hidden className="hero-noise absolute inset-0 z-0" />

			{/* ── Main content ── */}
			<div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-8 flex flex-col items-center gap-10 pt-14 pb-10">
				{/* ── Two-column layout: text | avatar ── */}
				<div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
					{/* Left — Text */}
					<div className="flex-1 flex flex-col gap-5 max-w-2xl text-center lg:text-left">
						{/* Name */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.65,
								delay: 0.1,
								ease: [0.22, 1, 0.36, 1],
							}}
						>
							<p className="text-sm sm:text-base text-muted-foreground tracking-widest uppercase mb-3 font-medium">
								Hello, World! 👋
							</p>
							<h1 className="text-5xl sm:text-6xl xl:text-7xl font-black tracking-tight leading-[1.05]">
								<span className="hero-name-text">MD Ariful </span>
								<span className="hero-name-accent">Islam</span>
							</h1>
						</motion.div>

						{/* Cycling role */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5, delay: 0.25 }}
							className="flex items-center gap-3 justify-center lg:justify-start"
						>
							<div className="h-px w-8 bg-gradient-to-r from-transparent to-violet-500" />
							<RoleCycler />
							<div className="h-px w-8 bg-gradient-to-l from-transparent to-violet-500" />
						</motion.div>

						{/* Description */}
						<motion.p
							initial={{ opacity: 0, y: 16 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.6,
								delay: 0.32,
								ease: [0.22, 1, 0.36, 1],
							}}
							className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0"
						>
							{DATA.description}
						</motion.p>

						{/* Location */}
						<motion.a
							href={DATA.locationLink}
							target="_blank"
							rel="noreferrer"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.4 }}
							className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-violet-400 transition-colors w-fit mx-auto lg:mx-0 group"
						>
							<MapPin className="size-4 text-violet-500 group-hover:scale-110 transition-transform" />
							{DATA.location}
							<ExternalLink className="size-3 opacity-0 group-hover:opacity-100 transition-opacity" />
						</motion.a>

						{/* CTA Buttons */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.55,
								delay: 0.46,
								ease: [0.22, 1, 0.36, 1],
							}}
							className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
						>
							<a
								href={DATA.contact.social.resume.url}
								className="hero-cta-primary group"
								aria-label="Download Resume"
								style={{
									display: "inline-flex",
									alignItems: "center",
									gap: "0.5rem",
									padding: "0.8rem 1.8rem",
									borderRadius: "9999px",
									fontWeight: 700,
									fontSize: "0.95rem",
									color: "white",
									background:
										"linear-gradient(135deg, #7c3aed 0%, #4f46e5 50%, #2563eb 100%)",
									boxShadow:
										"0 0 35px rgba(124,58,237,0.6), 0 4px 20px rgba(0,0,0,0.35)",
									position: "relative",
									overflow: "hidden",
									transition: "transform 0.2s, box-shadow 0.2s",
									textDecoration: "none",
								}}
							>
								<span
									style={{
										position: "absolute",
										inset: 0,
										background:
											"linear-gradient(135deg, rgba(255,255,255,0.15), transparent)",
										borderRadius: "inherit",
									}}
								/>
								<ArrowDownToLine
									className="size-4 relative"
									style={{ zIndex: 1 }}
								/>
								<span style={{ position: "relative", zIndex: 1 }}>
									Download Resume
								</span>
							</a>
							<a
								href={DATA.contact.social.whatsapp.url}
								target="_blank"
								rel="noreferrer"
								className="hero-cta-secondary"
								aria-label="Hire Me"
								style={{
									display: "inline-flex",
									alignItems: "center",
									gap: "0.5rem",
									padding: "0.78rem 1.8rem",
									borderRadius: "9999px",
									fontWeight: 600,
									fontSize: "0.95rem",
									border: "1.5px solid rgba(139,92,246,0.5)",
									background: "rgba(139,92,246,0.1)",
									backdropFilter: "blur(8px)",
									color: "white",
									transition: "all 0.22s",
									textDecoration: "none",
								}}
							>
								<MessageCircle className="size-4" />
								Let&apos;s Talk
							</a>
						</motion.div>

						{/* Social Icons */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.56 }}
							className="flex items-center gap-2 justify-center lg:justify-start"
						>
							<span className="text-xs text-muted-foreground mr-1">
								Find me on
							</span>
							{SOCIALS.map(({ href, icon: Icon, label }) => (
								<a
									key={label}
									href={href}
									target="_blank"
									rel="noreferrer"
									title={label}
									aria-label={label}
									className="hero-social"
								>
									<Icon className="size-[15px]" />
								</a>
							))}
						</motion.div>
					</div>

					{/* Right — Avatar */}
					<motion.div
						initial={{ opacity: 0, scale: 0.75, filter: "blur(12px)" }}
						animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
						transition={{
							duration: 0.75,
							delay: 0.15,
							ease: [0.22, 1, 0.36, 1],
						}}
						className="relative flex-shrink-0"
					>
						{/* Outer pulsing aura */}
						<div
							aria-hidden
							className="hero-aura-1 absolute inset-0 rounded-full"
						/>
						<div
							aria-hidden
							className="hero-aura-2 absolute inset-0 rounded-full"
						/>

						{/* Spinning dashed rings */}
						<div
							aria-hidden
							className="hero-ring-spin absolute rounded-full border border-dashed border-violet-500/25"
							style={{ inset: "-30px" }}
						/>
						<div
							aria-hidden
							className="hero-ring-spin-reverse absolute rounded-full border border-dashed border-blue-400/15"
							style={{ inset: "-55px" }}
						/>

						{/* Corner tick marks on outer ring */}
						{[0, 90, 180, 270].map((deg) => (
							<div
								key={deg}
								aria-hidden
								className="absolute w-2.5 h-px bg-violet-500/60 rounded-full"
								style={{
									top: "50%",
									left: "50%",
									transform: `rotate(${deg}deg) translateX(${130}px)`,
								}}
							/>
						))}

						{/* Avatar with gradient border */}
						<div className="relative z-10 p-[3px] rounded-full bg-gradient-to-br from-violet-500 via-indigo-600 to-blue-500 shadow-[0_0_80px_rgba(139,92,246,0.6),0_0_200px_rgba(99,102,241,0.25)]">
							<div className="rounded-full p-[3px] bg-background/95">
								<Avatar className="size-52 sm:size-64 lg:size-72 rounded-full">
									<AvatarImage
										alt={DATA.name}
										src={DATA.avatarUrl}
										className="object-cover"
									/>
									<AvatarFallback className="text-5xl font-black bg-gradient-to-br from-violet-900 to-indigo-900">
										{DATA.initials}
									</AvatarFallback>
								</Avatar>
							</div>
						</div>

						{/* Floating tech badges */}
						{TECH_BADGES.map(({ label, icon, pos }, i) => (
							<motion.div
								key={label}
								animate={{ y: [0, i % 2 === 0 ? -10 : 10, 0] }}
								transition={{
									duration: 3 + i * 0.7,
									repeat: Infinity,
									ease: "easeInOut",
									delay: i * 0.4,
								}}
								className={`hero-tech-badge absolute ${pos}`}
							>
								<span>{icon}</span>
								<span className="text-xs font-bold">{label}</span>
							</motion.div>
						))}
					</motion.div>
				</div>

				{/* ── Stats strip ── */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
					className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3"
				>
					{STATS.map(({ value, label, icon }, i) => (
						<motion.div
							key={label}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.7 + i * 0.08 }}
							className="hero-stat-card group"
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "center",
								gap: "4px",
								padding: "1.5rem 1rem",
								borderRadius: "1.25rem",
								border: "1px solid rgba(139,92,246,0.25)",
								background: "rgba(20,15,40,0.6)",
								backdropFilter: "blur(16px)",
								overflow: "hidden",
								position: "relative",
								boxShadow:
									"inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 24px rgba(0,0,0,0.3)",
								transition: "border-color 0.25s, transform 0.25s",
							}}
						>
							<div
								style={{
									position: "absolute",
									inset: 0,
									background:
										"radial-gradient(circle at 50% 0%, rgba(139,92,246,0.15), transparent 65%)",
									pointerEvents: "none",
								}}
							/>
							<div
								style={{
									position: "absolute",
									bottom: 0,
									left: "20%",
									right: "20%",
									height: "2px",
									background:
										"linear-gradient(90deg, transparent, rgba(139,92,246,0.7), transparent)",
									borderRadius: "9999px",
								}}
							/>
							<span className="text-2xl mb-1" style={{ lineHeight: 1 }}>
								{icon}
							</span>
							<span
								style={{
									fontSize: "1.9rem",
									fontWeight: 900,
									background: "linear-gradient(120deg,#a78bfa,#60a5fa)",
									WebkitBackgroundClip: "text",
									WebkitTextFillColor: "transparent",
									backgroundClip: "text",
									lineHeight: 1.1,
								}}
							>
								{value}
							</span>
							<span
								style={{
									fontSize: "0.72rem",
									color: "var(--muted-foreground)",
									textAlign: "center",
									lineHeight: 1.3,
									marginTop: "2px",
								}}
							>
								{label}
							</span>
						</motion.div>
					))}
				</motion.div>

				{/* ── Skills preview pills ── */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.9 }}
					className="flex flex-wrap gap-2 justify-center"
				>
					{[
						"React",
						"Next.js",
						"Node.js",
						"TypeScript",
						"Python",
						"Docker",
						"PostgreSQL",
						"NestJS",
					].map((s) => (
						<span key={s} className="hero-skill-pill">
							{s}
						</span>
					))}
					<span className="hero-skill-pill hero-skill-pill-more">
						+{DATA.skills.length - 8} more
					</span>
				</motion.div>
			</div>

			{/* Scroll cue */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.3, duration: 0.6 }}
				className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
			>
				<span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground/60">
					Scroll
				</span>
				<div className="hero-scroll-indicator">
					<div className="hero-scroll-dot" />
				</div>
			</motion.div>

			<style jsx>{`
				/* ── Mesh background ── */
				.hero-mesh {
					background-image:
						linear-gradient(rgba(139, 92, 246, 0.06) 1px, transparent 1px),
						linear-gradient(
							90deg,
							rgba(139, 92, 246, 0.06) 1px,
							transparent 1px
						);
					background-size: 60px 60px;
					mask-image: radial-gradient(
						ellipse 80% 80% at 50% 50%,
						black 40%,
						transparent 100%
					);
				}

				/* ── Ambient orbs ── */
				.hero-orb {
					position: absolute;
					border-radius: 9999px;
					filter: blur(120px);
					pointer-events: none;
				}
				.hero-orb-1 {
					top: -10%;
					left: -10%;
					width: 60vw;
					height: 60vw;
					max-width: 700px;
					max-height: 700px;
					background: radial-gradient(
						circle,
						rgba(124, 58, 237, 0.22) 0%,
						transparent 70%
					);
					animation: orb-drift-1 12s ease-in-out infinite alternate;
				}
				.hero-orb-2 {
					bottom: -5%;
					right: -5%;
					width: 50vw;
					height: 50vw;
					max-width: 600px;
					max-height: 600px;
					background: radial-gradient(
						circle,
						rgba(37, 99, 235, 0.18) 0%,
						transparent 70%
					);
					animation: orb-drift-2 15s ease-in-out infinite alternate;
				}
				.hero-orb-3 {
					top: 40%;
					left: 50%;
					transform: translate(-50%, -50%);
					width: 40vw;
					height: 40vw;
					max-width: 500px;
					max-height: 500px;
					background: radial-gradient(
						circle,
						rgba(167, 139, 250, 0.1) 0%,
						transparent 70%
					);
					animation: orb-drift-3 18s ease-in-out infinite alternate;
				}
				@keyframes orb-drift-1 {
					from {
						transform: translate(0, 0) scale(1);
					}
					to {
						transform: translate(40px, 30px) scale(1.08);
					}
				}
				@keyframes orb-drift-2 {
					from {
						transform: translate(0, 0) scale(1);
					}
					to {
						transform: translate(-30px, -20px) scale(1.05);
					}
				}
				@keyframes orb-drift-3 {
					from {
						opacity: 0.5;
					}
					to {
						opacity: 1;
					}
				}

				/* ── Noise ── */
				.hero-noise {
					background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
					opacity: 0.3;
				}

				/* ── Badge ── */
				.hero-badge {
					display: inline-flex;
					align-items: center;
					gap: 0.5rem;
					padding: 0.45rem 1rem;
					border-radius: 9999px;
					border: 1px solid rgba(139, 92, 246, 0.35);
					background: rgba(139, 92, 246, 0.1);
					color: rgba(196, 181, 253, 1);
					font-size: 0.8rem;
					font-weight: 500;
					backdrop-filter: blur(8px);
					box-shadow: 0 0 20px rgba(139, 92, 246, 0.15);
				}
				.hero-badge-dot {
					width: 7px;
					height: 7px;
					border-radius: 9999px;
					background: #4ade80;
					box-shadow: 0 0 8px #4ade80;
					animation: pulse-dot 2s ease-in-out infinite;
				}
				@keyframes pulse-dot {
					0%,
					100% {
						opacity: 1;
						box-shadow: 0 0 8px #4ade80;
					}
					50% {
						opacity: 0.6;
						box-shadow: 0 0 14px #4ade80;
					}
				}

				/* ── Name ── */
				.hero-name-text {
					color: var(--foreground);
				}
				.hero-name-accent {
					background: linear-gradient(
						120deg,
						#a78bfa 0%,
						#818cf8 35%,
						#60a5fa 65%,
						#c084fc 100%
					);
					background-size: 200% 100%;
					-webkit-background-clip: text;
					-webkit-text-fill-color: transparent;
					background-clip: text;
					animation: shimmer 4s linear infinite;
				}
				@keyframes shimmer {
					0% {
						background-position: 0% center;
					}
					100% {
						background-position: 200% center;
					}
				}

				/* ── Role text ── */
				.hero-role-text {
					background: linear-gradient(90deg, #c084fc, #818cf8, #60a5fa);
					-webkit-background-clip: text;
					-webkit-text-fill-color: transparent;
					background-clip: text;
				}

				/* ── CTA Primary ── */
				.hero-cta-primary {
					position: relative;
					display: inline-flex;
					align-items: center;
					gap: 0.5rem;
					padding: 0.75rem 1.75rem;
					border-radius: 9999px;
					font-size: 0.95rem;
					font-weight: 700;
					color: white;
					background: linear-gradient(
						135deg,
						#7c3aed 0%,
						#4f46e5 50%,
						#2563eb 100%
					);
					box-shadow:
						0 0 30px rgba(124, 58, 237, 0.55),
						0 4px 20px rgba(0, 0, 0, 0.3);
					overflow: hidden;
					transition:
						transform 0.2s,
						box-shadow 0.2s;
				}
				.hero-cta-primary:hover {
					transform: translateY(-2px);
					box-shadow:
						0 0 50px rgba(124, 58, 237, 0.75),
						0 8px 30px rgba(0, 0, 0, 0.4);
				}
				.hero-cta-primary-glow {
					position: absolute;
					inset: 0;
					background: linear-gradient(
						135deg,
						rgba(255, 255, 255, 0.12),
						transparent
					);
					border-radius: inherit;
				}

				/* ── CTA Secondary ── */
				.hero-cta-secondary {
					display: inline-flex;
					align-items: center;
					gap: 0.5rem;
					padding: 0.73rem 1.75rem;
					border-radius: 9999px;
					font-size: 0.95rem;
					font-weight: 600;
					color: var(--foreground);
					border: 1.5px solid rgba(139, 92, 246, 0.4);
					background: rgba(139, 92, 246, 0.07);
					backdrop-filter: blur(6px);
					transition: all 0.22s;
				}
				.hero-cta-secondary:hover {
					border-color: rgba(139, 92, 246, 0.75);
					background: rgba(139, 92, 246, 0.15);
					transform: translateY(-2px);
					box-shadow: 0 0 20px rgba(139, 92, 246, 0.25);
				}

				/* ── Social icon ── */
				.hero-social {
					display: flex;
					align-items: center;
					justify-content: center;
					width: 2.25rem;
					height: 2.25rem;
					border-radius: 9999px;
					border: 1px solid rgba(139, 92, 246, 0.25);
					background: rgba(139, 92, 246, 0.07);
					color: var(--muted-foreground);
					transition: all 0.2s;
				}
				.hero-social:hover {
					background: rgba(124, 58, 237, 0.4);
					border-color: rgba(139, 92, 246, 0.7);
					color: white;
					transform: translateY(-3px);
					box-shadow: 0 4px 16px rgba(124, 58, 237, 0.4);
				}

				/* ── Avatar rings ── */
				@keyframes ring-spin {
					from {
						transform: rotate(0deg);
					}
					to {
						transform: rotate(360deg);
					}
				}
				@keyframes ring-reverse {
					from {
						transform: rotate(0deg);
					}
					to {
						transform: rotate(-360deg);
					}
				}
				.hero-ring-spin {
					animation: ring-spin 20s linear infinite;
				}
				.hero-ring-spin-reverse {
					animation: ring-reverse 30s linear infinite;
				}

				/* ── Avatar aura ── */
				.hero-aura-1 {
					background: radial-gradient(
						circle,
						rgba(124, 58, 237, 0.35) 0%,
						transparent 70%
					);
					animation: aura-pulse 3.5s ease-in-out infinite;
					transform: scale(1.4);
				}
				.hero-aura-2 {
					background: radial-gradient(
						circle,
						rgba(37, 99, 235, 0.2) 0%,
						transparent 70%
					);
					animation: aura-pulse 4.5s ease-in-out infinite reverse;
					transform: scale(1.7);
				}
				@keyframes aura-pulse {
					0%,
					100% {
						opacity: 0.5;
						transform: scale(1.4);
					}
					50% {
						opacity: 0.9;
						transform: scale(1.55);
					}
				}

				/* ── Tech badge ── */
				.hero-tech-badge {
					display: inline-flex;
					align-items: center;
					gap: 0.35rem;
					padding: 0.4rem 0.8rem;
					border-radius: 9999px;
					background: rgba(10, 10, 20, 0.85);
					border: 1px solid rgba(139, 92, 246, 0.4);
					backdrop-filter: blur(16px);
					color: white;
					font-size: 0.75rem;
					box-shadow:
						0 4px 24px rgba(0, 0, 0, 0.4),
						inset 0 1px 0 rgba(255, 255, 255, 0.08);
					white-space: nowrap;
					z-index: 20;
				}

				/* ── Stat card ── */
				.hero-stat-card {
					position: relative;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					gap: 2px;
					padding: 1.25rem 0.75rem;
					border-radius: 1.25rem;
					border: 1px solid rgba(139, 92, 246, 0.2);
					background: rgba(15, 12, 30, 0.5);
					backdrop-filter: blur(12px);
					overflow: hidden;
					transition:
						border-color 0.25s,
						transform 0.25s;
				}
				.hero-stat-card:hover {
					border-color: rgba(139, 92, 246, 0.5);
					transform: translateY(-3px);
				}
				.hero-stat-card-glow {
					position: absolute;
					inset: 0;
					background: radial-gradient(
						circle at 50% 0%,
						rgba(139, 92, 246, 0.1),
						transparent 70%
					);
					pointer-events: none;
				}
				.hero-stat-value {
					font-size: 1.8rem;
					font-weight: 900;
					background: linear-gradient(120deg, #a78bfa, #60a5fa);
					-webkit-background-clip: text;
					-webkit-text-fill-color: transparent;
					background-clip: text;
					line-height: 1;
				}

				/* ── Skill pills ── */
				.hero-skill-pill {
					padding: 0.28rem 0.85rem;
					border-radius: 9999px;
					font-size: 0.75rem;
					font-weight: 500;
					border: 1px solid rgba(139, 92, 246, 0.25);
					background: rgba(139, 92, 246, 0.07);
					color: var(--muted-foreground);
					transition: all 0.18s;
				}
				.hero-skill-pill:hover {
					border-color: rgba(139, 92, 246, 0.6);
					color: var(--foreground);
					background: rgba(139, 92, 246, 0.14);
				}
				.hero-skill-pill-more {
					background: rgba(139, 92, 246, 0.12);
					color: rgba(196, 181, 253, 0.9);
					border-color: rgba(139, 92, 246, 0.35);
				}

				/* ── Scroll indicator ── */
				.hero-scroll-indicator {
					width: 22px;
					height: 36px;
					border-radius: 100px;
					border: 1.5px solid rgba(139, 92, 246, 0.4);
					display: flex;
					align-items: flex-start;
					justify-content: center;
					padding: 5px 0;
				}
				.hero-scroll-dot {
					width: 4px;
					height: 8px;
					border-radius: 100px;
					background: linear-gradient(to bottom, #a78bfa, #60a5fa);
					animation: scroll-bounce 1.8s ease-in-out infinite;
				}
				@keyframes scroll-bounce {
					0% {
						transform: translateY(0);
						opacity: 1;
					}
					80% {
						transform: translateY(14px);
						opacity: 0.2;
					}
					100% {
						transform: translateY(0);
						opacity: 1;
					}
				}
			`}</style>
		</section>
	);
}
