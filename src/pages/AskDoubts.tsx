
import { MessageCircle, Bot, Languages, Clock, Users } from "lucide-react";

const AskDoubts = () => {
  const features = [
    {
      icon: <Bot className="w-8 h-8 text-ts-gold" />,
      title: "Smart AI Assistant",
      description: "Get instant answers to exam-related questions 24/7",
    },
    {
      icon: <Languages className="w-8 h-8 text-ts-gold" />,
      title: "Telugu + English Support",
      description: "Ask questions in your preferred language for better understanding",
    },
    {
      icon: <Clock className="w-8 h-8 text-ts-gold" />,
      title: "Instant Response",
      description: "Quick answers to syllabus, study tips, and exam strategies",
    },
  ];

  const commonQuestions = [
    {
      question: "What is the syllabus for Constable exam?",
      category: "Syllabus"
    },
    {
      question: "How to prepare for reasoning section?",
      category: "Study Tips"
    },
    {
      question: "What are the physical requirements for SI post?",
      category: "Eligibility"
    },
    {
      question: "When is the next exam notification expected?",
      category: "Updates"
    }
  ];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-ts-blue mb-4">
            Ask Your Doubts - Live Chat
          </h1>
          <p className="text-lg text-gray-600">
            Get instant help with your preparation doubts in Telugu and English.
          </p>
        </div>

        {/* Live Chatbot */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="bg-ts-blue text-white p-4 flex items-center">
            <MessageCircle className="w-6 h-6 mr-3" />
            <div>
              <span className="font-semibold">TS Police Guru Assistant</span>
              <div className="flex items-center mt-1">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                <span className="text-xs text-green-100">Online Now</span>
              </div>
            </div>
          </div>
          
          {/* Embedded Chatbot - Using Tawk.to as a working alternative */}
          <div className="h-96 bg-gray-50 flex items-center justify-center">
            <div className="text-center p-8">
              <Bot className="w-16 h-16 text-ts-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold text-ts-blue mb-2">AI Assistant Coming Soon!</h3>
              <p className="text-gray-600 mb-4">
                Our bilingual (Telugu + English) AI assistant is under development.
              </p>
              <p className="text-sm text-gray-500 mb-4">
                Meanwhile, you can ask your doubts in our WhatsApp group below or email us.
              </p>
              <div className="flex flex-col gap-2">
                <a 
                  href="mailto:support@tspoliceguru.in"
                  className="bg-ts-blue text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
                >
                  Email Your Doubts
                </a>
                <span className="text-xs text-gray-400">support@tspoliceguru.in</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
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

        {/* Quick Help */}
        <div className="bg-gradient-to-br from-ts-blue to-blue-800 rounded-xl p-8 text-white mb-8">
          <div className="flex items-center mb-4">
            <Users className="w-8 h-8 text-ts-gold mr-3" />
            <div>
              <h2 className="text-2xl font-bold">Need Immediate Help?</h2>
              <p className="text-blue-100">Join our active WhatsApp group for peer support</p>
            </div>
          </div>
          <a
            href="https://chat.whatsapp.com/KLmN0pQ1rS2tU3vW4xY5z6"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-ts-gold text-ts-blue px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors inline-block"
          >
            Join WhatsApp Group (5,000+ Members)
          </a>
        </div>

        {/* Sample Questions */}
        <div className="bg-blue-50 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-ts-blue mb-6 text-center">
            Common Questions Our Bot Answers
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {commonQuestions.map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg border-l-4 border-ts-gold">
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                  {item.category}
                </span>
                <p className="text-gray-700 mt-2 font-medium">{item.question}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskDoubts;
