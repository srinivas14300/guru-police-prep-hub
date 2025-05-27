import { useState, useEffect, useCallback, useRef } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Clock, CheckCircle, XCircle, Bookmark, Check, X, ArrowLeft, ArrowRight, Flag, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { mockTestsWithQuestions } from './MockTests';

interface Answer {
  questionId: number;
  selectedOption: number | null;
  isMarked: boolean;
  timeSpent: number; // in seconds
}

const TestInterface = () => {
  // All hooks at the top
  const { testId } = useParams<{ testId: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const [testStarted, setTestStarted] = useState(false);
  const [showStartScreen, setShowStartScreen] = useState(true);
  const [showExitWarning, setShowExitWarning] = useState(false);
  const [pendingNavigation, setPendingNavigation] = useState<(() => void) | null>(null);
  const test = mockTestsWithQuestions.find(t => t.id === parseInt(testId || ''));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [timeLeft, setTimeLeft] = useState(test ? test.duration * 60 : 1800); // in seconds
  const [testSubmitted, setTestSubmitted] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const firstPushState = useRef(true);
  
  // All useEffects and useCallbacks here
  useEffect(() => {
    if (!test && testId) {
      navigate('/not-found');
    }
  }, [test, testId, navigate]);
  
  useEffect(() => {
    if (!testStarted || testSubmitted) return;
    const unblock = window.history.pushState;
    window.history.pushState = function() {
      if (firstPushState.current) {
        // Ignore the first pushState after test starts
        firstPushState.current = false;
        return unblock.apply(history, arguments as any);
      }
      if (testStarted && !testSubmitted) {
        setShowExitWarning(true);
        setPendingNavigation(() => () => unblock.apply(history, arguments as any));
        return;
      }
      return unblock.apply(history, arguments as any);
    };
    const handlePopState = () => {
      if (testStarted && !testSubmitted) {
        setShowExitWarning(true);
        window.history.pushState(null, '', location.pathname);
      }
    };
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (testStarted && !testSubmitted) {
        e.preventDefault();
        e.returnValue = 'Your test progress will be lost if you leave this page. Are you sure?';
        return e.returnValue;
      }
    };
    // Only do the initial pushState once, and set the flag
    if (firstPushState.current) {
      window.history.pushState(null, '', window.location.pathname);
    }
    window.addEventListener('popstate', handlePopState);
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.history.pushState = unblock;
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      firstPushState.current = true; // Reset for next test
    };
  }, [testStarted, testSubmitted, location.pathname]);
  
  const confirmExit = useCallback(() => {
    if (pendingNavigation) {
      pendingNavigation();
      setPendingNavigation(null);
    }
    setTestSubmitted(true);
    setShowExitWarning(false);
  }, [pendingNavigation]);
  
  const cancelExit = useCallback(() => {
    setPendingNavigation(null);
    setShowExitWarning(false);
  }, []);
  
  useEffect(() => {
    if (test) {
      const initialAnswers = test.questions.map(q => ({
        questionId: q.id,
        selectedOption: null,
        isMarked: false,
        timeSpent: 0
      }));
      setAnswers(initialAnswers);
    }
  }, [test]);
  
  useEffect(() => {
    if (timeLeft <= 0) {
      handleSubmit();
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (test && currentQuestionIndex < test.questions.length) {
          const currentQId = test.questions[currentQuestionIndex].id;
          setAnswers(prevAnswers => 
            prevAnswers.map(a => 
              a.questionId === currentQId 
                ? { ...a, timeSpent: a.timeSpent + 1 } 
                : a
            )
          );
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, currentQuestionIndex, test]);
  
  const handleOptionSelect = (optionIndex: number) => {
    setAnswers(prev => 
      prev.map(a => 
        a.questionId === currentQuestion.id 
          ? { ...a, selectedOption: optionIndex } 
          : a
      )
    );
  };
  
  const toggleMarkForReview = () => {
    setAnswers(prev => 
      prev.map(a => 
        a.questionId === currentQuestion.id 
          ? { ...a, isMarked: !a.isMarked } 
          : a
      )
    );
  };
  
  const handleNext = () => {
    if (currentQuestionIndex < test.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };
  
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };
  
  const handleSubmit = useCallback(() => {
    setTestSubmitted(true);
    // In a real app, you would send the answers to your backend here
  }, []);
  
  const confirmSubmit = useCallback(() => {
    if (window.confirm('Are you sure you want to submit the test? You cannot change your answers after submission.')) {
      handleSubmit();
    }
  }, [handleSubmit]);
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  // Now do conditional rendering
  if (showStartScreen && test) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-lg w-full text-center">
          <h1 className="text-2xl font-bold mb-4">{test.title}</h1>
          <p className="mb-6 text-gray-700">Please read the instructions carefully before starting the test. Once you start, the timer will begin and you cannot pause or restart the test.</p>
          <ul className="text-left mb-6 text-gray-600 list-disc list-inside">
            <li>Total Questions: {test.questions.length}</li>
            <li>Duration: {test.duration} minutes</li>
            <li>Do not refresh or close the window during the test.</li>
            <li>Your progress will be lost if you leave the page after starting.</li>
          </ul>
          <button
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            onClick={() => {
              setShowStartScreen(false);
              setTestStarted(true);
            }}
          >
            Start Test
          </button>
        </div>
      </div>
    );
  }
  if (!test) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
        <XCircle className="w-16 h-16 text-red-500 mb-4" />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Test Not Found</h1>
        <p className="text-gray-600 mb-6">The requested test could not be found.</p>
        <button 
          onClick={() => navigate('/mock-tests')}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Back to Tests
        </button>
      </div>
    );
  }
  if (!test || !test.questions || test.questions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4"></div>
        <p className="text-gray-600">Loading test questions...</p>
      </div>
    );
  }
  const currentQuestion = test.questions[currentQuestionIndex];
  if (!currentQuestion) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
        <XCircle className="w-16 h-16 text-red-500 mb-4" />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Error Loading Question</h1>
        <p className="text-gray-600 mb-6">The requested question could not be loaded.</p>
        <button 
          onClick={() => navigate('/mock-tests')}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Back to Tests
        </button>
      </div>
    );
  }
  const currentAnswer = answers.find(a => a.questionId === currentQuestion.id) || 
    { questionId: currentQuestion.id, selectedOption: null, isMarked: false, timeSpent: 0 };
  if (testSubmitted) {
    return <TestResults test={test} answers={answers} />;
  }
  if (showExitWarning) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl p-6 max-w-md w-full">
          <div className="flex items-center mb-4">
            <AlertTriangle className="w-6 h-6 text-yellow-500 mr-2" />
            <h3 className="text-xl font-semibold">Warning: Test in Progress</h3>
          </div>
          <p className="text-gray-700 mb-6">
            Your test progress will be lost if you leave this page. Are you sure you want to exit the test?
          </p>
          <div className="flex justify-end space-x-3">
            <button
              onClick={cancelExit}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={confirmExit}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              End Test
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div>
            <h1 className="text-lg font-semibold text-gray-900">{test.title}</h1>
            <p className="text-sm text-gray-500">
              Question {currentQuestionIndex + 1} of {test.questions.length}
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-yellow-50 px-3 py-1 rounded-md">
              <Clock className="w-5 h-5 text-yellow-500 mr-2" />
              <span className="font-medium text-yellow-800">
                {formatTime(timeLeft)}
              </span>
            </div>
            
            <button
              onClick={() => setShowSidebar(!showSidebar)}
              className="p-2 rounded-md hover:bg-gray-100"
              aria-label="Question palette"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          {/* Question */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-gray-900">
                Question {currentQuestionIndex + 1}
              </h2>
              {currentAnswer.isMarked && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  <Bookmark className="w-3 h-3 mr-1" /> Marked
                </span>
              )}
            </div>
            
            <p className="text-gray-800 mb-6">{currentQuestion.text}</p>
            
            {/* Options */}
            <div className="space-y-3 mb-6">
              {currentQuestion.options.map((option, index) => {
                // Check if the option already has a letter prefix (e.g., 'A) Option text')
                const hasPrefix = /^[A-Z]\)\s+.*/.test(option);
                const optionLetter = String.fromCharCode(65 + index); // A, B, C, D
                
                // If the option already has a prefix (A), (B), etc., use it as is
                // Otherwise, add the letter prefix
                const displayText = hasPrefix ? option : `${optionLetter}) ${option}`;
                
                return (
                  <div 
                    key={index}
                    onClick={() => handleOptionSelect(index)}
                    className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                      currentAnswer.selectedOption === index 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className={`w-5 h-5 rounded-full border mr-3 flex-shrink-0 flex items-center justify-center ${
                        currentAnswer.selectedOption === index 
                          ? 'bg-blue-500 border-blue-500' 
                          : 'border-gray-400'
                      }`}>
                        {currentAnswer.selectedOption === index && (
                          <Check className="w-3 h-3 text-white" />
                        )}
                      </div>
                      <span className="text-gray-800">
                        {displayText}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Navigation */}
            <div className="flex justify-between items-center pt-4 border-t">
              <div>
                <button
                  onClick={toggleMarkForReview}
                  className={`flex items-center text-sm font-medium px-3 py-2 rounded-md ${
                    currentAnswer.isMarked 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Bookmark className={`w-4 h-4 mr-1 ${currentAnswer.isMarked ? 'fill-current' : ''}`} />
                  {currentAnswer.isMarked ? 'Unmark' : 'Mark for Review'}
                </button>
              </div>
              
              <div className="flex space-x-3">
                <button
                  onClick={handlePrevious}
                  disabled={currentQuestionIndex === 0}
                  className={`px-4 py-2 border rounded-md flex items-center ${
                    currentQuestionIndex === 0 
                      ? 'text-gray-400 border-gray-200 cursor-not-allowed' 
                      : 'text-gray-700 border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <ArrowLeft className="w-4 h-4 mr-1" />
                  Previous
                </button>
                
                {currentQuestionIndex < test.questions.length - 1 ? (
                  <button
                    onClick={handleNext}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center"
                  >
                    Next
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                ) : (
                  <button
                    onClick={confirmSubmit}
                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center"
                  >
                    Submit Test
                    <Check className="w-4 h-4 ml-1" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Question Palette Sidebar */}
        <AnimatePresence>
          {showSidebar && (
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween' }}
              className="fixed inset-y-0 right-0 w-80 bg-white shadow-xl z-50 p-4 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">Question Palette</h3>
                <button 
                  onClick={() => setShowSidebar(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="grid grid-cols-5 gap-2 mb-6">
                {test.questions.map((q, index) => {
                  const answer = answers.find(a => a.questionId === q.id);
                  let bgColor = 'bg-white';
                  let textColor = 'text-gray-700';
                  let borderColor = 'border-gray-200';
                  
                  if (answer) {
                    if (answer.isMarked) {
                      bgColor = 'bg-blue-50';
                      borderColor = 'border-blue-300';
                      textColor = 'text-blue-700';
                    } else if (answer.selectedOption !== null) {
                      bgColor = 'bg-green-50';
                      borderColor = 'border-green-300';
                      textColor = 'text-green-700';
                    }
                  }
                  
                  if (index === currentQuestionIndex) {
                    borderColor = 'border-blue-500 ring-2 ring-blue-200';
                  }
                  
                  return (
                    <button
                      key={q.id}
                      onClick={() => {
                        setCurrentQuestionIndex(index);
                        setShowSidebar(false);
                      }}
                      className={`w-10 h-10 flex items-center justify-center rounded-md border ${bgColor} ${borderColor} ${textColor} font-medium`}
                    >
                      {index + 1}
                    </button>
                  );
                })}
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-green-100 border border-green-300 mr-2"></div>
                  <span className="text-sm text-gray-600">Answered</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-blue-50 border border-blue-300 mr-2"></div>
                  <span className="text-sm text-gray-600">Marked</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-white border border-gray-300 mr-2"></div>
                  <span className="text-sm text-gray-600">Not Visited</span>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t">
                <button
                  onClick={handleSubmit}
                  className="w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center justify-center"
                >
                  Submit Test
                  <Check className="w-4 h-4 ml-2" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Overlay when sidebar is open */}
        {showSidebar && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setShowSidebar(false)}
          />
        )}
      </div>
    </div>
  );
};

// Test Results Component
interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  subject: string;
  topic: string;
  section: string;
  marks: number;
  timeLimit: number;
}

interface Test {
  id: number;
  title: string;
  questions: Question[];
  totalMarks: number;
  passingMarks: number;
  duration: number;
  sections: Array<{
    name: string;
    questions: number;
    marks: number;
    duration?: number;
    topics?: string[];
    subSections?: Array<{
      name: string;
      questions: number;
    }>;
  }>;
  examType: string;
  subjects: string[];
  description: string;
}

const TestResults = ({ test, answers }: { test: Test, answers: Answer[] }) => {
  const navigate = useNavigate();
  
  // Calculate results
  const totalQuestions = test.questions.length;
  const attempted = answers.filter(a => a.selectedOption !== null).length;
  const correctAnswers = answers.filter(a => {
    const question = test.questions.find(q => q.id === a.questionId);
    return question && a.selectedOption === question.correctAnswer;
  }).length;
  const incorrectAnswers = attempted - correctAnswers;
  const score = answers.reduce((total, answer) => {
    const question = test.questions.find(q => q.id === answer.questionId);
    if (question && answer.selectedOption === question.correctAnswer) {
      return total + question.marks;
    }
    return total;
  }, 0);
  
  const percentage = (score / test.totalMarks) * 100;
  const isPassed = percentage >= (test.passingMarks / test.totalMarks * 100);
  
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Test Submitted Successfully!</h1>
          <p className="text-gray-600">Here are your results for {test.title}</p>
        </div>
        
        {/* Score Card */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
          <div className="p-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-center md:text-left mb-6 md:mb-0">
                <h2 className="text-4xl font-bold text-gray-900 mb-1">{score}/{test.totalMarks}</h2>
                <p className="text-gray-600">Marks Obtained</p>
              </div>
              
              <div className="relative w-32 h-32">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    className="text-gray-200"
                    strokeWidth="10"
                    stroke="currentColor"
                    fill="transparent"
                    r="40"
                    cx="50"
                    cy="50"
                  />
                  <circle
                    className={`${isPassed ? 'text-green-500' : 'text-red-500'}`}
                    strokeWidth="10"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="40"
                    cx="50"
                    cy="50"
                    strokeDasharray={`${percentage * 2.51} 251.2`}
                    transform="rotate(-90 50 50)"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className={`text-2xl font-bold ${isPassed ? 'text-green-600' : 'text-red-600'}`}>
                    {Math.round(percentage)}%
                  </span>
                </div>
              </div>
              
              <div className="text-center md:text-right mt-6 md:mt-0">
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                  isPassed ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {isPassed ? 'PASSED' : 'FAILED'}
                </div>
                <p className="text-sm text-gray-600 mt-1">Passing: {test.passingMarks} marks</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 px-6 py-4 border-t">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-gray-900">{totalQuestions}</p>
                <p className="text-sm text-gray-600">Total Questions</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-green-600">{correctAnswers}</p>
                <p className="text-sm text-gray-600">Correct</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-red-600">{incorrectAnswers}</p>
                <p className="text-sm text-gray-600">Incorrect</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-600">{attempted}</p>
                <p className="text-sm text-gray-600">Attempted</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Section-wise Performance */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Section-wise Performance</h2>
          <div className="space-y-4">
            {/* Language Sections */}
            {[
              { id: 'english', name: 'English Language', topics: ['Vocabulary', 'Grammar', 'Comprehension'] },
              { id: 'telugu', name: 'Telugu Language', topics: ['Vocabulary', 'Grammar', 'Comprehension'] },
              { id: 'translation-en-te', name: 'Translation (English to Telugu)', topics: ['Translation'] },
              { id: 'translation-te-en', name: 'Translation (Telugu to English)', topics: ['Translation'] }
            ].map(section => {
              const sectionQuestions = test.questions.filter(q => 
                section.topics.some(topic => 
                  q.topic?.toLowerCase().includes(topic.toLowerCase()) ||
                  q.section?.toLowerCase().includes(section.name.toLowerCase())
                )
              );
              
              const correctInSection = sectionQuestions.filter(q => {
                const answer = answers.find(a => a.questionId === q.id);
                return answer && answer.selectedOption === q.correctAnswer;
              }).length;
              
              const sectionPercentage = sectionQuestions.length > 0 
                ? Math.round((correctInSection / sectionQuestions.length) * 100) 
                : 0;
              
              return (
                <div key={section.id} className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-gray-700">{section.name}</span>
                    <span className="font-medium text-gray-900">
                      {correctInSection}/{sectionQuestions.length} ({sectionPercentage}%)
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        sectionPercentage >= 70 ? 'bg-green-500' : 
                        sectionPercentage >= 40 ? 'bg-yellow-500' : 'bg-red-500'
                      }`} 
                      style={{ width: `${Math.max(5, sectionPercentage)}%` }}
                    />
                  </div>
                </div>
              );
            })}
            
            {/* Other Sections */}
            {test.sections && test.sections.map((section) => {
              if (!section || typeof section !== 'object') return null;
              
              const sectionName = section.name || 'Untitled Section';
              const sectionQuestions = test.questions.filter(q => {
                // Skip questions already included in language sections
                const isLanguageQuestion = [
                  'english', 'telugu', 'translation', 'vocabulary', 'grammar', 'comprehension'
                ].some(term => 
                  q.section?.toLowerCase().includes(term) || 
                  q.topic?.toLowerCase().includes(term)
                );
                return q.section === sectionName && !isLanguageQuestion;
              });
              
              if (sectionQuestions.length === 0) return null;
              
              const correctInSection = sectionQuestions.filter(q => {
                const answer = answers.find(a => a.questionId === q.id);
                return answer && answer.selectedOption === q.correctAnswer;
              }).length;
              
              const sectionPercentage = sectionQuestions.length > 0 
                ? Math.round((correctInSection / sectionQuestions.length) * 100) 
                : 0;
              
              return (
                <div key={sectionName} className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-gray-700">{sectionName}</span>
                    <span className="font-medium text-gray-900">
                      {correctInSection}/{sectionQuestions.length} ({sectionPercentage}%)
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        sectionPercentage >= 70 ? 'bg-green-500' : 
                        sectionPercentage >= 40 ? 'bg-yellow-500' : 'bg-red-500'
                      }`} 
                      style={{ width: `${Math.max(5, sectionPercentage)}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Solutions */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Solutions</h2>
            <div className="flex space-x-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                <Check className="w-3 h-3 mr-1" />
                Correct
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                <X className="w-3 h-3 mr-1" />
                Incorrect
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                <Bookmark className="w-3 h-3 mr-1" />
                Marked
              </span>
            </div>
          </div>
          
          <div className="space-y-8">
            {test.questions.map((question, index) => {
              if (!question) return null;
              
              const answer = answers.find(a => a.questionId === question.id);
              const isCorrect = answer?.selectedOption === question.correctAnswer;
              const isMarked = answer?.isMarked;
              const isAnswered = answer?.selectedOption !== null;
              
              return (
                <div 
                  key={question.id} 
                  className={`p-4 rounded-lg border ${
                    isMarked 
                      ? 'border-blue-300 bg-blue-50' 
                      : isCorrect 
                        ? 'border-green-200 bg-green-50' 
                        : !isAnswered 
                          ? 'border-gray-200' 
                          : 'border-red-200 bg-red-50'
                  }`}
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 font-medium text-sm mr-3 mt-0.5">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-gray-900 font-medium mb-3">{question.text}</h3>
                      
                      <div className="space-y-2 mb-4">
                        {question.options.map((option, idx) => {
                          let optionClass = 'p-3 border rounded-md';
                          
                          if (idx === question.correctAnswer) {
                            optionClass += ' bg-green-50 border-green-300';
                          } else if (answer?.selectedOption === idx && !isCorrect) {
                            optionClass += ' bg-red-50 border-red-300';
                          } else {
                            optionClass += ' border-gray-200';
                          }
                          
                          return (
                            <div key={idx} className={optionClass}>
                              <div className="flex items-center">
                                <div className={`w-5 h-5 rounded-full border mr-3 flex-shrink-0 flex items-center justify-center ${
                                  idx === question.correctAnswer 
                                    ? 'bg-green-500 border-green-500' 
                                    : answer?.selectedOption === idx 
                                      ? 'bg-red-500 border-red-500' 
                                      : 'border-gray-400'
                                }`}>
                                  {idx === question.correctAnswer || answer?.selectedOption === idx ? (
                                    <Check className="w-3 h-3 text-white" />
                                  ) : null}
                                </div>
                                <span className="text-gray-800">{option}</span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      
                      <div className="mt-4 p-3 bg-gray-50 rounded-md">
                        <h4 className="text-sm font-medium text-gray-700 mb-1">Explanation:</h4>
                        <p className="text-sm text-gray-600">{question.explanation}</p>
                      </div>
                      
                      {isMarked && (
                        <div className="mt-2 text-right">
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                            <Bookmark className="w-3 h-3 mr-1" />
                            Marked for Review
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
          <button
            onClick={() => navigate('/mock-tests')}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Back to Tests
          </button>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 border border-gray-300 bg-white text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
          >
            Retake Test
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestInterface;
