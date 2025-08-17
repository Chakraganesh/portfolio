import { motion } from 'framer-motion'

export default function Projects() {
    const projects = [
        {
            title: "Online Pet Adoption Portal",
            period: "07/2024 - 09/2024",
            description: "Developed a full-stack web application that increased pet adoption rates by 40% for local shelters. Implemented secure user authentication, real-time notifications, and advanced search functionality.",
            technologies: ["JavaScript", "CSS", "HTML", "PHP", "MySQL"],
            image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80",
            results: [
                "40% increase in adoption rates",
                "500+ monthly active users",
                "4.8/5 user rating"
            ]
        },
        {
            title: "Java Swing Calculator",
            period: "Academic Project",
            description: "Built an intuitive desktop calculator application demonstrating strong OOP principles and event handling. Implemented unit testing for 100% core functionality coverage.",
            technologies: ["Java", "Swing", "JUnit"],
            image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
            results: [
                "100% test coverage",
                "Modular architecture",
                "Extensible design"
            ]
        }
    ]

    return (
        <section id="projects" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">My Projects</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Practical applications of my technical skills that delivered measurable results
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="h-64 overflow-hidden relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-6">
                                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                                    <span className="text-blue-200">{project.period}</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-700 mb-6">{project.description}</p>

                                <div className="mb-6">
                                    <h4 className="font-semibold text-gray-800 mb-3">Key Results:</h4>
                                    <ul className="space-y-2">
                                        {project.results.map((result, i) => (
                                            <li key={i} className="flex items-start">
                                                <span className="text-blue-500 mr-2">✓</span>
                                                <span className="text-gray-600">{result}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-3">Technologies Used:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}