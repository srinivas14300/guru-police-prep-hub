
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Brain, Users, TrendingUp, Clock, Award } from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-ts-gold" />,
      title: "Live Mock Tests",
      description: "Practice with real exam pattern questions and get instant results",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-ts-gold" />,
      title: "Previous Year Papers",
      description: "Download original question papers with answer keys",
    },
    {
      icon: <Users className="w-8 h-8 text-ts-gold" />,
      title: "Live Doubt Clearing",
      description: "Get your doubts cleared instantly via AI chatbot",
    },
  ];

  const stats = [
    { number: "25,000+", label: "Students Helped" },
    { number: "15+", label: "Mock Tests" },
    { number: "12+", label: "Model Papers" },
    { number: "24/7", label: "Support Available" }
  ];

  const latestUpdates = [
    {
      title: "TS Constable Notification Released - Apply by June 30",
      date: "May 20, 2025",
      type: "Important",
      link: "#"
    },
    {
      title: "New 2025 Model Papers Added to Download Section",
      date: "May 18, 2025",
      type: "New Content",
      link: "/model-papers"
    },
    {
      title: "Free Live Doubt Session This Sunday at 6 PM",
      date: "May 15, 2025",
      type: "Live Event",
      link: "/ask-doubts"
    },
    {
      title: "SI Exam Pattern Changed - Check Updated Syllabus",
      date: "May 12, 2025",
      type: "Update",
      link: "#"
    }
  ];

  const getUpdateTypeColor = (type: string) => {
    const colors = {
      "Important": "bg-red-100 text-red-800",
      "New Content": "bg-green-100 text-green-800",
      "Live Event": "bg-purple-100 text-purple-800",
      "Update": "bg-blue-100 text-blue-800"
    };
    return colors[type] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ts-blue to-blue-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <Award className="w-8 h-8 text-ts-gold mr-2" />
            <span className="bg-ts-gold text-ts-blue px-3 py-1 rounded-full text-sm font-semibold">
              Trusted by 25,000+ Students
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Welcome to <span className="text-ts-gold">TS Police Guru</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Helping <span className="text-ts-gold font-bold">25,000+ Students</span> Prepare for TS Police Jobs
          </p>
          <p className="text-lg mb-8 text-blue-200">
            Complete Preparation Platform for Telangana Police Constable, SI & CI Exams
          </p>
          <Link
            to="/mock-tests"
            className="inline-flex items-center bg-ts-gold text-ts-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors group"
          >
            Start Free Mock Tests Now
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-4">
                <div className="text-3xl md:text-4xl font-bold text-ts-blue mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50">
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

      {/* Latest Updates Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <TrendingUp className="w-8 h-8 text-ts-gold mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-ts-blue">
              Latest Updates
            </h2>
          </div>
          
          <div className="space-y-4">
            {latestUpdates.map((update, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-ts-gold hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold mr-3 ${getUpdateTypeColor(update.type)}`}>
                        {update.type}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {update.date}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-ts-blue mb-2">
                      {update.title}
                    </h3>
                  </div>
                  {update.link !== "#" && (
                    <Link 
                      to={update.link}
                      className="mt-3 md:mt-0 text-ts-gold hover:text-yellow-600 font-semibold text-sm flex items-center"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  )}
                </div>
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
