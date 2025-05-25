
import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";

const FloatingChatbot = () => {
  return (
    <Link
      to="/ask-doubts"
      className="fixed bottom-6 right-6 bg-ts-gold hover:bg-yellow-400 text-ts-blue p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-40 group"
    >
      <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
      <div className="absolute -top-2 -right-2 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
      <div className="absolute bottom-16 right-0 bg-white text-ts-blue px-3 py-2 rounded-lg shadow-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Ask Your Doubts Now!
      </div>
    </Link>
  );
};

export default FloatingChatbot;
