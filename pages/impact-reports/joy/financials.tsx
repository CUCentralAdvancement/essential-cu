import {useWindowSize} from "usehooks-ts";
import Head from "next/head";
import Layout from "../../../components/impact-reports/joy/Layout";
import Image from "../../../components/impact-reports/joy/Image";
import {ResponsiveBarChart, ResponsiveGroupedBarChart} from "../../../components/impact-reports/joy/BarChart";
import ButtonLink from "../../../components/impact-reports/joy/ButtonLink";
import NumericStat from "../../../components/impact-reports/joy/NumericStat";
import SocialLinks from "../../../components/impact-reports/joy/SocialLinks";
import {twConfig} from '../../../data/impact-reports/joy/base';


export default function Financials() {
  const {width} = useWindowSize();
  return (
    <>
      <Head>
        <title>University of Colorado 2021 Donor Impact Report Financials</title>
        <meta property="og:url" content={`https://essential.cu.edu/impact-reports/joy/financials`}/>
        <meta property="og:type" content="article"/>
        <meta property="og:title" content="University of Colorado 2021 Donor Impact Report Financials"/>
        <meta property="og:description" content="Fill it in."/>
        <meta property="og:image" content="fill in"/>
        <meta property="twitter:title" content="University of Colorado 2021 Donor Impact Report Financials"/>
        <meta property="twitter:description" content="fill in"/>
        <meta property="twitter:image" content="fill in"/>
        <meta property="twitter:card" content="summary_large_image"/>
      </Head>
      <Layout>
        <div className={"space-y-12 lg:spacy-y-16"}>

          <div className={"flex flex-col lg:flex-row lg:space-x-8 pb-6"}>
            <Image url={"/assets/ir21/circles-pic.png"} alt={"Financials image."} sx={"lg:w-3/5"}/>
            <div className={"lg:w-2/5 px-6 lg:px-0"}>
              <div className={"flex flex-col h-full lg:justify-center md:w-3/4"}>
                <h1 className={"pt-12 lg:py-12 text-30 lg:text-58 text-center"}>
                  <span className={"font-bold"}>Philanthropy is transformative</span> fueling passion, motivation, and joy
                </h1>
              </div>
            </div>
          </div>

          <div className={"flex flex-col space-y-8 mx-4 lg:text-center md:max-w-screen-md lg:mx-auto"}>
            <h2 className={"text-25 lg:text-50"}>2021 fiscal year financials</h2>
            <p className={"lg:text-lg"}>
              When donors like you put good into the world, it ripples outward and magnifies exponentially, transforming communities, nations and the world.
              <span className={"font-bold"}>Thank you for your generosity, vision and intent to create more joy in the world.</span> 2021 was a year of breakthroughs.
            </p>
            <p className={"lg:text-lg"}>
              Here’s how your contributions made an impact.
            </p>
          </div>

          <div className={"grid grid-cols-1 lg:grid-cols-2 lg:space-x-8 lg:max-w-screen-xl mx-4 lg:mx-auto" +
          " place-items-center"}>
            <div className={"order-2 lg:order-1"}>
              <h3 className={"font-bold text-xl lg:text-38 text-center lg:text-left pb-4"}>
                CU’s endowment is now valued at $2.12 billion
              </h3>
              <p className={"lg:text-lg"}>
                Your generosity has created an incredible legacy for generations to come. Thousands of donors in
                Colorado and beyond have invested in what they believe in, such as a scholarship that is awarded
                to students year after year, or funds to attract world-class faculty, or the creation of a program
                to train fellows in critical <span className={"text-green-500 italic"}>doctor-patient communication skills</span>. And for the first
                time, the collective value of individual endowments at CU has surpassed $2 billion, thanks to a
                historic investment return and generous philanthropic contributions from donors.
              </p>
            </div>
            <img src={"/assets/ir21/circles-pic.png"} alt={"Cirlces"} className={"order-1 lg:order-2 lg:pl-4"}/>
          </div>

          <div className={"grid grid-cols-1 lg:grid-cols-2 lg:space-x-8 lg:max-w-screen-xl mx-4 lg:mx-auto" +
          " place-items-center"}>
            <img src={"/assets/ir21/circles-pic.png"} alt={"Cirlces"} className={"lg:pr-4"}/>
            <div className={""}>
              <h3 className={"font-bold text-xl lg:text-38 text-center lg:text-left pb-4"}>
                36.83% Return on Investment
              </h3>
              <p className={"lg:text-lg"}>
                The CU Foundation’s investment strategy accelerates your generosity because it results in exceptional
                returns. And that means more support for scholarships, research and attracting and retaining talented
                faculty. Our goal is to maximize returns on that investment while effectively managing risk. CU’s Long
                Term Investment Pool, in which CU’s endowments are invested, returned nearly 37% in fiscal year 2021
                and is now valued at $2.12 billion. It continued to outperform the policy benchmark, which returned 30.51%.
              </p>
            </div>
          </div>

          <div className={"grid grid-cols-1 lg:grid-cols-2 lg:space-x-8 lg:max-w-screen-xl mx-4 lg:mx-auto" +
          " place-items-center"}>
            <div className={"order-2 lg:order-1"}>
              <h3 className={"font-bold text-xl lg:text-38 text-center lg:text-left pb-4"}>
                $371.2 million given last year
              </h3>
              <p className={"lg:text-lg"}>
                Every dollar you give creates a positive impact. That might support <span className={"text-green-500 italic"}>a new assistive communication
              device for a non-speaking patient</span>, or a scholarship that opens doors for a <span className={"text-green-500 italic"}>first-generation college
              student</span>, or a chance for a young actor to <span className={"text-green-500 italic"}>share Shakespeare</span> with elementary school students across
                Colorado.
              </p>
            </div>
            <img src={"/assets/ir21/circles-pic.png"} alt={"Cirlces"} className={"order-1 lg:order-2 lg:pl-4"}/>
          </div>

          <div className={"flex flex-col space-y-8 mx-4 lg:text-center md:max-w-screen-md lg:mx-auto"}>
            <h2 className={"text-25 lg:text-50 text-center"}><span className={"font-bold"}>53,485</span> gifts
            </h2>
            <p className={"lg:text-lg"}>
              Every gift is a good intention that was followed through. Big or small, each donation creates better
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
          <div className={"flex flex-col space-y-8 mx-4 lg:text-center md:max-w-screen-md lg:mx-auto"}>
            <h3 className={"text-25 lg:text-50 text-center font-bold"}>When thousands invest in CU, their impact is mighty</h3>
          </div>

          <div className={"grid grid-cols-1 lg:grid-cols-2 lg:max-w-screen-xl mx-4 lg:mx-auto" +
          " "}>
            <div className={"lg:space-y-8"}>
              <img src={"/assets/ir21/circles-pic.png"} alt={"Cirlces"} className={"order-1 lg:order-2" +
              " lg:pr-4"}/>
              <h3 className={"text-xl lg:text-38 text-center pb-4 lg:w-3/4 lg:mx-auto"}>
                <span className={"font-bold"}>92%</span> of gifts were less than <span className={"font-bold"}>$2,500</span>
              </h3>
            </div>
            <div className={"lg:space-y-8"}>
              <img src={"/assets/ir21/circles-pic.png"} alt={"Cirlces"} className={"order-1 lg:order-2" +
              " lg:pl-4"}/>
              <h3 className={"text-xl lg:text-38 text-center pb-4 lg:w-3/4 lg:mx-auto"}>
                The average size of a gift was <span className={"font-bold"}>$6,472</span>
              </h3>
            </div>
          </div>

          <div className={"flex flex-col space-y-8 mx-4 lg:text-center md:max-w-screen-md lg:mx-auto" +
          " text-center"}>
            <h3 className={"text-25 lg:text-50"}><span className={"font-bold"}>29,294</span> donors like you
            </h3>
            <p className={"lg:text-lg"}>
              Gave to help CU create change and positive impact. Averaging 149 gifts a day, many of you made
              the decision to give and give again.
            </p>
            <h4 className={"font-bold lg:text-xl"}>Last year we received gifts from:</h4>
            <div>
              <span className={"lg:text-xl text-red-500 font-bold"}>
                14,676
              </span>
              <br/>
              alumni
            </div>
            <div>
              <span className={"lg:text-xl text-yellow-500 font-bold"}>
                9,102
              </span>
              <br/>
              friends
            </div>
            <div>
              <span className={"lg:text-xl text-purple-500 font-bold"}>
                3,091
              </span>
              <br/>
              parents
            </div>
            <div>
              <span className={"lg:text-xl text-green-500 font-bold"}>
                2,047
              </span>
              <br/>
              corporations and foundations
            </div>
            <div>
              <span className={"lg:text-xl text-blue-500 font-bold"}>
                1,018
              </span>
              <br/>
              faculty and staff
            </div>
          </div>

          <div className={"flex flex-col space-y-8 mx-4 lg:text-center md:max-w-screen-md lg:mx-auto"}>
            <img src={"/assets/ir21/circles-pic.png"} alt={"Cirlces"} className={""}/>
            <h2 className={"text-28 lg:text-50 font-bold text-center"}>The meaning of legacy</h2>
            <p className={"lg:text-lg"}>
              An endowment is a gift that creates returns for tomorrow. An investment for the future, endowments
              are gifts with longitudinal impact, creating positive change year after year.
            </p>
            <p className={"lg:text-lg"}>
              The collective value of CU’s endowments grew by nearly 40% in the last fiscal year. Here’s how
              the endowment has grown in recent years:
            </p>
          </div>

          <div className={"flex flex-col lg:flex-row place-items-center gap-8 lg:max-w-screen-xl lg:mx-auto"}>
            <div className={"chart-container the-bar-chart"}>
              <ResponsiveBarChart data={endowmentByYear}/>
            </div>
            <div className={"chart-text-container"}>
              <h3 className={"font-bold text-xl"}>Last year we received gifts from:</h3>
              <p>
                <span className={"pr-2 md:pr-0 text-xl md:text-38 text-red-500 font-bold"}>130</span>
                {width > twConfig.theme.screens.md && <br/>}
                new endowments were created in the last fiscal year
              </p>
              <p>
                <span className={"pr-2 md:pr-0 text-xl lg:text-38 text-yellow-500 font-bold"}>3,159</span>
                {width > twConfig.theme.screens.md && <br/>}
                total endowments at CU are making a lasting impact
              </p>
              <p>
                <span className={"pr-2 md:pr-0 text-xl lg:text-38 text-purple-500 font-bold"}>$76.4 million</span>
                {width > twConfig.theme.screens.md && <br/>}
                was given in endowment support
              </p>
            </div>
          </div>

          <div className={"flex flex-col lg:flex-row place-items-center gap-8 lg:max-w-screen-xl lg:mx-auto"}>
            <div className={"chart-text-container"}>
              <h3 className={"font-bold text-xl lg:text-38 text-center"}>How is CU’s endowment invested?</h3>
              <p>
                The endowment is invested in a diversified portfolio with a target of stable, long-term growth.
                In fiscal year 2021, the Long-Term Investment Pool (LTIP) allocation was:
              </p>
            </div>
            <div className={"chart-container flex flex-col place-items-center"}>
              {/*<PieChart data={transferToCU}/>*/}
              <Image url={"https://res.cloudinary.com/hs9mwpicm/image/upload/c_scale,f_auto,fl_lossy,h_516,q_auto,w_576/v1634948333/ir21/financials/endowment-chart_nbtcv8.png"}
                     alt={"Funds transferred to CU"}
                     sx={"the-pie-chart"}/>
              <div className={"grid grid-cols-2 gap-2 h-2/5 w-10/12 md:w-2/3 pt-4 text-base lg:text-18" +
              " font-bold"}>
                {endowmentAllocation.map((el, ind) => {
                  return (
                    <div key={ind} className={"flex flex-row items-center"}>
                      <div style={{background: el.fill}} className={"chart-legend-circle"}/>
                      <span className={"ml-2"}>{el.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className={"flex flex-col lg:flex-row place-items-center gap-8 lg:max-w-screen-xl lg:mx-auto"}>
            <div className={"chart-container the-bar-chart order-2 lg:order-1"}>
              <ResponsiveGroupedBarChart data={returnsByYear}/>
            </div>
            <div className={"chart-text-container order-1 lg:order-2"}>
              <h3 className={"text-center lg:text-38"}>Investment return vs. policy benchmark</h3>
              <p className={"font-bold"}>
                Our Long-Term Investment Pool consistently outperforms policy benchmarks.
              </p>
              <p>
                The LTIP’s longer-term results show a consistent track record of investment growth. Here is the
                recent performance of the LTIP against the policy benchmark
              </p>
            </div>
          </div>

          <div className={"flex flex-col lg:flex-row place-items-center gap-8 lg:max-w-screen-xl" +
          " lg:mx-auto"}>
            <div className={"chart-text-container"}>
              <h3 className={"font-bold text-xl lg:text-38 text-center"}>$211.8 million</h3>
              <p>
                That’s how much the CU Foundation transferred to CU last fiscal year:
              </p>
            </div>
            <div className={"chart-container flex flex-col place-items-center"}>
              {/*<PieChart data={transferToCU}/>*/}
              <Image url={"https://res.cloudinary.com/hs9mwpicm/image/upload/c_scale,f_auto,fl_lossy,h_518,q_auto,w_576/v1634948333/ir21/financials/transfer-chart_lvlk3s.png"}
                     alt={"Funds transferred to CU"}
                     sx={"the-pie-chart"}/>
              <div className={"grid grid-cols-2 gap-2 h-2/5 w-10/12 md:w-2/3 pt-4 text-base" +
              " lg:text-18 font-bold"}>
                {transferToCU.map((el, ind) => {
                  return (
                    <div key={ind} className={"flex flex-row items-center"}>
                      <div style={{background: el.fill}}
                           className={"chart-legend-circle"}/>
                      <span className={"ml-2"}>{el.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className={"flex flex-row sm:max-w-screen-sm mx-4 sm:mx-auto bg-white p-4 rounded-tr" +
          " rounded-br" +
          " border border-gold border-l-8 border-t-2 border-r-2 border-b-2"}>
            <div className={"w-1/4 lg:w-1/8"}>
              icon
            </div>
            <div className={"w-3/4 lg:w-7/8 space-y-8"}>
              <h2 className={"font-bold underline"}>Download our Financials</h2>
              <p>For more detail, see our audited financials for fiscal year 2021</p>
              <ButtonLink href={"/"}>Download PDF</ButtonLink>
            </div>
          </div>

          <SocialLinks variant={"centered"}/>

        </div>
      </Layout>
    </>

  )
}

const endowmentByYear = [
  {
    year: 2016,
    value: 1.06,
    fill: '#000',
  },
  {
    year: 2017,
    value: 1.22,
    fill: '#000',
  },
  {
    year: 2018,
    value: 1.36,
    fill: '#000',
  },
  {
    year: 2019,
    value: 1.45,
    fill: '#000',
  },
  {
    year: 2020,
    value: 1.52,
    fill: '#000',
  },
  {
    year: 2021,
    value: 2.12,
    fill: '#cfb87c',
  },
];

const endowmentAllocation = [
  {
    value: 48,
    fill: '#cfb87c',
    name: 'Global Public Equities'
  },
  {
    value: 26,
    fill: '#f4ead0',
    name: 'Global Private Capital'
  },
  {
    value: 14,
    fill: '#000',
    name: 'Global Hedge Funds'
  },
  {
    value: 8,
    fill: '#595b54',
    name: 'Real Assets'
  },
  {
    value: 4,
    fill: '#9ca0a2',
    name: 'Global Public Equities'
  },
];

const returnsByYear = [
  {
    year: '3 year',
    LTIP: 14.9,
    "Policy Benchmark": 13.0,
  },
  {
    year: '7 year',
    LTIP: 10.1,
    "Policy Benchmark": 8.7,
  },
  {
    year: '10 year',
    LTIP: 10.0,
    "Policy Benchmark": 9.3,
  },
  {
    year: '15 year',
    LTIP: 7.4,
    "Policy Benchmark": 7.3,
  },
];

const transferToCU = [
  {
    value: 32,
    fill: '#cfb87c',
    name: 'Academic Support'
  },
  {
    value: 14,
    fill: '#f4ead0',
    name: 'Research'
  },
  {
    value: 14,
    fill: '#7d714a',
    name: 'Advancement Support'
  },
  {
    value: 13,
    fill: '#595a55',
    name: 'Scholarships'
  },
  {
    value: 10,
    fill: '#7d7f81',
    name: 'Chairs, Professorships, and other faculty support'
  },
  {
    value: 9,
    fill: '#bfbfbf',
    name: 'Public Service, Administration, Library, and Other Support'
  },
  {
    value: 7,
    fill: '#000',
    name: 'Capital Projects'
  },
  {
    value: 1,
    fill: '#fff',
    name: 'Athletics'
  },
];
