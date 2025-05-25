
import { Download, FileText, Calendar } from "lucide-react";

const ModelPapers = () => {
  const modelPapers = [
    {
      id: 1,
      title: "Constable Previous Year Paper 2023",
      description: "Complete question paper with solutions",
      year: "2023",
      type: "Constable",
      format: "PDF",
    },
    {
      id: 2,
      title: "SI Previous Year Paper 2023",
      description: "Sub Inspector exam question paper",
      year: "2023",
      type: "SI",
      format: "PDF",
    },
    {
      id: 3,
      title: "CI Previous Year Paper 2022",
      description: "Circle Inspector exam question paper",
      year: "2022",
      type: "CI",
      format: "PDF",
    },
    {
      id: 4,
      title: "Constable Model Paper Set 1",
      description: "Practice paper based on latest syllabus",
      year: "2024",
      type: "Constable",
      format: "PDF",
    },
    {
      id: 5,
      title: "SI Model Paper Set 1",
      description: "Comprehensive practice paper for SI exam",
      year: "2024",
      type: "SI",
      format: "PDF",
    },
    {
      id: 6,
      title: "General Studies Compilation",
      description: "Important GS questions for all posts",
      year: "2024",
      type: "All Posts",
      format: "PDF",
    },
  ];

  const categories = [
    {
      title: "Previous Year Papers",
      description: "Original question papers from past exams",
      count: 3,
    },
    {
      title: "Model Papers",
      description: "Practice papers based on latest syllabus",
      count: 3,
    },
    {
      title: "Subject-wise Papers",
      description: "Topic-specific question collections",
      count: 1,
    },
  ];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-ts-blue mb-4">
            Model Papers
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Download previous year question papers and model papers for Telangana Police Constable, SI, and CI exams. All papers are free to download.
          </p>
        </div>

        {/* Categories */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-ts-gold"
            >
              <h3 className="text-xl font-bold text-ts-blue mb-2">
                {category.title}
              </h3>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <span className="bg-ts-gold text-ts-blue px-3 py-1 rounded-full text-sm font-semibold">
                {category.count} Papers
              </span>
            </div>
          ))}
        </div>

        {/* Model Papers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modelPapers.map((paper) => (
            <div
              key={paper.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <FileText className="w-8 h-8 text-ts-gold flex-shrink-0" />
                <span className="bg-blue-100 text-ts-blue px-2 py-1 rounded text-xs font-semibold">
                  {paper.type}
                </span>
              </div>

              <h3 className="text-lg font-bold text-ts-blue mb-2">
                {paper.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">{paper.description}</p>

              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{paper.year}</span>
                </div>
                <span className="text-ts-blue font-semibold">{paper.format}</span>
              </div>

              <button className="w-full bg-ts-gold text-ts-blue py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors flex items-center justify-center">
                <Download className="w-4 h-4 mr-2" />
                Download
              </button>
              
              <p className="text-xs text-gray-500 mt-2 text-center">
                PDF will be available soon
              </p>
            </div>
          ))}
        </div>

        {/* Instructions */}
        <div className="mt-12 bg-yellow-50 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-ts-blue mb-4">
            How to Use Model Papers Effectively
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-ts-blue mb-2">1. Solve in Exam Conditions</h3>
              <p className="text-gray-600">Practice papers under timed conditions to simulate the real exam</p>
            </div>
            <div>
              <h3 className="font-semibold text-ts-blue mb-2">2. Analyze Your Performance</h3>
              <p className="text-gray-600">Review your answers and identify areas for improvement</p>
            </div>
            <div>
              <h3 className="font-semibold text-ts-blue mb-2">3. Focus on Weak Areas</h3>
              <p className="text-gray-600">Spend more time on topics where you scored poorly</p>
            </div>
            <div>
              <h3 className="font-semibold text-ts-blue mb-2">4. Regular Practice</h3>
              <p className="text-gray-600">Solve papers regularly to maintain your preparation level</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelPapers;
