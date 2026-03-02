import { useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedTooltip } from "../layout/Tooltip";
import { ThreeDMarquee } from "../layout/Marquee";
import { isMobile } from "../../utils/isMobile";
import { content } from "../../Content";
import { TypeAnimation } from "react-type-animation";
import { CanvasText } from "../layout/CanvasText";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const { hero } = content;
  const sectionRef = useRef(null);
  // const textRef = useRef(null);
  const people = [
    {
      id: 1,
      name: "Dancel Mautsa",
      designation: "Frontend Developer",
      image: "https://ik.imagekit.io/qvdv4r3lk/me.png?updatedAt=1721930401325",
    },
    {
      id: 2,
      name: "Tinotenda Mautsa",
      designation: "Software Engineer",
      image: "https://ik.imagekit.io/qvdv4r3lk/tino.jpg",
    },
    {
      id: 3,
      name: "Butler Nyamunokora",
      designation: "CEO",
      image: "https://ik.imagekit.io/qvdv4r3lk/butler.jpg",
    },
    {
      id: 4,
      name: "Ngonidzashe Mautsa",
      designation: "UX Designer",
      image:
        "https://ik.imagekit.io/qvdv4r3lk/danshe.png?updatedAt=1771403068943",
    },
    {
      id: 5,
      name: "Tyler Durden",
      designation: "Soap Developer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
    {
      id: 6,
      name: "Dora",
      designation: "The Explorer",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    },
  ];

  const images = [
    "https://ik.imagekit.io/qvdv4r3lk/firstmutual.png?updatedAt=1771244165884p",
    "https://ik.imagekit.io/qvdv4r3lk/firstmutual.png?updatedAt=1771244165884",
    "https://ik.imagekit.io/qvdv4r3lk/firstmutual.png?updatedAt=1771244165884",
    "https://ik.imagekit.io/qvdv4r3lk/vakani.png?updatedAt=1715932037555",
    "https://ik.imagekit.io/qvdv4r3lk/firstmutual.png?updatedAt=1771244165884",
    "https://ik.imagekit.io/qvdv4r3lk/Screenshot%202026-02-20%20103549.png?updatedAt=1771576794569",
    "https://ik.imagekit.io/qvdv4r3lk/firstmutual.png?updatedAt=1771244165884",
    "https://ik.imagekit.io/qvdv4r3lk/firstmutual.png?updatedAt=1771244165884",
    "https://ik.imagekit.io/qvdv4r3lk/firstmutual.png?updatedAt=1771244165884",
    "https://ik.imagekit.io/qvdv4r3lk/home.png?updatedAt=1715932036803",
    "https://ik.imagekit.io/qvdv4r3lk/afz.png?updatedAt=1715932037352",
    "https://ik.imagekit.io/wuvzopkfi/homes.png?updatedAt=1751534434332",
    "https://assets.aceternity.com/tabs.png",
    "https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png",
    "https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png",
    "https://assets.aceternity.com/glowing-effect.webp",
    "https://assets.aceternity.com/hover-border-gradient.png",
    "https://assets.aceternity.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png",
    "https://assets.aceternity.com/cloudinary_bkp/Lamp_hlq3ln.png",
    "https://assets.aceternity.com/macbook-scroll.png",
    "https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png",
    "https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png",
    "https://assets.aceternity.com/multi-step-loader.png",
  ];

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     // Simplified animation that only plays once and ensures text stays visible
  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: sectionRef.current,
  //         start: "top top",
  //         end: "bottom top",
  //         toggleActions: "play none none none", // Changed to prevent reverse
  //         onEnter: () => {
  //           // Ensure text is visible when entering
  //           gsap.set(textRef.current.children, {
  //             opacity: 1,
  //             y: 0,
  //             visibility: "visible",
  //           });
  //         },
  //         onLeave: () => {
  //           // Keep text visible when leaving
  //           gsap.set(textRef.current.children, {
  //             opacity: 1,
  //             y: 0,
  //             visibility: "visible",
  //           });
  //         },
  //         onEnterBack: () => {
  //           // Ensure text is visible when scrolling back up
  //           gsap.set(textRef.current.children, {
  //             opacity: 1,
  //             y: 0,
  //             visibility: "visible",
  //           });
  //         },
  //         onLeaveBack: () => {
  //           // Keep text visible when scrolling back up
  //           gsap.set(textRef.current.children, {
  //             opacity: 1,
  //             y: 0,
  //             visibility: "visible",
  //           });
  //         },
  //       },
  //     });

  //     // Initial animation - only plays once
  //     tl.from(textRef.current.children, {
  //       y: 100,
  //       opacity: 0,
  //       duration: 1,
  //       stagger: 0.2,
  //       ease: "power4.out",
  //     }).set(textRef.current.children, {
  //       opacity: 1,
  //       y: 0,
  //       visibility: "visible",
  //     });

  //     // Additional safety: ensure text is always visible
  //     gsap.set(textRef.current.children, {
  //       opacity: 1,
  //       y: 0,
  //       visibility: "visible",
  //     });
  //   }, sectionRef);

  //   return () => ctx.revert();
  // }, []);

  // const socialLinks = [
  //   { icon: FaWhatsapp, url: "https://wa.me/+263787828366", label: "Whatsapp" },
  //   {
  //     icon: FaInstagram,
  //     url: "https://www.instagram.com/danler_tech",
  //     label: "Instagram",
  //   },
  //   {
  //     icon: FaFacebook,
  //     url: "https://www.facebook.com/danler_tech",
  //     label: "Facebook",
  //   },
  // ];

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0 transition-transform duration-300"
        style={{
          pointerEvents: "none",
          filter: "drop-shadow(0 0 80px #7f9cf5) blur(0.5px)",
          opacity: 0.92,
        }}
      >
        <div className="absolute inset-0 z-10 h-full w-full bg-black/80 dark:bg-black/40">
          <ThreeDMarquee images={images} />
        </div>
      </div>

      <div className="flex w-full ">
        <div
          className="flex w-full max-w-7xl flex-col items-center text-center z-20"
          data-aos="fade-down"
        >
          <h1 className="text-white mb-4 text-xl sm:text-5xl lg:text-text-lg lg:leading-normal font-extrabold">
            <TypeAnimation
              sequence={[
                "We Create",
                1000,
                "We Develop",
                1000,
                "We Design",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <br />
          <div className="flex justify-end">
            <button className="btn">{hero.btnText}</button>
          </div>
          <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((content, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`flex items-center w-80 gap-5
                ${i === 1 && "flex-row-reverse text-right"}`}
              >
                <CanvasText
                  text={i === 0 ? "Danler" : "Tech"}
                  className="text-2xl font-bold md:text-4xl lg:text-6xl"
                  backgroundClassName="bg-black dark:bg-neutral-700"
                  colors={[
                    "var(--color-blue-500)",
                    "var(--color-sky-500)",
                    "var(--color-violet-500)",
                    "var(--color-teal-500)",
                  ]}
                  lineGap={6}
                  animationDuration={10}
                />

                <p>{content.text}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 md:mt-20 lg:mt-28 flex justify-center  translate-x-80">
            <AnimatedTooltip items={people} />
          </div>
        </div>
        {/* <div className="mx-auto my-10 flex h-screen w-full max-w-7xl flex-col items-center justify-center overflow-hidden rounded-3xl z-20">
          <h1>hie</h1>
        </div> */}
        {/* Animated scroll indicator */}
        //{" "}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center"
          >
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1 h-2 bg-gray-600 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
