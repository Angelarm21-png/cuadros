import "./App.css";
import Hero from "./components/Hero.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import About from "./components/About.jsx";
import Gallery from "./components/Gallery.jsx";

function App() {
  return (
    <div className="relative text-white font-sans min-h-screen flex flex-col">
      <div className="absolute top-0 bottom-0 z-[-2] w-full min-h-screen bg-gray-950 bg-[radial-gradient(ellipse_60%_60%_at_50%_-10%,rgba(120,119,198,0.3),rgba(70,20,50,0.4))]"></div>

      <Header />

      <main className="flex-1">
        <Hero></Hero>
        <About></About>
        <Gallery></Gallery>
      </main>

      <Footer />
    </div>
  );
}

export default App;
