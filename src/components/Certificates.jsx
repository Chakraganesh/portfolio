import { motion } from 'framer-motion'

export default function Certificates() {
    const certificates = [
        {
            title: "Java Development Internship",
            issuer: "Cognifyz Technologies",
            date: "June-July 2025",
            description: "Completed intensive training in Java programming, OOP concepts, and real-world application development",
            skills: ["Core Java", "OOP", "Problem Solving"],
            credential: "Certificate ID: CT-JD-2025-087"
        },
        {
            title: "Java (Basic) Certification",
            issuer: "HackerRank",
            date: "August 2025",
            description: "Demonstrated proficiency in Java fundamentals including data structures, algorithms, and problem solving",
            skills: ["Data Structures", "Algorithms", "Java Basics"],
            credential: "Credential ID: Ackf029nC25"
        },
        {
            title: "Database and SQL Certification",
            issuer: "Infosys Springboard",
            date: "July 2025",
            description: "Mastered database design, SQL queries, and optimization techniques for efficient data management",
            skills: ["SQL", "Database Design", "Query Optimization"],
            credential: "Verified Certification"
        }
    ]

    return (
        <section id="certificates" className="py-20 bg-white dark:bg-gray-800">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Certifications</h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Validated proof of my technical competencies and dedication to learning
                    </p>
                </div>

                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-xl shadow-md hover:shadow-xl transition duration-500 border border-gray-100 dark:border-gray-700 overflow-hidden"
                        >
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">{cert.title}</h3>
                                        <p className="text-blue-600 dark:text-blue-400">{cert.issuer}</p>
                                    </div>
                                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                                        {cert.date}
                                    </span>
                                </div>

                                <p className="text-gray-600 dark:text-gray-300 mb-5">{cert.description}</p>

                                <div className="mb-5">
                                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Skills Validated:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {cert.skills.map((skill, i) => (
                                            <span
                                                key={i}
                                                className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="text-center mt-6">
                                    <a
                                        href="#contact"
                                        className="inline-block bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium transition duration-300"
                                    >
                                        Verify Credential
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}