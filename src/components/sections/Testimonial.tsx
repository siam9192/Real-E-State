'use client';
import React, { useEffect, useState } from 'react';
import Container from '../container/Container';
import { testimonialReviews } from '@/data/reviews';
import Marquee from 'react-fast-marquee';

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const [innerWidth, setInnerWith] = useState(window.innerWidth);

  useEffect(() => {
    setInnerWith(window.innerWidth);
  }, [window.innerWidth]);

  const md = 1024 > innerWidth && innerWidth >= 768;
  const sm = 768 > innerWidth;
  const divide = innerWidth / (sm ? 1 : md ? 3 : 6);

  return (
    <section className="py-20">
      <Container>
        <div className="flex justify-between lg:items-center flex-col md:flex-row gap-2">
          <h1 className="dark:text-white text-3xl md:text-4xl font-medium flex-1">
            What Says From Our Happy Customers
          </h1>
          <p className="flex-1 text-light_text_medium_color dark:text-dark_text_medium_color">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            veniam aliquam commodi laborum illum culpa mollitia vel, ratione
            repellat nostrum.
          </p>
        </div>

        <div className="mt-10">
          <Marquee
            className="rounded-md"
            pauseOnHover={true}
            gradientWidth={md ? 100 : sm ? 50 : 200}
            gradientColor={'rgba(24,67,200,.5)'}
            gradient={true}
          >
            {testimonialReviews.map((review, index) => (
              <div
                key={index}
                className=" flex flex-col justify-between- dark:bg-dark_light_color p-5 rounded-md  space-y-2  mr-10 min-h-72 shadow"
                style={{ width: `${divide}px` }}
              >
                <p className="dark:text-dark_text_high_color ">
                  {review.review_text}
                </p>
                <div className="flex gap-2">
                  <img
                    src={review.image}
                    alt="img"
                    className="size-10 rounded-full"
                  />
                  <div className="space-y-1">
                    <h3 className="text-xl font-medium dark:text-dark_text_high_color">
                      {review.name}
                    </h3>
                    <h6 className="dark:text-dark_text_low_color">
                      {review.profession || 'N/A'}
                    </h6>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </Container>
    </section>
  );
};

export default Testimonial;
