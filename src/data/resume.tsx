import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
	name: "MD Ariful Islam",
	initials: "AI",
	url: "https://arifnextdev.vercel.app",
	location: "Agargaon Metro Station, Dhaka, Bangladesh",
	locationLink: "https://www.google.com/maps/place/Dhaka",
	description:
		"Full Stack Developer with 3+ years of experience building scalable web and mobile applications. Experienced in AI automation and integrating intelligent solutions into real-world products.",
	summary:
		"Full Stack Developer with 3+ years of experience building scalable web and mobile applications. Skilled in Node.js, Laravel, Python, and modern frontend technologies, with strong expertise in backend architecture and API development. Experienced in AI automation and integrating intelligent solutions into real-world products. Also proficient in graphics design, delivering complete end-to-end digital solutions.",
	avatarUrl: "/arif.jpg",
	skills: [
		// Frontend
		"React", "Next.js", "Vue.js", "Nuxt.js", "React Native",
		"TypeScript", "Tailwind CSS", "Redux", "Zustand", "Socket.io", "Framer Motion",
		// Backend
		"Node.js", "NestJS", "Express", "REST API", "oRPC",
		"Prisma", "JWT", "OAuth2", "Passport.js", "Clerk", "BetterAuth", "RabbitMQ",
		// Database
		"PostgreSQL", "MongoDB", "MySQL", "Redis",
		// DevOps & Cloud
		"Docker", "Nginx", "GitHub Actions", "AWS", "EC2", "VPS", "Dokploy", "Coolify",
		// AI & Scraping
		"Python", "Web Scraping", "Selenium", "BeautifulSoup", "Puppeteer", "Scrapy",
		// Design
		"Figma", "Canva", "Adobe Illustrator", "Adobe Photoshop",
		// SEO & CMS
		"WordPress", "SEO", "SEMrush", "Google Analytics", "Google Search Console",
	],
	navbar: [
		{ href: "/", icon: HomeIcon, label: "Home" },
		{ href: "/blog", icon: NotebookIcon, label: "Blog" },
	],
	contact: {
		email: "arif171042@gmail.com",
		tel: "+8801724097877",
		social: {
			GitHub: {
				name: "GitHub",
				url: "https://github.com/arifnextdev",
				icon: Icons.github,

				navbar: true,
			},
			LinkedIn: {
				name: "LinkedIn",
				url: "https://www.linkedin.com/in/md-arifulislam57/",
				icon: Icons.linkedin,

				navbar: true,
			},
			whatsapp: {
				name: "Whatsapp",
				url: "https://wa.me/+8801724097877",
				icon: Icons.whatsapp,

				navbar: true,
			},
			resume: {
				name: "Resume download",
				url: "https://drive.google.com/uc?export=download&id=1DhN72hOtew3SqGAi1rLtZVVkD6zyRjiw",
				icon: Icons.resume,
				navbar: true,
			},
			email: {
				name: "Send Email",
				url: "mailto:arif171042@gmail.com",
				icon: Icons.email,

				navbar: false,
			},
		},
	},

	work: [
		{
			company: "Way Wise Global",
			href: "https://waywisetech.com",
			badges: [],
			location: "On Site",
			title: "Full Stack Developer",
			logoUrl:
				"https://waywisetech.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fway-wise-text.da4b66f6.png&w=256&q=75&dpl=dpl_4mmYM7NHopJYFtu5uVAH7jD73j3K",
			start: "June 2025",
			end: "Present",
			description:
				"Working on full-stack web development, building and maintaining scalable web applications. Contributing to backend APIs, database management, and performance optimization.",
		},
		{
			company: "360 Support",
			href: "https://www.360-supports.com",
			badges: [],
			location: "On Site",
			title: "Full Stack Developer",
			logoUrl:
				"https://www.360-supports.com/wp-content/uploads/2024/11/360-Supports-1.png",
			start: "Sep 2024",
			end: "May 2025",
			description:
				"Developed and optimized scalable web applications with a strong focus on security and performance. Improved API efficiency and database management while collaborating with team members for seamless development.",
		},
		{
			company: "Thoughtbridge",
			href: "https://thoughtbridgeit.com",
			badges: [],
			location: "On Site",
			title: "Full Stack Web Developer",
			logoUrl: "/thoughtbridge.png",
			start: "Feb 2024",
			end: "Sep 2024",
			description:
				"Built and maintained high-performance applications, ensuring scalability and efficiency. Enhanced team workflows, implemented best coding practices, and integrated RESTful APIs for better system interoperability.",
		},
		{
			company: "Mathmozo IT",
			badges: [],
			href: "https://mathmozo.com",
			location: "On Site",
			title: "Junior Web Developer",
			logoUrl: "/mathmozo.jpg",
			start: "June 2023",
			end: "Dec 2023",
			description:
				"Assisted in web development, improving UI/UX and backend functionality. Worked on debugging, performance improvements, and ensuring responsive design across multiple devices.",
		},
	],
	education: [
		{
			school: "Canadian University of Bangladesh",
			href: "https://cub.edu.bd",
			degree: "BSC in CSE",
			logoUrl:
				"https://gallery.cub.ac.bd/var/albums/Web-Photos/CUB/Home/cub_logo-01/CUB_Logo.png?m=1681102027",
			start: "2024",
			end: "Running",
		},
		{
			school: "HABHIT",
			href: "https://www.habhit.edu.bd",
			degree: "Diploma in Computer Science",
			logoUrl:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkQvbp1w5rBlVsMwzaQzVNK4P8sXGQum-zVQ&s",
			start: "2020",
			end: "2024",
		},
	],
	projects: [
		{
			title: "Aevita — Digital Health Platform",
			href: "https://www.aevita.com",
			dates: "2025",
			active: true,
			description:
				"Aevita helps with responsible weight loss using GLP-1 medication and personal guidance. Built scalable backend APIs for online intake forms, video consultations, and patient management. Implemented secure authentication, appointment scheduling, and medication workflow systems.",
			technologies: [
				"Supabase",
				"Nextjs",
				"TypeScript",
				"PostgreSQL",
				"Tailwind CSS",
			],
			links: [
				{
					type: "Website",
					href: "https://www.aevita.com",
					icon: <Icons.globe className="size-3" />,
				},
			],
			image: "/projects/aevita.png",
			video: "",
		},
		{
			title: "WeOut — Experience Booking Platform",
			href: "#",
			dates: "2024",
			active: true,
			description:
				"Discover. Book. Go Out. A platform connecting users with local hosts for events like kayaking, live music, and unique experiences. Implemented booking workflows, user authentication, and responsive UI for seamless discovery and adventure booking.",
			technologies: [
				"Next.js",
				"Nest.js",
				"Redis",
				"RabbitMQ",
				"TypeScript",
				"Node.js",
				"PostgreSQL",
				"Prisma",
				"Tailwind CSS",
				"REST API",
				"Docker",
			],
			links: [
				{
					type: "Website",
					href: "#",
					icon: <Icons.globe className="size-3" />,
				},
			],
			image: "/projects/weout.png",
			video: "",
		},
		{
			title: "AsiaPlusBD — E-commerce Platform",
			href: "#",
			dates: "2024",
			active: true,
			description:
				"Developed an e-commerce platform for selling electrical and decorative ceiling fans online. Implemented product catalog, category management, and order processing features. Improved site performance and ensured responsive design across mobile and desktop devices.",
			technologies: [
				"Next.js",
				"TypeScript",
				"Node.js",
				"MongoDB",
				"Tailwind CSS",
				"REST API",
				"Docker",
				"Nginx",
			],
			links: [
				{
					type: "Website",
					href: "#",
					icon: <Icons.globe className="size-3" />,
				},
			],
			image: "/projects/asiaplus.png",
			video: "",
		},
		{
			title: "BrainPlus — Quiz Platform",
			href: "https://brainpulse.vercel.app/",
			dates: "Feb 2024 - May 2024",
			active: true,
			description:
				"BrainPlus is a quiz system designed to test and challenge your brain. Built using Next.js, TypeScript, and Tailwind CSS, it provides a sleek and interactive user interface. The backend is integrated with MongoDB using Mongoose to store quiz data and user progress.",
			technologies: [
				"Next.js",
				"TypeScript",
				"MongoDB",
				"Prisma",
				"Tailwind CSS",
			],
			links: [
				{
					type: "Website",
					href: "https://brainpulse.vercel.app/",
					icon: <Icons.globe className="size-3" />,
				},
				{
					type: "Source",
					href: "https://github.com/arifnextdev/brainplus",
					icon: <Icons.github className="size-3" />,
				},
			],
			image: "/projects/brainplus.png",
			video: "",
		},
		{
			title: "CRM Project",
			href: "https://crm-project-phi-azure.vercel.app/signin",
			dates: "April 2023 - March 2024",
			active: true,
			description:
				"Developed a CRM system with customer management, task tracking, and team collaboration features. Built with Next.js and Express backend with MySQL database and JWT authentication.",
			technologies: [
				"Next.js",
				"Next Auth",
				"TypeScript",
				"MySQL",
				"Tailwind CSS",
				"Shadcn UI",
				"Node.js",
				"Express",
				"REST API",
				"JWT",
			],
			links: [
				{
					type: "Website",
					href: "https://crm-project-phi-azure.vercel.app/signin",
					icon: <Icons.globe className="size-3" />,
				},
				{
					type: "Source",
					href: "https://github.com/arifnextdev/crm-project",
					icon: <Icons.github className="size-3" />,
				},
			],
			image: "/projects/crm.png",
			video: "",
		},
		{
			title: "SwiftCart — E-commerce API",
			href: "https://swiftcart-server.vercel.app/",
			dates: "Jan 2024 - Feb 2024",
			active: true,
			description:
				"SwiftCart is a Node.js-based e-commerce platform API built with Express, MongoDB, and Stripe for payment processing.",
			technologies: [
				"Node.js",
				"TypeScript",
				"Express",
				"MongoDB",
				"Stripe",
				"Morgan",
			],
			links: [
				{
					type: "Website",
					href: "https://swiftcart-server.vercel.app/",
					icon: <Icons.globe className="size-3" />,
				},
				{
					type: "Source",
					href: "https://github.com/arifnextdev/swiftcart-server",
					icon: <Icons.github className="size-3" />,
				},
			],
			image: "",
			video:
				"https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
		},
	],
	aiAutomation: {
		headline: "AI Automation & Intelligent Solutions",
		subheadline:
			"Transforming businesses with cutting-edge AI integration, intelligent automation workflows, and data-driven solutions that scale.",
		services: [
			{
				icon: "🤖",
				title: "Intelligent Web Scraping",
				description:
					"Automated data extraction systems using Python, Selenium, BeautifulSoup, Puppeteer & Scrapy with smart rate limiting and proxy rotation.",
				tech: ["Python", "Selenium", "Puppeteer", "Scrapy"],
			},
			{
				icon: "💬",
				title: "AI-Powered Chatbots",
				description:
					"Custom conversational AI solutions integrated with WhatsApp, web platforms, and business workflows for 24/7 customer engagement.",
				tech: ["Node.js", "NestJS", "RabbitMQ", "REST API"],
			},
			{
				icon: "⚡",
				title: "Workflow Automation",
				description:
					"End-to-end process automation — from data ingestion to report generation — reducing manual work by up to 80%.",
				tech: ["Node.js", "Docker", "GitHub Actions", "Redis"],
			},
			{
				icon: "🔄",
				title: "Smart Data Pipelines",
				description:
					"Real-time data processing pipelines with queue-based architecture for handling high-throughput operations efficiently.",
				tech: ["RabbitMQ", "PostgreSQL", "Redis", "Docker"],
			},
			{
				icon: "📈",
				title: "AI-Powered SEO & Analytics",
				description:
					"Intelligent SEO optimization with automated content analysis, keyword tracking, and performance monitoring dashboards.",
				tech: ["Python", "Google Analytics", "SEMrush", "Next.js"],
			},
			{
				icon: "🧠",
				title: "Predictive Analytics",
				description:
					"Data-driven insights and forecasting models to help businesses make informed decisions and stay ahead of competition.",
				tech: ["Python", "PostgreSQL", "Node.js", "REST API"],
			},
		],
	},
	hackathons: [],
} as const;
