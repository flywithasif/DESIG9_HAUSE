import { useEffect } from "react";
import { Route, Routes, useLocation, Outlet, Navigate } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Studio from "./pages/Studio";
import Team from "./pages/Team";
import Services from "./pages/Services";
import Journal from "./pages/Journal";
import Contact from "./pages/Contact";
import FreeSiteVisit from "./pages/FreeSiteVisit";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

// Admin CRM Components
import Login from "./components/admin/Login";
import AdminLayout from "./components/admin/AdminLayout";
import Dashboard from "./components/admin/Dashboard";
import LeadsPage from "./components/admin/LeadsPage";
import TeamManagement from "./components/admin/TeamManagement";
import NewslettersPage from "./components/admin/NewslettersPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { 
    window.scrollTo({ top: 0, left: 0, behavior: "auto" }); 
  }, [pathname]);
  return null;
}

// Public Layout Wrapper (Jisme Navbar aur Footer sirf public website ke liye honge)
function PublicLayout() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

// Protected Route Wrapper for Admin Security
function ProtectedRoute() {
  const token = localStorage.getItem("token");
  // Agar token nahi hai toh login page par bhej do
  return token ? <Outlet /> : <Navigate to="/admin/login" replace />;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Public Website Routes (With Navbar & Footer) */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/team" element={<Team />} />
          <Route path="/services" element={<Services />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/free-site-visit" element={<FreeSiteVisit />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Route>

        {/* Admin Login Page */}
        <Route path="/admin/login" element={<Login />} />

        {/* Protected Admin CRM Dashboard Layout & Subpages (Secure Guarded) */}
        <Route element={<ProtectedRoute />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="contact-leads" element={<LeadsPage type="contact" />} />
            <Route path="site-visits" element={<LeadsPage type="site-visits" />} />
            <Route path="newsletters" element={<NewslettersPage />} />
            <Route path="team" element={<TeamManagement />} />
          </Route>
        </Route>

        {/* 404 Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}