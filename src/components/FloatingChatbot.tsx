
import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";

const FloatingChatbot = () => {
  return (
    <Link
      to="/ask-doubts"
      className="fixed bottom-6 right-6 bg-ts-gold hover:bg-yellow-400 text-ts-blue p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-40"
    >
      <MessageCircle size={24} />
    </Link>
  );
};

export default FloatingChatbot;
