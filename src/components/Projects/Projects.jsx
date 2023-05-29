import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import "./projects.css";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const section = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const project = gsap.utils.toArray(".project");
      // const scrollLeft = section.current.scrollWidth - innerWidth;
      gsap.to(project, {
        xPercent: -100 * (project.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".projects-section",
          start: "top top",
          pin: true,
          scrub: 1,
          end: () => "+=3000",
          markers: true,
          snap: {
            snapTo: 1 / (project.length - 1),
            duration: 0.5,
            delay: 1,
            ease: "power1",
            directional: false,
            inertia: true,
          },
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <div className="wrapper" ref={section}>
      <section className="projects-section">
        <article className="project">1</article>
        <article className="project">2</article>
        <article className="project">3</article>
        <article className="project">4</article>
      </section>
    </div>
  );
}

export default Projects;
