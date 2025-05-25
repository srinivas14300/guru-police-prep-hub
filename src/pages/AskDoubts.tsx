
import { MessageCircle, Bot, Languages, Clock } from "lucide-react";

const AskDoubts = () => {
  const features = [
    {
      icon: <Bot className="w-8 h-8 text-ts-gold" />,
      title: "AI-Powered Assistant",
      description: "Get instant answers to your questions using advanced AI technology",
    },
    {
      icon: <Languages className="w-8 h-8 text-ts-gold" />,
      title: "Bilingual Support",
      description: "Ask questions in both Telugu and English for better understanding",
    },
    {
      icon: <Clock className="w-8 h-8 text-ts-gold" />,
      title: "24/7 Availability",
      description: "Get help anytime, anywhere - our chatbot never sleeps",
    },
  ];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-ts-blue mb-4">
            Ask Your Doubts
          </h1>
          <p className="text-lg text-gray-600">
            Get instant help with your preparation doubts. Our AI-powered chatbot is here to assist you.
          </p>
        </div>

        {/* Coming Soon Card */}
        <div className="bg-gradient-to-br from-ts-blue to-blue-800 rounded-xl p-8 text-white text-center mb-12">
          <MessageCircle className="w-16 h-16 text-ts-gold mx-auto mb-6 animate-pulse-slow" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Coming Soon: AI-Powered Chatbot
          </h2>
          <p className="text-xl mb-6 text-blue-100">
            Get instant answers in Telugu + English
          </p>
          <div className="bg-ts-gold text-ts-blue px-6 py-3 rounded-lg font-semibold inline-block">
            Launching Very Soon!
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-ts-blue mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Chatbot Preview */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-ts-blue text-white p-4 flex items-center">
            <MessageCircle className="w-6 h-6 mr-3" />
            <span className="font-semibold">TS Police Guru Assistant</span>
            <span className="ml-auto bg-yellow-500 text-xs px-2 py-1 rounded-full text-black">
              Coming Soon
            </span>
          </div>
          
          <div className="p-6 h-64 bg-gray-50 flex items-center justify-center">
            <div className="text-center">
              <Bot className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">
                Chatbot interface will appear here
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Ask questions about exam preparation, syllabus, study tips, and more!
              </p>
            </div>
          </div>
        </div>

        {/* Sample Questions */}
        <div className="mt-12 bg-blue-50 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-ts-blue mb-6 text-center">
            What You Can Ask Our Chatbot
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-ts-blue mb-2">Exam Pattern</h3>
              <p className="text-gray-600 text-sm">"What is the exam pattern for Constable exam?"</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-ts-blue mb-2">Study Tips</h3>
              <p className="text-gray-600 text-sm">"How should I prepare for reasoning section?"</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-ts-blue mb-2">Syllabus Doubts</h3>
              <p className="text-gray-600 text-sm">"What topics are important in General Knowledge?"</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-ts-blue mb-2">Time Management</h3>
              <p className="text-gray-600 text-sm">"How to manage time during the exam?"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskDoubts;
