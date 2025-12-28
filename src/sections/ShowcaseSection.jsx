import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];
    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* Left */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="/images/Project1EcomWebApp.png" alt="Ecom Web App Image" />
            </div>
             <a
            href="https://e-commerce-store-afj4.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="see-more-link text-center mt-4 block text-lg animate-pulse  text-blue-400"
          >
            🔗 View Live Project
          </a>
            <div className="text-content">
              <h2>
              Elevate Your Shopping Experience with Our Seamless, User-Friendly eCommerce App
              </h2>
              <p className="text-white-50 md:text-xl">
              Built using React & TailwindCSS to deliver a smooth and intuitive shopping journey from browsing to checkout.
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/Project2-Auth.png" alt="_Auth Verification" />
              </div>
                              <a
            href="https://e-commerce-store-afj4.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="see-more-link text-center mt-4 block text-lg animate-pulse  text-blue-400"
          >
            🔗 View Live Project
          </a>
              <h2>🔐 MERN Auth System with Email Verification</h2>

            </div>

            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <img src="/images/Project3-Chatty-chatApp.png" alt="Chat App" />
              </div>
              <h2>Real-Time MERN Chat App</h2>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
