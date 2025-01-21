
import Intro from "./components/intro";
import Navbar from "./components/Navbar";
// import Projects from "./components/Projects";
// import ConnectMe from "./components/ConnectMe";
// import Footer from "./components/Footer";

function App() {

  return (

    
    <div className="overflow-hidden text-neutral-300 selection:bg-blue-300 selection:text-black">
      <div className="fixed top-0 -z-10 w-full h-full">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#2765EB_100%)]"></div>
      </div>

      <div className="container mx-8 px-8">
        <Navbar />
        <Intro />
        {/* <Projects/>
        <ConnectMe/>
        <Footer/> */}
      </div>
    </div>
  );
}

export default App;
