import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FiDownload, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import profile from "../assets/profile.jpg"

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-grey-300 relative overflow-hidden">
            {/* Subtle background elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Very subtle grid pattern */}
                <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgwLDAsMCwwLjA1KSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')]"></div>

                {/* Very subtle animated circles */}
                <div className="absolute top-20 left-20 w-64 h-64 bg-gray-100 rounded-full filter blur-3xl opacity-30 animate-float"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-gray-100 rounded-full filter blur-3xl opacity-30 animate-float-delay"></div>
            </div>

            <div className="container mx-auto px-6 py-32 flex flex-col md:flex-row items-center z-10">
                <div className="md:w-1/2 mb-16 md:mb-0">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Pre-header with subtle animation */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="flex items-center mb-6"
                        >
                            <div className="w-12 h-0.5 bg-indigo-600 mr-4"></div>
                            <span className="text-indigo-600 font-medium tracking-wider">JAVA DEVELOPER</span>
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                            Hi, I'm <span className="text-indigo-600">Chakra Ganesh</span>
                        </h1>

                        <div className="text-2xl md:text-3xl text-gray-600 mb-8 h-12">
                            <TypeAnimation
                                sequence={[
                                    'Building Scalable Solutions',
                                    1500,
                                    'Java Specialist',
                                    1500,
                                    'Problem Solver',
                                    1500
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{ display: 'inline-block', fontWeight: 500 }}
                                repeat={Infinity}
                            />
                        </div>

                        <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
                            I craft high-performance digital experiences with clean, maintainable code.
                            Currently pursuing my B-Tech in Computer Science while developing
                            real-world solutions that make an impact.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative overflow-hidden group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-indigo-700 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                                <div className="relative bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg flex items-center transition-all duration-300">
                                    <span>Hire Me</span>
                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </motion.a>

                            <motion.a
                                href="#projects"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative overflow-hidden group border-2 border-gray-900 text-gray-900 hover:text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300"
                            >
                                <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                                <span className="relative flex items-center">
                                    View Projects
                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                    </svg>
                                </span>
                            </motion.a>
                        </div>

                        {/* Social links */}
                        <div className="flex mt-10 space-x-4">
                            <a href="https://github.com/Chakraganesh" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">
                                <FiGithub className="w-6 h-6" />
                            </a>
                            <a href="http://www.linkedin.com/in/chakraganesh" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">
                                <FiLinkedin className="w-6 h-6" />
                            </a>

                        </div>
                    </motion.div>
                </div>

                <div className="md:w-1/2 flex justify-center relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Main profile image */}
                        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl group ring-4 ring-indigo-100">
                            <img
                                src={profile}
                                alt="Chakra Ganesh"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                        </div>

                        {/* Floating achievement badges */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            className="absolute -bottom-5 -right-5 bg-white p-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-200"
                        >
                            <div className="text-center">
                                <div className="text-3xl font-bold text-indigo-600">2+</div>
                                <div className="text-sm font-medium text-gray-600">Completed Projects</div>
                            </div>
                            <div className="absolute -top-2 -right-2 bg-indigo-100 text-indigo-800 text-xs font-bold px-2 py-1 rounded-full">
                                NEW
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                            className="absolute -top-5 -left-5 bg-indigo-100 p-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer border border-indigo-200"
                        >
                            <div className="text-center">
                                <div className="text-3xl font-bold text-indigo-800">3</div>
                                <div className="text-sm font-medium text-indigo-700">Certifications</div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
                <div className="animate-bounce flex flex-col items-center">
                    <span className="text-sm text-gray-500 mb-2">Explore More</span>
                    <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </motion.div>
        </section>
    )
}