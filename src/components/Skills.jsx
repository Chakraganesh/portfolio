export default function Skills() {
    const technicalSkills = [
        { name: "Java", level: 85, icon: "☕" },
        { name: "SQL", level: 80, icon: "🗃️" },
        { name: "JavaScript", level: 75, icon: "📜" },
        // { name: "React", level: 70, icon: "⚛️" },
        // { name: "Node.js", level: 65, icon: "🟢" }
    ]

    const softSkills = [
        { name: "Problem Solving", level: 90 },
        { name: "Communication", level: 85 },
        { name: "Teamwork", level: 88 },
        { name: "Adaptability", level: 87 },
        { name: "Time Management", level: 83 }
    ]

    return (
        <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">My Skills</h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        The technical abilities and interpersonal strengths I bring to your team
                    </p>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center">
                            <span className="mr-2">🛠️</span> Technical Skills
                        </h3>
                        <div className="space-y-6">
                            {technicalSkills.map((skill, index) => (
                                <div key={index}>
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center">
                                            <span className="text-2xl mr-3">{skill.icon}</span>
                                            <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                                        </div>
                                        <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                                        <div
                                            className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full"
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center">
                            <span className="mr-2">🤝</span> Professional Skills
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            {softSkills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-gray-100 dark:border-gray-700"
                                >
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                                        <span className="text-blue-600 dark:text-blue-400 text-sm font-bold">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2">
                                        <div
                                            className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full"
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                            <h4 className="font-bold text-gray-800 dark:text-white mb-3">Continuous Learning</h4>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                I dedicate 10+ hours weekly to skill development through online courses, coding challenges, and personal projects.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {/* <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                                    HackerRank Top 20%
                                </span> */}
                                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">
                                    3 Certifications
                                </span>
                                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
                                    Daily Coding
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}