import React from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../../components/impact-reports/onward/global/Layout";

export default function Financials() {

  return (
    <>
      <Head>
        <title>University of Colorado Fiscal Year 2020 Philanthropy Financials</title>
        <meta property="og:url" content="https://essential.cu.edu/impact-reports/onward/financials" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="University of Colorado Fiscal Year 2020 Philanthropy Financials" />
        <meta property="og:description" content="It adds up: your generosity is an investment. You give to what matters to you — deeply, personally, meaningfully — to make a better world. At CU, we believe donors like you support your passions because you want tomorrow to be better than today. Thank you for supporting what’s important to you." />
        <meta property="og:image" content="https://essential.cu.edu/financials-header.png" />
        <meta property="twitter:title" content="University of Colorado 2020 Donor Impact Report" />
        <meta property="twitter:description" content="It adds up: your generosity is an investment. You give to what matters to you — deeply, personally, meaningfully — to make a better world. At CU, we believe donors like you support your passions because you want tomorrow to be better than today. Thank you for supporting what’s important to you." />
        <meta property="twitter:image" content="https://essential.cu.edu/financials-header.png" />
        <meta property="twitter:card" content="summary_large_image" />
      </Head>
      <Layout>
      
        <div className="container">
        
          <section className="financials-title">
            <img src="/financials-header.png" alt="Financials graphic - painterly hand pointing upwards, graphs, shapes" width="1256" height="516" />
            <div className="financials-container">
              <h1>Your generosity is an investment</h1>
              <hr />
              <h2>2020 fiscal year financials</h2>
              <p className="body-text-lg">You give to what matters to you—deeply, personally, meaningfully—to make a better world. At CU, we believe donors like you support your passions because you want tomorrow to be better than today.</p>
              <p className="body-text-lg"><strong>Thank you for supporting what’s important to you.</strong><br />Here's how you made a difference in fiscal year 2020.</p>
            </div>
          </section>

          <section className="financials-section financials-section-1">
            <div className="financials-section-content">
              <h3>$455.9 million <span className="text-light">given last year</span></h3>
              <p className="body-text-lg">You committed to improving lives. Year after year, your gifts add up to create substantial and enduring solutions to our biggest challenges. The numbers tell just part of the story, however. It’s the impact you have that resonates.</p>
            </div>
            <div className="financials-section-image">
              <img className="financials-fillgraphic" src="/financials-fillgraphic-1.png" alt="Financials graphic - open hands holding a heart" width="800" height="800" />
            </div>
          </section>

          <section className="financials-section financials-section-2">
            <div className="financials-section-image">
              <img src="/financials-bodygraphic-2.png" alt="Financials graphic - woman looking upwards with rocket graphic and arrow line pointing up" width="1232" height="1400" />
            </div>
            <div className="financials-section-content">
              <h3>55,450 <span className="text-light">gifts</span></h3>
              <p className="body-text-lg">Your generosity drives that impact—bright futures for students, awe-inspiring discovery, innovative health care and a commitment to the common good. Last year, you gave: </p>
              <p className="body-text-lg">
                <strong>$65 million</strong> to expand opportunities for students through scholarships<br />
                <strong>$126 million</strong> to spur pioneering research and discovery<br />
                <strong>$25 million</strong> to bring the brightest faculty to our campuses<br />
                <strong>$263 million</strong> to transform health care and support lifesaving efforts<br /> 
              </p>
            </div>
          </section>

          <section className="financials-section financials-section-3">
            <div className="financials-section-content">
              <p className="body-text-lg">You also rose to meet the challenge in a year unlike any other. You are stepping up as we face new hardships caused by COVID and the economic downturn. And you’re standing together with those who fight for social justice.</p>
              <h3>$3.3 million</h3>
              <p className="body-text-lg">How much <strong>1,986 donors</strong> gave to COVID and emergency relief efforts since March 1</p>
              <h3>$11.8 million</h3>
              <p className="body-text-lg">How much <strong>128 donors</strong> gave to diversity, equity and inclusion efforts since January 1</p>
            </div>
            <div className="financials-section-image">
              <img className="financials-fillgraphic" src="/financials-fillgraphic-2.png" alt="Financials graphic - hands holding over a circle" width="800" height="800" />
            </div>
          </section>

          <hr />

          <section className="financials-section financials-section-4">
            <div className="financials-section-image">
              <img src="/financials-chart-1.png" alt="Financials chart graphic - showing 9 out of 10 present boxes small, 1 large box" width="1234" height="1000" />
            </div>  
            <div className="financials-section-content">
              <h3>9 out of 10</h3>
              <p className="body-text-lg">That’s how many gifts were less than <strong>$2,500</strong> last year.</p>
              <br />
              <h3>$8,220</h3>
              <p className="body-text-lg">That was the average size of a gift last year. Some gifts to CU are large, but every gift makes a difference in someone’s life.</p>
            </div>
          </section>

          <section className="financials-section financials-section-5">
            <div className="financials-section-content">
              <h3>32,008 <span className="text-light">donors like you</span></h3>
              <p className="body-text-lg">That’s how many people gave to help CU change the world. Your connection to our campuses is diverse. Last year, we received gifts from:</p>
              <p className="body-text-lg">
                <strong>14,882</strong> alumni<br />
                <strong>9,102</strong> friends<br />
                <strong>3,091</strong> parents<br />
                <strong>2,411</strong> corporations and foundations<br />
                <strong>1,117</strong> faculty and staff
              </p>
            </div>
            <div className="financials-section-image">
              <img className="financials-fillgraphic" className="financials-fillgraphic" src="/financials-fillgraphic-3.png" alt="Financials graphic - people standing with raised arms" width="800" height="800" />
            </div>
          </section>

          <section className="financials-section financials-section-6">
            <div className="financials-section-content">
              <h2 className="h1 text-center">You’re looking ahead</h2>
              <hr />
              <p className="body-text-lg">
                You give with an eye on the future—to create solutions tomorrow for the challenges we face today. Endowments are investments in that future. They’re gifts that support CU forever because they generate reliable support for generations to come. CU’s collective endowment is made up of thousands of individual endowments, and just like a current gift, an endowment has a specific purpose determined by the donor: It could be a scholarship that’s awarded year after year, or support to attract a sought-after faculty chair or the creation of a mental health and wellness program.
              </p>
            </div>
          </section>

          <section className="financials-section financials-section-7">
            <div className="financials-section-content">
              <h3>$1.52 billion</h3>
              <p className="body-text-lg">CU’s endowment is valued at $1.52 billion, as of June 30. Here’s how the collective value of the endowment has grown in recent years.</p>
              <p className="body-text-lg">
                <strong>140</strong> new endowments were created last fiscal year<br />  
                <strong>$73 million</strong> was given in new endowment support<br /> 
                <strong>3,029</strong> total endowments at CU have an enduring impact 
              </p>
            </div>
            <div className="financials-section-image">
              <img src="/financials-chart-2.png" alt="Financials chart graphic - showing endowments 2015 $1.09 billion through 2020 $1.52 billion" width="1447" height="1173" />
            </div>
          </section>

          <hr />

          <section className="financials-section financials-section-8">
            <div className="financials-section-image">
              <h2 className="financials-hide-large">How the endowment is invested</h2>
              <img src="/financials-chart-3.png" alt="Financials chart graphic - showing how the endowment is invested by percentage" width="1446" height="1172" />
            </div>
            <div className="financials-section-content">
              <h2 className="financials-hide-small">How the endowment is invested</h2>
              <p className="body-text-lg">The endowment is invested in the Long Term Investment Pool, or LTIP, in a diverse asset class with a long-term horizon in mind. Here’s how the LTIP was invested in fiscal year 2020.</p>
            </div>
          </section>

          <hr />

          <section className="financials-section financials-section-9">
            <div className="financials-section-content">
              <h2 className="financials-hide-small">Investment return vs. policy benchmark</h2>
              <p className="body-text-lg">In fiscal year 2020, the LTIP returned 4.2% compared to 3.8% for our policy benchmark. Here is the LTIP’s annualized investment performance compared to the benchmark.</p>
            </div>
            <div className="financials-section-image">
              <h2 className="financials-hide-large">Investment return vs. policy benchmark</h2>
              <img src="/financials-chart-4.png" alt="Financials chart graphic - showing the LTIP annualized investment performance" width="1447" height="1172" />
            </div>
          </section>

          <hr />

          <section className="financials-section financials-section-10">
            <div className="financials-section-image">
              <img src="/financials-chart-5.png" alt="Financials chart graphic - showing the breakdown of how much the CU foundation transferred to CU last fiscal year by percentage, totalling $209 million" width="1446" height="1172" />
            </div>
            <div className="financials-section-content">
              <h3>$209 million</h3>
              <p className="body-text-lg">That’s how much the CU Foundation transferred to CU last fiscal year to support a variety of people, place and programs on our campuses. Here’s where that support went.</p>
            </div>
          </section>

          <section className="financials-section financials-section-11 text-center">
            <h3>
              <a className="financials-section-11-textlink"  href="https://essential.cu.edu/r/index.html?doc=onward2020-pdf" target="_blank">
                See our audited financials from fiscal year 2020
              </a>
            </h3>
            <br />
            <div className="text-center">
              <a className="btn"  href="https://essential.cu.edu/r/index.html?doc=onward2020-pdf" target="_blank">
                Download here
              </a>
            </div>
          </section>

        </div>

      </Layout>
    </>
  );
}
