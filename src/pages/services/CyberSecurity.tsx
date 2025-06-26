
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, AlertTriangle, Lock } from "lucide-react";

const CyberSecurity = () => {
  const services = [
    "Security Risk Assessments",
    "Firewall Setup & Configuration",
    "Vulnerability Testing & Penetration Testing",
    "Security Awareness Training",
    "Incident Response Planning",
    "Compliance Consulting",
    "Endpoint Protection",
    "Security Monitoring & Management"
  ];

  const tools = [
    { name: "Kali Linux", description: "Penetration testing and security auditing", icon: Shield },
    { name: "Wireshark", description: "Network protocol analyzer for traffic monitoring", icon: Shield },
    { name: "Nessus", description: "Vulnerability scanner for identifying security weaknesses", icon: AlertTriangle },
    { name: "Firewalls", description: "Network security barriers and access control", icon: Shield },
    { name: "Antivirus Solutions", description: "Endpoint protection and malware detection", icon: Lock },
    { name: "Encryption", description: "Data protection and secure communications", icon: Lock }
  ];

  const threats = [
    {
      title: "Malware & Ransomware",
      description: "Protect against malicious software that can encrypt or steal your data",
      impact: "High",
      solutions: ["Endpoint protection", "Regular backups", "User training", "Email filtering"]
    },
    {
      title: "Phishing Attacks",
      description: "Defend against fraudulent emails designed to steal credentials",
      impact: "High",
      solutions: ["Email security", "User awareness", "Multi-factor authentication", "Web filtering"]
    },
    {
      title: "Data Breaches",
      description: "Prevent unauthorized access to sensitive business information",
      impact: "Critical",
      solutions: ["Access controls", "Encryption", "Monitoring", "Incident response"]
    },
    {
      title: "Insider Threats",
      description: "Mitigate risks from employees or contractors with malicious intent",
      impact: "Medium",
      solutions: ["Access monitoring", "Privilege management", "Background checks", "Training"]
    }
  ];

  const assessmentAreas = [
    {
      category: "Network Security",
      items: ["Firewall configuration", "Network segmentation", "Wireless security", "VPN security"]
    },
    {
      category: "Endpoint Security",
      items: ["Antivirus coverage", "Patch management", "Device encryption", "Mobile device management"]
    },
    {
      category: "Data Protection",
      items: ["Data classification", "Backup procedures", "Access controls", "Encryption standards"]
    },
    {
      category: "Policies & Procedures",
      items: ["Security policies", "Incident response", "User training", "Compliance requirements"]
    }
  ];

  const compliance = [
    {
      standard: "ISO 27001",
      description: "International standard for information security management",
      benefits: ["Systematic approach", "Risk management", "Continuous improvement"]
    },
    {
      standard: "Local Regulations",
      description: "Compliance with Malawian data protection and privacy laws",
      benefits: ["Legal compliance", "Avoid penalties", "Customer trust"]
    },
    {
      standard: "Industry Standards",
      description: "Sector-specific security requirements and best practices",
      benefits: ["Industry alignment", "Competitive advantage", "Stakeholder confidence"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-orange-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Cyber Security Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Comprehensive security solutions to protect your business from cyber threats and data breaches. 
              From risk assessments to incident response, we help you build a robust security posture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                <Link to="/contact">Get Security Assessment</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Emergency Response</Link>
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
              Our Cyber Security Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive security services to protect your business from evolving cyber threats
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-red-50 rounded-lg">
                <CheckCircle className="h-6 w-6 text-red-600 flex-shrink-0" />
                <span className="text-gray-900 font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Security Tools & Technologies
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Industry-leading security tools and technologies to protect your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <tool.icon className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle className="text-xl text-red-600">{tool.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{tool.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Landscape */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Cyber Threats
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Understanding the threats your business faces and how we can help protect you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {threats.map((threat, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl text-red-600">{threat.title}</CardTitle>
                    <Badge className={`${threat.impact === 'Critical' ? 'bg-red-100 text-red-800' : threat.impact === 'High' ? 'bg-orange-100 text-orange-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {threat.impact} Risk
                    </Badge>
                  </div>
                  <CardDescription>{threat.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-gray-900 mb-2">Our Solutions:</h4>
                  <ul className="space-y-1">
                    {threat.solutions.map((solution, solutionIndex) => (
                      <li key={solutionIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-2 flex-shrink-0"></div>
                        {solution}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Assessment */}
      <section className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Security Risk Assessment
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive evaluation of your current security posture across all critical areas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {assessmentAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg text-red-600">{area.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {area.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Compliance & Standards
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ensure your business meets regulatory requirements and industry standards
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {compliance.map((standard, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-red-600">{standard.standard}</CardTitle>
                  <CardDescription>{standard.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {standard.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-2 flex-shrink-0"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Training */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Security Awareness Training
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Educate your team about cyber security best practices and threat awareness
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-red-600">Basic Security Training</CardTitle>
                <CardDescription>Essential security awareness for all employees</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {["Password security", "Email safety", "Social engineering", "Safe browsing"].map((topic, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {topic}
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full">
                  <Link to="/contact">Schedule Training</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-red-600">Advanced Training</CardTitle>
                <CardDescription>Specialized training for IT staff and administrators</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {["Incident response", "Threat hunting", "Security tools", "Compliance"].map((topic, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {topic}
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full">
                  <Link to="/contact">Schedule Training</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-red-600">Simulated Attacks</CardTitle>
                <CardDescription>Practical testing of security awareness</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {["Phishing simulations", "Social engineering tests", "Performance metrics", "Ongoing assessment"].map((topic, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {topic}
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full">
                  <Link to="/contact">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Protect Your Business Today
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Don't wait for a security incident to happen. Get a comprehensive security assessment 
            and start protecting your business from cyber threats today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Get Security Assessment</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
              <Link to="/contact">Emergency Support</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CyberSecurity;
