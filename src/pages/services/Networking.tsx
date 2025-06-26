
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Wifi, Server, Shield } from "lucide-react";

const Networking = () => {
  const services = [
    "LAN/WAN Network Setup",
    "Wi-Fi Network Design & Installation",
    "Server Installation & Configuration",
    "Network Cabling & Infrastructure",
    "Network Security Implementation",
    "Performance Monitoring & Optimization",
    "VPN Setup & Configuration",
    "Network Maintenance & Support"
  ];

  const technologies = [
    { name: "Cisco", description: "Enterprise-grade networking equipment and solutions", icon: Server },
    { name: "MikroTik", description: "Cost-effective routing and wireless solutions", icon: Wifi },
    { name: "Ubiquiti", description: "Scalable enterprise Wi-Fi and networking", icon: Wifi },
    { name: "Fiber Optic", description: "High-speed fiber optic cabling and infrastructure", icon: Server },
    { name: "Ethernet", description: "Reliable wired network connections", icon: Server },
    { name: "VPN", description: "Secure remote access solutions", icon: Shield }
  ];

  const solutions = [
    {
      title: "Small Office Network",
      description: "Complete networking solution for small businesses",
      features: [
        "Up to 25 users",
        "Managed Wi-Fi",
        "Basic firewall",
        "Email server",
        "File sharing",
        "Remote access"
      ],
      price: "Contact for pricing"
    },
    {
      title: "Enterprise Network",
      description: "Scalable networking for large organizations",
      features: [
        "100+ users",
        "Enterprise Wi-Fi",
        "Advanced security",
        "Load balancing",
        "Redundancy",
        "24/7 monitoring"
      ],
      price: "Contact for pricing"
    },
    {
      title: "Wireless Solutions",
      description: "Comprehensive Wi-Fi coverage and management",
      features: [
        "Site survey",
        "Coverage planning",
        "Guest networks",
        "Bandwidth control",
        "Access control",
        "Performance optimization"
      ],
      price: "Contact for pricing"
    }
  ];

  const benefits = [
    {
      icon: Wifi,
      title: "Reliable Connectivity",
      description: "Ensure your team stays connected with robust, high-performance network infrastructure."
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Protect your business data with enterprise-grade security measures and monitoring."
    },
    {
      icon: Server,
      title: "Scalable Solutions",
      description: "Network infrastructure that grows with your business and adapts to changing needs."
    }
  ];

  const industries = [
    {
      name: "Education",
      description: "Schools and universities requiring reliable campus-wide connectivity",
      challenges: ["Large user base", "Bandwidth management", "Content filtering"]
    },
    {
      name: "Healthcare",
      description: "Medical facilities needing secure and compliant network infrastructure",
      challenges: ["Patient data security", "Medical device connectivity", "Compliance requirements"]
    },
    {
      name: "Hospitality",
      description: "Hotels and restaurants providing guest Wi-Fi and internal systems",
      challenges: ["Guest access", "POS systems", "Bandwidth allocation"]
    },
    {
      name: "Manufacturing",
      description: "Industrial facilities requiring robust network for operations",
      challenges: ["Industrial environment", "Machine connectivity", "Real-time data"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-violet-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Networking Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Reliable network infrastructure that keeps your business connected and running smoothly. 
              From small office setups to enterprise-wide implementations, we design and deploy networks that work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
                <Link to="/contact">Get Network Assessment</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Request Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Networking Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive networking solutions designed to meet your business connectivity needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg">
                <CheckCircle className="h-6 w-6 text-purple-600 flex-shrink-0" />
                <span className="text-gray-900 font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies & Equipment
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We work with industry-leading networking technologies to deliver reliable solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <tech.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl text-purple-600">{tech.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Network Solutions Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pre-configured packages designed for different business sizes and requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className={`h-full hover:shadow-lg transition-shadow duration-300 ${index === 1 ? 'border-2 border-purple-500 scale-105' : ''}`}>
                {index === 1 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-purple-500 text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl text-purple-600">{solution.title}</CardTitle>
                  <CardDescription>{solution.description}</CardDescription>
                  <div className="text-2xl font-bold text-gray-900">{solution.price}</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full">
                    <Link to="/contact">Get Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Networking Solutions?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Benefits of working with our networking experts
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized networking solutions for various industries in Malawi
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-purple-600">{industry.name}</CardTitle>
                  <CardDescription>{industry.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-gray-900 mb-2">Common Challenges:</h4>
                  <ul className="space-y-1">
                    {industry.challenges.map((challenge, challengeIndex) => (
                      <li key={challengeIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-2 flex-shrink-0"></div>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Implementation Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic approach to designing and implementing your network infrastructure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "Site Survey",
                description: "Comprehensive assessment of your facility and requirements"
              },
              {
                step: "Network Design",
                description: "Custom network architecture tailored to your needs"
              },
              {
                step: "Installation",
                description: "Professional installation and configuration of equipment"
              },
              {
                step: "Testing & Support",
                description: "Thorough testing and ongoing maintenance support"
              }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{phase.step}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Upgrade Your Network?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Get a free network assessment and discover how we can improve your business connectivity. 
            Contact us today to get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Schedule Assessment</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Networking;
