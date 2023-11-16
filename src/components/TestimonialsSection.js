import React from 'react';

const TestimonialsSection = () => {
    const testimonials = [
        {
            id: 1,
            text: 'Very fast turnaround, did the job as requested, no issues or problems, would use again',
            clientName: 'Andrew Davies',
            clientPhoto: 'https://www.upwork.com/profile-portraits/c1ETy2V41TYEMbK_UkE4Gp_QndW-EkANRhGmDwftqk6BJiP7PAXAAoDxfQp2xhzsPG',
        },
        {
            id: 2,
            text: 'Very Patient and talented. This work was extended for a month because I was continuously asking for changes, but Jatin was always very patient and successfully completed all the work that I asked for. I really appreciate his hard work. Meanwhile, he spent a lot of time communicating with me regarding to the project. His way of expressing was pretty clear and polite. I would highly recommend hiring him for your project.',
            clientName: 'Yang Henry',
            clientPhoto: 'https://www.upwork.com/profile-portraits/c1fFy29XOhI1nk0OdyqgvxMfhOyg-aWJmjGg4cnQa0VtDzHjSj5Qi_9CSboencGoR_',
        },
        {
            id: 3,
            text: 'Jatin has done a great job on my full stack development project. My project is really big but he managed to get every step done perfectly. Also he is always full of pashion & his working speed is fast. He has professional skills and knowledge that allow him to finish complicated tasks. I Really enjoy the experience working with him and will continue working with him on the further changes.',
            clientName: 'Yang Henry',
            clientPhoto: 'https://www.upwork.com/profile-portraits/c1fFy29XOhI1nk0OdyqgvxMfhOyg-aWJmjGg4cnQa0VtDzHjSj5Qi_9CSboencGoR_',
        },
        {
            id: 4,
            text: 'I really like the work Jatin has provided. Will release further tasks to him. I really love the work Jatin has provided. He is offering fast & reliable service. He has good knowledge in building a highly-customized website, and I will be working with him more in the future',
            clientName: 'Yang Henry',
            clientPhoto: 'https://www.upwork.com/profile-portraits/c1fFy29XOhI1nk0OdyqgvxMfhOyg-aWJmjGg4cnQa0VtDzHjSj5Qi_9CSboencGoR_',
        },
        {
            id: 5,
            text: 'Very helpful and very cooperative Thanks Jatin',
            clientName: 'Preeti Bhatia',
            clientPhoto: 'https://www.upwork.com/profile-portraits/c1fBOi4SiUsSNS9jy3lx3VBFjcjj3UnBB_csPdbCTJLbcd2pzUZPxs-foYXB4OubXG',
        },
        {
            id: 6,
            text: 'Jatin Dahiya did exactly what we requested in exactly the right timeframe. Excellent work. A++++',
            clientName: 'Yerramsetti Chalapathi Rao',
            clientPhoto: 'https://www.upwork.com/profile-portraits/c1I_JxYtVJPTMbBitDrSeJKXOHzne_45DqldomE3a7gUsLD6XbBAGeAE84bI3qnaP1',
        },
        {
            id: 7,
            text: 'Excellent work!!!! He gave me exactly what I requested. I am looking forward to using him again in the future🙂',
            clientName: 'James Lewis',
            clientPhoto: 'https://www.upwork.com/profile-portraits/c1bjAY_NmGz9vYWUYzM-JJ-w4wRshV971Y5xntNd-S1gRQtJ9jXr8IvpcydUBQ9Oyl',
        },
        {
            id: 8,
            text: 'Jatin Dahiya was great! Completed my task really quickly and was very knowledgeable. Highly recommend!',
            clientName: 'Yerramsetti Chalapathi Rao',
            clientPhoto: 'https://www.upwork.com/profile-portraits/c1I_JxYtVJPTMbBitDrSeJKXOHzne_45DqldomE3a7gUsLD6XbBAGeAE84bI3qnaP1',
        },
        {
            id: 9,
            text: 'I want to thank Jatin, for all the hard work he has done. From start to finish there was always a strong level of respect & understanding for the goal at hand. Working closely with him really took our programming to the next level!! He thinks about problems, finds solutions, and has awesome morale. Great communication, great working skills in outreach, and high work quality and efficiency. He had a DEEP understanding of what work was needed and performed above and BEYOND expectations. The tone of his communication was wonderful and emotionally engaging on all levels. To top it off, his experience is incredibly professional, fast, and reliable. Thank You Again, Faizy Jamal"',
            clientName: 'Faizy Jamal',
            clientPhoto: 'https://www.upwork.com/profile-portraits/c1HW5mZiPPNrTd3O4xUkXnpJ3TN6h7BM5gLrDfD51D2rsNS0f0FhTkSiv4IpDrZ5g-',
        },
        {
            id: 10,
            text: 'Jatin incorporated all the changes that I wanted in the website. He was professional and responded very quickly. I highly recommend him! He is very good at designing websites. I would definitely work with him again. He worked on a Sunday and gave me the desired outcomes for my website',
            clientName: 'Caroline Swamidoss',
            clientPhoto: 'https://www.upwork.com/profile-portraits/c1fQHdjbJpBBR474f7aJUnbgBVriwUjJoeizS5Hr00DsVHe9CBAkagrqpZ-1rPQOie',
        },
        {
            id: 11,
            text: 'Jatin did everything asked of him and more. This small project was completed without a hitch. The front end and the database are functioning properly. Jatin was attentive and understood my requests and asked questions when necessary. We will continue to work with Jatin in the future and I recommend him to anyone looking for a reliable developer.',
            clientName: 'Gavin Gene',
            clientPhoto: 'https://www.upwork.com/profile-portraits/c1OEhIAyRd2T5jeUFUcKETENrfxCJEbSryKZUq0vPN_LNmPzW74wW8O6SWQGbN_RPh',
        }
    ];

    // Sort testimonials by text length
    testimonials.sort((a, b) => a.text.length - b.text.length);

    return (
        <section>
            <div className="container mx-auto text-center min-h-screen mt-12 px-4 sm:px-0">
                <span className="text-lg font-bold text-blue-600 px-4 sm:px-0" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">Testimonials</span>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold capitalize mt-4 mb-8 px-4 sm:px-0" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                    What Our Clients Say
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-4" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                            <div className="mb-4">
                                <blockquote className="text-lg italic text-gray-700">
                                    {testimonial.text}
                                </blockquote>
                            </div>
                            <div className="flex items-center">
                                <div className="w-16 h-16 rounded-full overflow-hidden">
                                    <img
                                        src={testimonial.clientPhoto}
                                        alt={testimonial.clientName}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="ml-4">
                                    <span className="text-gray-800 font-semibold text-lg">
                                        {testimonial.clientName}
                                    </span>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
