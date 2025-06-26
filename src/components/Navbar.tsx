import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showQuoteDialog, setShowQuoteDialog] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false); // Thank you message state
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const services = [
    {
      title: "Web Development",
      href: "/services/web-development",
      description: "Custom websites and e-commerce solutions"
    },
    {
      title: "Custom Software Development",
      href: "/services/software-development",
      description: "Tailored business applications and automation"
    },
    {
      title: "Networking",
      href: "/services/networking",
      description: "LAN setup, Wi-Fi, and server installation"
    },
    {
      title: "Cyber Security",
      href: "/services/cyber-security",
      description: "Risk assessments and security solutions"
    }
  ];

  // Function to send form data to email via EmailJS (client-side)
  const sendQuoteEmail = async (formData: any) => {
    // You need to set up EmailJS (https://www.emailjs.com/) and replace these values:
    const serviceID = "your_service_id";
    const templateID = "your_template_id";
    const userID = "your_public_key";
    const templateParams = {
      firstname: formData.get("firstname"),
      lastname: formData.get("lastname"),
      email: formData.get("email"),
      countryCode: formData.get("countryCode"),
      phone: formData.get("phone"),
      service: formData.get("service"),
      additionalInfo: formData.get("additionalInfo"),
      to_email: "thokozanigeorgee@gmail.com"
    };

    try {
      // @ts-ignore
      await window.emailjs.send(serviceID, templateID, templateParams, userID);
      return true;
    } catch (error) {
      return false;
    }
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/KonzaniTechLogo.png"
              alt="Konzani Technology Logo"
              className="h-14 w-[120px] object-contain"
              style={{ maxHeight: "80px" }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link
                    to="/"
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive("/") ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    Home
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link
                    to="/about"
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive("/about") ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    About
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-80 p-4 bg-white">
                      <div className="grid gap-3">
                        {services.map((service) => (
                          <Link
                            key={service.href}
                            to={service.href}
                            className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            <div className="font-medium text-gray-900">{service.title}</div>
                            <div className="text-sm text-gray-600 mt-1">{service.description}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    to="/contact"
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive("/contact") ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    Contact
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button
              asChild
              className="bg-[#25264b] hover:bg-[#ffca0c] px-10 py-6 font-semibold transition-colors"
              onClick={() => setShowQuoteDialog(true)}
            >
              <span>Get Quote</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  <Link
                    to="/"
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      isActive("/") ? "text-blue-600 bg-blue-50" : "text-gray-700"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    to="/about"
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      isActive("/about") ? "text-blue-600 bg-blue-50" : "text-gray-700"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    to="/services"
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      isActive("/services") ? "text-blue-600 bg-blue-50" : "text-gray-700"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    Services
                  </Link>
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      to={service.href}
                      className="px-6 py-2 text-sm text-gray-600 hover:text-blue-600"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                  <Link
                    to="/contact"
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      isActive("/contact") ? "text-blue-600 bg-blue-50" : "text-gray-700"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                  <Button
                    asChild
                    className="bg-[#25264b] hover:bg-[#ffca0c] px-6 py-2 font-semibold mx-4 transition-colors"
                    onClick={() => setShowQuoteDialog(true)}
                  >
                    <span>Get Quote</span>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      {/* Quote Dialog */}
      <Dialog open={showQuoteDialog || showThankYou} onOpenChange={setShowQuoteDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {showThankYou ? "Thank You!" : "Get a Quote"}
            </DialogTitle>
          </DialogHeader>
          {showThankYou ? (
            <div className="py-8 text-center">
              <p className="text-lg font-semibold mb-4">Thank you for submitting your quote request!</p>
              <Button
                className="w-full bg-[#25264b] hover:bg-[#ffca0c] font-semibold transition-colors"
                onClick={() => {
                  setShowThankYou(false);
                  setShowQuoteDialog(false);
                }}
              >
                Close
              </Button>
            </div>
          ) : (
            <form
              className="space-y-4"
              onSubmit={async e => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                // Send email (client-side, e.g. with EmailJS)
                const sent = await sendQuoteEmail(formData);
                if (sent) {
                  setShowQuoteDialog(false);
                  setShowThankYou(true);
                } else {
                  alert("There was an error sending your quote. Please try again.");
                }
              }}
            >
              <div className="flex space-x-2">
                <input
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  required
                  className="w-1/2 border rounded px-3 py-2"
                />
                <input
                  type="text"
                  name="lastname"
                  placeholder="Last Name or Surname"
                  required
                  className="w-1/2 border rounded px-3 py-2"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full border rounded px-3 py-2"
              />
              <div className="flex space-x-2">
                <select
                  name="countryCode"
                  required
                  className="w-1/3 border rounded px-3 py-2"
                  defaultValue="+265"
                >
                  <option value="+265">🇲🇼 +265</option>
                  <option value="+27">🇿🇦 +27</option>
                  <option value="+260">🇿🇲 +260</option>
                  <option value="+254">🇰🇪 +254</option>
                  <option value="+44">🇬🇧 +44</option>
                  <option value="+1">🇺🇸 +1</option>
                </select>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  className="w-2/3 border rounded px-3 py-2"
                />
              </div>
              <select
                name="service"
                required
                className="w-full border rounded px-3 py-2"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a Service
                </option>
                {services.map(service => (
                  <option key={service.href} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
              <textarea
                name="additionalInfo"
                placeholder="Additional Info"
                className="w-full border rounded px-3 py-2"
                rows={3}
              />
              <Button
                type="submit"
                className="w-full bg-[#25264b] hover:bg-[#ffca0c] font-semibold transition-colors"
              >
                Submit a Quote
              </Button>
            </form>
          )}
          <DialogClose asChild>
            <Button variant="outline" className="mt-2 w-full" onClick={() => {
              setShowThankYou(false);
              setShowQuoteDialog(false);
            }}>
              Close
            </Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </nav>
  );
};

export default Navbar;
