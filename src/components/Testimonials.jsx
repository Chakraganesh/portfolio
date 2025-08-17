import { FaQuoteLeft } from 'react-icons/fa'

export default function Testimonials() {
    const testimonials = [
        {
            quote: "Chakra demonstrated exceptional problem-solving skills during our internship program. His Java implementations were consistently clean and efficient.",
            author: "Cognifyz Technologies Mentor",
            role: "Java Development Internship"
        },
        {
            quote: "A quick learner who adapts well to new challenges. Chakra's analytical approach to database design impressed our evaluation team.",
            author: "Infosys Springboard Instructor",
            role: "Database and SQL Certification"
        }
    ]

    return (
        <section className="py-20 bg-blue-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">What Others Say</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Feedback from mentors and educators about my work
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 relative"
                        >
                            <div className="text-blue-400 text-4xl absolute top-6 left-6 opacity-10">
                                <FaQuoteLeft />
                            </div>
                            <p className="text-gray-700 text-lg italic mb-6 relative z-10">
                                "{testimonial.quote}"
                            </p>
                            <div className="border-t border-gray-100 pt-4">
                                <p className="font-semibold text-gray-800">{testimonial.author}</p>
                                <p className="text-blue-600">{testimonial.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}