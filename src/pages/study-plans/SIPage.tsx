import { RoleLayout } from '../../components/study-plans/RoleLayout';
import { Calendar, BookOpen, Clock, Award, FileText } from 'lucide-react';

const SIPage = () => {
  const studyPlans = [
    {
      id: '60-day',
      title: '60-Day Intensive Plan',
      duration: '60 days',
      difficulty: 'Intensive',
      description: 'Comprehensive coverage of all SI exam topics with focus on new criminal laws',
    },
    {
      id: '90-day',
      title: '90-Day Standard Plan',
      duration: '90 days',
      difficulty: 'Standard',
      description: 'In-depth preparation with full syllabus coverage and practice tests',
    },
    {
      id: '120-day',
      title: '120-Day Complete Plan',
      duration: '120 days',
      difficulty: 'Thorough',
      description: 'Complete preparation with mock tests and descriptive paper practice',
    },
  ];

  const newLaws = [
    'Bharatiya Nyaya Sanhita (BNS) - Replacing IPC',
    'Bharatiya Nagarik Suraksha Sanhita (BNSS) - Replacing CrPC',
    'Bharatiya Sakshya Adhiniyam (BSA) - Replacing Indian Evidence Act',
  ];

  return (
    <RoleLayout
      title="Sub-Inspector (SI)"
      description="Comprehensive preparation for Telangana Police SI examination with focus on new criminal laws and descriptive papers."
      color="text-green-600"
      bgGradient="from-green-600 to-green-800"
    >
      <div className="space-y-8">
        {/* Exam Overview */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Exam Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-green-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Syllabus</h3>
                <p className="mt-1 text-sm text-gray-500">General Studies, Mental Ability, Arithmetic, General Science, History of India, Indian Constitution, and more.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                <Clock className="h-5 w-5 text-green-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Exam Pattern</h3>
                <p className="mt-1 text-sm text-gray-500">Prelims (200 MCQs), Mains (Descriptive), Physical Test, and Interview.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                <Award className="h-5 w-5 text-green-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Eligibility</h3>
                <p className="mt-1 text-sm text-gray-500">Bachelor's degree, 20-31 years (General), 20-34 years (SC/ST), 20-36 years (Ex-servicemen).</p>
              </div>
            </div>
          </div>
        </div>

        {/* New Criminal Laws Section */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">New Criminal Laws (2023)</h2>
          <p className="text-gray-700 mb-4">
            The Indian Penal Code (IPC), Code of Criminal Procedure (CrPC), and Indian Evidence Act have been replaced by new laws. Our study materials include:
          </p>
          <ul className="space-y-2 mb-6">
            {newLaws.map((law, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>{law}</span>
              </li>
            ))}
          </ul>
          <button className="text-green-600 hover:text-green-700 font-medium flex items-center">
            Learn more about the new criminal laws
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Study Plans */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Study Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {studyPlans.map((plan) => (
              <div key={plan.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="bg-green-600 px-4 py-3">
                  <h3 className="text-lg font-semibold text-white">{plan.title}</h3>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{plan.duration}</span>
                    <span className="mx-2">•</span>
                    <span>{plan.difficulty}</span>
                  </div>
                  <p className="text-gray-700 mb-6">{plan.description}</p>
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300">
                    Start {plan.title}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Descriptive Paper Section */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Descriptive Paper Preparation</h2>
          <p className="text-gray-700 mb-6">
            The Mains exam includes a descriptive paper to test your writing and analytical skills. Our plans include:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Essay Writing</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Current affairs and social issues</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Police and governance topics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Practice with model essays</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Precis Writing</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Techniques for effective precis writing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Practice passages with solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Time management strategies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </RoleLayout>
  );
};

export default SIPage;
