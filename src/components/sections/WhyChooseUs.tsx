'use client';
import React, { useEffect } from 'react';
import Container from '../container/Container';
import { IoCheckmarkOutline } from 'react-icons/io5';
import AOS from 'aos';
import 'aos/dist/aos.css';
function WhyChooseUs() {
  const data = [
    {
      title: 'Expert Guidance',
      description:
        'Our experienced agents offer expert insights and advice, guiding you every step of the way to ensure you make informed decisions.',
    },
    {
      title: 'Wide Range of Listings',
      description:
        "From luxury villas to budget-friendly apartments, our extensive portfolio offers something for every buyer's needs and preferences.",
    },
    {
      title: 'Transparent Transactions',
      description:
        'We believe in complete transparency in all transactions, providing clarity on pricing, fees, and processes so you know exactly what to expect.',
    },
    {
      title: 'Exceptional Customer Service',
      description:
        'Our dedicated team is available around the clock to assist you with any questions or concerns, making your experience seamless and stress-free.',
    },
    {
      title: 'Local Market Knowledge',
      description:
        'With deep knowledge of the local market trends, we help you identify the best investment opportunities in top locations.',
    },
    {
      title: 'Tailored Solutions',
      description:
        'We understand that every client has unique needs, and we offer customized services to meet your specific requirements and preferences.',
    },
    {
      title: 'Advanced Technology',
      description:
        'Using cutting-edge technology, we offer virtual tours, 3D floor plans, and detailed property insights to enhance your buying experience.',
    },
    {
      title: 'Strong Network of Partners',
      description:
        'Our partnerships with trusted lenders, inspectors, and contractors ensure that you receive the highest quality of service in all aspects of property buying.',
    },
    {
      title: 'Proven Track Record',
      description:
        'With a history of successful deals and satisfied clients, our reputation in the industry speaks for itself.',
    },
    {
      title: 'Hassle-Free Process',
      description:
        'We handle the paperwork, negotiations, and other complexities, making the process of buying or selling property as smooth as possible.',
    },
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="py-20">
      <Container>
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <div className="space-y-2">
              <h1 className="text-center  dark:text-white  font-bold text-3xl ">
                Why Choose Us for your House Needs ?
              </h1>
              <p className=" text-light_text_medium_color dark:text-dark_text_medium_color text-center ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aliquam, explicabo quae aspernatur nesciunt quod sit ipsam atque
                unde sequi mollitia.
              </p>
            </div>

            <div className="mt-10 space-y-5">
              {data.slice(0, 4).map((item) => (
                <div
                  key={item.title}
                  data-aos="fade-right"
                  className="p-5 bg-gray-100 dark:bg-dark_light_color  
             bg-transparent 
             dark:hover:bg-transparent 
             duration-150 hover:cursor-pointer rounded-lg"
                >
                  <div className="flex  gap-3">
                    <div className="p-2 h-fit rounded-full bg-secondary_color text-white text-2xl ">
                      <IoCheckmarkOutline />
                    </div>
                    <div className="space-y-2">
                      <h4 className=" text-light_text_high_color dark:text-dark_text_high_color text-2xl font-medium">
                        {item.title}
                      </h4>
                      <p className=" text-light_text_medium_color dark:text-dark_text_medium_color">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className=" hidden lg:block">
            <img
              src="/images/why-choose-us.jpg"
              alt=""
              className="rounded-xl "
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default WhyChooseUs;
