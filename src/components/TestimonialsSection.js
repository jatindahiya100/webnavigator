import React from 'react';

const TestimonialsSection = () => {
    const testimonials = [
        {
            id: 1,
            text: 'Very fast turnaround, did the job as requested, no issues or problems, would use again',
            clientName: 'Andrew Davies',
            clientPhoto: 'https://media.licdn.com/dms/image/C4E03AQFa-Ag6tVnphQ/profile-displayphoto-shrink_400_400/0/1631031319923?e=1699488000&v=beta&t=KmXSP967ABjyPSRt0D1tlYADE4-67Ixv1e5M3BML8Ao',
        },
        {
            id: 2,
            text: 'Very Patient and talented. This work was extended for a month because I was continuously asking for changes, but Jatin was always very patient and successfully completed all the work that I asked for. I really appreciate his hard work. Meanwhile, he spent a lot of time communicating with me regarding to the project. His way of expressing was pretty clear and polite. I would highly recommend hiring him for your project.',
            clientName: 'Yang Henry',
            clientPhoto: 'https://media.licdn.com/dms/image/C4E03AQEuema7-YQREw/profile-displayphoto-shrink_400_400/0/1516864097491?e=1699488000&v=beta&t=HmV6EoDzFs3YB6w2W6occUkZImpE05RcaCxnkLm8srg',
        },
        {
            id: 3,
            text: 'Jatin has done a great job on my full stack development project. My project is really big but he managed to get every step done perfectly. Also he is always full of pashion & his working speed is fast. He has professional skills and knowledge that allow him to finish complicated tasks. I Really enjoy the experience working with him and will continue working with him on the further changes.',
            clientName: 'Yang Henry',
            clientPhoto: 'https://media.licdn.com/dms/image/C4E03AQEuema7-YQREw/profile-displayphoto-shrink_400_400/0/1516864097491?e=1699488000&v=beta&t=HmV6EoDzFs3YB6w2W6occUkZImpE05RcaCxnkLm8srg',
        },
        {
            id: 4,
            text: 'I really like the work Jatin has provided. Will release further tasks to him. I really love the work Jatin has provided. He is offering fast & reliable service. He has good knowledge in building a highly-customized website, and I will be working with him more in the future',
            clientName: 'Yang Henry',
            clientPhoto: 'https://media.licdn.com/dms/image/C4E03AQEuema7-YQREw/profile-displayphoto-shrink_400_400/0/1516864097491?e=1699488000&v=beta&t=HmV6EoDzFs3YB6w2W6occUkZImpE05RcaCxnkLm8srg',
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
            clientPhoto: 'https://media.licdn.com/dms/image/C5603AQGLbl5VAk1VJw/profile-displayphoto-shrink_400_400/0/1581961879989?e=1699488000&v=beta&t=xbGv1JcvLXf7vv1Sv_TN7cVufDeoK3_Yx8zP1Hd0Lxo',
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
            clientPhoto: 'https://media.licdn.com/dms/image/C4D03AQGejV9JE5GyGA/profile-displayphoto-shrink_400_400/0/1644562782321?e=1699488000&v=beta&t=DZiakJxMCRsjnxiktXqNJITe0lntFEHRl3ZDbTU4XIY',
        },
        {
            id: 10,
            text: 'Jatin incorporated all the changes that I wanted in the website. He was professional and responded very quickly. I highly recommend him! He is very good at designing websites. I would definitely work with him again. He worked on a Sunday and gave me the desired outcomes for my website',
            clientName: 'Caroline Swamidoss ',
            clientPhoto: 'https://media.licdn.com/dms/image/C4E03AQHm4gPAzQCZxA/profile-displayphoto-shrink_400_400/0/1638232453557?e=1699488000&v=beta&t=sIgF_wpNKpmYmr3QzSk279lscfY3p_8IAmKOk65Nd6M',
        }
    ];

    // Sort testimonials by text length
    testimonials.sort((a, b) => a.text.length - b.text.length);

    return (
        <section className="py-12 mt-8 p-8">
            <div className="container mx-auto text-center">
                <span className="text-lg font-bold text-blue-600">Testimonials</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold capitalize mt-4 mb-8">
                    What Our Clients Say
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-4">
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
