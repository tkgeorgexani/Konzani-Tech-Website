
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const values = [
    {
      title: "Innovation",
      description: "We stay at the forefront of technology to deliver cutting-edge solutions that give our clients a competitive advantage."
    },
    {
      title: "Reliability",
      description: "Our clients trust us to deliver consistent, high-quality results on time and within budget."
    },
    {
      title: "Local Focus",
      description: "We understand the unique challenges and opportunities in the Malawian market and tailor our solutions accordingly."
    },
    {
      title: "Excellence",
      description: "We are committed to exceeding expectations and delivering exceptional value in every project we undertake."
    }
  ];

  const whyChooseUs = [
    "Deep understanding of local business environment and regulations",
    "Proven track record with businesses across various industries in Malawi",
    "Custom solutions designed specifically for your business needs",
    "Ongoing support and maintenance to ensure optimal performance",
    "Competitive pricing with transparent project costs",
    "Rapid response times and dedicated local support team"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Konzani Technology
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted technology partner in Malawi, dedicated to empowering businesses 
              through innovative and reliable tech solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Konzani Technology is a leading technology solutions provider based in Zomba, Malawi. 
                We specialize in delivering comprehensive IT services that help businesses across Malawi 
                leverage technology to achieve their goals and drive growth.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Founded with a vision to bridge the technology gap in Malawi, we combine international 
                best practices with deep local market knowledge to deliver solutions that truly work 
                for our clients.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-blue-100 text-blue-800">Local Expertise</Badge>
                <Badge className="bg-green-100 text-green-800">Proven Results</Badge>
                <Badge className="bg-purple-100 text-purple-800">Custom Solutions</Badge>
                <Badge className="bg-orange-100 text-orange-800">24/7 Support</Badge>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-indigo-200 rounded-lg p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-gray-700">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                  <div className="text-gray-700">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
                  <div className="text-gray-700">Years of Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg">
                  To support the digital transformation of businesses in Malawi by providing 
                  tailored, reliable, and innovative technology solutions that drive growth, 
                  improve efficiency, and create competitive advantages.
                </p>
              </CardContent>
            </Card>
            
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg">
                  To be Malawi's most trusted IT partner, recognized for our expertise, 
                  innovation, and commitment to helping businesses thrive in the digital age 
                  while contributing to the country's technological advancement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape how we interact with our clients and community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">{value.title[0]}</span>
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Konzani Technology?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              We bring together the best of local expertise and global technology standards
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <p className="text-blue-100 text-lg">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Expert Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our diverse team of technology professionals brings together years of experience 
              and expertise to deliver exceptional results for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">Dev</span>
                </div>
                <CardTitle>Development Team</CardTitle>
                <CardDescription>Full-stack developers and software engineers</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Experienced in modern web technologies, mobile development, and custom software solutions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">Net</span>
                </div>
                <CardTitle>Network Specialists</CardTitle>
                <CardDescription>Network engineers and infrastructure experts</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Certified professionals specializing in network design, implementation, and maintenance.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">Sec</span>
                </div>
                <CardTitle>Security Experts</CardTitle>
                <CardDescription>Cybersecurity analysts and consultants</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Dedicated professionals focused on protecting your business from cyber threats and vulnerabilities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
