import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingChatbot from "./components/FloatingChatbot";
import React, { Suspense, lazy } from 'react';
import { LoadingPage } from './components/ui/loading-spinner';

const queryClient = new QueryClient();

const Home = lazy(() => import("./pages/Home"));
const MockTests = lazy(() => import("./pages/MockTests"));
const TestInterface = lazy(() => import("./pages/TestInterface"));
const ModelPapers = lazy(() => import("./pages/ModelPapers"));
const AskDoubts = lazy(() => import("./pages/AskDoubts"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const StudyPlans = lazy(() => import("./pages/StudyPlans"));
const ConstablePage = lazy(() => import("./pages/study-plans/ConstablePage"));
const SIPage = lazy(() => import("./pages/study-plans/SIPage"));
const CIPage = lazy(() => import("./pages/study-plans/CIPage"));
const ConstableHub = lazy(() => import("./pages/hubs/ConstableHub"));
const SIHub = lazy(() => import("./pages/hubs/SIHub"));
const CIHub = lazy(() => import("./pages/hubs/CIHub"));

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Navbar />
          <main className="pt-16 flex-grow">
            <Suspense fallback={<LoadingPage />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mock-tests" element={<MockTests />} />
                <Route path="/test/:testId" element={<TestInterface />} />
                <Route path="/model-papers" element={<ModelPapers />} />
                <Route path="/ask-doubts" element={<AskDoubts />} />
                <Route path="/contact" element={<Contact />} />
                
                {/* Role Hubs */}
                <Route path="/hubs/constable" element={<ConstableHub />} />
                <Route path="/hubs/si" element={<SIHub />} />
                <Route path="/hubs/ci" element={<CIHub />} />
                
                {/* Study Plans Routes */}
                <Route path="/study-plans" element={<StudyPlans />} />
                <Route path="/study-plans/constable" element={<ConstablePage />} />
                <Route path="/study-plans/si" element={<SIPage />} />
                <Route path="/study-plans/ci" element={<CIPage />} />
                
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <FloatingChatbot />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
