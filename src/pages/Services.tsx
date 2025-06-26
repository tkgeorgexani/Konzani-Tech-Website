
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Create stunning, responsive websites that drive business growth and engage your customers effectively.",
      features: [
        "Custom Website Design",
        "E-commerce Solutions", 
        "Content Management Systems",
        "Mobile-Responsive Design",
        "SEO Optimization",
        "Website Maintenance"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "WordPress", "Shopify"],
      link: "/services/web-development",
      color: "blue"
    },
    {
      title: "Custom Software Development",
      description: "Tailored software solutions that automate processes, improve efficiency, and solve unique business challenges.",
      features: [
        "Business Process Automation",
        "Custom Database Solutions",
        "API Development & Integration",
        "Desktop Applications",
        "Mobile App Development",
        "System Integration"
      ],
      technologies: ["Python", "Django", "Node.js", "PostgreSQL", "MongoDB", "REST APIs"],
      link: "/services/software-development",
      color: "green"
    },
    {
      title: "Networking Solutions",
      description: "Reliable network infrastructure that keeps your business connected and running smoothly.",
      features: [
        "LAN/WAN Setup",
        "Wi-Fi Network Design",
        "Server Installation",
        "Network Cabling",
        "Network Security",
        "Performance Monitoring"
      ],
      technologies: ["Cisco", "MikroTik", "Ubiquiti", "Fiber Optic", "Ethernet", "VPN"],
      link: "/services/networking",
      color: "purple"
    },
    {
      title: "Cyber Security",
      description: "Comprehensive security solutions to protect your business from cyber threats and data breaches.",
      features: [
        "Security Risk Assessments",
        "Firewall Configuration",
        "Vulnerability Testing",
        "Security Training",
        "Incident Response",
        "Compliance Consulting"
      ],
      technologies: ["Kali Linux", "Wireshark", "Nessus", "Firewalls", "Antivirus", "Encryption"],
      link: "/services/cyber-security",
      color: "red"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "border-blue-200 hover:border-blue-300",
      green: "border-green-200 hover:border-green-300", 
      purple: "border-purple-200 hover:border-purple-300",
      red: "border-red-200 hover:border-red-300"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getBadgeColor = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-800",
      green: "bg-green-100 text-green-800",
      purple: "bg-purple-100 text-purple-800", 
      red: "bg-red-100 text-red-800"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to meet the unique needs of businesses in Malawi. 
              From web development to cybersecurity, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Technology Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide end-to-end technology services that help businesses grow, secure their operations, 
              and stay competitive in today's digital landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`h-full ${getColorClasses(service.color)} hover:shadow-lg transition-all duration-300`}>
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} className={getBadgeColor(service.color)}>
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4">
                    <Button asChild className="w-full">
                      <Link to={service.link}>
                        Learn More About {service.title}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We follow a proven methodology to ensure your project is delivered on time, within budget, and exceeds expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Consultation",
                description: "We start by understanding your business needs, goals, and challenges through detailed consultation."
              },
              {
                step: "2", 
                title: "Planning",
                description: "Our team creates a comprehensive project plan with clear timelines, milestones, and deliverables."
              },
              {
                step: "3",
                title: "Development",
                description: "We build your solution using best practices and cutting-edge technologies, keeping you updated throughout."
              },
              {
                step: "4",
                title: "Support",
                description: "After delivery, we provide ongoing support and maintenance to ensure optimal performance."
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project requirements and learn how we can help your business grow with the right technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link to="/contact">Request Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
