import { RoleLayout } from '../../components/study-plans/RoleLayout';
import { Briefcase, Award, Users, BookOpen, BarChart2, Clock } from 'lucide-react';

const CIPage = () => {
  const careerPath = [
    {
      id: 1,
      title: 'Join as Sub-Inspector',
      description: 'Start your career by clearing the SI examination',
      duration: 'Initial 2-3 years',
    },
    {
      id: 2,
      title: 'Probationary Period',
      description: 'Complete probation and mandatory training',
      duration: '2 years',
    },
    {
      id: 3,
      title: 'Departmental Exams',
      description: 'Clear required departmental examinations',
      duration: 'Varies',
    },
    {
      id: 4,
      title: 'Service Period',
      description: 'Gain field experience and complete minimum service requirement',
      duration: '5-8 years as SI',
    },
    {
      id: 5,
      title: 'Promotion to CI',
      description: 'Based on seniority, performance, and departmental exams',
      duration: 'Varies',
    },
  ];

  const keyResponsibilities = [
    'Supervising and managing police stations in the circle',
    'Overseeing law and order maintenance',
    'Supervising investigation of important cases',
    'Coordinating with other law enforcement agencies',
    'Implementing community policing initiatives',
    'Ensuring public safety and security',
  ];

  const skillsRequired = [
    'Leadership and management skills',
    'Strong decision-making abilities',
    'Excellent communication skills',
    'Knowledge of criminal laws and procedures',
    'Crisis management',
    'Administrative capabilities',
  ];

  return (
    <RoleLayout
      title="Circle Inspector (CI)"
      description="Information about the career path to becoming a Circle Inspector in Telangana Police"
      color="text-purple-600"
      bgGradient="from-purple-600 to-purple-800"
    >
      <div className="space-y-8">
        {/* Important Note */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                <span className="font-bold">Note:</span> Circle Inspector (CI) is a promotional rank in the Telangana Police, not an entry-level position. This page provides information about the career path to becoming a CI.
              </p>
            </div>
          </div>
        </div>

        {/* Career Path */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Career Path to Circle Inspector</h2>
          <div className="space-y-8">
            {careerPath.map((step, index) => (
              <div key={step.id} className="relative pb-8">
                {index !== careerPath.length - 1 && (
                  <span className="absolute top-6 left-6 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                )}
                <div className="relative flex items-start">
                  <span className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center ring-8 ring-white">
                    <span className="text-purple-600 font-bold">{step.id}</span>
                  </span>
                  <div className="ml-6">
                    <h3 className="text-lg font-medium text-gray-900">{step.title}</h3>
                    <p className="mt-1 text-gray-600">{step.description}</p>
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                      <Clock className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                      <span>{step.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Key Responsibilities */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Key Responsibilities</h2>
            <ul className="space-y-3">
              {keyResponsibilities.map((responsibility, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center">
                    <Briefcase className="h-3.5 w-3.5 text-purple-600" />
                  </span>
                  <span className="ml-3 text-gray-700">{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills Required */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Skills Required</h2>
            <ul className="space-y-3">
              {skillsRequired.map((skill, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center">
                    <Award className="h-3.5 w-3.5 text-purple-600" />
                  </span>
                  <span className="ml-3 text-gray-700">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Departmental Exams */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Departmental Examinations</h2>
          <p className="text-gray-700 mb-6">
            To be eligible for promotion to Circle Inspector, you may need to clear the following departmental examinations:
          </p>
          
          <div className="space-y-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Departmental Examination for Promotion to CI</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Conducted by Telangana State Police Department</li>
                <li>Eligibility: Minimum service as SI (typically 5-8 years)</li>
                <li>Syllabus: Criminal Laws, Police Manual, Investigation Procedures</li>
                <li>Pattern: Written examination and interview</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Mid-Career Training Program</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Mandatory training for SIs being considered for promotion</li>
                <li>Focus on leadership and management skills</li>
                <li>Advanced investigation techniques</li>
                <li>Administrative procedures and responsibilities</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h3 className="font-medium text-blue-800 mb-2">Preparation Tips</h3>
            <ul className="list-disc list-inside text-blue-700 space-y-1">
              <li>Regularly study the latest police manuals and standing orders</li>
              <li>Stay updated with amendments in criminal laws and procedures</li>
              <li>Develop strong report writing and documentation skills</li>
              <li>Seek mentorship from senior officers</li>
              <li>Participate in professional development programs</li>
            </ul>
          </div>
        </div>
      </div>
    </RoleLayout>
  );
};

export default CIPage;
