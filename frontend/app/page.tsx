"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Play, ArrowRight, Menu } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";
import TextType from "@/components/ui/typeText";
import { LampContainer } from "@/components/ui/lamp";
import CircularGallery from "@/components/ui/circulargallary";
import Hyperspeed from "@/components/ui/hyperspeed";

export default function BMWi8Homepage() {
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const specsRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const featuresInView = useInView(featuresRef, {
    once: true,
    margin: "-100px",
  });
  const specsInView = useInView(specsRef, { once: true, margin: "-100px" });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Navigation */}

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center hero-gradient"
      >
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          {/* Background Video */}
          <video
            src="/bmw.mp4" // replace with your video file path
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />

          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <TextType
              text={[
                "THE FUTURE OF DRIVING.",
                "DRIVEN BY INNOVATION.",
                "EXPERIENCE THE BMW i8.",
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance"
            />

            <motion.p
              className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto text-pretty"
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Experience the revolutionary BMW i8 - where sustainable innovation
              meets uncompromising performance in perfect harmony.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Button
                onClick={() =>
                  (window.location.href = "/https://www.bmw.in/en/index.html")
                }
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg group"
              >
                Configure Your i8
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                onClick={() =>
                  (window.location.href = "/https://www.bmw.in/en/index.html")
                }
                size="lg"
                className="px-8 py-6 text-lg group border-2 bg-transparent"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Film
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-32 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-card-foreground mb-6 text-balance">
              INNOVATION.
              <br />
              <span className="text-accent">PERFECTED.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Every element of the BMW i8 represents a breakthrough in
              automotive engineering and sustainable luxury.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={featuresInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-8">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-2xl font-bold text-card-foreground mb-3">
                    Hybrid eDrive Technology
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    Revolutionary plug-in hybrid system delivering 374 hp while
                    achieving exceptional efficiency and zero-emission
                    capability.
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-2xl font-bold text-card-foreground mb-3">
                    Iconic Design Language
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    Distinctive butterfly doors and aerodynamic carbon fiber
                    body showcase the future of automotive design.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-2xl font-bold text-card-foreground mb-3">
                    Intelligent Connectivity
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    Advanced BMW ConnectedDrive services and intuitive interface
                    technology for seamless integration.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={featuresInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
                <Image
                  src="/image1.png"
                  alt="BMW i8 Interior"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section ref={specsRef} className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={specsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance">
              PERFORMANCE.
              <br />
              <span className="text-primary">UNLEASHED.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "374", unit: "HP", label: "Total System Power" },
              { number: "4.4", unit: "SEC", label: "0-100 km/h" },
              { number: "250", unit: "KM/H", label: "Top Speed" },
            ].map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={specsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <div className="text-6xl md:text-7xl font-bold text-primary mb-2">
                  {spec.number}
                </div>
                <div className="text-xl font-semibold text-accent mb-2">
                  {spec.unit}
                </div>
                <div className="text-muted-foreground">{spec.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-3xl md:text-6xl font-bold tracking-tight text-transparent w-[100vw]"
        >
          BMW i8 <br /> Redefining Hybrid Performance
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeInOut" }}
          className="mt-6 max-w-2xl text-center text-base md:text-lg text-slate-300 px-4"
        >
          The BMW i8 combines electrified innovation with iconic sports car DNA.
          With a powerful plug-in hybrid system, futuristic design, and
          sustainable performance, it delivers 0–100 km/h in just 4.4 seconds
          while reducing emissions. Experience luxury reimagined — for a
          smarter, cleaner future.
        </motion.p>
      </LampContainer>

      <div className="h-[100vh] pb-10 mt-10" style={{ position: "relative" }}>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent w-[100vw] md:text-7xl"
        >
          Explore The Design
          <br /> of BMW i8
        </motion.h1>
        <CircularGallery
          bend={3}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.02}
        />
      </div>

      {/* CTA Section */}
      <section className="relative py-32 bg-black text-white overflow-hidden">
        {/* Optional subtle background animation or gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight"
            >
              EXPERIENCE THE <br />
              <span className="text-yellow-400">EXTRAORDINARY.</span>
            </motion.h2>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.9, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-90"
            >
              Schedule your exclusive BMW i8 test drive and discover what it
              means to drive the future.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Button
                size="lg"
                variant="secondary"
                className="px-8 py-6 text-lg bg-yellow-500 text-black font-semibold shadow-lg hover:bg-yellow-400 hover:scale-105 transition-transform duration-300 flex items-center justify-center"
              >
                Book Test Drive
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg border-2 border-white text-white hover:bg-white hover:text-black font-semibold transition-all duration-300"
              >
                Find Dealer
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="w-[100vw] text-center overflow-hidden min-h-screen relative bg-black">
        {/* Centered animated text */}
        <TextType
          text={[
            "EXPERIENCE THE PACE.",
            "FEEL THE SPEED.",
            "RIDE INTO THE FUTURE.",
          ]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
          className="text-5xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:text-7xl font-bold text-white mb-6 text-balance"
        />

        {/* Hyperspeed effect */}
        <Hyperspeed
          effectOptions={{
            onSpeedUp: () => {},
            onSlowDown: () => {},
            distortion: "turbulentDistortion",
            length: 300,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 6,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [400 * 0.03, 400 * 0.2],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x000000,
              shoulderLines: 0xffffff,
              brokenLines: 0xffffff,
              leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
              rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
              sticks: 0x03b3c3,
            },
          }}
        />
      </div>

      {/* <BMWi8Viewer /> */}
      {/* Footer */}
      <footer className="py-16 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-card-foreground mb-4">
                BMW
              </div>
              <p className="text-muted-foreground">
                Sheer driving pleasure through innovative luxury and sustainable
                mobility.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-card-foreground mb-4">
                Models
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-card-foreground transition-colors"
                  >
                    BMW i8
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-card-foreground transition-colors"
                  >
                    BMW iX
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-card-foreground transition-colors"
                  >
                    BMW i4
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-card-foreground mb-4">
                Services
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-card-foreground transition-colors"
                  >
                    Test Drive
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-card-foreground transition-colors"
                  >
                    Financing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-card-foreground transition-colors"
                  >
                    Service
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-card-foreground mb-4">
                Connect
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-card-foreground transition-colors"
                  >
                    Newsletter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-card-foreground transition-colors"
                  >
                    Social Media
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-card-foreground transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 BMW Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
