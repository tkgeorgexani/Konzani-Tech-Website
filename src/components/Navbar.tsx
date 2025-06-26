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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/KonzaniTechLogo.png"
              alt="Konzani Technology Logo"
              className="h-14 w-auto object-contain"
              style={{ maxHeight: "56px" }}
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

            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link to="/contact">Get Quote</Link>
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
                  <Button asChild className="bg-blue-600 hover:bg-blue-700 mx-3">
                    <Link to="/contact" onClick={() => setIsOpen(false)}>
                      Get Quote
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
