import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Contact />
      </main>
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-slate-600">
          <p>© 2025 Surya Travels & Computers. All rights reserved.</p>
          <p>
            Developed by <a href="#" className="font-semibold hover:text-slate-900">Fubixe</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
