/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="header-top">
        <Link href="/impact-reports/together">
          <a>
          <img
            src="/impact-reports/together/static/images/logo-cu-advancement.png"
            alt="University of Colorado - Advancement | CU Foundation"
            className="header-top__logo"
          />
        </a>
        </Link>
      </header>

      <main className="main">
        <section className="home-section home-section-hero js-scene-1">
          <div className="home-section-hero__headings">
            <div className="buffer"></div>
            <h1>We&rsquo;re in this together</h1>
            <h2 className="h5">CU partnerships powered by philanthropy</h2>
          </div>

          <a
            href="#partnership"
            className="js-home-section-hero__scrolldown home-section-hero__scrolldown button-arrow-bounce"
          >
            <span className="visually-hidden">Scroll down</span>
            <span className="icon-arrow"></span>
          </a>

          <h3 className="home-section-hero__subhead">
            <span>2019</span> Impact Report to Donors
          </h3>

          <div className="home-section-hero__imgcontainer">
            <img
              className="home-section-hero__commoutreach"
              src="/impact-reports/together/static/images/home-welcome/commoutreach.png"
              alt="Community Outreach students and school bus"
            />
            <img
              className="home-section-hero__holguine"
              src="/impact-reports/together/static/images/home-welcome/holguine.png"
              alt="Man named Holguine"
            />
            <img
              className="home-section-hero__chip"
              src="/impact-reports/together/static/images/home-welcome/chip.png"
              alt="Man named Chip"
            />

            <img
              className="home-section-hero__davestudents"
              src="/impact-reports/together/static/images/home-welcome/davestudents.png"
              alt="Group of students and a man named Dave"
            />

            <img
              className="home-section-hero__bodine"
              src="/impact-reports/together/static/images/home-welcome/bodine.png"
              alt="Woman named Bodine"
            />
            <img
              className="home-section-hero__willow"
              src="/impact-reports/together/static/images/home-welcome/willow.png"
              alt="Woman named Willow"
            />
            <img
              className="home-section-hero__jakedoc"
              src="/impact-reports/together/static/images/home-welcome/jakedoc.png"
              alt="Child named Jade and a doctor riding on the back of Jades wheelchair"
            />
            <img
              className="home-section-hero__sun"
              src="/impact-reports/together/static/images/home-welcome/sun.png"
              alt="Graphic of the sun"
            />

            <img
              className="home-section-hero__mountains-bg"
              src="/impact-reports/together/static/images/home-welcome/mountains-bg.png"
              alt="Background illustration of mountains"
            />
            <img
              className="home-section-hero__mountains-fg"
              src="/impact-reports/together/static/images/home-welcome/mountains-fg.png"
              alt="Foreground illustration of mountains"
            />
          </div>

          <div
            className="js-home-section-hero__overlay home-section-hero__overlay"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "#fff",
              zIndex: 500,
            }}
          ></div>
        </section>

        <section
          id="partnership"
          className="home-section home-section-partnership js-scene-2"
        >
          <h2>Your partnership is essential.</h2>
          <p className="large-2">
            When you support CU, you join forces with an incredible place—a
            university where students, faculty, researchers and physicians
            collaborate with countless others to create immediate and enduring
            impact.
          </p>
          <p className="large-2">
            We’re truly in this together. This year, our stories about
            partnership—strengthened by your philanthropy—show how we can make
            Colorado and the world better when we invest in each other. Thank
            you.
          </p>
          <div className="home-section home-section-partnership__links">
            <a href="#stories" className="button">
              Read Our Stories
            </a>
            <a href="#financials" className="button">
              See Our Financials
            </a>
          </div>
        </section>

        <section
          id="stories"
          className="home-section home-section-stories js-scene-3"
        >
          <h2>Explore our four stories of partnerships.</h2>

          <div className="story-thumbs js-story-thumbs">
            {/* Former tabIndex values of 20-22-24-26 changed to 0 per jsx-ally/no-positive-tabindex linter */}
            <Link href={{pathname: '/impact-reports/together/story/[...storyId]', query: { storyId: ['resilience']}}} prefetch={false} >
            <a
              className="story-thumbs__item js-story-thumbs__item"
              tabIndex={0}
            >
              <div className="story-thumbs__item-inner">
                <h3>Resilience</h3>
                <img
                  src="/impact-reports/together/static/images/storythumb-resilience.png"
                  alt="Resilience"
                />
                <div className="story-thumbs__item-content">
                  <h4>This is where people can find a way forward.</h4>
                  <span className="button">Enter Story</span>
                </div>
              </div>
            </a>
            </Link>
            <Link href={{pathname: '/impact-reports/together/story/[...storyId]', query: { storyId: ['community']}}} prefetch={false} >
            <a
              className="story-thumbs__item js-story-thumbs__item"
              tabIndex={0}
            >
              <div className="story-thumbs__item-inner">
                <h3>Community</h3>
                <img
                  src="/impact-reports/together/static/images/storythumb-community.png"
                  alt="Community"
                />
                <div className="story-thumbs__item-content">
                  <h4>We all gain when our communities are healthy.</h4>
                  <span className="button">Enter Story</span>
                </div>
              </div>
            </a>
            </Link>
            <Link href={{pathname: '/impact-reports/together/story/[...storyId]', query: { storyId: ['innovation']}}} prefetch={false} >
            <a
              className="story-thumbs__item js-story-thumbs__item"
              tabIndex={0}
            >
              <div className="story-thumbs__item-inner">
                <h3>Innovation</h3>
                <img
                  src="/impact-reports/together/static/images/storythumb-innovation.png"
                  alt="Innovation"
                />
                <div className="story-thumbs__item-content">
                  <h4>Technology makes life possible for all of us.</h4>
                  <span className="button">Enter Story</span>
                </div>
              </div>
            </a>
            </Link>
            <Link href={{pathname: '/impact-reports/together/story/[...storyId]', query: { storyId: ['wonder']}}} prefetch={false} >
            <a
              className="story-thumbs__item js-story-thumbs__item"
              tabIndex={0}
            >
              <div className="story-thumbs__item-inner">
                <h3>Wonder</h3>
                <img
                  src="/impact-reports/together/static/images/storythumb-wonder.png"
                  alt="Wonder"
                />
                <div className="story-thumbs__item-content">
                  <h4>As humans, we can’t help but ask why and what.</h4>
                  <span className="button">Enter Story</span>
                </div>
              </div>
            </a>
            </Link>
          </div>
        </section>

        <section
          id="financials"
          className="home-section home-section-generosity js-scene-4"
        >
          <h2>Your generosity is a sign of trust.</h2>
          <p className="large-2">
            Thank you for your confidence in CU and the CU Foundation as the
            prudent stewards of your giving. Your faith in us is vital to our
            success.
          </p>

          <div className="home-section home-section-generosity__links">
            <Link href="/impact-reports/together/financials">
              <a className="button">
                See what you accomplished
              </a>
            </Link>
          </div>

          <p className="home-section-generosity__stat home-section-generosity__stat-1">
            <span className="h1 home-section-generosity__stat-num">36,810</span>
            <br />
            <span className="home-section-generosity__stat-text">
              donors like you gave to CU last year.
            </span>
          </p>

          <p className="home-section-generosity__stat home-section-generosity__stat-2">
            <span className="h1 home-section-generosity__stat-num">$566</span>{" "}
            <span className="h1 home-section-generosity__stat-label">
              million
            </span>
            <br />
            <span className="home-section-generosity__stat-text">
              in gifts were made to support CU.
            </span>
          </p>

          <img
            src="/impact-reports/together/static/images/home-generosity-chartfg.jpg"
            alt="Generosity chart and people graphic"
            className="home-section-generosity__graphic"
          />
        </section>

        <section
          id="mission"
          className="home-section home-section-mission js-scene-5"
        >
          <h2>Our Mission</h2>

          <ul className="home-section-mission__content">
            <li>
              <h3>CU Foundation</h3>
              <p className="large-2">
                We receive, manage and prudently invest private support for the
                benefit of the University of Colorado and support the
                university’s philanthropic endeavors through donor stewardship.
              </p>
            </li>
            <li>
              <h3>CU Advancement</h3>
              <p className="large-2">
                We aspire to unite benefactors with their passions, elevate
                grand ideas and prudently manage philanthropy—all to spark
                enduring support of a university that creates transformative
                impact in our communities and around the world.
              </p>
            </li>
          </ul>
        </section>
      </main>

      <footer className="site-footer-title">
        <img
          src="/impact-reports/together/static/images/essential-cu.svg"
          alt="Essential CU"
        />
      </footer>
    </>
  );
}
