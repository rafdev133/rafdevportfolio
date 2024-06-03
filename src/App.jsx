import "./App.css";
import Porfile from "./assets/photo.png";
import Project1 from "./assets/project1.png";
import Project2 from "./assets/project2.png";
import Project3 from "./assets/project3.png";
import Project4 from "./assets/project4.png";
import Project5 from "./assets/project5.png";
import Project6 from "./assets/project6.png";
import Facebook from "./assets/facebook.svg";
import LinkedIn from "./assets/linkedin.svg";
import Instagram from "./assets/instagram.svg";
import ArrowDown from "./assets/arrow-down.svg";
import { useEffect, useState } from "react";

function App() {
  const [scrolling, setScrolling] = useState(false);

  const onPageScroll = () => {
    if (window.pageYOffset > 200) {
      setScrolling(true)
    } else {
      setScrolling(false);
    }
  }

  const previewResume = () => {
    const googleDriveLink = 'https://drive.google.com/file/d/1sisyMMWyzpdHzvB-7iIR-y1XuffaeOUA/view?usp=sharing';
    window.open(googleDriveLink, '_blank');
  };

  useEffect(() => {
    window.addEventListener("scroll", onPageScroll)
    return () => {
      window.removeEventListener("scroll", onPageScroll)
    }
  }, [])


  return (
    <div className="max-w-4xl m-auto relative">
      <header className={`${scrolling ? 'border-b border-gray-900' : ''}  fixed left-0 right-0 top-0 z-20`} id="home">
        <div className="container m-auto px-4 py-6 max-w-4xl bg-black">
          <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
            <div>
              <h1 className="font-bold text-2xl">Rafael Portfolio</h1>
            </div>
            <div>
              <ul className="flex gap-4">
                <li>
                  <a href="#projects" className="text-gray-400 hover:text-white cursor-pointer">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#technologies" className="text-gray-400 hover:text-white cursor-pointer">
                    Technologies
                  </a>
                </li>
                <li>
                  <a href="#aboutme" className="text-gray-400 hover:text-white cursor-pointer">
                    About me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main className="relative mt-28">
        {/* Intro/Banner section */}
        <section>
          <div className="container m-auto px-4 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6 text-center sm:text-left">
            <div>
              <h2 className="font-bold text-4xl">Hello, I'm Rafael Porgatorio</h2>
              <div>
                <h2 className="font-bold text-4xl mt-1 gradiant-text text-[#DC5F00]">frontend developer</h2>
              </div>
              <div>
                <p className="mt-4 text-gray-400">
                  I’m an aspiring front-end developer with a passion for creating visually stunning and highly interactive websites. My journey in front-end development is driven by creativity, attention to detail, and a commitment to delivering excellent user experiences.
                </p>
                <button
                  className="px-8 shadow-gray-500 shadow-md py-5 mt-5 bg-gradient-to-t bg-[#DC5F00] rounded-full to-cyan-500 hover:from-[#FFA62F] hover:to-[#FFA62F]"
                  onClick={previewResume}
                >
                  Download resume
                </button>
              </div>
            </div>
            <div className="relative">
              <div>
                <img src={Porfile} className="relative z-10 w-[280px] m-auto sm:w-[600px]" />
              </div>
            </div>
          </div>
        </section>
        {/* Projects section */}
        <section id="projects">
          <div className="container m-auto px-4 sm:py-12">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <div className="flex flex-col sm:flex-row gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project1} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  Clothing Store Landing Page
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Responsive WORDPRESS layout for online clothing for men store.
                </p>
                <div className="flex mt-12 gap-2">
                  <a
                    href="https://mrmensapparelzone.store/" // Replace with your actual URL
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-sm py-3 bg-gradient-to-t bg-[#DC5F00] rounded-full to-cyan-500 hover:from-[#FFA62F] hover:to-[#FFA62F] text-center block"
                  >
                    Live preview
                  </a>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project2} className="w-full h-[172.17px]" />
                <h3 className="text-2xl font-semibold mt-8">
                  Travel and Tours Website
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Responsive HTML/CSS/BOOTSTRAP layout for online buying ticket.</p>
                <div className="flex gap-2 mt-12">
                  <a
                    href="https://seeandexplore.online/" // Replace with your actual URL
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-sm py-3 bg-gradient-to-t bg-[#DC5F00] rounded-full to-cyan-500 hover:from-[#FFA62F] hover:to-[#FFA62F] text-center block"
                  >
                    Live preview
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row  gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project3} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  Static Landing Page
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Responsive HTML/CSS layout for landing page for front-end
                  developer.
                </p>
                <div className="flex gap-4 mt-12">
                  <a
                    href="https://rafael-static-webpage.000webhostapp.com/index.php" // Replace with your actual URL
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-sm py-3 bg-gradient-to-t bg-[#DC5F00] rounded-full to-cyan-500 hover:from-[#FFA62F] hover:to-[#FFA62F] text-center block"
                  >
                    Live preview
                  </a>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-[#DC5F00] hover:text-[#DC5F00]">
                    Checkout github
                  </button>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project4} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  Static Landing Page
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Responsive HTML/TAILWIND CSS layout for landing page for front-end
                  developer.
                </p>
                <div className="flex gap-2 mt-12">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t bg-[#DC5F00] rounded-full to-cyan-500 hover:from-[#FFA62F] hover:to-[#FFA62F]">
                    Live preview
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-[#DC5F00] hover:text-[#DC5F00]">
                    Checkout github
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row  gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project5} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  Personal Portfolio
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Responsive HTML/TAILWIND CSS/REACT JS layout for my personal portfolio.
                </p>
                <div className="flex gap-4 mt-12">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t bg-[#DC5F00] rounded-full to-cyan-500 hover:from-[#FFA62F] hover:to-[#FFA62F]">
                    Live preview
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-[#DC5F00] hover:text-[#DC5F00]">
                    Checkout github
                  </button>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project6} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  Dog Vaccination System
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Responsive HTML/CSS/PHP layout for my capstone project to track their vaccination status of their dog in a barangay.
                </p>
                <div className="flex gap-2 mt-12">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t bg-[#DC5F00] rounded-full to-cyan-500 hover:from-[#FFA62F] hover:to-[#FFA62F]">
                    Live preview
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-[#DC5F00] hover:text-[#DC5F00]">
                    Checkout github
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Technoglies section */}
        <section className="py-10" id="technologies">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">Technologies</h2>
            <div className="mt-14">
              <div>
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">HTML</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t bg-[#DC5F00] to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">CSS</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t bg-[#DC5F00] to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">
                    Bootstrap
                  </h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t bg-[#DC5F00] to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Tailwind</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[75%] h-2 mt-2 bg-gradient-to-t bg-[#DC5F00] to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Javascript</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[90%] h-2 mt-2 bg-gradient-to-t bg-[#DC5F00] to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">React</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[45%] h-2 mt-2 bg-gradient-to-t bg-[#DC5F00] to-cyan-500 block rounded-md" />
              </div>
            </div>
          </div>
        </section>
        {/* Additional skills section */}
        <section>
          <div className="container m-auto px-4 py-14">
            <h2 className="text-2xl font-semibold">
              Additional technologies and skills
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-28 mt-12 w-[80%]">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-[#DC5F00] before:to-[#DC5F00] before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Git
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-[#DC5F00] before:to-[#DC5F00] before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Wordpress
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-[#DC5F00] before:to-[#DC5F00] before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  RWD
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-[#DC5F00] before:to-[#DC5F00] before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Quick learning
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-36 mt-4 sm:mt-6 w-[80%]">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-[#DC5F00] before:to-[#DC5F00] before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Teamwork
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-[#DC5F00] before:to-[#DC5F00] before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Problem Solving
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-[#DC5F00] before:to-[#DC5F00] before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Troubleshooting
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-8" id="aboutme">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">About me</h2>
            <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white">
              <div className="pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-[#DC5F00] before:to-[#DC5F00] before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2024</h3>
                <p>
                  I graduated college from (Bulacan State University Sarmiento Campus in San Jose Del Monte Bulacan) with a degree in Information Technology.
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-[#DC5F00] before:to-[#DC5F00] before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2024</h3>
                <p>
                  Internship Exposure as a Front-end Devoleper Intern in Adsvanced Media Tech Solution inc.
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-[#DC5F00] before:to-[#DC5F00] before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2016</h3>
                <p>
                  I graduated highschool from (Sampaguita highschool in Camarin Caloocan City)
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-[#DC5F00] before:to-[#DC5F00] before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2011</h3>
                <p>
                  I graduated elementary from (FSS Patulo Elementary School in Marilao Bulacan)
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container m-auto flex justify-between px-4 py-6">
          <div>
            <p className="text-gray-300 text-sm">Copyright @ 2024</p>
          </div>
          <div>
            <ul className="flex gap-4">
              <li>
                <a>
                  <img src={Facebook} className="w-5" />
                </a>
              </li>
              <li>
                <a>
                  <img src={LinkedIn} className="w-5" />
                </a>
              </li>
              <li>
                <a>
                  <img src={Instagram} className="w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {
        scrolling && (
          <button className="fixed block right-8 bottom-0 w-24" onClick={() => {
            window.scrollTo(0, 0);
          }}>
            <img src={ArrowDown} />
          </button>
        )
      }
    </div>
  );
}

export default App;
