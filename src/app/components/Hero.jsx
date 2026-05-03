"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { IoIosTrendingUp } from "react-icons/io";
const Hero = () => {

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
        }
    };

    const item = {
        hidden: { opacity: 0, x: -20 },
        show: { opacity: 1, x: 0, transition: { duration: 0.5 } }
    };
    return (
        <section className="container mx-auto px-8 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
                <motion.h1 variants={item} className="text-5xl md:text-6xl font-extrabold tracking-tight">
                    Upgrade Your Skills Today
                </motion.h1>
                <motion.p className="text-lg text-secondary max-w-lg leading-relaxed">
                    Join thousands of professionals mastering new technologies with our industry-leading courses. Learn at your own pace from world-class instructors.
                </motion.p>
                <Link href="/courses">
                    <motion.button className="btn btn-success btn-outline p-5.5 rounded font-semibold active:scale-95 transition-all hover:text-white ">
                        Browse Courses
                    </motion.button>
                </Link>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="relative"
            >

                <motion.div className="aspect-4/3 rounded-xl overflow-hidden shadow-2xl">
                    <Image className="w-full h-full object-cover" alt="Students collaborating" width={600} height={400} loading="eager"
                        src='https://plus.unsplash.com/premium_vector-1726350510482-b9fa79c5b2f0?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    />
                </motion.div>
                <motion.div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl border border-green-200 border-outline-variant hidden lg:block">
                    <motion.div className="flex items-center gap-3">
                        <motion.div className="w-10 h-10 rounded-full bg-green-300 flex items-center justify-center">
                            <IoIosTrendingUp></IoIosTrendingUp>
                        </motion.div>
                        <motion.div>
                            <p className="font-bold text-sm tracking-wide">15k+ Learners</p>
                            <p className="text-xs text-secondary">Actively growing today</p>
                        </motion.div>
                    </motion.div>
                </motion.div>

            </motion.div>
        </section>
    );
};

export default Hero;