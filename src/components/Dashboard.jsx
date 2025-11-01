import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.webp';
import logo4 from '../assets/logo4.webp';
import logo5 from '../assets/logo5.jpg';
import Ai from '../assets/Ai.jpg';
import analytic from '../assets/analytic.jpg';
import all from '../assets/all.webp';
const Dashboard = () => {
  return (
    <>
    <div className="min-h-screen bg-n-8 text-white flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold mb-6">Welcome to Your Workspace </h1>
      <p className="text-lg text-n-3 mb-10 text-center max-w-2xl">
        Explore your projects, track your portfolio, and access all features designed to boost your productivity.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
        <div className="
        bg-n-7 p-8 rounded-2xl shadow-xl hover:scale-[1.04] hover:shadow-2xl transition-all duration-300 min-h-[18rem] flex flex-col justify-start">
          <h3 className="text-2xl font-semibold mb-2">Projects</h3>
          <p className="text-n-3">View, edit, and organize all your development projects in one place.</p>
         
  <button
    onClick={() => {
      document
        .getElementById("projects")
        .scrollIntoView({ behavior: "smooth" });
    }}
    className="text-color-1 font-semibold hover:underline self-start justify-between mt-auto"
  >
    Explore →
  </button>
        </div>
        <div className=" bg-n-7 p-8 rounded-2xl shadow-xl hover:scale-[1.04] hover:shadow-2xl transition-all duration-300 min-h-[18rem] flex flex-col justify-start">
          <h3 className="text-2xl font-semibold mb-2">Portfolio</h3>
          <p className="text-n-3">Showcase your completed works with visuals and live demos.</p>
           <button
    onClick={() => {
      document
        .getElementById("portfolio")
        .scrollIntoView({ behavior: "smooth" });
    }}
    className="text-color-1 font-semibold hover:underline self-start justify-between mt-auto"
  >
    Explore →
  </button>
        </div>
        <div className=" bg-n-7 p-8 rounded-2xl shadow-xl hover:scale-[1.04] hover:shadow-2xl transition-all duration-300 min-h-[18rem] flex flex-col justify-start">
          <h3 className="text-2xl font-semibold mb-2">More Features</h3>
          <p className="text-n-3">Access tools, analytics, and AI-powered insights to improve daily.</p>
           <button
    onClick={() => {
      document
        .getElementById("features")
        .scrollIntoView({ behavior: "smooth" });
    }}
    className="text-color-1 font-semibold hover:underline self-start justify-between mt-auto"
  >
    Explore →
  </button>
        </div>
      </div>
    </div>
    <section
  id="projects"
  className="mt-24 w-full max-w-7xl mx-auto text-center overflow-hidden"
>
  <h2 className="text-4xl font-bold mb-12 text-white">Featured Projects</h2>

  {/* Scrolling Container */}
  <div className="overflow-x-auto scrollbar-hide">
    <div className="flex space-x-8 px-5 pb-4">
      {[
       logo1, logo2, logo3, logo4,logo5
        
      ].map((img, i) => (
        <div
          key={i}
          className="min-w-[320px] bg-n-7 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <img
            src={img}
            alt={`Project ${i + 1}`}
            className="w-full h-60 object-cover rounded-2xl"
          />
        </div>
      ))}
    </div>
  </div>
</section>



{/* Portfolio Section */}
<section
  id="portfolio"
  className="mt-24 w-full max-w-7xl mx-auto text-center px-5"
>
  <h2 className="text-4xl font-bold mb-12 text-white">
    Portfolio Showcase
  </h2>
  <p className="text-n-3 max-w-2xl mx-auto mb-10">
    Here’s a glimpse of projects that highlight creativity, functionality, and clean UI design.  
    Explore visuals and live demos below.
  </p>

  {/* Portfolio Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
      {
        img: logo1,
        title: "AI Chat App",
        desc: "Conversational AI interface built using React & OpenAI API.",
      },
      
     
      {
        img: logo2,
        title: "Portfolio Builder",
        desc: "Generate and host personal developer portfolios in seconds.",
      },
      {
        img:logo4,
        title: "Weather Dashboard",
        desc: "Real-time weather updates and forecasts with API integration.",
      },
    ].map((project, i) => (
      <div
        key={i}
        className="group bg-n-7 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
      >
        <div className="relative overflow-hidden">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <a
              href="#"
              className="text-white bg-color-1 px-4 py-2 rounded-lg font-semibold hover:bg-color-1/90 transition"
            >
              Live Demo
            </a>
          </div>
        </div>
        <div className="p-5 text-left">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-n-3">{project.desc}</p>
        </div>
      </div>
    ))}
  </div>
</section>



<section id="features" className="mt-20 w-full max-w-6xl mx-auto px-6">
  <div className="text-center mb-10">
    <h2 className="text-3xl font-bold mb-4 text-white">More Features</h2>
   
  </div>

  <div className="flex flex-wrap justify-center gap-8 mt-10">
  {/* Feature 1 */}
  <div className="flex items-start gap-4 bg-n-7 p-5 rounded-xl w-72 shadow-md hover:scale-105 transition-transform">
    <div className="bg-color-1/10 p-3 rounded-xl">
      <img src={Ai} alt="AI Tools" className="w-8 h-8" />
    </div>
    <div>
      <h4 className="text-xl font-semibold">AI Insights</h4>
    </div>
  </div>

  {/* Feature 2 */}
  <div className="flex items-start gap-4 bg-n-7 p-5 rounded-xl w-72 shadow-md hover:scale-105 transition-transform">
    <div className="bg-color-1/10 p-3 rounded-xl">
      <img src={analytic} alt="Analytics" className="w-8 h-8" />
    </div>
    <div>
      <h4 className="text-xl font-semibold">Smart Analytics</h4>
    </div>
  </div>

  {/* Feature 3 */}
  <div className="flex items-start gap-4 bg-n-7 p-5 rounded-xl w-72 shadow-md hover:scale-105 transition-transform">
    <div className="bg-color-1/10 p-3 rounded-xl">
      <img src={all} alt="Tools" className="w-8 h-8" />
    </div>
    <div>
      <h4 className="text-xl font-semibold">All-in-One Tools</h4>
    </div>
  </div>
</div>

</section>

<footer className="bg-n-8 text-n-3 py-10 mt-20 border-t border-n-6">
  <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

    {/* Left Section */}
    <div className="text-center md:text-left">
      <h3 className="text-xl font-bold text-white mb-2">DevSpace</h3>
      <p className="text-sm text-n-4 max-w-sm">
        Built to empower developers — connect ideas, build projects, and grow your portfolio with purpose.
      </p>
    </div>

    
    {/* Right - Short Line or Quote */}
    <div className="text-sm text-n-4 italic text-center md:text-right">
      “Keep building. Keep improving. Every day counts.”
    </div>
  </div>

  {/* Bottom Note */}
  <div className="text-center text-xs text-n-4 mt-8 border-t border-n-6 pt-4">
    © {new Date().getFullYear()} DevSpace. All rights reserved.
  </div>
</footer>




   

</>

  );
};

export default Dashboard;
