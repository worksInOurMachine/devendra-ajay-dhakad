"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Play, ArrowRight, Menu } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";

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
          <Image
            src="/image.png"
            alt="BMW i8"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute brightness-0 inset-0 bg-gradient-to-t from-background/60 via-transparent to-background/20" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <motion.h1
              className="text-6xl md:text-8xl lg:text-9xl font-bold text-foreground mb-6 text-balance leading-none"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            >
              FUTURE.
              <br />
              <span className="text-primary">REDEFINED.</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty"
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
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg group"
              >
                Configure Your i8
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
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

      {/* CTA Section */}
      <section className="py-32 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-balance">
              EXPERIENCE THE
              <br />
              <span className="text-accent">EXTRAORDINARY.</span>
            </h2>

            <p className="text-xl mb-12 max-w-3xl mx-auto text-pretty opacity-90">
              Schedule your exclusive BMW i8 test drive and discover what it
              means to drive the future.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="px-8 py-6 text-lg group bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Book Test Drive
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                Find Dealer
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

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
