import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { ThreeDMarquee } from "../layout/Marquee";
import { isMobile } from "../../utils/isMobile";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

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

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Simplified animation that only plays once and ensures text stays visible
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          toggleActions: "play none none none", // Changed to prevent reverse
          onEnter: () => {
            // Ensure text is visible when entering
            gsap.set(textRef.current.children, {
              opacity: 1,
              y: 0,
              visibility: "visible",
            });
          },
          onLeave: () => {
            // Keep text visible when leaving
            gsap.set(textRef.current.children, {
              opacity: 1,
              y: 0,
              visibility: "visible",
            });
          },
          onEnterBack: () => {
            // Ensure text is visible when scrolling back up
            gsap.set(textRef.current.children, {
              opacity: 1,
              y: 0,
              visibility: "visible",
            });
          },
          onLeaveBack: () => {
            // Keep text visible when scrolling back up
            gsap.set(textRef.current.children, {
              opacity: 1,
              y: 0,
              visibility: "visible",
            });
          },
        },
      });

      // Initial animation - only plays once
      tl.from(textRef.current.children, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
      }).set(textRef.current.children, {
        opacity: 1,
        y: 0,
        visibility: "visible",
      });

      // Additional safety: ensure text is always visible
      gsap.set(textRef.current.children, {
        opacity: 1,
        y: 0,
        visibility: "visible",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const socialLinks = [
    { icon: FaWhatsapp, url: "https://wa.me/+263787828366", label: "Whatsapp" },
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/danler_tech",
      label: "Instagram",
    },
    {
      icon: FaFacebook,
      url: "https://www.facebook.com/danler_tech",
      label: "Facebook",
    },
  ];

  return (
    // <section
    //   ref={sectionRef}
    //   id="home"
    //   className="relative min-h-screen flex items-center justify-center overflow-hidden"
    // >
    //   {/* Animated Background */}
    //   {/* Spline 3D Hero Background Only */}

    //   <div
    //     className="absolute inset-0 z-0 transition-transform duration-300"
    //     style={{
    //       pointerEvents: "none",
    //       filter: "drop-shadow(0 0 80px #7f9cf5) blur(0.5px)",
    //       opacity: 0.92,
    //     }}
    //   >
    //     <div className="hidden md:flex absolute flex-col items-center justify-center w-full gap-6">
    //       <ThreeDMarquee images={images} />

    //       {/* <p className="text-white text-center max-w-md px-4 md:mt-10 lg:mt-24 md:text-lg lg:text-xl">
    //                   Crafting exceptional digital experiences through innovative web
    //                   solutions.
    //                 </p> */}
    //     </div>
    //     {/* <Spline
    //       scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
    //       style={{ width: "100%", height: "100%" }}
    //     /> */}
    //   </div>

    //   <div className="container relative z-10">
    //     <div ref={textRef} className="text-center space-y-8">
    //       <motion.h1
    //         initial={{ opacity: 0, y: 20 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.8, ease: "easeOut" }}
    //         className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-primary-200"
    //       >
    //         DanlerTech
    //       </motion.h1>

    //       <motion.p
    //         initial={{ opacity: 0, y: 20 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
    //         className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
    //       >
    //         Crafting exceptional digital experiences through innovative web
    //         solutions.
    //       </motion.p>

    //       <motion.div
    //         initial={{ opacity: 0, y: 20 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
    //         className="flex justify-center space-x-6"
    //       >
    //         {socialLinks.map((link) => (
    //           <motion.a
    //             key={link.label}
    //             href={link.url}
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             whileHover={{ scale: 1.1, y: -2 }}
    //             whileTap={{ scale: 0.95 }}
    //             className="text-gray-400 hover:text-primary-400 transition-colors"
    //             aria-label={link.label}
    //           >
    //             <link.icon className="w-6 h-6" />
    //           </motion.a>
    //         ))}
    //       </motion.div>

    //       <motion.div
    //         initial={{ opacity: 0, y: 20 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
    //         className="pt-8"
    //       >
    //         <motion.a
    //           href="#contact"
    //           whileHover={{ scale: 1.05 }}
    //           whileTap={{ scale: 0.95 }}
    //           className="inline-block px-8 py-3 bg-primary-500 text-white rounded-full font-medium hover:bg-primary-600 transition-colors shadow-lg hover:shadow-xl"
    //         >
    //           Get Started
    //         </motion.a>
    //       </motion.div>
    //     </div>
    //   </div>

    //   {/* Animated scroll indicator */}
    //   <motion.div
    //     initial={{ opacity: 0 }}
    //     animate={{ opacity: 1 }}
    //     transition={{ delay: 1, duration: 1 }}
    //     className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
    //   >
    //     <motion.div
    //       animate={{
    //         y: [0, 10, 0],
    //       }}
    //       transition={{
    //         duration: 1.5,
    //         repeat: Infinity,
    //         ease: "easeInOut",
    //       }}
    //       className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center"
    //     >
    //       <motion.div
    //         animate={{
    //           y: [0, 12, 0],
    //         }}
    //         transition={{
    //           duration: 1.5,
    //           repeat: Infinity,
    //           ease: "easeInOut",
    //         }}
    //         className="w-1 h-2 bg-gray-600 rounded-full mt-2"
    //       />
    //     </motion.div>
    //   </motion.div>
    // </section>
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="flex w-full min-h-screen">
        <div className=" mx-auto my-10 flex h-screen w-full max-w-7xl flex-col items-center justify-center overflow-hidden rounded-3xl">
          <h2 className="relative z-20 mx-auto max-w-4xl text-center text-2xl font-bold text-balance text-white md:text-4xl lg:text-6xl">
            This is your life and it&apos;s ending one{" "}
            <span className="relative z-20 inline-block rounded-xl bg-blue-500/40 px-4 py-1 text-white underline decoration-sky-500 decoration-[6px] underline-offset-[16px] backdrop-blur-sm">
              moment
            </span>{" "}
            at a time.
          </h2>
          <p className="relative z-20 mx-auto max-w-2xl py-8 text-center text-sm text-neutral-200 md:text-base">
            You are not your job, you&apos;re not how much money you have in the
            bank. You are not the car you drive. You&apos;re not the contents of
            your wallet.
          </p>

          <div className="relative z-20 flex flex-wrap items-center justify-center gap-4 pt-4">
            <button className="rounded-md bg-sky-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-sky-700 focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-black focus:outline-none">
              Join the club
            </button>
            <button className="rounded-md border border-white/20 bg-white/10 px-6 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black focus:outline-none">
              Read more
            </button>
          </div>

          {/* overlay */}
          <div className="absolute inset-0 z-10 h-full w-full bg-black/80 dark:bg-black/40" />
          <ThreeDMarquee
            className="pointer-events-none absolute inset-0 h-full w-full"
            images={images}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
