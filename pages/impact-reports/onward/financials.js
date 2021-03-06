import React, {useEffect} from "react";
import Head from "next/head";
import Layout from "../../../components/impact-reports/onward/global/Layout";

export default function Financials() {

  useEffect(() => {
    // This should be done on the server, but Heroku's internal networking makes it difficult.
    if (typeof window !== 'undefined' && window.location.host === 'essential.cu.edu' && window.location.protocol !== 'https:') {
      window.location.href = 'https://' + window.location.host + window.location.pathname + window.location.search;
    }
  });

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
            <img src="https://res.cloudinary.com/hs9mwpicm/image/upload/c_scale,f_auto,fl_lossy,q_auto,h_516,w_1256/v1614625736/ir-20/financials/financials-header_ldjcop.png" 
                 alt="Financials graphic - painterly hand pointing upwards, graphs, shapes" 
                 width="1256" 
                 height="516" />
            <div className="financials-container">
              <h1>Your generosity is an investment</h1>
              <hr />
              <h2>2020 fiscal year financials</h2>
              <p className="body-text-lg">You give to what matters to you — deeply, personally, meaningfully — to make a better world. At CU, we believe donors like you support your passions because you want tomorrow to be better than today.</p>
              <p className="body-text-lg"><strong>Thank you for supporting what’s important to you.</strong><br />Here's how you made a difference in fiscal year 2020.</p>
            </div>
          </section>

          <section className="financials-section financials-section-1">
            <div className="financials-section-content">
              <h3>$455.9 million <span className="text-light">given last year</span></h3>
              <p className="body-text-lg">You committed to improving lives. Year after year, your gifts add up to create substantial and enduring solutions to our biggest challenges. The numbers tell just part of the story, however. It’s the impact you have that resonates.</p>
            </div>
            <div className="financials-section-image">
              <img className="financials-fillgraphic" 
                src="https://res.cloudinary.com/hs9mwpicm/image/upload/c_scale,f_auto,fl_lossy,q_auto,h_800,w_800/v1614626326/ir-20/financials/financials-fillgraphic-1_xuuorb.png" 
                alt="Financials graphic - open hands holding a heart" 
                width="800" 
                height="800" />
            </div>
          </section>

          <section className="financials-section financials-section-2">
            <div className="financials-section-image">
              <img src="https://res.cloudinary.com/hs9mwpicm/image/upload/c_scale,f_auto,fl_lossy,q_auto,h_1400,w_1232/v1614626326/ir-20/financials/financials-bodygraphic-2_om0sb6.png" 
                alt="Financials graphic - woman looking upwards with rocket graphic and arrow line pointing up" 
                width="1232" 
                height="1400" />
            </div>
            <div className="financials-section-content">
              <h3>55,450 <span className="text-light">gifts</span></h3>
              <p className="body-text-lg">Your generosity drives that impact: bright futures for students, awe-inspiring discovery, innovative health care and a commitment to the common good. Last year, you gave: </p>
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
              <p className="body-text-lg">You also rose to meet the challenge in a year unlike any other. You are stepping up as we face new hardships caused by COVID-19 and the economic downturn. And you’re standing together with those who fight for social justice.</p>
              <h3>$3.3 million</h3>
              <p className="body-text-lg">How much <strong>1,986 donors</strong> gave to COVID-19 and emergency relief efforts from March 1 to June 30</p>
              <h3>$11.8 million</h3>
              <p className="body-text-lg">How much <strong>128 donors</strong> gave to diversity, equity and inclusion efforts from January 1 to June 30</p>
            </div>
            <div className="financials-section-image">
              <img className="financials-fillgraphic" 
                src="https://res.cloudinary.com/hs9mwpicm/image/upload/c_scale,f_auto,fl_lossy,q_auto,h_800,w_800/v1614626326/ir-20/financials/financials-fillgraphic-2_z0w17p.png" 
                alt="Financials graphic - hands holding over a circle" 
                width="800" 
                height="800" />
            </div>
          </section>

          <hr />

          <section className="financials-section financials-section-4">
            <div className="financials-section-image">
              <img src="https://res.cloudinary.com/hs9mwpicm/image/upload/c_scale,f_auto,fl_lossy,q_auto,h_1000,w_1234/v1614626326/ir-20/financials/financials-chart-1_jz6rnw.png" 
                alt="Financials chart graphic - showing 9 out of 10 present boxes small, 1 large box" 
                width="1234" 
                height="1000" />
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
              <img className="financials-fillgraphic" 
                src="https://res.cloudinary.com/hs9mwpicm/image/upload/c_scale,f_auto,fl_lossy,q_auto,h_800,w_800/v1614626326/ir-20/financials/financials-fillgraphic-3_ain4xr.png" 
                alt="Financials graphic - people standing with raised arms" 
                width="800" 
                height="800" />
            </div>
          </section>

          <section className="financials-section financials-section-6">
            <div className="financials-section-content">
              <h2 className="h1 text-center">You’re looking ahead</h2>
              <hr />
              <p className="body-text-lg">
                You give with an eye on the future to create solutions tomorrow for the challenges we face today. Endowments are investments in that future. They’re gifts that support CU forever because they generate reliable support for generations to come. CU’s collective endowment is made up of thousands of individual endowments, and just like a current gift, an endowment has a specific purpose determined by the donor: It could be a scholarship that’s awarded year after year, or support to attract a sought-after faculty chair or the creation of a mental health and wellness program.
              </p>
            </div>
          </section>

          <section className="financials-section financials-section-7">
            <div className="financials-section-content">
              <h3>$1.52 billion</h3>
              <p className="body-text-lg">CU’s endowment is valued at $1.52 billion, as of June 30. Here’s how the collective value of the endowment has grown in recent years.</p>
              <p className="body-text-lg">
                <strong>140</strong> new endowments were created last fiscal year<br />  
                <strong>$75 million</strong> was given in new endowment support<br /> 
                <strong>3,029</strong> total endowments at CU have an enduring impact 
              </p>
            </div>
            <div className="financials-section-image">
              <img src="https://res.cloudinary.com/hs9mwpicm/image/upload/c_scale,f_auto,fl_lossy,q_auto,h_1173,w_1447/v1614626326/ir-20/financials/financials-chart-2_vgl9lr.png" 
              alt="This is a bar chart that shows the value of the CU endowment by year. Here are the values: $1.09 billion for 2015, $1.06 billion for 2016, $1.22 billion for 2017, $1.36 billion for 2018, $1.45 billion for 2019 and $1.52 billion for 2020." 
              width="1447" 
              height="1173" />
            </div>
          </section>

          <hr />

          <section className="financials-section financials-section-8">
            <div className="financials-section-image">
              <h2 className="financials-hide-large">How the endowment is invested</h2>
              <img src="https://res.cloudinary.com/hs9mwpicm/image/upload/c_scale,f_auto,fl_lossy,q_auto,h_1172,w_1446/v1614626326/ir-20/financials/financials-chart-3_ikkvs4.png" 
                alt="This is a chart that shows how the LTIP is invested in asset classes. 46.3% for global public equities, $24.7% for global private capital, 13.1% for global hedge funds, 8.7% for real assets and 7.2% for fixed income and cash." 
                width="1446" 
                height="1172" />
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
              <img src="https://res.cloudinary.com/hs9mwpicm/image/upload/c_scale,f_auto,fl_lossy,q_auto,h_1172,w_1447/v1614626326/ir-20/financials/financials-chart-4_vttceo.png" 
                alt="This is a dual bar chat that compares the LTIP and benchmark returns. Here are the percentage returns: 3 year for LTIP is 7.2%, 3 year for benchmark is 6.2%; 5 year for LTIP is 7.9%, 5 year for benchmark is 7.5%; 10 year for LTIP is 8.4%, 10 year for benchmark is 8.9%; 15 year for LTIP is 7.4%, 15 year for benchmark is 6.1%." 
                width="1447" 
                height="1172" />
            </div>
          </section>

          <hr />

          <section className="financials-section financials-section-10">
            <div className="financials-section-image">
              <img src="https://res.cloudinary.com/hs9mwpicm/image/upload/c_scale,f_auto,fl_lossy,q_auto,h_1172,w_1447/v1614626326/ir-20/financials/financials-chart-5_eadxx8.png" 
              alt="This is a waffle chart that shows where support from the CU Foundation to CU goes, by percentage. Academic Support 36%; Capital Projects 12%; Research 12%; Scholarships 12%; Advancement support 12%; Chairs, Professorships and Other Faculty Support 10%; Public Service, Administration, Library and Other Support 5%; and Athletics 1%" 
              width="1446" 
              height="1172" />
            </div>
            <div className="financials-section-content">
              <h3>$209 million</h3>
              <p className="body-text-lg">That’s how much the CU Foundation transferred to CU last fiscal year to support a variety of people, places and programs on our campuses. Here’s where that support went.</p>
            </div>
          </section>

          <section className="financials-section financials-section-11 text-center">
            <h3>
              <a className="financials-section-11-textlink"  href="https://essential.cu.edu/r/index.html?doc=onward2020-pdf" target="_blank" rel="noreferrer">
                See our audited financials from fiscal year 2020
              </a>
            </h3>
            <br />
            <div className="text-center">
              <a className="btn"  href="https://essential.cu.edu/r/index.html?doc=onward2020-pdf" target="_blank" rel="noreferrer">
                Download here
              </a>
            </div>
          </section>

        </div>

      </Layout>
    </>
  );
}
