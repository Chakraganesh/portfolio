export default function WhyHireMe() {
    const strengths = [
        {
            icon: '💻',
            title: 'Technical Excellence',
            description: 'Strong foundation in Java, SQL, and full-stack development with hands-on project experience'
        },
        {
            icon: '🚀',
            title: 'Quick Learner',
            description: 'Proven ability to rapidly acquire new technologies and frameworks as demonstrated by multiple certifications'
        },
        {
            icon: '🧩',
            title: 'Problem Solver',
            description: 'Analytical mindset with ability to break down complex problems into actionable solutions'
        },
        {
            icon: '🤝',
            title: 'Team Player',
            description: 'Excellent communication skills and experience collaborating in team environments'
        }
    ]

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Hire Me?</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        I bring more than just technical skills - here's what makes me the ideal candidate for your team
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {strengths.map((item, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200"
                        >
                            <div className="text-4xl mb-4">{item.icon}</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-8 text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">Ready to add value to your team</h3>
                    <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                        I'm eager to contribute my skills and grow with your organization. Let's discuss how I can help achieve your goals.
                    </p>
                    <a
                        href="#contact"
                        className="inline-block bg-white text-blue-800 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition duration-300"
                    >
                        Contact Now
                    </a>
                </div>
            </div>
        </section>
    )
}