
import { Clock, FileText, Users } from "lucide-react";

const MockTests = () => {
  const mockTests = [
    {
      id: 1,
      title: "Reasoning Test - 01",
      description: "Logical reasoning and analytical ability test",
      questions: 50,
      duration: "60 mins",
      attempts: 1250,
    },
    {
      id: 2,
      title: "General Knowledge - 01",
      description: "Current affairs and general awareness",
      questions: 40,
      duration: "45 mins",
      attempts: 980,
    },
    {
      id: 3,
      title: "Mathematics - 01",
      description: "Basic mathematics and numerical ability",
      questions: 30,
      duration: "40 mins",
      attempts: 850,
    },
    {
      id: 4,
      title: "English - 01",
      description: "Grammar, vocabulary and comprehension",
      questions: 25,
      duration: "30 mins",
      attempts: 750,
    },
    {
      id: 5,
      title: "Telugu - 01",
      description: "Telugu language and literature",
      questions: 25,
      duration: "30 mins",
      attempts: 920,
    },
    {
      id: 6,
      title: "Full Length Test - 01",
      description: "Complete mock test covering all subjects",
      questions: 100,
      duration: "120 mins",
      attempts: 1500,
    },
  ];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-ts-blue mb-4">
            Mock Tests
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Practice with our comprehensive mock tests designed specifically for Telangana Police exams. Get familiar with the exam pattern and improve your performance.
          </p>
        </div>

        {/* Mock Tests Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockTests.map((test) => (
            <div
              key={test.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border-l-4 border-ts-gold"
            >
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

              <button className="w-full bg-ts-blue text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                Start Test
              </button>
              
              <p className="text-xs text-gray-500 mt-2 text-center">
                Test will be available soon
              </p>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-12 bg-blue-50 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-ts-blue mb-4">
            How Mock Tests Help You
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-ts-blue mb-2">Exam Pattern Familiarity</h3>
              <p className="text-gray-600">Get used to the actual exam format and question types</p>
            </div>
            <div>
              <h3 className="font-semibold text-ts-blue mb-2">Time Management</h3>
              <p className="text-gray-600">Learn to manage your time effectively during the exam</p>
            </div>
            <div>
              <h3 className="font-semibold text-ts-blue mb-2">Performance Analysis</h3>
              <p className="text-gray-600">Identify your strengths and areas for improvement</p>
            </div>
            <div>
              <h3 className="font-semibold text-ts-blue mb-2">Confidence Building</h3>
              <p className="text-gray-600">Build confidence through regular practice</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockTests;
