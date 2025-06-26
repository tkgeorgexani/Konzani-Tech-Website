import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from "@/components/ui/card";
import { ArrowRight, Phone, Mail, Box } from "lucide-react"; // Import icons
import "./card-hover.css"; // <-- create this file if you want to keep styles separate
import { useState } from "react";

const services = [
	{
		title: "Web Development",
		description:
			"We build modern, responsive websites and e-commerce platforms that help you reach more customers and grow your business online.",
		link: "/services/web-development",
	},
	{
		title: "Custom Software Development",
		description:
			"Get tailored business applications and automation tools designed to streamline your workflow and boost productivity.",
		link: "/services/software-development",
	},
	{
		title: "Networking",
		description:
			"We design and install secure, scalable LAN, Wi-Fi, and server solutions to keep your business connected and running smoothly.",
		link: "/services/networking",
	},
	{
		title: "Cyber Security",
		description:
			"Protect your business with comprehensive risk assessments and advanced security solutions for your data and IT infrastructure.",
		link: "/services/cyber-security",
	},
];

const testimonials = [
	{
		name: "Chikondi Banda",
		company: "Malawi Retailers Ltd.",
		message:
			"Konzani Tech delivered our e-commerce platform on time and exceeded our expectations. Their support team is always available and helpful!",
		image: "https://randomuser.me/api/portraits/men/32.jpg",
	},
	{
		name: "Linda Mphatso",
		company: "Blantyre Schools",
		message:
			"The custom software they built for us has streamlined our operations. Highly recommended for any business looking for real results.",
		image: "https://randomuser.me/api/portraits/women/44.jpg",
	},
	{
		name: "Peter Zulu",
		company: "ZamNet Solutions",
		message:
			"Their networking solutions are reliable and secure. We’ve never had a smoother IT experience.",
		image: "https://randomuser.me/api/portraits/men/65.jpg",
	},
];

type Testimonial = {
	name: string;
	company: string;
	message: string;
	image: string;
};

function TestimonialCarousel({
	testimonials,
}: {
	testimonials: Testimonial[];
}) {
	const [current, setCurrent] = useState(0);

	const prev = () =>
		setCurrent((current - 1 + testimonials.length) % testimonials.length);
	const next = () =>
		setCurrent((current + 1) % testimonials.length);

	return (
		<div className="flex flex-col items-center">
			<div className="relative w-full max-w-xl">
				<div className="rounded-2xl bg-[#f7f7f7] shadow p-8 border border-gray-200 flex flex-col items-center text-center min-h-[260px] transition-all duration-500">
					<img
						src={testimonials[current].image}
						alt={testimonials[current].name}
						className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
					/>
					<p className="text-lg text-gray-800 mb-4">
						&ldquo;{testimonials[current].message}&rdquo;
					</p>
					<div className="font-semibold text-[#113452]">
						{testimonials[current].name}
					</div>
					<div className="text-gray-500 text-sm">
						{testimonials[current].company}
					</div>
				</div>
				{/* Carousel Controls */}
				<button
					onClick={prev}
					className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 shadow hover:bg-gray-100 transition"
					aria-label="Previous"
				>
					&#8592;
				</button>
				<button
					onClick={next}
					className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 shadow hover:bg-gray-100 transition"
					aria-label="Next"
				>
					&#8594;
				</button>
			</div>
			{/* Dots */}
			<div className="flex gap-2 mt-6">
				{testimonials.map((_, idx) => (
					<button
						key={idx}
						className={`w-3 h-3 rounded-full ${
							idx === current ? "bg-[#113452]" : "bg-gray-300"
						}`}
						onClick={() => setCurrent(idx)}
						aria-label={`Go to testimonial ${idx + 1}`}
					/>
				))}
			</div>
		</div>
	);
}

const Index = () => {
	const highlights = [
		{
			title: "Local Expertise",
			description:
				"Deep understanding of Malawi's business landscape and unique challenges",
		},
		{
			title: "Custom Solutions",
			description:
				"Tailored technology solutions designed specifically for your business needs",
		},
		{
			title: "24/7 Support",
			description:
				"Dedicated local support team available when you need us most",
		},
	];

	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="bg-[#113452]">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div
						className="flex flex-col lg:flex-row items-center"
						style={{ minHeight: "85vh" }} // Set hero section height to 80% of viewport
					>
						{/* Left: Content */}
						<div className="w-full lg:w-1/2 text-left">
							<h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
								Bringing Your
								<br /> to Life
								Through Technology
							</h1>
							<p className="text-lg md:text-xl text-blue-100 mb-8 max-w-xl">
								We develop modern websites, bold brand identities, business
								systems,
								<br className="hidden sm:block" /> and custom tools—all under
								one roof, built to serve your mission.
							</p>
							<div className="flex flex-col sm:flex-row gap-4">
								<Button
									asChild
									size="lg"
									className="bg-[#25264b] hover:bg-[#ffca0c]"
								>
									<Link to="/about">
										Learn More
										<ArrowRight className="ml-2 h-5 w-5" />
									</Link>
								</Button>
								<Button
									asChild
									size="lg"
									className="bg-white text-[#113452] hover:bg-gray-100"
								>
									<Link to="/services">
										Our Services
										<ArrowRight className="ml-2 h-5 w-5" />
									</Link>
								</Button>
							</div>
						</div>
						{/* Right: Image */}
						<div className="w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0">
							<img
								src="https://images.pexels.com/photos/3182743/pexels-photo-3182743.jpeg"
								alt="Team working"
								className="rounded-lg shadow-lg max-w-md w-full object-cover"
								style={{ minHeight: 350, maxHeight: 400 }}
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Services Overview */}
			<section className="py-20" style={{ background: "#f5f5dc" }}>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							Our Core Services
						</h2>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">
							We provide comprehensive technology solutions tailored to meet the
							unique needs of businesses in Malawi
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
						{services.map((service, index) => (
							<Link
								to={service.link}
								key={index}
								className="group block rounded-xl overflow-hidden transition-shadow duration-300"
								style={{ textDecoration: "none" }}
							>
								<div className="card-hover-bg h-full p-8 flex flex-col justify-between border border-gray-200 shadow-none bg-white group-hover:bg-[#113452] transition-colors duration-500 relative">
									<div>
										<h3 className="text-2xl font-semibold mb-4 transition-colors duration-300 group-hover:text-white">
											{service.title}
										</h3>
										<p className="text-gray-600 text-base mb-6 transition-colors duration-300 group-hover:text-blue-100">
											{service.description}
										</p>
									</div>
									<div className="flex justify-between items-center border-t pt-4 mt-4 border-blue-100 group-hover:border-blue-900">
										<span className="font-semibold text-blue-700 group-hover:text-yellow-400 flex items-center transition-colors duration-300">
											Read More
											<ArrowRight className="ml-2 h-4 w-4" />
										</span>
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* Why Choose Us */}
			<section className="py-20" style={{ background: "#f5f5dc" }}>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							Why Choose Konzani Technology?
						</h2>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">
							We combine global best practices with local expertise to deliver
							exceptional results
						</p>
					</div>
					{/* Cards Row */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
						{/* Card 1 */}
						<div className="rounded-2xl bg-[#f7f7f7] shadow flex flex-col justify-between p-8 h-full border border-gray-200">
							<div className="mb-6">
								<div className="bg-white rounded-xl w-16 h-16 flex items-center justify-center mb-4">
									<Box className="h-8 w-8 text-[#113452]" />
								</div>
								<h3 className="text-2xl font-bold mb-2 text-gray-900">
									Local Expertise
								</h3>
								<p className="text-gray-700">
									Deep understanding of Malawi's business landscape and unique
									challenges.
								</p>
							</div>
						</div>
						{/* Card 2 */}
						<div className="rounded-2xl bg-[#f7f7f7] shadow flex flex-col justify-between p-8 h-full border border-gray-200">
							<div className="mb-6">
								<div className="bg-white rounded-xl w-16 h-16 flex items-center justify-center mb-4">
									<Box className="h-8 w-8 text-[#113452]" />
								</div>
								<h3 className="text-2xl font-bold mb-2 text-gray-900">
									Custom Solutions
								</h3>
								<p className="text-gray-700">
									Tailored technology solutions designed specifically for your
									business needs.
								</p>
							</div>
						</div>
						{/* Card 3 */}
						<div className="rounded-2xl bg-[#f7f7f7] shadow flex flex-col justify-between p-8 h-full border border-gray-200">
							<div className="mb-6">
								<div className="bg-white rounded-xl w-16 h-16 flex items-center justify-center mb-4">
									<Box className="h-8 w-8 text-[#113452]" />
								</div>
								<h3 className="text-2xl font-bold mb-2 text-gray-900">
									24/7 Support
								</h3>
								<p className="text-gray-700">
									Dedicated local support team available when you need us most.
								</p>
							</div>
						</div>
					</div>
					{/* CTA Card */}
					<div className="grid grid-cols-1 md:grid-cols-3">
						<div className="md:col-span-3">
							<div className="rounded-2xl bg-[#113452] shadow flex flex-col md:flex-row items-center justify-between p-8 md:p-12">
								<div>
									<h3 className="text-2xl font-bold mb-2 text-white">
										Ready to Transform?
									</h3>
									<p className="text-blue-100 mb-6 md:mb-0">
										Get in touch with our team today to discuss how we can help
										your business grow with the right technology solutions.
									</p>
								</div>
								<Button
									asChild
									size="lg"
									className="bg-white text-[#113452] hover:bg-yellow-400 hover:text-[#113452] font-semibold transition-colors"
								>
									<Link to="/contact">
										Contact Now
										<ArrowRight className="ml-2 h-5 w-5" />
									</Link>
								</Button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Client Testimonials */}
			<section className="py-20 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							Client Testimonials
						</h2>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">
							Hear what our clients say about working with Konzani Technology.
						</p>
					</div>
					<TestimonialCarousel testimonials={testimonials} />
				</div>
			</section>
		</div>
	);
};

export default Index;
