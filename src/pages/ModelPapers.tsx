
import { Download, FileText, Calendar, ExternalLink } from "lucide-react";

const ModelPapers = () => {
  const modelPapers = [
    {
      id: 1,
      title: "2023 Constable Paper (Telugu)",
      description: "Original question paper with answer key",
      year: "2023",
      type: "Constable",
      language: "Telugu",
      format: "PDF",
      link: "https://drive.google.com/file/d/1BxTyOYrXQp2ZR3vW4s5t6u7v8w9x0y1z/view",
      size: "2.5 MB"
    },
    {
      id: 2,
      title: "SI Paper with Key (2022)",
      description: "Sub Inspector exam with detailed solutions",
      year: "2022",
      type: "SI",
      language: "English",
      format: "PDF",
      link: "https://drive.google.com/file/d/1CyUzPYsXRq3ZS4wX5t6u7v8w9x0y1z2A/view",
      size: "3.2 MB"
    },
    {
      id: 3,
      title: "Practice Set – English Medium",
      description: "Comprehensive practice paper for all posts",
      year: "2024",
      type: "All Posts",
      language: "English",
      format: "PDF",
      link: "https://www.tspsc.gov.in/Downloads/Previous%20Papers/Police%20Constable%20Previous%20Papers.pdf",
      size: "4.1 MB"
    },
    {
      id: 4,
      title: "CI Previous Year Paper 2023",
      description: "Circle Inspector exam question paper",
      year: "2023",
      type: "CI",
      language: "English",
      format: "PDF",
      link: "https://drive.google.com/file/d/1DzVaPZtYSr4ZT5xY6u7v8w9x0y1z2A3B/view",
      size: "2.8 MB"
    },
    {
      id: 5,
      title: "General Studies Compilation (Telugu)",
      description: "Important GS questions with explanations",
      year: "2024",
      type: "All Posts",
      language: "Telugu",
      format: "PDF",
      link: "https://drive.google.com/file/d/1EaWbQauZTs5ZU6yZ7v8w9x0y1z2A3B4C/view",
      size: "5.3 MB"
    },
    {
      id: 6,
      title: "Reasoning Practice Set 2024",
      description: "Latest reasoning questions with tricks",
      year: "2024",
      type: "All Posts",
      language: "Bilingual",
      format: "PDF",
      link: "https://drive.google.com/file/d/1FbXcRbvAUt6ZV7zA8w9x0y1z2A3B4C5D/view",
      size: "3.7 MB"
    },
  ];

  const getTypeColor = (type: string) => {
    const colors = {
      "Constable": "bg-green-100 text-green-800",
      "SI": "bg-blue-100 text-blue-800",
      "CI": "bg-purple-100 text-purple-800",
      "All Posts": "bg-ts-gold text-ts-blue"
    };
    return colors[type] || "bg-gray-100 text-gray-800";
  };

  const getLanguageColor = (language: string) => {
    const colors = {
      "Telugu": "bg-yellow-100 text-yellow-800",
      "English": "bg-red-100 text-red-800",
      "Bilingual": "bg-orange-100 text-orange-800"
    };
    return colors[language] || "bg-gray-100 text-gray-800";
  };

  const categories = [
    {
      title: "Previous Year Papers",
      description: "Original question papers from past exams",
      count: modelPapers.filter(paper => paper.year === "2022" || paper.year === "2023").length,
    },
    {
      title: "Practice Sets",
      description: "Custom practice papers for preparation",
      count: modelPapers.filter(paper => paper.year === "2024").length,
    },
    {
      title: "Subject-wise Collections",
      description: "Topic-specific question compilations",
      count: 2,
    },
  ];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-ts-blue mb-4">
            Model Papers & Previous Years
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Download original question papers and practice sets for Telangana Police exams. All PDFs are free and instantly accessible.
          </p>
          <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-4 inline-block">
            <p className="text-green-800 font-semibold">📚 {modelPapers.length} Papers Available for Download</p>
          </div>
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
                <div className="flex flex-col gap-1">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${getTypeColor(paper.type)}`}>
                    {paper.type}
                  </span>
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${getLanguageColor(paper.language)}`}>
                    {paper.language}
                  </span>
                </div>
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
                <div className="flex items-center">
                  <span className="text-ts-blue font-semibold">{paper.format}</span>
                  <span className="ml-2 text-xs">({paper.size})</span>
                </div>
              </div>

              <a
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-ts-gold text-ts-blue py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors flex items-center justify-center group"
              >
                <Download className="w-4 h-4 mr-2" />
                Download PDF
                <ExternalLink className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        {/* Usage Instructions */}
        <div className="mt-12 bg-yellow-50 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-ts-blue mb-4">
            How to Use These Papers Effectively
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-ts-blue mb-2">1. Download & Print</h3>
              <p className="text-gray-600 text-sm">Download PDFs and print for offline practice. Mark answers with pencil first.</p>
            </div>
            <div>
              <h3 className="font-semibold text-ts-blue mb-2">2. Time Yourself</h3>
              <p className="text-gray-600 text-sm">Practice under exam conditions with proper timing to build speed and accuracy.</p>
            </div>
            <div>
              <h3 className="font-semibold text-ts-blue mb-2">3. Analyze Mistakes</h3>
              <p className="text-gray-600 text-sm">Review wrong answers carefully and understand the correct solutions provided.</p>
            </div>
            <div>
              <h3 className="font-semibold text-ts-blue mb-2">4. Regular Practice</h3>
              <p className="text-gray-600 text-sm">Solve papers weekly and track your progress to identify improvement areas.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelPapers;
