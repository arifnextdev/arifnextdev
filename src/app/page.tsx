import AIAutomationSection from "@/components/ai-automation-section";
import HeroSection from "@/components/hero-section";
import SkillsSection from "@/components/skills-section";
import MagicCards from "@/components/custom/MagicCard";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import HeroBg from "@/components/ui/HeroBg";
import IconClouds from "@/components/ui/iconCloud";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
	return (
		<main className="pb-20">
			<div className="fixed top-0 left-0 right-0 bottom-0">
				<HeroBg />
			</div>
			<HeroSection />

			<div className="space-y-10 max-w-6xl mx-auto">
				<section id="about ">
					<BlurFade delay={BLUR_FADE_DELAY * 3}>
						<h2 className="text-xl font-bold">About</h2>
					</BlurFade>
					<BlurFade delay={BLUR_FADE_DELAY * 4}>
						<Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
							{DATA.summary}
						</Markdown>
					</BlurFade>
				</section>

				<section className="grid gap-5 grid-cols-1 xl:grid-cols-2 xl:gap-10 ">
					<MagicCards>
						<section id="work" className="">
							<div className="flex min-h-0 flex-col gap-y-3">
								<BlurFade delay={BLUR_FADE_DELAY * 5}>
									<h2 className="text-xl font-bold">Work Experience</h2>
								</BlurFade>
								{DATA.work.map((work, id) => (
									<ResumeCard
										key={work.company}
										logoUrl={work.logoUrl}
										altText={work.company}
										title={work.company}
										subtitle={work.title}
										href={work.href}
										badges={work.badges}
										period={`${work.start} - ${work.end ?? "Present"}`}
										description={work.description}
									/>
								))}
							</div>
						</section>
					</MagicCards>

					<MagicCards>
						<section id="education">
							<div className="flex min-h-0 flex-col gap-y-3">
								<BlurFade delay={BLUR_FADE_DELAY * 7}>
									<h2 className="text-xl font-bold">Education</h2>
								</BlurFade>
								{DATA.education.map((education, id) => (
									<ResumeCard
										key={education.school}
										href={education.href}
										logoUrl={education.logoUrl}
										altText={education.school}
										title={education.school}
										subtitle={education.degree}
										period={`${education.start} - ${education.end}`}
									/>
								))}
							</div>
						</section>
					</MagicCards>
				</section>

				<SkillsSection />

				<AIAutomationSection />

				<section id="projects">
					<div className="space-y-12 w-full py-12">
						<BlurFade delay={BLUR_FADE_DELAY * 11}>
							<div className="flex flex-col items-center justify-center space-y-4 text-center">
								<div className="space-y-2">
									<div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
										My Projects
									</div>
									<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
										Check out my latest work
									</h2>
									<p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
										I&apos;ve worked on a variety of projects, from simple
										websites to complex web applications. Here are a few of my
										favorites.
									</p>
								</div>
							</div>
						</BlurFade>
						<div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3 md:gap-10 max-w-[800px] xl:max-w-full mx-auto">
							{DATA.projects.map((project, id) => (
								<BlurFade
									key={project.title}
									delay={BLUR_FADE_DELAY * 12 + id * 0.05}
								>
									<ProjectCard
										href={project.href}
										key={project.title}
										title={project.title}
										description={project.description}
										dates={project.dates}
										tags={project.technologies}
										image={project.image}
										video={project.video}
										links={project.links}
									/>
								</BlurFade>
							))}
						</div>
					</div>
				</section>
				<section id="iconcloud">
					<div className="flex justify-center">
						<IconClouds />
					</div>
				</section>
				<section id="contact">
					<div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
						<BlurFade delay={BLUR_FADE_DELAY * 16}>
							<div className="space-y-3">
								<div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
									Contact
								</div>
								<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
									Get in Touch
								</h2>
								<p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									Want to chat? Just shoot me a dm{" "}
									<Link
										href={DATA.contact.social.whatsapp.url}
										className="text-blue-500 hover:underline"
									>
										with a direct question on Whatsapp
									</Link>{" "}
									and I&apos;ll respond whenever I can. I will ignore all
									soliciting.
								</p>
							</div>
						</BlurFade>
					</div>
				</section>
			</div>
		</main>
	);
}
