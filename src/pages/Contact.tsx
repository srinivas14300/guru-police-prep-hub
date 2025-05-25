
import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle, Users } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be added later
    alert("Thank you for your message! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-ts-gold" />,
      title: "Email Support",
      value: "support@tspoliceguru.in",
      action: "mailto:support@tspoliceguru.in",
      description: "24-48 hours response time"
    },
    {
      icon: <Phone className="w-6 h-6 text-ts-gold" />,
      title: "WhatsApp Support",
      value: "+91 9876543210",
      action: "https://wa.me/919876543210?text=Hi%20TS%20Police%20Guru,%20I%20need%20help%20with",
      description: "Quick response during 9 AM - 9 PM"
    },
    {
      icon: <MapPin className="w-6 h-6 text-ts-gold" />,
      title: "Location",
      value: "Hyderabad, Telangana",
      action: null,
      description: "Serving students across Telangana"
    },
  ];

  const quickLinks = [
    {
      title: "Join WhatsApp Group",
      description: "Connect with 5,000+ fellow aspirants",
      link: "https://chat.whatsapp.com/examplelink123",
      icon: <Users className="w-6 h-6 text-green-600" />
    },
    {
      title: "Live Chat Support",
      description: "Get instant help via our chatbot",
      link: "/ask-doubts",
      icon: <MessageCircle className="w-6 h-6 text-blue-600" />
    }
  ];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-ts-blue mb-4">
            Contact & Support
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Need help with your preparation? We're here to support you every step of the way. Reach out to us through any of the channels below.
          </p>
        </div>

        {/* Quick Support Links */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {quickLinks.map((link, index) => (
            <a
              key={index}
              href={link.link}
              target={link.link.startsWith('http') ? "_blank" : "_self"}
              rel={link.link.startsWith('http') ? "noopener noreferrer" : ""}
              className="bg-gradient-to-r from-ts-blue to-blue-800 text-white p-6 rounded-xl hover:shadow-xl transition-all transform hover:scale-105"
            >
              <div className="flex items-center mb-3">
                {link.icon}
                <h3 className="text-xl font-bold ml-3">{link.title}</h3>
              </div>
              <p className="text-blue-100">{link.description}</p>
            </a>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-ts-blue mb-6">
              Send us a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ts-blue focus:border-ts-blue transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ts-blue focus:border-ts-blue transition-colors"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ts-blue focus:border-ts-blue transition-colors resize-none"
                  placeholder="Describe your query, suggestion, or issue..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-ts-blue text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-800 transition-colors flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
              
              <p className="text-xs text-gray-500 text-center">
                We typically respond within 24 hours
              </p>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-ts-blue to-blue-800 rounded-xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <p className="text-blue-100 mb-6">
                We're committed to helping you succeed in your TS Police exam preparation. Our support team is ready to assist you with any questions or concerns.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0">
                      {info.icon}
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-ts-gold">{info.title}</p>
                      {info.action ? (
                        <a
                          href={info.action}
                          target={info.action.startsWith('http') ? "_blank" : "_self"}
                          rel={info.action.startsWith('http') ? "noopener noreferrer" : ""}
                          className="text-blue-200 hover:text-ts-gold transition-colors block"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-blue-200">{info.value}</p>
                      )}
                      <p className="text-blue-300 text-sm mt-1">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-ts-blue mb-4">
                Frequently Asked Questions
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Is TS Police Guru completely free?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Yes! All our mock tests, model papers, and chatbot support are completely free for all students.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    How often are new content added?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    We add new mock tests weekly and update model papers as soon as new exam papers are available.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Can I get personal guidance?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Yes, join our WhatsApp group for peer support and direct access to our team for personalized guidance.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Is content available in Telugu?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Yes, we provide study materials and chatbot support in both Telugu and English languages.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
