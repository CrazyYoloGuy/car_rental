import "./client/global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import Index from "./client/pages/Index";
import Fleet from "./client/pages/Fleet";
import Inquiries from "./client/pages/Inquiries";
import About from "./client/pages/About";
import Contact from "./client/pages/Contact";
import NotFound from "./client/pages/NotFound";
import Login from "./client/pages/Login";
import Dashboard from "./client/pages/Dashboard";
import Bookings from "./client/pages/dashboard/Bookings";
import Placeholder from "./client/pages/dashboard/Placeholder";
import Book from "./client/pages/Book";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/fleet" element={<Fleet />} />
            <Route path="/inquiries" element={<Inquiries />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/book" element={<Book />} />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/dashboard/bookings" element={
              <ProtectedRoute>
                <Bookings />
              </ProtectedRoute>
            } />
            <Route path="/dashboard/fleet" element={
              <ProtectedRoute>
                <Placeholder title="Fleet Management" description="Manage your vehicle fleet and maintenance schedules" />
              </ProtectedRoute>
            } />
            <Route path="/dashboard/analytics" element={
              <ProtectedRoute>
                <Placeholder title="Analytics" description="View detailed analytics and performance metrics" />
              </ProtectedRoute>
            } />
            <Route path="/dashboard/settings" element={
              <ProtectedRoute>
                <Placeholder title="Settings" description="Configure system settings and preferences" />
              </ProtectedRoute>
            } />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />); 