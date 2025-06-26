import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ArrowRight, Phone, Mail } from "lucide-react"; // Import icons

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
								We develop modern websites, bold brand identities, business systems,
								and custom tools—all under one roof, built to serve your mission.
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
			<section className="py-20 bg-white">
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
							<Card
								key={index}
								className="h-full p-8 flex flex-col justify-between border border-gray-200 shadow-none hover:shadow-lg transition-shadow duration-300 bg-[#113452]"
							>
								<div>
									<h3 className="text-2xl font-semibold text-white mb-4">
										{service.title}
									</h3>
									<p className="text-blue-100 text-base mb-6">
										{service.description}
									</p>
								</div>
								<div className="flex justify-between items-center border-t border-blue-900 pt-4 mt-4">
									<Link
										to={service.link}
										className="font-semibold text-yellow-400 hover:underline flex items-center"
									>
										Read More
										<ArrowRight className="ml-2 h-4 w-4" />
									</Link>
								</div>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Why Choose Us */}
			<section className="py-20 bg-gray-50">
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

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{highlights.map((highlight, index) => (
							<div
								key={index}
								className="text-center bg-[#113452] rounded-lg p-8 flex flex-col items-center"
							>
								<div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
									<span className="text-white text-2xl font-bold">
										{index + 1}
									</span>
								</div>
								<h3 className="text-xl font-semibold text-white mb-4">
									{highlight.title}
								</h3>
								<p className="text-blue-100">{highlight.description}</p>
							</div>
						))}
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
								<CardTitle className="text-lg text-white">E-commerce Platform</CardTitle>
								<CardDescription className="text-blue-100">Local retail business</CardDescription>
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
								<CardTitle className="text-lg text-white">Network Infrastructure</CardTitle>
								<CardDescription className="text-blue-100">Educational institution</CardDescription>
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
								<CardTitle className="text-lg text-white">Business Management System</CardTitle>
								<CardDescription className="text-blue-100">Manufacturing company</CardDescription>
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

			{/* Contact CTA */}
			<section className="py-20 bg-blue-600">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
						Ready to Transform Your Business?
					</h2>
					<p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
						Get in touch with our team today to discuss how we can help your
						business grow with the right technology solutions.
					</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
						<Button asChild size="lg" variant="secondary">
							<Link to="/contact">Get Started Today</Link>
						</Button>
						<div className="flex items-center justify-center space-x-6 text-white">
							<div className="flex items-center space-x-2">
								<Phone className="h-5 w-5" />
								<span>+265 XXX XXX XXX</span>
							</div>
							<div className="flex items-center space-x-2">
								<Mail className="h-5 w-5" />
								<span>info@konzanitech.mw</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Index;
