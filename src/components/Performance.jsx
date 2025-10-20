import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { performanceImages, performanceImgPositions } from "../constants/index";
import {useMediaQuery} from "react-responsive";

const Performance = () => {

    // This hook checks if the viewport width is 1024px or less.
    // The result (true/false) is used to conditionally disable the complex animations on mobile for performance.

    const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
    
    // Create a React ref. This will be attached to the main <section> element.
    // GSAP will use this ref as a 'scope' to find child elements (like '.content p').
    
    const sectionRef = useRef(null);
    useGSAP(
        () => {

            // This function contains all the animation code. It runs after the component mounts.
             // Get the actual DOM element from the ref.

            const sectionEl = sectionRef.current;

            // Safety check: If the element isn't rendered for some reason, abort.
            if (!sectionEl) return;

            // Text Animation
            // This is a simple 'fromTo' animation on the paragraph

            gsap.fromTo(
                ".content p",
                { opacity: 0, y: 10 },
                {
                    opacity: 1,
                    y: 0,
                    ease: "power1.out",
                    scrollTrigger: {
                        trigger: ".content p",
                        start: "top bottom",
                        end: "top center",
                        scrub: true,
                        invalidateOnRefresh: true,
                    },
                }
            );

            if (isMobile) return;

            // Image Positioning Timeline
            const tl = gsap.timeline({
                defaults: { duration: 2, ease: "power1.inOut", overwrite: "auto" },
                scrollTrigger: {
                    trigger: sectionEl,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                    invalidateOnRefresh: true,
                },
            });

            // Position Each Performance Image
            // Loop over the position data we imported.
            performanceImgPositions.forEach((item) => {
                // 'p5' is probably the central, static image, so we skip it.
                if (item.id === "p5") return;

                // The 'id' (e.g., "p1") is used as a class selector (e.g., ".p1").
                const selector = `.${item.id}`;

                // Create an object to hold the CSS properties we want to animate *to*
                const vars = {};
                

                // This is a clean, data-driven way to build the animation.
                // If the data file has a 'left' property, add it to the animation.
                if (typeof item.left === "number") vars.left = `${item.left}%`;
                if (typeof item.right === "number") vars.right = `${item.right}%`;
                if (typeof item.bottom === "number") vars.bottom = `${item.bottom}%`;

                if (item.transform) vars.transform = item.transform;

                tl.to(selector, vars, 0);
            });
        },
        { scope: sectionRef, dependencies: [isMobile] }
    );

    return (
        <section id="performance" ref={sectionRef}>
            <h2>Next-level graphics performance. Game on.</h2>

             <div className="wrapper">
                {performanceImages.map((item, index) => (
                    <img
                        key={index}
                        src={item.src}
                        className={item.id}
                        alt={item.alt || `Performance Image #${index + 1}`}
                    />
                ))}
             </div>

            <div className="content">
                <p>
                    Run graphics-intensive workflows with a responsiveness that keeps up
                    with your imagination. The M4 family of chips features a GPU with a
                    second-generation hardware-accelerated ray tracing engine that renders
                    images faster, so{" "}
                    <span className="text-white">
            gaming feels more immersive and realistic than ever.
          </span>{" "}
                    And Dynamic Caching optimizes fast on-chip memory to dramatically
                    increase average GPU utilization — driving a huge performance boost
                    for the most demanding pro apps and games.
                </p>
            </div>
        </section>
    )
}
export default Performance