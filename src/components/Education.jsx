import { motion } from 'framer-motion'

export default function Education() {
    const educationData = [
        {
            period: "08/2022 - present",
            degree: "B-Tech in Computer Science",
            institution: "Mohan Babu University",
            field: "Specialization in Software Development",
            score: "CGPA: 8.14",
            highlights: [
                "Coursework in Data Structures, Algorithms, and Database Systems",
                "Active participant in coding competitions and hackathons",
                "Completed 5+ technical projects"
            ]
        },
        {
            period: "2020 - 2022",
            degree: "Intermediate (MPC)",
            institution: "Viveka IIT Junior College",
            field: "Mathematics, Physics, Chemistry",
            score: "Percentage: 66.9",
            highlights: [
                "Developed strong analytical foundation",
                "Participated in science exhibitions",
                "Member of Math Club"
            ]
        },
        {
            period: "2019 - 2020",
            degree: "High School",
            institution: "NNT Public School",
            field: "Secondary Education",
            score: "CGPA: 92.5",
            highlights: [
                "Top 10% of graduating class",
                "Award for academic excellence",
                "Class representative"
            ]
        }
    ]

    return (
        <section id="education" className="py-20 bg-white dark:bg-gray-800">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Education Journey</h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        My academic foundation that shaped my technical expertise
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="space-y-8 relative">
                        {/* Timeline line */}
                        <div className="hidden md:block absolute left-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900 transform -translate-x-1/2"></div>

                        {educationData.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`relative ${index % 2 === 0 ? 'md:pr-32' : 'md:pl-32'}`}
                            >
                                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100 dark:border-gray-600">
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                                        <div className="mb-4 md:mb-0">
                                            <h3 className="text-xl font-bold text-gray-800 dark:text-white">{edu.degree}</h3>
                                            <p className="text-blue-600 dark:text-blue-400 font-medium">{edu.institution}</p>
                                            <p className="text-gray-600 dark:text-gray-300 mt-1">{edu.field}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-gray-500 dark:text-gray-400">{edu.period}</p>
                                            <p className="text-blue-600 dark:text-blue-400 font-bold text-lg mt-1">{edu.score}</p>
                                        </div>
                                    </div>

                                    {edu.highlights && (
                                        <div className="mt-4">
                                            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Key Highlights:</h4>
                                            <ul className="space-y-2">
                                                {edu.highlights.map((highlight, i) => (
                                                    <li key={i} className="flex items-start">
                                                        <span className="text-blue-500 mr-2">•</span>
                                                        <span className="text-gray-600 dark:text-gray-300">{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>

                                {/* Timeline dot */}
                                <div className="hidden md:block absolute top-6 left-1/2 w-5 h-5 bg-blue-600 rounded-full transform -translate-x-1/2 border-4 border-white dark:border-gray-800"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}