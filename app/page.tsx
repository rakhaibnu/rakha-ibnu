"use client";

import { Button } from "@/components/ui/button";
import Aurora from "@/components/blocks/Backgrounds/Aurora/Aurora";
import Image from "next/image";
import RollingGallery from "@/components/blocks/Components/RollingGallery/RollingGallery";
import * as React from "react";
import TiltedCard from "@/components/blocks/Components/TiltedCard/TiltedCard";
import ScrollVelocity from "@/components/blocks/TextAnimations/ScrollVelocity/ScrollVelocity";
import BounceCards from "@/components/blocks/Components/BounceCards/BounceCards";


export default function Home() {
  const images = [
    "/Gesit.jpg",
    "/GesitCarbon.jpg",
    "/GesitHome.jpg",
    "/GesitFinding.jpg",
    "/GesitOrder.jpg",
  ];

  const snakes = [
    "/SnakesGP.jpg",
    "/snakesgame.jpg",
    "/snakeshome.jpg",
    "/snakesmultiple.jpg",
    "/SnakesExplain.jpg",
  ];

  const transformStyles = [
    "rotate(5deg) translate(-150px)",
    "rotate(0deg) translate(-70px)",
    "rotate(-5deg)",
    "rotate(5deg) translate(70px)",
    "rotate(-5deg) translate(150px)",
  ];

  return (
    <section className="w-full min-h-screen">
      <div className="absolute inset-0 -z-10">
        <Aurora
          colorStops={["#007ea6", "#005874", "#bff0ff"]}
          amplitude={0.2}
          blend={0.6}
        />
      </div>
      <div
        id="profile"
        className="w-full flex flex-col md:flex-row items-center justify-center min-h-screen px-20 md:pl-20 gap-20"
      >
        <TiltedCard
          imageSrc="/Rakha.jpeg"
          altText="Rakha Ibnu"
          captionText="Rakha Ibnu"
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          rotateAmplitude={22}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={
            <p className="tilted-card-demo-text w-full text-center border-2 rounded-2xl bg-transparent mx-w-[250px]">
              Muhammad Rakha Ibnu Gunawan
            </p>
          }
        />
        <div className="flex flex-col items-start justify-center max-w-lg">
          <h3 className="text-4xl font-bold">Hi, I&apos;m Rakha Ibnu</h3>
          <p className="mt-4 text-l">
            I am an active student at UPN Veteran Jakarta, class of 2023,
            majoring in Information Systems in the Faculty of Computer Science.
            I am eager to learn, utilize my skills, and grow, especially in the
            field of computer science.
          </p>
          <div className="flex gap-4 text-center items-center justify-center">
            <Button className="mt-6" variant="default">
              Contact
            </Button>
            <p className="mt-6 font-bold">0858-8907-4464</p>
            <p className="mt-6 font-bold">mrakha.gunawan@gmail.com</p>
          </div>
          <div className="flex mt-4 gap-4">
            <a href="https://www.linkedin.com/in/rakha-ibnu-54b405285/">
              <Image
                src={"/linkedin.png"}
                alt={"linkedin"}
                width={50}
                height={50}
              />
            </a>
            <a href="https://github.com/rakhaibnu">
              <Image
                src={"/github.png"}
                alt={"github"}
                width={50}
                height={50}
              />
            </a>
          </div>
        </div>
      </div>
      <div
        id="skills"
        className="w-full flex flex-col items-center justify-center p-4 min-h-screen"
      >
        <h2 className="text-2xl font-semibold ">Skills</h2>
        <RollingGallery autoplay={true} pauseOnHover={false} />
      </div>
      <div id="Projects" className="py-20">
        <ScrollVelocity
          texts={["My Projects", "Scroll Down"]}
          className="custom-scroll-text"
        />
      </div>

      <div
        id="Projects"
        className="w-full flex flex-col items-center justify-center p-6 md:p-20 min-h-screen"
      >
        <div className="max-w-[80%] mx-auto">
          {/* Gesit Project */}
          <div className="mb-12">
            <h3 className="font-bold text-3xl text-center">GESIT</h3>
            <div className="flex flex-wrap gap-4 justify-center px-100 my-20">
              <BounceCards
                className="custom-bounceCards"
                images={images}
                containerWidth={800}
                containerHeight={400}
                animationDelay={1}
                animationStagger={0.08}
                easeType="elastic.out(1, 0.5)"
                transformStyles={transformStyles}
                enableHover={true}
              />
            </div>
            <p className="mt-4">
              Gesit is a modern ride-hailing application that uses electric
              vehicles to help reduce carbon emissions and support a greener
              future. In addition to eco-friendly transportation services, Gesit
              also allows users to book tickets and check schedules for KRL
              (commuter line), MRT, and LRT trains — all in one seamless
              platform.
            </p>
          </div>
          {/* SnakesGP Project */}
          <div className="my-40">
            <h3 className="font-bold text-3xl text-center">SnakesGP</h3>
            <div className="flex flex-wrap gap-4 justify-center px-100 my-20">
              <BounceCards
                className="custom-bounceCards"
                images={snakes}
                containerWidth={800}
                containerHeight={400}
                animationDelay={1}
                animationStagger={0.08}
                easeType="elastic.out(1, 0.5)"
                transformStyles={[
                  "rotate(5deg) translate(-150px)",
                  "rotate(0deg) translate(-70px)",
                  "rotate(-5deg)",
                  "rotate(5deg) translate(70px)",
                  "rotate(-5deg) translate(150px)",
                ]}
                enableHover={true}
              />
            </div>
            <p className="font-medium mt-4">
              SnakesGP is an educational board game application inspired by the
              classic game of Snakes and Ladders, designed to introduce children
              to the rich and diverse geoparks of Indonesia. Each tile on the
              board features exciting facts, images, and quizzes about various
              Indonesian geoparks, turning every move into a fun learning
              experience. The goal of SnakesGP is to spark curiosity and
              awareness about Indonesia’s natural and cultural heritage in a
              playful, interactive way.
            </p>
          </div>
          <div className="font-serif my-20">
            <h4 className="text-2xl font-semibold my-10 text-center">
              Removies
            </h4>
            <div className="flex flex-wrap gap-4 justify-center">
              <Image
                src={"/removies.png"}
                alt={"removies"}
                width={600}
                height={300}
                className="rounded-2xl shadow-md"
              />
            </div>
            <p className="mt-10">
              Removies is a website that allows users to view movie ratings,
              discover directors, and explore a list of recommended films. The
              website is built using HTML, CSS, and JavaScript, with JavaScript
              specifically used to handle login authentication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
