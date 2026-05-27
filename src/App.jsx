import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-[#0d1117] text-white overflow-hidden relative">
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/20 blur-[120px]" />
        <div className="absolute top-[20%] right-[-5%] w-[40%] h-[60%] rounded-full bg-purple-900/15 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[10%] w-[30%] h-[40%] rounded-full bg-cyan-950/20 blur-[80px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>
     

      <div className="relative z-10">
        
        <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
          <Navbar />
          <Hero />
          <Skills />
          <Projects />
          <Contact />
        </main>
       
      </div>
    </div>
  );
};

export default App;
