
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Brain, Users } from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-ts-gold" />,
      title: "Mock Tests",
      description: "Practice with real exam pattern questions",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-ts-gold" />,
      title: "Model Papers",
      description: "Download previous year question papers",
    },
    {
      icon: <Users className="w-8 h-8 text-ts-gold" />,
      title: "Ask Doubts",
      description: "Get your doubts cleared instantly",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ts-blue to-blue-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Welcome to <span className="text-ts-gold">TS Police Guru</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Your Complete Preparation Platform for Telangana Police Constable, SI & CI Exams
          </p>
          <Link
            to="/mock-tests"
            className="inline-flex items-center bg-ts-gold text-ts-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors group"
          >
            Start Your Free Preparation
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-ts-blue">
            Everything You Need to Succeed
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-ts-gold"
              >
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-bold ml-3 text-ts-blue">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-ts-blue">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 text-gray-600">
            Join thousands of aspirants who are preparing with TS Police Guru
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/mock-tests"
              className="bg-ts-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
            >
              Take Mock Test
            </Link>
            <Link
              to="/model-papers"
              className="bg-ts-gold text-ts-blue px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
            >
              Download Papers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
