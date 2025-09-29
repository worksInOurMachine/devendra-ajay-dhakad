"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';

// --- Utility Components & Constants ---

// Simulated Lucide Icons (using simple inline SVGs)
const Zap = (props: any) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
);
const Component = (props: any) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5.5 8.5L3 12l2.5 3.5M18.5 8.5L21 12l-2.5 3.5M12 3v18M10 20h4M10 4h4M4 12h16" /></svg>
);
const Gauge = (props: any) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19.5a7.5 7.5 0 1 0 0-15A7.5 7.5 0 0 0 12 19.5z" /><path d="M12 10V5" /><path d="M12 19.5L12 16" /><path d="M16.5 15l-3.5-3.5" /><circle cx="12" cy="12" r="1" /></svg>
);
const Car = (props: any) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.5 0 1-.5 1-1v-3c0-.5-.5-1-1-1h-1V9c0-.5-.5-1-1-1h-1C18 8 17.5 8.5 17.5 9v1H7.5V9c0-.5-.5-1-1-1h-1C5 8 4.5 8.5 4.5 9v3c0 .5-.5 1-1 1H2c-.5 0-1 .5-1 1v3c0 .5.5 1 1 1h2" /><circle cx="5" cy="17" r="2" /><circle cx="19" cy="17" r="2" /></svg>
);
const Sun = (props: any) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2" /><path d="M12 21v2" /><path d="M4.22 4.22l1.42 1.42" /><path d="M18.36 18.36l1.42 1.42" /><path d="M1 12h2" /><path d="M21 12h2" /><path d="M4.22 19.78l1.42-1.42" /><path d="M18.36 5.64l1.42-1.42" /></svg>
);
const Leaf = (props: any) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A10 10 0 0 1 12.8 5.7L18 3l-2.7 5.2A10 10 0 0 1 4 11l.5 2L11 20z" /></svg>
);

/*  BMW <span className="text-cyan-400">i8</span>
                        <br />
                        TECHNOLOGY REVOLUTION */
const words = [
    {
        text: "BMW",
    },
    {
        text: "i8",
        className: "text-blue-500 dark:text-blue-500",
    },
    {
        text: "TECHNOLOGY",
    },
    {
        text: "REVOLUTION",
        className: "text-blue-500 dark:text-blue-500",
    },

];

// Animation variants for staggered entry
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// --- Custom Components ---

const FeatureCard = ({ icon: Icon, title, description, delay }: any) => (
    <motion.div
        className="bg-gray-800/60 p-6 rounded-2xl border border-gray-700/50 shadow-2xl backdrop-blur-sm h-full"
        // variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay, duration: 0.6 }}
    >
        <Icon className="w-8 h-8 text-cyan-400 mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
    </motion.div>
);

const DrivingModeCard = ({ mode, description, power, isActive, onClick }: any) => (
    <motion.button
        className={`w-full text-left p-6 rounded-xl transition-all duration-300 transform ${isActive
            ? 'bg-cyan-600 shadow-cyan-500/50 scale-[1.02] border-cyan-400'
            : 'bg-gray-800/60 border-gray-700 hover:bg-gray-700/50'
            } border`}
        onClick={onClick}
        whileHover={{ scale: isActive ? 1.02 : 1.05 }}
        whileTap={{ scale: 0.98 }}
    // variants={itemVariants}
    >
        <div className="flex justify-between items-center mb-2">
            <h4 className="text-2xl font-bold">{mode}</h4>
            <span className="text-sm font-medium text-gray-200">{power}</span>
        </div>
        <p className={`text-sm ${isActive ? 'text-cyan-100' : 'text-gray-400'}`}>{description}</p>
    </motion.button>
);

const SectionHeader = ({ title, subtitle }: any) => (
    <motion.header
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
    >
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-white">
            {title}
        </h2>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">{subtitle}</p>
    </motion.header>
);

// --- Main Application Component ---
export default function App() {
    const [activeMode, setActiveMode] = useState('SPORT');
    const [scrollY, setScrollY] = useState(0);

    // Parallax scroll tracking
    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        document.documentElement.classList.add('dark');
        document.body.style.fontFamily = 'Inter, sans-serif';

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const modes = [
        {
            mode: 'SPORT',
            power: '369 hp (Combined)',
            description: 'Maximum performance, utilizing both the TwinPower Turbo engine and eDrive motor with aggressive energy recuperation.',
        },
        {
            mode: 'COMFORT',
            power: 'Hybrid Balance',
            description: 'Optimal balance of efficiency and dynamics. Starts electrically, blending power sources intelligently above 60 km/h.',
        },
        {
            mode: 'ECO PRO',
            power: 'Max Efficiency',
            description: 'Efficiency-optimized drive and climate control settings. Extends electric range and maximizes mileage.',
        },
        {
            mode: 'eDRIVE',
            power: 'Pure Electric',
            description: 'Purely electric driving up to 120 km/h (75 mph), ideal for city driving with zero local emissions.',
        },
    ];

    const parallaxSpeed = 0.3; // Slower movement for background
    const backgroundTranslateY = -scrollY * parallaxSpeed;
    const contentTranslateY = scrollY * parallaxSpeed * 0.5; // Content moves slightly slower than background for depth effect

    return (
        <div className="min-h-screen bg-gray-900 text-white antialiased">

            {/* Global CSS for Tailwind + Font */}


            {/* 1. Hero Section: The Dawn of Hybrid (with Parallax) */}
            <section className="relative h-[85vh] flex items-center justify-center p-4 text-center overflow-hidden">

                {/* Cinematic Background (Parallax Effect) */}
                <motion.div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('https://placehold.co/1600x900/1e293b/0f172a?text=BMW+i8+Hybrid+Technology')",
                        y: backgroundTranslateY,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
                </motion.div>


                <motion.div
                    className="relative max-w-4xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    style={{ y: -contentTranslateY }} // Content moves slightly against the background scroll
                >
                    <motion.p
                        className="text-cyan-400 text-sm sm:text-lg uppercase tracking-[0.5rem] mb-4 font-medium"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                    >
                        The Future is Engineered
                    </motion.p>
                    <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tight mb-4 leading-tight">
                        <TypewriterEffectSmooth words={words} />

                    </h1>
                    <motion.p
                        className="text-gray-300 text-base sm:text-xl max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                    >
                        A symphony of combustion and electricity. The i8 rewrote the rules of performance, combining supercar dynamics with compact car efficiency.
                    </motion.p>
                </motion.div>
            </section>

            {/* 2. LifeDrive Architecture Section (CFRP + Aluminum) */}
            <motion.section
                className="py-20 md:py-32 px-4 bg-gray-950"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            >
                <div className="max-w-7xl mx-auto">
                    <SectionHeader
                        title="LifeDrive: The Carbon Core"
                        subtitle="The revolutionary structure that made the i8 possible. Two distinct, interconnected modules optimized for strength, safety, and weight."
                    />

                    <motion.div
                        className="grid md:grid-cols-2 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {/* Life Module Card */}
                        <motion.div
                            className="p-8 border border-gray-700/50 rounded-3xl bg-gray-800/70 shadow-xl hover:shadow-cyan-900/50 transition duration-500 cursor-pointer"
                            //  variants={itemVariants}
                            whileHover={{ y: -5 }}
                        >
                            <div className="flex items-center mb-4">
                                <Component className="w-10 h-10 p-2 rounded-full bg-cyan-600/20 text-cyan-400 mr-4" />
                                <h3 className="text-3xl font-bold text-white">Life Module</h3>
                            </div>
                            <p className="text-gray-400 mb-6">
                                The passenger cell is crafted from **Carbon-Fibre Reinforced Plastic (CFRP)**, a material lighter than aluminum yet stronger than steel. This guarantees supreme safety while compensating for the battery weight.
                            </p>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-center">
                                    <span className="text-cyan-400 mr-2">✓</span> 50% Lighter than Steel
                                </li>
                                <li className="flex items-center">
                                    <span className="text-cyan-400 mr-2">✓</span> Extreme Torsional Rigidity
                                </li>
                                <li className="flex items-center">
                                    <span className="text-cyan-400 mr-2">✓</span> Low Center of Gravity
                                </li>
                            </ul>
                        </motion.div>

                        {/* Drive Module Card */}
                        <motion.div
                            className="p-8 border border-gray-700/50 rounded-3xl bg-gray-800/70 shadow-xl hover:shadow-cyan-900/50 transition duration-500 cursor-pointer"
                            // variants={itemVariants}
                            whileHover={{ y: -5 }}
                        >
                            <div className="flex items-center mb-4">
                                <Car className="w-10 h-10 p-2 rounded-full bg-cyan-600/20 text-cyan-400 mr-4" />
                                <h3 className="text-3xl font-bold text-white">Drive Module</h3>
                            </div>
                            <p className="text-gray-400 mb-6">
                                The aluminum chassis houses the core powertrain—the electric motor, the combustion engine, the high-voltage battery (centrally placed), and all suspension components.
                            </p>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-center">
                                    <span className="text-cyan-400 mr-2">✓</span> Perfect 50:50 Weight Distribution
                                </li>
                                <li className="flex items-center">
                                    <span className="text-cyan-400 mr-2">✓</span> Integrated High-Voltage Battery
                                </li>
                                <li className="flex items-center">
                                    <span className="text-cyan-400 mr-2">✓</span> Hybrid-Specific All-Wheel Drive
                                </li>
                            </ul>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>

            {/* 3. eDrive Performance Section */}
            <section className="py-20 md:py-32 px-4 bg-gray-900">
                <div className="max-w-7xl mx-auto">
                    <SectionHeader
                        title="BMW eDrive: Dual Power"
                        subtitle="Instantaneous electric torque meets turbocharged efficiency. The system delivers a powerful 369 hp blend across two axles."
                    />

                    <div className="grid lg:grid-cols-2 gap-12">

                        {/* A. Performance Stats Column */}
                        <motion.div
                            className="space-y-8"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <h3 className="text-2xl font-bold text-cyan-400 mb-4">Core Specifications</h3>

                            {/* Stat 1: System Output */}
                            <motion.div className="border-b border-gray-700 pb-4 hover:bg-gray-800/20 p-2 rounded-lg transition duration-300"
                            // variants={itemVariants}
                            >
                                <p className="text-6xl font-extrabold text-white">
                                    369 <span className="text-4xl font-light text-cyan-400">hp</span>
                                </p>
                                <p className="text-sm text-gray-500 uppercase tracking-widest mt-1">Total System Output</p>
                            </motion.div>

                            {/* Stat 2: Acceleration */}
                            <motion.div className="border-b border-gray-700 pb-4 hover:bg-gray-800/20 p-2 rounded-lg transition duration-300"
                            // variants={itemVariants}
                            >
                                <p className="text-6xl font-extrabold text-white">
                                    4.4 <span className="text-4xl font-light text-cyan-400">sec</span>
                                </p>
                                <p className="text-sm text-gray-500 uppercase tracking-widest mt-1">0-100 km/h</p>
                            </motion.div>

                            {/* Stat 3: Electric Range */}
                            <motion.div className="border-b border-gray-700 pb-4 hover:bg-gray-800/20 p-2 rounded-lg transition duration-300"
                            // variants={itemVariants}

                            >
                                <p className="text-6xl font-extrabold text-white">
                                    55 <span className="text-4xl font-light text-cyan-400">km</span>
                                </p>
                                <p className="text-sm text-gray-500 uppercase tracking-widest mt-1">Pure Electric Range (NEDC)</p>
                            </motion.div>

                            <FeatureCard
                                icon={Gauge}
                                title="Aero Efficiency"
                                description="With a drag coefficient (Cd) of just 0.26, the i8 channels air flow with precision, achieving hyper-efficiency unlike any other sports car."
                                delay={0.8}
                            />

                        </motion.div>

                        {/* B. Driving Modes Column (Simulated shadcn Tabs/Accordion) */}
                        <motion.div
                            className="lg:pl-8 space-y-4"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <h3 className="text-2xl font-bold text-cyan-400 mb-6">Adaptive Driving Dynamics</h3>

                            {modes.map((item) => (
                                <DrivingModeCard
                                    key={item.mode}
                                    mode={item.mode}
                                    description={item.description}
                                    power={item.power}
                                    isActive={activeMode === item.mode}
                                    onClick={() => setActiveMode(item.mode)}
                                />
                            ))}

                            {/* Active Mode Visual Indicator */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeMode}
                                    initial={{ opacity: 0, scaleY: 0.5 }}
                                    animate={{ opacity: 1, scaleY: 1 }}
                                    exit={{ opacity: 0, scaleY: 0.5 }}
                                    transition={{ duration: 0.4 }}
                                    className="mt-6 p-4 rounded-xl border border-cyan-600 bg-cyan-900/40 text-sm origin-top"
                                >
                                    <p className="font-semibold text-cyan-300 flex items-center">
                                        <Zap className="w-5 h-5 mr-2" />
                                        Current Focus: <span className="text-white ml-1 font-extrabold">{activeMode}</span>
                                    </p>
                                </motion.div>
                            </AnimatePresence>

                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 4. NEW Section: Laserlight Technology */}
            <section className="py-20 md:py-32 px-4 bg-gray-950">
                <div className="max-w-7xl mx-auto">
                    <SectionHeader
                        title="BMW Laserlight: Illuminating the Future"
                        subtitle="The i8 was one of the first production cars to feature revolutionary laser headlight technology, offering unprecedented range and intensity."
                    />

                    <motion.div
                        className="grid lg:grid-cols-2 gap-12 items-center"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <div className="space-y-6">
                            <p className="text-gray-300 text-lg">
                                The optional BMW Laserlight increased the high-beam range to an incredible **600 meters**—double the range of conventional LED headlamps—dramatically enhancing safety during night driving.
                            </p>

                            <ul className="space-y-4 text-gray-400 text-base">
                                <li className="flex items-start">
                                    <Sun className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1 mr-3" />
                                    <p><strong>Superior Brightness:</strong> Ten times more intense than standard light sources.</p>
                                </li>
                                <li className="flex items-start">
                                    <Sun className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1 mr-3" />
                                    <p><strong>Energy Efficiency:</strong> Highly energy-efficient, using nearly 30% less power than LED.</p>
                                </li>
                                <li className="flex items-start">
                                    <Sun className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1 mr-3" />
                                    <p><strong>Compact Design:</strong> Allows for smaller, lighter headlight units, supporting the i8's aero goals.</p>
                                </li>
                            </ul>
                        </div>

                        {/* Placeholder Image of Light Beam */}
                        <motion.div
                            className="aspect-video bg-gray-800 rounded-xl shadow-2xl flex items-center justify-center p-8"
                            initial={{ scale: 0.9 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                        >
                            <p className="text-cyan-500 text-xl font-bold">600m Beam Range Visualization</p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* 5. NEW Section: Sustainable Interior Design */}
            <section className="py-20 md:py-32 px-4 bg-gray-900">
                <div className="max-w-7xl mx-auto">
                    <SectionHeader
                        title="Conscious Luxury: Sustainable Interior"
                        subtitle="The i8 demonstrated that luxury and performance do not have to compromise ecological responsibility."
                    />

                    <motion.div
                        className="grid md:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {/* Card 1: Olive Leaf Leather */}
                        <motion.div className="bg-gray-800/70 p-6 rounded-2xl border border-gray-700/50"
                        // variants={itemVariants}
                        >
                            <Leaf className="w-8 h-8 text-green-400 mb-4" />
                            <h3 className="text-xl font-semibold text-white mb-2">Tanned with Olive Leaf</h3>
                            <p className="text-gray-400 text-sm">
                                The leather used in the interior is treated with a tanning agent extracted from **olive tree leaves**, eliminating the need for harmful chemicals.
                            </p>
                        </motion.div>

                        {/* Card 2: Recycled Fabrics */}
                        <motion.div className="bg-gray-800/70 p-6 rounded-2xl border border-gray-700/50"
                        // variants={itemVariants}
                        >
                            <Component className="w-8 h-8 text-green-400 mb-4" />
                            <h3 className="text-xl font-semibold text-white mb-2">Recycled Textiles</h3>
                            <p className="text-gray-400 text-sm">
                                Much of the remaining textile material, including carpets and floor mats, is made from **recycled PET plastic bottles**.
                            </p>
                        </motion.div>

                        {/* Card 3: CFRP Visibility */}
                        <motion.div className="bg-gray-800/70 p-6 rounded-2xl border border-gray-700/50"
                        // variants={itemVariants}
                        >
                            <Car className="w-8 h-8 text-green-400 mb-4" />
                            <h3 className="text-xl font-semibold text-white mb-2">Visible Carbon Fiber</h3>
                            <p className="text-gray-400 text-sm">
                                Elements of the exposed CFRP structure in the cabin highlight the car’s lightweight construction and ecological mission.
                            </p>
                        </motion.div>

                    </motion.div>
                </div>
            </section>


            {/* 6. Footer / Call to Action */}
            <motion.footer
                className="bg-gray-800/50 py-10 border-t border-gray-700/50"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h4 className="text-2xl font-semibold mb-2 text-white">Experience the Synthesis.</h4>
                    <p className="text-gray-400 mb-6">The BMW i8: Where sustainability meets sheer driving pleasure.</p>
                    <motion.button
                        className="px-8 py-3 text-lg font-bold rounded-full bg-cyan-500 text-gray-900 hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/50"
                        whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(6, 182, 212, 0.7)" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Configure Your i8 Today
                    </motion.button>
                </div>
            </motion.footer>

        </div>
    );
}