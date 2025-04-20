
import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import Index from "./pages/Index"
import Home from "./pages/Home"
import About from "./pages/About"
import Menu from "./pages/Menu"
import Gallery from "./pages/Gallery"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"

const queryClient = new QueryClient()

const AppContent = () => {
  const location = useLocation()
  const showNavigation = location.pathname !== "/"
  const showFooter = location.pathname !== "/"

  return (
    <>
      {showNavigation && <Navigation />}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {showFooter && <Footer />}
    </>
  )
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
)

export default App
