import Head from "next/head";
import Link from "next/link";
import Layout from "../../../components/impact-reports/joy/Layout";
import Image from "../../../components/impact-reports/joy/Image";
import {EndowmentByYear, ReturnsByYear} from "../../../components/impact-reports/joy/BarChart";
import {endowmentAllocation, transferToCU} from "../../../data/impact-reports/joy/PieChart";
import DownloadIcon from "../../../components/impact-reports/joy/DownloadIcon";
import NumericStat from "../../../components/impact-reports/joy/NumericStat";
import SocialLinks from "../../../components/impact-reports/joy/SocialLinks";

export default function Financials() {
  return (
    <>
      <Head>
        <title>University of Colorado 2021 Donor Impact Report Financials</title>
        <meta property="og:url" content={`https://essential.cu.edu/impact-reports/joy/financials`}/>
        <meta property="og:type" content="article"/>
        <meta property="og:title" content="University of Colorado 2021 Donor Impact Report Financials"/>
        <meta property="og:description" content=""/>
        <meta property="og:image" content="https://res.cloudinary.com/hs9mwpicm/image/upload/c_scale,f_auto,h_1200,q_auto,w_1600/v1635371541/ir21/financials/Fin-hero-v2_2_vebbr3.png"/>
        <meta property="twitter:title" content="University of Colorado 2021 Donor Impact Report Financials"/>
        <meta property="twitter:description" content=""/>
        <meta property="twitter:image" content="https://res.cloudinary.com/hs9mwpicm/image/upload/c_scale,f_auto,h_1200,q_auto,w_1600/v1635371541/ir21/financials/Fin-hero-v2_2_vebbr3.png"/>
        <meta property="twitter:card" content="summary_large_image"/>
      </Head>
      <Layout>
        <div className={"space-y-16 lg:space-y-24 pb-8 lg:pb-16"}>

          <div className={"flex flex-col lg:flex-row lg:space-x-8 pb-6 mx-4"}>
            <Image url={"https://res.cloudinary.com/hs9mwpicm/image/upload/c_scale,f_auto,h_1200,q_auto,w_1600/v1635371541/ir21/financials/Fin-hero-v2_2_vebbr3.png"}
                   width={'1600'}
                   height={'1200'}
                   alt={"A red heart is held in a yellow hand, palm facing up. There is a green and purple pie chart and bronze bar chart backgrounded behind the hand. An arrow curves upward from behind the heart towards the top right of the image. Multicolored confetti is scattered across the image."}
                   sx={"lg:w-3/5"}/>
            <div className={"lg:w-2/5 px-4"}>
              <div className={"flex flex-col h-full lg:justify-center"}>
                <h1 className={"pt-12 lg:py-12 text-30 lg:text-58 text-center lg:text-left"}>
                  <span className={"font-bold"}>Philanthropy is transformative.</span> It fuels passion, motivation and joy.
                </h1>
              </div>
            </div>
          </div>

          <div className={"flex flex-col space-y-8 mx-4 md:max-w-screen-md md:mx-auto"}>
            <h2 className={"text-25 lg:text-50 text-center"}>2021 fiscal year financials</h2>
            <p className={"lg:text-lg lg:text-center"}>
              When donors like you put good into the world, it ripples outward and magnifies exponentially, transforming communities, nations and the world.&nbsp;
              <span className={"font-bold"}>Thank you for your generosity, vision and intent to create more joy in the world.</span> 2021 was a year of breakthroughs.
            </p>
            <p className={"lg:text-lg lg:text-center"}>
              Here’s how your contributions made an impact.
            </p>
          </div>

          <div className={"homepage-two-col"}>
            <div className={"order-2 lg:order-1"}>
              <h3 className={"font-bold text-xl lg:text-38 text-center py-4"}>
                CU’s endowment is now valued at $2.12 billion
              </h3>
              <p className={"lg:text-lg text-left max-w-prose"}>
                Your generosity has created an incredible legacy for generations to come. Tens of thousands of donors in
                Colorado and beyond have invested in what they believe in, such as a scholarship that is awarded
                to students year after year, or funds to attract world-class faculty, or the creation of a program
                to train fellows in critical&nbsp;
                <Link href="/impact-reports/joy/stories/[slug]"
                      as={'/impact-reports/joy/stories/joy-of-an-honest-conversation'}>
                  <a className={"a-link"}>doctor-patient communication skills</a>
                </Link>.
                And for the first time, the collective value of individual endowments at CU has surpassed $2
                billion, thanks to a historic investment return and generous philanthropic contributions from donors.
              </p>
            </div>
            <img src={"https://res.cloudinary.com/hs9mwpicm/image/upload/c_scale,f_auto,h_1200,q_auto,w_1600/v1635371541/ir21/financials/2B-endowment_ag4rmz.png"}
                 width={'1600'}
                 height={'1200'}
                 alt={"A snowy mountain peak with the dollar amount $2.12B printed at its base in watermark. There is a red flag at the top of the mountain with exploding confetti around it, backgrounded against a five-pointed golden star."}
                 className={"order-1 lg:order-2 lg:pl-4"}/>
          </div>

          <div className={"homepage-two-col"}>
            <img src={"https://res.cloudinary.com/hs9mwpicm/image/upload/c_scale,f_auto,h_1200,q_auto,w_1600/v1635371541/ir21/financials/ROI_rugjqh.png"}
                 width={'1600'}
                 height={'1200'}
                 alt={"A giant sunflower with a halo of light and green leaves dominates the top" +
                 " two-thirds of the picture. At the bottom third of the image are stacks of purple coins." +
                 " There are two human figures, one is atop a white ladder, placing a coin at the top of the pile. The other is pushing a wheel barrow. Confetti is scattered throughout the image."}
                 className={"lg:pr-4"}/>
            <div className={""}>
              <h3 className={"text-xl lg:text-38 text-center py-4"}>
                <span className={"font-bold"}>36.83%</span> return on investment
              </h3>
              <p className={"lg:text-lg text-left max-w-prose"}>
                The CU Foundation’s investment strategy accelerates your generosity because it results in exceptional
                returns. And that means more support for scholarships, research and attracting and retaining talented
                faculty. Our goal is to maximize returns on that investment while effectively managing risk. CU’s Long
                Term Investment Pool, in which CU’s endowments are invested, returned nearly 37% in fiscal year 2021
                and is now valued at $2.12 billion. It continued to outperform the policy benchmark, which returned 30.51%.
              </p>
            </div>
          </div>

          <div className={"pb-4 bg-white"}>
            <div className={"bg-light-yellow rounded-b-lg shadow-bottom pb-12 lg:px-0"}>
              <div className={"homepage-two-col"}>
                <div className={"order-2 lg:order-1"}>
                  <h3 className={"text-xl lg:text-38 text-center py-4"}>
                    <span className={"font-bold"}>$371.2 million</span> given last year
                  </h3>
                  <p className={"lg:text-lg text-left max-w-prose"}>
                    Every dollar you give creates a positive impact. It might support clinical assessments for&nbsp;
                    <Link href="/impact-reports/joy/stories/[slug]"
                          as={'/impact-reports/joy/stories/joy-of-independence'}>
                      <a className={"a-link"}>non-speaking patients</a>
                    </Link>, or a scholarship that opens doors for&nbsp;
                    <Link href="/impact-reports/joy/stories/[slug]"
                          as={'/impact-reports/joy/stories/joy-of-community'}>
                      <a className={"a-link"}>first-generation college students</a>
                    </Link>,
                    or a chance young actors to&nbsp;
                    <Link href="/impact-reports/joy/stories/[slug]"
                          as={'/impact-reports/joy/stories/joy-of-theater'}>
                      <a className={"a-link"}>share Shakespeare</a>
                    </Link>
                    &nbsp;with elementary school students across Colorado.
                  </p>
                </div>
                <img src={"https://res.cloudinary.com/hs9mwpicm/image/upload/f_auto,q_auto/v1634939581/ir21/homepage/Legacy_q93rek.png"}
                     alt={"An illustration that frames the a man sitting before a laptop, the laptop casts a light that shines towards his face. In the background are sketches representing research and discovery, including books, lightbulbs, graphs, and formulas."}
                     className={"order-1 lg:order-2 lg:pl-4"}/>
              </div>
            </div>
          </div>

          <div className={"bg-gradient-to-b from-white to-light-yellow financials-remove-y-spacing"}>

            <div className={"flex flex-col space-y-8 py-8 mx-4 lg:text-center md:max-w-screen-md md:mx-auto"}>
              <h2 className={"text-25 lg:text-50 text-center"}>
                <span className={"font-bold"}>54,543</span> gifts
              </h2>
              <p className={"lg:text-lg"}>
                Every gift is a good intention that was followed through. Big or small, each contribution creates better
                outcomes for students, drives discovery and promotes innovative approaches to health care. Last year, you gave:
              </p>
            </div>

            <div className={"numeric-stats-grid"}>
              <NumericStat number={53} image={{
                url: 'https://res.cloudinary.com/hs9mwpicm/image/upload/f_auto,fl_lossy,q_auto/v1634939581/ir21/homepage/Scholarship-icon-400px_plgsuv.png',
                alt: 'Graduation Cap'
              }} label="to expand opportunities for students through scholarships"/>
              <NumericStat image={{
                url: 'https://res.cloudinary.com/hs9mwpicm/image/upload/f_auto,q_auto/v1634939581/ir21/homepage/Research-icon-400px_nffsbi.png',
                alt: 'Telescope'
              }} number={127} label="to drive research and discovery"/>
              <NumericStat image={{
                url: 'https://res.cloudinary.com/hs9mwpicm/image/upload/f_auto,q_auto/v1634939582/ir21/homepage/Talent-icon-400px_sip0fc.png',
                alt: 'Trophy Star'
              }} number={28} label="to attract the best and brightest faculty to our campuses"/>
              <NumericStat image={{
                url: 'https://res.cloudinary.com/hs9mwpicm/image/upload/f_auto,q_auto/v1634939581/ir21/homepage/Health-icon-400px_pfucte.png',
                alt: 'Heart-care DNA'
              }} number={201} label="to transform health care and support lifesaving treatment"/>
            </div>
            <div className={"flex flex-col mx-4 lg:text-center md:max-w-screen-md md:mx-auto pt-16 pb-8"}>
              <h3 className={"text-25 lg:text-50 text-center font-bold"}>When you invest in CU, your impact is mighty</h3>
            </div>

            <div className={"grid grid-cols-1 lg:grid-cols-2 lg:max-w-screen-xl mx-4 lg:mx-auto"}>
              <div className={"lg:space-y-8"}>
                <img src={"https://res.cloudinary.com/hs9mwpicm/image/upload/c_scale,f_auto,h_1200,q_auto,w_1600/v1635371541/ir21/financials/92_of_gifts-1_l3mqfr.png"}
                     width={'1600'}
                     height={'1200'}
                     alt={"An illustration of two hands holding a square gift box wrapped in an orange ribbon. In the background is an illustrated pie chart indicating 92%."}
                     className={"order-1 lg:order-2 lg:pr-4"}/>
                <h3 className={"text-xl lg:text-38 text-center py-4 lg:w-3/4 lg:mx-auto"}>
                  <span className={"font-bold"}>92%</span> of gifts were less than <span className={"font-bold"}>$2,500</span>
                </h3>
              </div>
              <div className={"lg:space-y-8"}>
                <img src={"https://res.cloudinary.com/hs9mwpicm/image/upload/c_scale,f_auto,h_1200,q_auto,w_1600/v1635371541/ir21/financials/Avg-gift_o8tmcp.png"}
                     width={'1600'}
                     height={'1200'}
                     alt={"Two hands illustrated in pale green with the pointer fingers and thumbs touching to form a heart in the negative space. The heart is filled in pinkish red, there is multi-colored confetti against an orange background."}
                     className={"order-1 lg:order-2 lg:pl-4"}/>
                <h3 className={"text-xl lg:text-38 text-center py-4 lg:w-3/4 lg:mx-auto"}>
                  The average size of a gift was <span className={"font-bold"}>$6,806</span>
                </h3>
              </div>
            </div>

            <div className={"flex flex-col space-y-4 mx-4 lg:text-center md:max-w-screen-md md:mx-auto" +
            " text-center pt-8"}>
              <h3 className={"text-25 lg:text-50"}><span className={"font-bold"}>29,793</span> donors like you
              </h3>
              <p className={"lg:text-lg"}>
                Tens of thousands of donors helped CU create change and positive impact. Averaging 149 gifts a day, many of you made
                the decision to give and give again.
              </p>
              <h4 className={"font-bold lg:text-xl pt-4"}>Last year we received gifts from:</h4>
              <div>
              <span className={"text-xl md:text-38 font-bold"} style={{color: '#dd3f70'}}>
                14,676
              </span>
                <br/>
                alumni
              </div>
              <div>
              <span className={"text-xl md:text-38 font-bold"} style={{color: '#d94f29'}}>
                7,976
              </span>
                <br/>
                friends
              </div>
              <div>
              <span className={"text-xl md:text-38 font-bold"} style={{color: '#554082'}}>
                2,740
              </span>
                <br/>
                parents
              </div>
              <div>
              <span className={"text-xl md:text-38 font-bold"} style={{color: '#075e62'}}>
                2,047
              </span>
                <br/>
                corporations and foundations
              </div>
              <div>
              <span className={"text-xl md:text-38 font-bold"} style={{color: '#2a839c'}}>
                1,018
              </span>
                <br/>
                faculty and staff
              </div>
            </div>

          </div>

          <div className={"flex flex-col space-y-8 mx-4 md:max-w-screen-md md:mx-auto"}>
            <img src={"https://res.cloudinary.com/hs9mwpicm/image/upload/c_scale,f_auto,h_600,q_auto,w_1600/v1635371541/ir21/financials/Confetti-spacer_dvah5z.png"}
                 width={"1600"}
                 height={"600"}
                 alt={"Multicolored confetti in various shapes including stars, circles, squiggles, triangles, and hearts."}
                 className={""}/>
            <h2 className={"text-28 lg:text-50 font-bold text-center"}>The meaning of legacy</h2>
            <p className={"lg:text-lg max-w-prose"}>
              An endowment is a gift that creates returns for tomorrow. An investment for the future, endowments
              are gifts with longitudinal impact, creating positive change year after year.
            </p>
            <p className={"lg:text-lg max-w-prose"}>
              The collective value of CU’s endowments grew by nearly 40% in the last fiscal year. Here’s how
              the endowment has grown in recent years:
            </p>
          </div>

          <div className={"flex flex-col lg:flex-row place-items-center gap-8 lg:max-w-screen-xl" +
          " lg:mx-auto"}>
            <div className={"chart-container the-bar-chart"}>
              <EndowmentByYear/>
            </div>
            <div className={"chart-text-container sm:text-left md:text-center lg:text-left max-w-screen-md" +
            " mx-auto lg:mx-0"}>
              <h3 className={"font-bold text-xl"}>CU&apos;s endowment over time</h3>
              <p>
                <span className={"pr-2 lg:pr-0 text-xl md:text-38 font-bold inline md:block"}
                      style={{color: '#dd3f70'}}>130</span>
                new endowments were created in the last fiscal year
              </p>
              <p>
                <span className={"pr-2 lg:pr-0 text-xl lg:text-38 font-bold inline md:block"}
                      style={{color: '#d94f29'}}>3,159</span>
                total endowments at CU are making a lasting impact
              </p>
              <p>
                <span className={"pr-2 lg:pr-0 text-xl lg:text-38 font-bold inline md:block"}
                      style={{color: '#554082'}}>$76.4 million</span>
                was given in endowment support
              </p>
            </div>
          </div>

          <div className={"flex flex-col lg:flex-row place-items-center gap-8 lg:max-w-screen-xl lg:mx-auto"}>
            <div className={"chart-text-container"}>
              <h3 className={"font-bold text-xl lg:text-38 text-center"}>How is CU’s endowment invested?</h3>
              <p className={"max-w-prose mx-auto lg:mx-0"}>
                The endowment is invested in a diversified portfolio with a target of stable, long-term growth.
                In fiscal year 2021, the Long Term Investment Pool (LTIP) allocation was:
              </p>
            </div>
            <div className={"chart-container flex flex-col place-items-center"}>
              <Image url={"https://res.cloudinary.com/hs9mwpicm/image/upload/c_scale,f_auto,fl_lossy,h_516,q_auto,w_576/v1634948333/ir21/financials/endowment-chart_nbtcv8.png"}
                     alt={"Funds transferred to CU"}
                     sx={"the-pie-chart"}/>
              <div className={"grid grid-cols-2 gap-4 h-2/5 w-10/12 md:w-2/3 pt-4 text-legend lg:text-18" +
              " font-bold"}>
                {endowmentAllocation.map((el, ind) => {
                  return (
                    <div key={ind} className={"flex flex-row items-center"}>
                      <div style={{background: el.fill}} className={"chart-legend-circle flex-shrink-0"}/>
                      <span className={"ml-2"}>{el.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className={"flex flex-col lg:flex-row place-items-center gap-8 lg:max-w-screen-xl lg:mx-auto"}>
            <div className={"chart-container the-bar-chart order-2 lg:order-1"}>
              <ReturnsByYear/>
            </div>
            <div className={"chart-text-container order-1 lg:order-2"}>
              <h3 className={"text-center text-xl lg:text-38"}>Investment return vs. policy benchmark</h3>
              <p className={"font-bold max-w-prose mx-auto lg:mx-0"}>
                Our Long Term Investment Pool consistently outperforms policy benchmarks.
              </p>
              <p className={"max-w-prose mx-auto lg:mx-0"}>
                The LTIP’s longer-term results show a consistent track record of investment growth. Here is the
                recent performance of the LTIP against the policy benchmark.
              </p>
            </div>
          </div>

          <div className={"flex flex-col lg:flex-row place-items-center gap-8 lg:max-w-screen-xl" +
          " lg:mx-auto"}>
            <div className={"chart-text-container "}>
              <h3 className={"font-bold text-xl lg:text-38 text-center lg:text-left"}>$211.8 million</h3>
              <p className={"max-w-prose mx-auto lg:mx-0 text-center lg:text-left"}>
                That’s how much the CU Foundation transferred to CU last fiscal year.
              </p>
            </div>
            <div className={"chart-container flex flex-col place-items-center"}>
              {/*<PieChart data={transferToCU}/>*/}
              <Image url={"https://res.cloudinary.com/hs9mwpicm/image/upload/c_scale,f_auto,fl_lossy,h_518,q_auto,w_576/v1634948333/ir21/financials/transfer-chart_lvlk3s.png"}
                     alt={"Funds transferred to CU"}
                     sx={"the-pie-chart"}/>
              <div className={"grid grid-cols-2 gap-4 h-2/5 w-10/12 md:w-2/3 pt-4 text-legend" +
              " lg:text-18 font-bold mx-auto max-w-screen-md"}>
                {transferToCU.map((el, ind) => {
                  return (
                    <div key={ind} className={"flex flex-row items-center"}>
                      <div style={{background: el.fill}}
                           className={"chart-legend-circle flex-shrink-0"}/>
                      <span className={"ml-2"}>{el.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className={"flex flex-row sm:max-w-screen-sm mx-4 sm:mx-auto bg-white p-4 rounded-tr" +
          " rounded-br border border-dark-gold border-l-8 border-t-2 border-r-2 border-b-2"}>
            <div className={"w-1/4 lg:w-1/8"}>
              <div style={{height: '40px', width: '44px'}}>
                <DownloadIcon/>
              </div>
            </div>
            <div className={"w-3/4 lg:w-7/8 space-y-8"}>
              <a href="/r/index.html?doc=joy2021-pdf"
                 role={"button"}
                 aria-label={"Download the financials content in PDF format"}
                 target={"_blank"}
                 rel={"noreferrer"}>
                <h2 className={"font-bold underline"}>Download Our Financials</h2>
              </a>
              <p>For more details, see our audited financials for fiscal year 2021</p>
              <a href="/r/index.html?doc=joy2021-pdf"
                 role={"button"}
                 aria-label={"Download the financials content in PDF format"}
                 target={"_blank"}
                 rel={"noreferrer"}
                 className={"rounded-full py-3 px-6 shadow-md flex flex-row space-x-3 items-center w-max" +
                 " transform bg-gold font-bold text-base shadow hover:shadow-liddle hover:scale-105"}>
                <span>Download PDF</span>
              </a>
            </div>
          </div>

          <SocialLinks variant={"centered"}/>

        </div>
      </Layout>
    </>

  );
}

