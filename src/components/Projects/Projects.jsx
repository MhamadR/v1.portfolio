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
          trigger: section.current,
          pin: true,
          scrub: true,
          end: () => "+=3000",
          markers: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section className="projects-section" ref={section}>
      <article className="project">1</article>
      <article className="project">2</article>
      <article className="project">3</article>
      <article className="project">4</article>
    </section>
  );
}

export default Projects;
