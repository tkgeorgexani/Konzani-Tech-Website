
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Phone, Mail } from "lucide-react";

const Index = () => {
  const services = [
    {
      title: "Web Development",
      description: "Modern, responsive websites that drive business growth",
      technologies: ["HTML5", "CSS", "React", "WordPress"],
      link: "/services/web-development"
    },
    {
      title: "Custom Software Development",
      description: "Tailored business applications and automation solutions",
      technologies: ["Python", "Django", "Node.js", "PostgreSQL"],
      link: "/services/software-development"
    },
    {
      title: "Networking",
      description: "Reliable network infrastructure for your business",
      technologies: ["Cisco", "MikroTik", "Ubiquiti"],
      link: "/services/networking"
    },
    {
      title: "Cyber Security",
      description: "Comprehensive security solutions to protect your business",
      technologies: ["Risk Assessment", "Firewalls", "Security Audits"],
      link: "/services/cyber-security"
    }
  ];

  const highlights = [
    {
      title: "Local Expertise",
      description: "Deep understanding of Malawi's business landscape and unique challenges"
    },
    {
      title: "Custom Solutions",
      description: "Tailored technology solutions designed specifically for your business needs"
    },
    {
      title: "24/7 Support",
      description: "Dedicated local support team available when you need us most"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Empowering Businesses with
              <span className="text-blue-600 block">Reliable Tech Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Based in Zomba, Malawi, Konzani Technology delivers cutting-edge web development, 
              custom software, networking, and cybersecurity solutions to help your business thrive in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link to="/contact">
                  Request a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services">See Our Services</Link>
              </Button>
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
              We provide comprehensive technology solutions tailored to meet the unique needs of businesses in Malawi
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Button asChild variant="outline" className="w-full">
                      <Link to={service.link}>
                        Learn More
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

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Konzani Technology?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine global best practices with local expertise to deliver exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
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
              We're proud to have served businesses across Malawi with innovative technology solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-lg">E-commerce Platform</CardTitle>
                <CardDescription>Local retail business</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Developed a comprehensive e-commerce solution that increased online sales by 200% for a local retailer in Zomba.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-lg">Network Infrastructure</CardTitle>
                <CardDescription>Educational institution</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Implemented secure network infrastructure for a local school, connecting 200+ devices with reliable Wi-Fi coverage.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-lg">Business Management System</CardTitle>
                <CardDescription>Manufacturing company</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Created a custom inventory management system that streamlined operations and reduced processing time by 50%.
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
            Get in touch with our team today to discuss how we can help your business grow with the right technology solutions.
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
