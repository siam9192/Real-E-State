import React from 'react';
import Container from '../container/Container';
import HomeSearchBox from '../ui/HomeSearchBox';
import { achievements } from '@/data/achievements';

function Hero() {
  return (
    <section className=" lg:h-[90vh]">
      <Container>
        <div className=" grid  lg:grid-cols-3 py-5 md:py-14  relative   ">
          <div className=" p-5 md:p-10   flex flex-col justify-between col-span-2 space-y-10 md:space-y-20">
            <div className=" space-y-4">
              <h1 className="font-medium text-4xl md:text-5xl lg:text-6xl text-light_text_high_color dark:text-dark_text_high_color">
                Bring Your Family's{' '}
                <span className="text-primary_color">Happiness</span> To Your
                Dream House
              </h1>
              <p className="text-light_text_medium_color dark:text-dark_text_medium_color">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                iure labore id numquam delectus corrupti. Repellat nesciunt
                doloremque incidunt voluptates earum cumque blanditiis,
                exercitationem quas enim debitis animi eligendi qui. Lorem
                ipsum, dolor sit amet consectetur adipisicing elit. Incidunt,
                dolorum?
              </p>
            </div>
            <HomeSearchBox />

            <div className="grid  grid-cols-2 md:grid-cols-4 gap-3 ">
              {achievements.slice(0, 4).map((achievement) => (
                <div className="space-y-1">
                  <h1 className=" text-3xl md:text-5xl  font-bold dark:text-white">
                    {achievement.number}{' '}
                    <span className=" text-primary_color ">+</span>
                  </h1>
                  <h6 className="dark:text-dark_text_medium_color">
                    {achievement.name}
                  </h6>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img
              className=" rounded-xl rotate-6 hidden lg:block"
              src="/images/hero-bg.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="flex  items-center justify-center gap-2">
          {[...Array(3)].map((_, idx) => (
            <span
              className="size-5 bg-secondary_color rounded-full"
              key={idx}
            ></span>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Hero;
