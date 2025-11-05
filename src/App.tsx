import { lazy, Suspense, useCallback, useEffect, useState, useRef } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { AdminLogin } from './pages/AdminLogin';
import { AdminDashboard } from './pages/AdminDashboard';
import { AdminPostEditor } from './pages/AdminPostEditor';
import { BlogPost } from './pages/BlogPost';

import Blog from "./pages/Blog";


// Eager load critical components
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Create Query Client with better defaults
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
      cacheTime: 5 * 60 * 1000, // 5 minutes
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

// Constants
const SCROLL_VISIBILITY_THRESHOLD = 300;
const CIRCLE_RADIUS = 24;

/**
 * Professional Scroll-to-Top Button Component
 * Features:
 * - Circular progress indicator
 * - Smooth animations
 * - Optimized scroll handler with requestAnimationFrame
 */
function ScrollToTopButton() {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const frameRef = useRef<number>();

  // Optimized scroll handler using requestAnimationFrame
  const handleScroll = useCallback(() => {
    // Cancel previous frame if exists
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
    }

    // Schedule update in next frame
    frameRef.current = requestAnimationFrame(() => {
      const scrollHeight = document.documentElement.scrollHeight - 
                          document.documentElement.clientHeight;
      const scrollTop = document.documentElement.scrollTop;
      const percentage = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      
      setScrollPercentage(percentage);
      setIsVisible(scrollTop > SCROLL_VISIBILITY_THRESHOLD);
    });
  }, []);

  useEffect(() => {
    // Use passive event listener for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [handleScroll]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Calculate circle progress
  const circumference = 2 * Math.PI * CIRCLE_RADIUS;
  const strokeDashoffset = circumference - (scrollPercentage / 100) * circumference;

  return (
    <div 
      className={cn(
        "fixed bottom-8 right-8 z-50 transition-all duration-300 no-print",
        isVisible 
          ? "opacity-100 visible translate-y-0" 
          : "opacity-0 invisible translate-y-4"
      )}
    >
      <button
        onClick={scrollToTop}
        className={cn(
          "relative w-14 h-14 rounded-2xl flex items-center justify-center",
          "bg-primary text-primary-foreground shadow-professional hover:shadow-hover",
          "transition-all duration-300 hover:scale-110 active:scale-95",
          "group"
        )}
        aria-label="Scroll to top"
      >
        {/* Progress Circle */}
        <svg 
          className="absolute inset-0 w-full h-full -rotate-90"
          viewBox="0 0 56 56"
        >
          {/* Background circle */}
          <circle
            cx="28"
            cy="28"
            r={CIRCLE_RADIUS}
            className="stroke-primary-foreground/20"
            strokeWidth="3"
            fill="none"
          />
          {/* Progress circle */}
          <circle
            cx="28"
            cy="28"
            r={CIRCLE_RADIUS}
            className="stroke-accent transition-all duration-300"
            strokeWidth="3"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="none"
          />
        </svg>

        {/* Arrow Icon */}
        <ArrowUp className="w-6 h-6 relative z-10 transition-transform group-hover:-translate-y-1" />
      </button>
    </div>
  );
}

/**
 * Loading Skeleton Component
 * Professional loading state for lazy-loaded components
 */
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="space-y-4 text-center">
        <div className="relative w-16 h-16 mx-auto">
          <div className="absolute inset-0 rounded-full border-4 border-primary/20"></div>
          <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
        </div>
        <p className="text-sm text-muted-foreground font-medium">Loading...</p>
      </div>
    </div>
  );
}

/**
 * Main App Component
 * Features:
 * - React Query for data fetching
 * - Lazy loading for better performance
 * - Professional scroll-to-top button
 * - Toast notifications
 * - Proper error boundaries
 */
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider delayDuration={300}>
        <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              {/* Admin Routes */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/create" element={<AdminPostEditor />} />
              <Route path="/admin/edit/:id" element={<AdminPostEditor />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          
          {/* Toast Notifications */}
          <Toaster />
          <Sonner 
            position="top-right"
            toastOptions={{
              classNames: {
                toast: 'bg-card border-border shadow-professional',
                title: 'text-foreground font-semibold',
                description: 'text-muted-foreground',
              },
            }}
          />
          
          {/* Scroll to Top Button */}
          <ScrollToTopButton />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
