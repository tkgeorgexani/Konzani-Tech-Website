
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

const SoftwareDevelopment = () => {
  const services = [
    "Business Process Automation",
    "Custom Database Solutions", 
    "API Development & Integration",
    "Desktop Applications",
    "Mobile App Development",
    "System Integration",
    "Legacy System Modernization",
    "Cloud Migration Services"
  ];

  const technologies = [
    { name: "Python", description: "Versatile programming language for backend development" },
    { name: "Django", description: "High-level Python web framework" },
    { name: "Node.js", description: "JavaScript runtime for server-side development" },
    { name: "PostgreSQL", description: "Advanced open-source relational database" },
    { name: "MongoDB", description: "NoSQL database for flexible data storage" },
    { name: "REST APIs", description: "Web services for system integration" }
  ];

  const solutions = [
    {
      title: "Inventory Management System",
      description: "Complete stock tracking and management solution",
      features: ["Real-time inventory tracking", "Automated reorder alerts", "Supplier management", "Reporting dashboard"],
      industries: ["Retail", "Manufacturing", "Warehousing"]
    },
    {
      title: "Customer Relationship Management",
      description: "Manage customer interactions and sales pipeline",
      features: ["Contact management", "Sales tracking", "Email integration", "Performance analytics"],
      industries: ["Sales", "Marketing", "Service"]
    },
    {
      title: "Financial Management System",
      description: "Comprehensive accounting and financial tracking",
      features: ["Expense tracking", "Invoice generation", "Financial reporting", "Tax compliance"],
      industries: ["Accounting", "Finance", "SMEs"]
    }
  ];

  const benefits = [
    {
      title: "Increased Efficiency",
      description: "Automate repetitive tasks and streamline business processes to save time and reduce errors."
    },
    {
      title: "Better Decision Making",
      description: "Access real-time data and analytics to make informed business decisions quickly."
    },
    {
      title: "Scalable Solutions",
      description: "Software that grows with your business and adapts to changing requirements."
    },
    {
      title: "Competitive Advantage",
      description: "Custom solutions that give you an edge over competitors using generic software."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Custom Software Development
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Tailored software solutions that automate processes, improve efficiency, and solve unique business challenges. 
              From simple automation tools to complex enterprise systems, we build software that works for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                <Link to="/contact">Discuss Your Project</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Get Free Consultation</Link>
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
              Our Software Development Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive software development services tailored to your specific business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
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
              Our Technology Stack
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We use proven technologies to build robust, scalable, and maintainable software solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-green-600">{tech.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Examples */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Custom Solutions We Build
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Examples of software solutions we've developed for businesses in Malawi
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-green-600">{solution.title}</CardTitle>
                  <CardDescription>{solution.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Industries:</h4>
                    <div className="flex flex-wrap gap-1">
                      {solution.industries.map((industry, industryIndex) => (
                        <Badge key={industryIndex} className="bg-green-100 text-green-800 text-xs">
                          {industry}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits of Custom Software
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Why choose custom software development over off-the-shelf solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Development Approach
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We follow an agile development methodology to ensure your software meets your exact requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: "Requirements Analysis",
                description: "We work closely with you to understand your business processes and define detailed requirements."
              },
              {
                step: "System Design",
                description: "Our architects design a scalable and maintainable system architecture tailored to your needs."
              },
              {
                step: "Agile Development",
                description: "We build your software in iterative sprints, providing regular updates and gathering feedback."
              },
              {
                step: "Quality Assurance",
                description: "Comprehensive testing ensures your software is reliable, secure, and performs optimally."
              },
              {
                step: "Deployment",
                description: "We handle the deployment process and provide training to ensure smooth adoption."
              },
              {
                step: "Ongoing Support",
                description: "Continuous support and maintenance to keep your software running smoothly and up-to-date."
              }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
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
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build Your Custom Software?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your requirements and create a software solution that transforms your business processes. 
            Schedule a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SoftwareDevelopment;
