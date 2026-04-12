import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import SiteChrome from './components/SiteChrome';
import About from './pages/About';
import Contact from './pages/Contact';
import EventDetail from './pages/EventDetail';
import Events from './pages/Events';
import Home from './pages/Home';
import Login from './pages/Login';
import TakeAction from './pages/TakeAction';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <ScrollToTop />
        <SiteChrome />
        <main className="site-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/initiatives" element={<Events />} />
            <Route path="/initiatives/:slug" element={<EventDetail />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/take-action" element={<TakeAction />} />
            <Route path="/login" element={<Login />} />
            <Route path="/events" element={<Navigate to="/initiatives" replace />} />
            <Route path="/events/:slug" element={<Navigate to="/initiatives" replace />} />
            <Route path="/contact" element={<Navigate to="/contact-us" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
