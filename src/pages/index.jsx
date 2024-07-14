import React from "react";
import Layouts from "../layouts/Layouts";
import dynamic from "next/dynamic";

import { getSortedPostsData } from "../lib/posts";
import { getSortedProjectsData } from "../lib/projects";

import PartnersSection from "../components/sections/Partners";
import ServicesSection from "../components/sections/Services";
import HowItWorksSection from "../components/sections/HowItWorks";
import SkillsSection from "../components/sections/Skills";
import ContactSection from "../components/sections/Contact";
import Divider from "../components/sections/Divider";
import Link from "next/link";

const LatestProjectsSlider = dynamic(
  () => import("../components/sliders/LatestProjects"),
  { ssr: false }
);
const LatestPostsSlider = dynamic(
  () => import("../components/sliders/LatestPosts"),
  { ssr: false }
);
const HeroSlideshowSlider = dynamic(
  () => import("../components/sliders/HeroSlideshow"),
  { ssr: false }
);
const TestimonialSlider = dynamic(
  () => import("../components/sliders/Testimonial"),
  { ssr: false }
);
const HeroSection = dynamic(() => import("../components/ui/hero/hero"), {
  ssr: false,
});

const Home1 = (props) => {
  return (
    <Layouts transparent noHeader>
      <HeroSection />

      <section className="mil-deep-bg mil-p-120-60">
        <div className="mil-deco" style={{ top: 0, left: "35%" }} />
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5 mil-mb-60">
              <div className="mil-circle-illustration">
                <div className="mil-circle-bg" />
                <div className="mil-image-frame">
                  <img
                    src="https://itsulu-react.netlify.app/img/faces/t3.png"
                    alt="img"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
                Firm Overview
              </span>
              <h2 className="mil-mb-50">
                We Specialize in <br />
                <span className="mil-accent">Transforming Your Idea</span> or
                Business in The Current
                <br /> Digital Era.
              </h2>
              <p className="mil-mb-50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.{" "}
              </p>
              <div className="row align-items-end">
                <div className="col-xl-7">
                  <ul className="mil-check-icon-list mil-mb-60">
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                        Quis suspendisse ultrices gravida.
                      </span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                        Consectetur adipiscing elit.
                      </span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                        Quis suspendisse ultrices gravida.
                      </span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                        Consectetur adipiscing elit.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="col-xl-5">
                  <Link href="team-single" className="mil-post-sm mil-mb-60">
                    <div className="mil-cover-frame">
                      <img src="img/faces/1.jpg" alt="cover" />
                    </div>
                    <div className="mil-description">
                      <h4 className="mil-font-3 mil-accent">Jane Meldrum</h4>
                      <p className="mil-text-sm">CEO &amp; Co-Founder</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HeroSlideshowSlider />
      <PartnersSection />
      <Divider />
      
      <section className="mil-p-120-90">
        <div
          className="mil-deco"
          style={{ bottom: 0, right: "20%", transform: "rotate(180deg)" }}
        />
        <div className="container">
          <div className="row justify-content-between align-items-center">
            
            <div className="col-xl-7">
              <h2 className="mil-mb-30">
                Protect Your IT Environments With{" "}
                <span className="mil-accent">Powerful Cloud Security</span>{" "}
                Solutions and Always on Support
              </h2>
              <div className="mil-hori-box mil-mb-30">
                <div className="mil-mr-30">
                  <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg">
                    <img src="img/icons/md/1.svg" alt="icon" />
                  </div>
                </div>
                <p>
                  Our{" "}
                  <span className="mil-accent">certified cloud security</span>{" "}
                  experts help protect your environments across hyperscale
                  public and private clouds so you can run your business
                  confidence.
                </p>
              </div>
              <a href="#." className="mil-button mil-border mil-mb-30">
                <span>Get in Touch</span>
              </a>
            </div>
            <div className="col-xl-4">
              <div
                className="mil-circle-illustration mil-with-dots-2 mil-mb-60"
                data-swiper-parallax-scale=".8"
              >
                <div className="mil-circle-bg" />
                <div className="mil-image-frame">
                  <img src="https://itsulu-react.netlify.app/img/faces/t4.png" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="mil-gradient-bg mil-p-120-90">
        <div
          className="mil-deco mil-deco-accent"
          style={{ bottom: 0, right: "20%", transform: "rotate(180deg)" }}
        />
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-4">
              <span className="mil-suptitle mil-suptitle-2 mil-light mil-mb-30">
                Explore More Solutions
              </span>
              <h2 className="mil-light mil-mb-90">
                Do You Know what Your{" "}
                <span className="mil-accent">Cybersecurity</span> Risk Score Is?
              </h2>
            </div>
            <div className="col-xl-7 mil-mb-30">
              <p className="mil-light-soft mil-mb-30">
                By answering these simple questions about your cybersecurity
                technology, processes, and people, you'll receive a
                cybersecurity risk score against our baseline that can help you
                identify common security gaps in your environment that you may
                not be aware of.
              </p>
              <a href="#." className="mil-button mil-border mil-light">
                <span>Start Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      <LatestProjectsSlider projects={props.projects} />
      <Divider />
      <LatestPostsSlider posts={props.posts} />
      <TestimonialSlider />
  
    </Layouts>
  );
};
export default Home1;

export async function getStaticProps() {
  const allPosts = getSortedPostsData();
  const allProjects = getSortedProjectsData();

  return {
    props: {
      posts: allPosts,
      projects: allProjects,
    },
  };
}
