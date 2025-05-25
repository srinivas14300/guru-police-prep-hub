
import { Clock, FileText, Users, ExternalLink } from "lucide-react";

const MockTests = () => {
  const mockTests = [
    {
      id: 1,
      title: "General Knowledge Test – 01",
      description: "Current affairs and general awareness for TS Police",
      questions: 50,
      duration: "60 mins",
      attempts: 1250,
      subject: "GK",
      link: "https://forms.gle/xyz123example",
      difficulty: "Medium"
    },
    {
      id: 2,
      title: "Reasoning Test – 01",
      description: "Logical reasoning and analytical ability test",
      questions: 40,
      duration: "45 mins",
      attempts: 980,
      subject: "Reasoning",
      link: "https://forms.gle/abc456example",
      difficulty: "Easy"
    },
    {
      id: 3,
      title: "Current Affairs April 2025",
      description: "Latest current affairs and recent developments",
      questions: 30,
      duration: "40 mins",
      attempts: 850,
      subject: "Current Affairs",
      link: "https://forms.gle/test789example",
      difficulty: "Medium"
    },
    {
      id: 4,
      title: "Mathematics & Numerical Ability",
      description: "Basic mathematics and numerical problem solving",
      questions: 35,
      duration: "50 mins",
      attempts: 750,
      subject: "Mathematics",
      link: "https://forms.gle/math123example",
      difficulty: "Hard"
    },
    {
      id: 5,
      title: "Telugu Language Test",
      description: "Telugu grammar, literature and comprehension",
      questions: 25,
      duration: "30 mins",
      attempts: 920,
      subject: "Telugu",
      link: "https://forms.gle/telugu456example",
      difficulty: "Easy"
    },
    {
      id: 6,
      title: "Full Length Mock Test – 01",
      description: "Complete simulation of actual TS Police exam",
      questions: 100,
      duration: "120 mins",
      attempts: 1500,
      subject: "Full Test",
      link: "https://forms.gle/fulltest789example",
      difficulty: "Hard"
    },
  ];

  const getSubjectColor = (subject: string) => {
    const colors = {
      "GK": "bg-green-100 text-green-800",
      "Reasoning": "bg-blue-100 text-blue-800",
      "Current Affairs": "bg-purple-100 text-purple-800",
      "Mathematics": "bg-red-100 text-red-800",
      "Telugu": "bg-yellow-100 text-yellow-800",
      "Full Test": "bg-ts-gold text-ts-blue"
    };
    return colors[subject] || "bg-gray-100 text-gray-800";
  };

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      "Easy": "text-green-600",
      "Medium": "text-yellow-600",
      "Hard": "text-red-600"
    };
    return colors[difficulty] || "text-gray-600";
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-ts-blue mb-4">
            Live Mock Tests
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take real mock tests designed for Telangana Police exams. All tests are timed and provide instant results.
          </p>
          <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-4 inline-block">
            <p className="text-green-800 font-semibold">✅ All tests are live and ready to attempt!</p>
          </div>
        </div>

        {/* Mock Tests Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockTests.map((test) => (
            <div
              key={test.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border-l-4 border-ts-gold"
            >
              <div className="flex justify-between items-start mb-3">
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getSubjectColor(test.subject)}`}>
                  {test.subject}
                </span>
                <span className={`text-xs font-medium ${getDifficultyColor(test.difficulty)}`}>
                  {test.difficulty}
                </span>
              </div>

              <h3 className="text-xl font-bold text-ts-blue mb-3">
                {test.title}
              </h3>
              <p className="text-gray-600 mb-4">{test.description}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center">
                  <FileText className="w-4 h-4 mr-1" />
                  <span>{test.questions} Questions</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{test.duration}</span>
                </div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-sm text-gray-500">
                  <Users className="w-4 h-4 mr-1" />
                  <span>{test.attempts} attempts</span>
                </div>
              </div>

              <a
                href={test.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-ts-blue text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors flex items-center justify-center group"
              >
                Start Test
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        {/* Test Instructions */}
        <div className="mt-12 bg-blue-50 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-ts-blue mb-4">
            Test Instructions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-ts-blue mb-2">Before Starting</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Ensure stable internet connection</li>
                <li>• Keep a pen and paper ready</li>
                <li>• Find a quiet environment</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-ts-blue mb-2">During Test</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Timer will start automatically</li>
                <li>• Submit before time expires</li>
                <li>• Results available instantly</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockTests;
