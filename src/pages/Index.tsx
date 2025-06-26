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

			{/* Recent Projects */}
			<section className="py-20 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							Recent Projects & Clients
						</h2>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">
							We're proud to have served businesses across Malawi with innovative
							technology solutions
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<Card className="hover:shadow-lg transition-shadow duration-300 bg-[#113452]">
							<CardHeader>
								<CardTitle className="text-lg text-white">
									E-commerce Platform
								</CardTitle>
								<CardDescription className="text-blue-100">
									Local retail business
								</CardDescription>
							</CardHeader>
							<CardContent>
								<p className="text-blue-100">
									Developed a comprehensive e-commerce solution that increased
									online sales by 200% for a local retailer in Zomba.
								</p>
							</CardContent>
						</Card>

						<Card className="hover:shadow-lg transition-shadow duration-300 bg-[#113452]">
							<CardHeader>
								<CardTitle className="text-lg text-white">
									Network Infrastructure
								</CardTitle>
								<CardDescription className="text-blue-100">
									Educational institution
								</CardDescription>
							</CardHeader>
							<CardContent>
								<p className="text-blue-100">
									Implemented secure network infrastructure for a local school,
									connecting 200+ devices with reliable Wi-Fi coverage.
								</p>
							</CardContent>
						</Card>

						<Card className="hover:shadow-lg transition-shadow duration-300 bg-[#113452]">
							<CardHeader>
								<CardTitle className="text-lg text-white">
									Business Management System
								</CardTitle>
								<CardDescription className="text-blue-100">
									Manufacturing company
								</CardDescription>
							</CardHeader>
							<CardContent>
								<p className="text-blue-100">
									Created a custom inventory management system that streamlined
									operations and reduced processing time by 50%.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Index;
