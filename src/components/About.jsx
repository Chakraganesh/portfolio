export default function About() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">About Me</h2>
                <div className="max-w-4xl mx-auto bg-gray-50 rounded-xl shadow-md overflow-hidden p-8">
                    <div className="md:flex">
                        <div className="p-8">
                            <p className="mt-2 text-gray-600 text-lg leading-relaxed">
                                I am a motivated Computer Science engineering graduate with strong analytical and communication skills,
                                aspiring to become a Software Developer in a reputed organization. My goal is to contribute to the
                                organization with the best of my ability while continuously developing new skills through professional
                                interactions to achieve new heights.
                            </p>
                            <div className="mt-8">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">Personal Details</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-gray-600"><span className="font-medium text-gray-800">Email:</span> chakraganesht@gmail.com</p>
                                        <p className="text-gray-600"><span className="font-medium text-gray-800">Phone:</span> +91 9912763708</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-600"><span className="font-medium text-gray-800">Location:</span> Tirupati</p>
                                        <p className="text-gray-600"><span className="font-medium text-gray-800">Website:</span> www.reallygreatsite.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}