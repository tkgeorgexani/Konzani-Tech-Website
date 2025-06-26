
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle } from "lucide-react";

const WebDevelopment = () => {
  const features = [
    "Custom Website Design",
    "Responsive Mobile Design",
    "E-commerce Solutions",
    "Content Management Systems",
    "SEO Optimization",
    "Website Maintenance",
    "Performance Optimization",
    "Security Implementation"
  ];

  const technologies = [
    { name: "HTML5", description: "Modern markup for structured content" },
    { name: "CSS3", description: "Advanced styling and animations" },
    { name: "JavaScript", description: "Interactive and dynamic functionality" },
    { name: "React", description: "Component-based user interfaces" },
    { name: "WordPress", description: "Content management system" },
    { name: "Shopify", description: "E-commerce platform integration" }
  ];

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Complete online store with payment integration",
      tech: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Corporate Website",
      description: "Professional business website with CMS",
      tech: ["WordPress", "PHP", "MySQL"]
    },
    {
      title: "Restaurant Website",
      description: "Online menu and reservation system",
      tech: ["HTML5", "CSS3", "JavaScript"]
    }
  ];

  const process = [
    {
      step: "Discovery",
      description: "We analyze your business requirements, target audience, and goals to create a comprehensive project plan."
    },
    {
      step: "Design",
      description: "Our designers create mockups and wireframes that reflect your brand identity and user experience goals."
    },
    {
      step: "Development",
      description: "We build your website using modern technologies, ensuring it's fast, secure, and scalable."
    },
    {
      step: "Testing",
      description: "Thorough testing across devices and browsers to ensure optimal performance and functionality."
    },
    {
      step: "Launch",
      description: "We deploy your website and provide training on how to manage and update your content."
    },
    {
      step: "Support",
      description: "Ongoing maintenance, updates, and support to keep your website running smoothly."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Web Development Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Create stunning, responsive websites that drive business growth and engage your customers effectively. 
              From simple business websites to complex e-commerce platforms, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Request Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive web development services tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <span className="text-gray-900 font-medium">{feature}</span>
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
              Technologies We Use
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We leverage the latest web technologies to build fast, secure, and scalable websites
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">{tech.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{tech.description}</p>
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
              Our Development Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures your project is delivered on time and exceeds expectations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.step}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recent Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Examples of our web development work for businesses in Malawi
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} className="bg-blue-100 text-blue-800">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Service Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the package that best fits your needs and budget
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl">Basic Website</CardTitle>
                <CardDescription>Perfect for small businesses</CardDescription>
                <div className="text-3xl font-bold text-blue-600">Contact for Pricing</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {["Up to 5 pages", "Responsive design", "Basic SEO", "Contact form", "1 month support"].map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full">
                  <Link to="/contact">Get Quote</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-500 relative scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-500 text-white px-4 py-1">Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Professional Website</CardTitle>
                <CardDescription>Ideal for growing businesses</CardDescription>
                <div className="text-3xl font-bold text-blue-600">Contact for Pricing</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {["Up to 10 pages", "Custom design", "Advanced SEO", "CMS integration", "3 months support", "Analytics setup"].map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link to="/contact">Get Quote</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl">E-commerce Website</CardTitle>
                <CardDescription>Complete online store solution</CardDescription>
                <div className="text-3xl font-bold text-blue-600">Contact for Pricing</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {["Unlimited products", "Payment integration", "Inventory management", "Customer accounts", "6 months support", "Training included"].map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full">
                  <Link to="/contact">Get Quote</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build Your Website?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's create a stunning website that represents your brand and drives business growth. 
            Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;
