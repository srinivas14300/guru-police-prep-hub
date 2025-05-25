
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Mock Tests", path: "/mock-tests" },
    { name: "Model Papers", path: "/model-papers" },
    { name: "Ask Doubts", path: "/ask-doubts" },
    { name: "Contact Us", path: "/contact" },
  ];

  const examCategories = [
    { name: "TS Constable", path: "#" },
    { name: "TS SI (Sub Inspector)", path: "#" },
    { name: "TS CI (Circle Inspector)", path: "#" },
    { name: "Police Recruitment", path: "#" },
    { name: "Physical Tests", path: "#" },
  ];

  const resources = [
    { name: "Study Materials", path: "#" },
    { name: "Previous Papers", path: "/model-papers" },
    { name: "Current Affairs", path: "#" },
    { name: "Syllabus & Pattern", path: "#" },
    { name: "Results & Updates", path: "#" },
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, url: "https://facebook.com/tspoliceguru", name: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, url: "https://twitter.com/tspoliceguru", name: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, url: "https://instagram.com/tspoliceguru", name: "Instagram" },
    { icon: <Youtube className="w-5 h-5" />, url: "https://youtube.com/@tspoliceguru", name: "YouTube" },
  ];

  return (
    <footer className="bg-gradient-to-br from-ts-blue to-blue-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-ts-gold mb-2">TS Police Guru</h3>
              <p className="text-blue-200 text-sm leading-relaxed">
                Empowering 25,000+ students across Telangana to achieve their dream of serving in the police force through comprehensive preparation resources.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-blue-200 text-sm">
                <Mail className="w-4 h-4 mr-3 text-ts-gold" />
                <a href="mailto:support@tspoliceguru.in" className="hover:text-ts-gold transition-colors">
                  support@tspoliceguru.in
                </a>
              </div>
              <div className="flex items-center text-blue-200 text-sm">
                <Phone className="w-4 h-4 mr-3 text-ts-gold" />
                <a href="https://wa.me/919876543210" className="hover:text-ts-gold transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center text-blue-200 text-sm">
                <MapPin className="w-4 h-4 mr-3 text-ts-gold" />
                <span>Hyderabad, Telangana</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-ts-gold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-blue-200 hover:text-ts-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Exam Categories */}
          <div>
            <h4 className="text-lg font-semibold text-ts-gold mb-4">Exam Categories</h4>
            <ul className="space-y-2">
              {examCategories.map((category, index) => (
                <li key={index}>
                  <a 
                    href={category.path} 
                    className="text-blue-200 hover:text-ts-gold transition-colors text-sm"
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold text-ts-gold mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((resource, index) => (
                <li key={index}>
                  <Link 
                    to={resource.path} 
                    className="text-blue-200 hover:text-ts-gold transition-colors text-sm"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* WhatsApp Group CTA */}
        <div className="mt-8 p-6 bg-blue-800 rounded-lg border border-blue-600">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold text-ts-gold mb-2">Join Our WhatsApp Community</h4>
              <p className="text-blue-200 text-sm">
                Connect with 5,000+ aspirants, get daily updates, and instant doubt resolution
              </p>
            </div>
            <a 
              href="https://chat.whatsapp.com/KLmN0pQ1rS2tU3vW4xY5z6"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-ts-gold text-ts-blue px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors flex items-center"
            >
              Join WhatsApp Group
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 pt-6 border-t border-blue-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-sm font-semibold text-ts-gold mb-2">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-200 hover:text-ts-gold transition-colors"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <div className="flex flex-col md:flex-row items-center text-blue-200 text-xs space-y-1 md:space-y-0 md:space-x-4">
                <span>Trusted by 25,000+ Students</span>
                <span className="hidden md:inline">•</span>
                <span>100% Free Platform</span>
                <span className="hidden md:inline">•</span>
                <span>Available 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-700 bg-blue-900">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-blue-300">
            <div className="mb-2 md:mb-0">
              <p>&copy; {currentYear} TS Police Guru. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-ts-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-ts-gold transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-ts-gold transition-colors">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
