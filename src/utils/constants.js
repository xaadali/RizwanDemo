import Link from "next/link";
import MyButton from "@/app/components/common/myButton";
import {
  slider1,
  slider2,
  slider3,
  slider4,
  daniyalPic,
  samiullahPic,
  danial2Pic,
  salmanPic,
  amirPic,
  uiUxChild,
  uiUxParent,
  sourcr,
  activePrime,
  evercare,
  reactJsImg,
  vueJsImg,
  awsImg,
  sourcrBg,
  girlComp,
  tScriptImg,
  laravelImg,
  jScriptImg,
  sForceImg,
  nextJsImg,
  mobileService,
  voltLand,
  benji,
  barterLoot,
  spookHost,
  projectsSectionBg
} from "./imagesUrl";
import {
  EmailMustered,
  LocationMustered,
  MobileAppIcon,
  MobileIcon,
  MobileMustered,
  QaIcon,
  StaffIcon,
  UiUx,
  UiUxIcon,
  WebApplicationIcon,
  WebDevelopmentIcon,
  WebIcon,
  WebSetting,
  MobileDev,
  UiIcon,
  StaffSerIcon,
  EcomWebIcon,
  TechnicalIcon,
  TestingIcon,
} from "./svgIcons";

export const carouselData = [
  {
    id: "1",
    title: "Innovation-Focused Technology Solutions Partner",
    animatedTextArray: ["GOAL", "IDEA", "AIM"],
    text: "Delivering high-performing, scalable, and secure business solutions for the web and mobile world.",
    image: slider1,
  },
  {
    id: "2",
    title: "Innovation-Focused Technology Solutions Partner",
    animatedTextArray: ["GOAL", "IDEA", "AIM"],
    text: "Delivering high-performing, scalable, and secure business solutions for the web and mobile world.",
    image: slider2,
  },
  {
    id: "3",
    title: "Innovation-Focused Technology Solutions Partner",
    animatedTextArray: ["GOAL", "IDEA", "AIM"],
    text: "Delivering high-performing, scalable, and secure business solutions for the web and mobile world.",
    image: slider3,
  },
  {
    id: "4",
    title: "Innovation-Focused Technology Solutions Partner",
    animatedTextArray: ["GOAL", "IDEA", "AIM"],
    text: "Delivering high-performing, scalable, and secure business solutions for the web and mobile world.",
    image: slider4,
  },
];

export const stacksCardsInfo = [
  {
    icon: WebIcon,
    title: "Web Applications",
    text: `We provide customized web solutions that propel your business toward success, offering tailored, innovative, and performance-driven digital solutions for your specific needs.`,
  },
  {
    icon: MobileIcon,
    title: "Mobile Applications",
    text: `Our cutting-edge mobile apps are built for a globally connected world, offering innovation, user-friendliness, and seamless functionality to enhance your digital presence.`,
  },
  {
    icon: UiUx,
    title: "UX/UI Solutions",
    text: `Our designs are more than visuals; they're engaging experiences that captivate your audience, combining creativity and usability for unforgettable interactions with your brand.`,
  },
];

export const teamCard = [
  {
    title: "Daniyal Awan",
    image: danial2Pic,
    jobPosition: "Project Manager/ Team Lead",
  },
  {
    title: "Sami ul Allah",
    image: samiullahPic,
    jobPosition: "Human resources manager",
  },
  {
    title: "Daniyal Ahmad",
    image: daniyalPic,
    jobPosition: "Senior Software Engineer",
  },
];
export const teamManager = [
  {
    id: "1",
    title: "Sulman Sabir",
    image: salmanPic,
    jobPosition: "CEO & Co-founder",
    chatLink: "",
    width: '250px',
    height: '370px',
    email: 'cyber.devworld@gmail.com',
    linkedinLink: "https://www.linkedin.com/in/salman-sabir/",
    lgwidth: 'ld',
    top: -88,
    right: -9,
  },
  {
    id: "2",
    title: "Amir Mughal",
    image: amirPic,
    jobPosition: "CTO & Co-Founder",
    chatLink: "",
    width: '400px',
    height: '350px',
    email: 'amir@devorbis.com',
    linkedinLink: "https://www.linkedin.com/in/amir-mughal-6028b111a/",
    lgheight:'322px',
  },
];

export const navigationTabs = [
  {name: 'HOME', link: '/', width: '40px'},
  {name: 'ABOUT US', link: '/about', width: '80px'},
  {name: 'SERVICES', link: '/services', width: '75px'},
  {name: 'PROJECTS', link: '/projects', width: '80px'},
  {name: 'CAREERS', link: '/careers', width: '70px'},
  {name: 'CONTACT', link: '/contact', width: '75px'}
]

export const servicesDataForHome = [
  {
    id: "ui-ux",
    icon: (color) => <UiUxIcon color={color} />,
    title: "UI/UX Design",
    parentImg: uiUxParent,
    childImg: uiUxChild,
    active: true,
    link: 'services/ui-ux',
    detail: (
      <div className="w-full md:w-[330px] lg:w-[420px] xl:w-[620px] font-normal">
        <div className="text-black300 text-[16px] md:text-[20px] leading-6 mt-12 text-center md:text-start">
          Our expertise is crafting immersive user experiences that leave a lasting impact.
          We blend creativity and functionality to design interfaces that captivate and delight your audience.
        </div>
        <div className="text-black300 text-[16px] md:text-[20px] leading-6 mt-6 text-center md:text-start">
          Our process covers every aspect, from conceptualization to wireframes, leading to pixel-perfect layouts.
        </div>
        <div className="text-black300 text-[16px] md:text-[20px] leading-6 mt-6 text-center md:text-start">
          By combining aesthetics and usability, we ensure that users remain engaged,
          ensuring a seamless journey through your digital landscape.
        </div>
      </div>
    ),
  },
  {
    id: "website-ecommerce-development",
    icon: (color) => <WebDevelopmentIcon color={color} />,
    title: "Website & E-commerce Development",
    parentImg: uiUxParent,
    childImg: uiUxChild,
    active: false,
    link: 'services/website-ecommerce-development',
    detail: (
      <div className="w-full md:w-[330px] lg:w-[420px] xl:w-[620px] font-normal">
        <div className="text-black300 text-[16px] md:text-[20px] leading-6 mt-12 text-center md:text-start">
          We specialize in building your digital storefront and creating a dynamic online presence tailored to your brand.
        </div>
        <div className="text-black300 text-[16px] md:text-[20px] leading-6 mt-6 text-center md:text-start">
          Our team combines design and technology to construct user-friendly,
          visually appealing websites and e-commerce platforms.
        </div>
        <div className="text-black300 text-[16px] md:text-[20px] leading-6 mt-6 text-center md:text-start">
          With a focus on functionality and scalability, we ensure your digital store is ready to facilitate
          seamless transactions and provide an exceptional shopping experience for your customers.
        </div>
      </div>
    ),
  },
  {
    id: "mobile-app-development",
    icon: (color) => <MobileAppIcon color={color} />,
    title: "Mobile Applications",
    parentImg: uiUxParent,
    childImg: uiUxChild,
    active: false,
    link: 'services/mobile-app-development',
    detail: (
      <div className="w-full md:w-[330px] lg:w-[420px] xl:w-[620px] font-normal">
        <div className="text-black300 text-[16px] md:text-[20px] leading-6 mt-12 text-center md:text-start">
          Our passion lies in developing mobile apps that deeply resonate with users.
          We design and build intuitive, user-centric applications that offer seamless experiences.
        </div>
        <div className="text-black300 text-[16px] md:text-[20px] leading-6 mt-6 text-center md:text-start">
          Our approach involves understanding your audience's needs and preferences,
          resulting in engaging and connecting apps.
        </div>
        <div className="text-black300 text-[16px] md:text-[20px] leading-6 mt-6 text-center md:text-start">
          From Android to iOS, we craft solutions that leave a lasting impression and drive 
          user satisfaction while achieving your business goals.
        </div>
      </div>
    ),
  },
  {
    id: "web-app-development",
    icon: (color) => <WebApplicationIcon color={color} />,
    title: "Web Applications",
    parentImg: uiUxParent,
    childImg: uiUxChild,
    active: false,
    link: 'services/web-app-development',
    detail: (
      <div className="w-full md:w-[330px] lg:w-[420px] xl:w-[620px] font-normal">
        <div className="text-black300 text-[16px] md:text-[20px] leading-6 mt-12 text-center md:text-start">
          We specialize in crafting tailored solutions that align with your business needs.
        </div>
        <div className="text-black300 text-[16px] md:text-[20px] leading-6 mt-6 text-center md:text-start">
          Our expert team has hands-on experience with the latest technologies to create
          web applications that are user-friendly, scalable, and efficient.
        </div>
        <div className="text-black300 text-[16px] md:text-[20px] leading-6 mt-6 text-center md:text-start">
          Whether you require a custom CRM system, a data analytics platform, or any other web-based solution,
          we ensure it seamlessly integrates with your operations, driving efficiency and delivering exceptional value.
        </div>
      </div>
    ),
  },
  {
    id: "staff-augmentation",
    icon: (color) => <StaffIcon color={color} />,
    title: "Staff Augmentation",
    parentImg: uiUxParent,
    childImg: uiUxChild,
    active: false,
    link: 'services/staff-augmentation',
    detail: (
      <div className="w-full md:w-[330px] lg:w-[420px] xl:w-[620px] font-normal">
        <div className="text-black300 text-[16px] md:text-[20px] leading-6 mt-12 text-center md:text-start">
          Enhance your workforce with top talent through our staff augmentation services.
        </div>
        <div className="text-black300 text-[16px] md:text-[20px] leading-6 mt-6 text-center md:text-start">
          We provide skilled professionals who seamlessly integrate with your team,
          augmenting your capabilities without the hassles of traditional hiring.
        </div>
        <div className="text-black300 text-[16px] md:text-[20px] leading-6 mt-6 text-center md:text-start">
          Whether you need developers, designers, or experts in various domains, our flexible solutions enable
          you to scale your workforce swiftly, achieving your project goals efficiently while maintaining quality and productivity.
        </div>
      </div>
    ),
  },
  {
    id: "quality-assurance",
    icon: (color) => <QaIcon color={color} />,
    title: "QA Testing",
    parentImg: uiUxParent,
    childImg: uiUxChild,
    active: false,
    link: 'services/quality-assurance',
    detail: (
      <div className="w-full md:w-[330px] lg:w-[420px] xl:w-[620px] font-normal">
        <div className="text-black300 text-[16px] md:text-[20px] leading-6 mt-12 text-center md:text-start">
          We take pride in ensuring the flawless quality of your product. Our rigorous testing processes
          and skilled quality assurance experts meticulously examine every aspect of your software, website, or application.
        </div>
        <div className="text-black300 text-[16px] md:text-[20px] leading-6 mt-6 text-center md:text-start">
          From functional testing to performance, security, and usability testing, we leave no room for errors.
        </div>
        <div className="text-black300 text-[16px] md:text-[20px] leading-6 mt-6 text-center md:text-start">
          Our commitment to quality helps you release a reliable, bug-free product that exceeds your
          customers' expectations, guaranteeing their satisfaction.
        </div>
      </div>
    ),
  },  
];

export const serviceDetail = [
  {
    id: "web-app-development",
    title: "Web App Development",
    link: 'services/web-app-development',
    content:
      "We utilize modern technology stacks and leading-edge frameworks to develop tailored websites and web solutions that are responsive and interactive.",
    featureSVG: WebSetting,
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    link: 'services/mobile-app-development',
    content:
      "Our dedicated team builds apps for both iOS and Android platforms, which enables businesses to connect and interact with their customers while on the move.",
    featureSVG: MobileDev,
  },
  {
    id: "ui-ux",
    title: "UI/UX",
    link: 'services/ui-ux',
    content:
      "Our design gurus work on a robust design process, from wireframes to interactive prototypes. We ensure an optimized, intuitive user experience for every project.",
    featureSVG: UiIcon,
  },
  {
    id: "website-ecommerce-development",
    title: "Website & Ecommerce Development ",
    link: 'services/website-ecommerce-development',
    content:
      "We craft top-rated, responsive, fast and secure stores driven by clean coding to maximize user engagement, site performance, and conversion process.",
    featureSVG: EcomWebIcon,
  },
  {
    id: "staff-augmentation",
    title: "Staff Augmentation",
    link: 'services/staff-augmentation',
    content:
      "We help companies find junior to senior-level resources, ensuring on-time and on-budget project completion with our expert staff augmentation.",
    featureSVG: StaffSerIcon,
  },
  {
    id: "support-maintenance",
    title: "Support and Maintenance",
    link: 'services/support-maintenance',
    content:
      "Our ongoing support services offer continuous monitoring, quick issue resolution, and software optimization to keep your digital systems at peak performance.",
    featureSVG: TechnicalIcon,
  },
  {
    id: "quality-assurance",
    title: "Quality Assurance",
    link: 'services/quality-assurance',
    content:
      "Let us perform rigorous testing methodologies on your project to ensure software reliability, performance, and compliance with the highest industry standards.",
    featureSVG: TestingIcon,
  },
];

export const projectsDetail = [
  {
    id:'sourcr',
    ascending: true,
    height: '310px',
    image: sourcr,
    name: 'Sourcr',
    link: 'projects/sourcr',
    title: 'Reputation Management Platform',
    description: 'Sourcr, a reputation management platform designed for recruiters, helps make your profile stand out to candidates. The platform had multiple bugs due to which different modules were not working. Discover how we collaborated with their team to add new features, fix bugs, and ensure quality coding.'
  },
  {
    id: 'active-prime',
    ascending: false,
    height: '310px',
    image: activePrime,
    name: 'Active Prime',
    link: 'projects/active-prime',
    title: 'CRM Tools',
    description: 'ActivePrime, specializing in CRM data quality, sought our expertise to enhance its tools compatible with leading CRM platforms. Our collaboration primarily focused on front-end improvements and integrations. Learn how our senior developer took on this challenge, and explore the insights our team gained in implementing new CRM features.'
  },
  {
    id: 'evercare',
    ascending: true,
    height: '310px',
    image: evercare,
    name: 'Evercare',
    link: 'projects/evercare',
    title: 'Medical Services',
    description: `The Evercare app revolutionized the healthcare industry by connecting patients with caregivers. Our collaboration involved developing the product from scratch, with Devorbis overseeing the entire process. To learn how our agile development approach and dedicated team transformed the landscape of Evercare's services, click below to explore the full case study.`
  },
  {
    id: 'volt-land',
    ascending: false,
    height: '310px',
    image: voltLand,
    name: 'Volt Land',
    link: 'projects/volt-land',
    title: 'E-commerce App',
    description: `Volt Land app redefines the electric car buying experience. Our versatile team collaborated to deliver an automated E-commerce solution, addressing the challenge of enhancing the online car buying process. To discover what solution we provided and what we learned from this innovative project, click below to explore the full case study.`
  },
  {
    id: 'bengi-provider',
    ascending: true,
    height: '310px',
    image: benji,
    name: 'Bengi Provider',
    link: 'projects/bengi-provider',
    title: 'Service Providers',
    description: `Benji Provider (benji™) is an innovative mobile platform that connects homeowners with lawn technicians. It helps to reduce CO2 emissions and save energy through electric equipment. Our challenge was to create a seamless and efficient platform for both. To learn about the full case study and explore our achievements, click below.`
  },
  {
    id: 'barter-loot',
    ascending: false,
    height: '56px',
    image: barterLoot,
    name: 'Barter Loot',
    link: 'projects/barter-loot',
    title: 'Data Scrapping',
    description: 'Barter Loot checks the authenticity of sneakers, whether for size swaps or grail trades. They required photos and descriptions of every item and make sure the sneakers match the description given. Our team worked on both frontend and backend development to complete it. Read more to explore the challenges and our achievements on this authenticity-driven project.'
  },
  {
    id: 'spookhost',
    ascending: true,
    height: '310px',
    image: spookHost,
    name: 'Spookhost',
    link: 'projects/Spookhost',
    title: 'Entertainment Mobile App',
    description: `Spookhost, a dynamic social entertainment app, introduced features like live chat, American movie streaming, and a comprehensive movie map. Our dedicated Devorbis team actively collaborated to overcome the complexity of the backend, leading to the successful launch of the Beta version. To explore the challenges we faced and our achievements, click below.`
  },
]

export const projectCompleteDetail = [
  {
    id: 'sourcr',
    projectName: 'Sourcr',
    sectionTitle: 'Revolutionizing Reputation Management: Sourcr Case Study',
    sectionDescription: 'Find out how we overcame challenges, improved code quality, and got exceptional results for this reputation management platform.',
    projectStack: 'Web Application',
    country: 'United States',
    industry: 'E-Commerce',
    timeLine: 'Sept 2022 - Ongoing',
    image: sourcrBg,
    bgImage: projectsSectionBg,
    activeUser: '1M+',
    rating: '4.6',
    userSatisfactionScore: '86%',
    technologies: [reactJsImg, vueJsImg, awsImg],
    detail1: `While working on the project, we worked on different modules of the application, including the development of new features and rectification of bugs. Our priority was to ensure that the quality of the code was not compromised, especially when multiple teams were working at the same time as per the planned sprint. `,
    detail2: `We used a structured team approach, assigning a Team Lead and two Engineers to oversee the code, provide feedback, and ensure quality. The remaining engineers focused on developing features and resolving bugs. As a team, we improved the code quality, optimized the performance, and added Continuous Integration/Continuous Deployment (CI/CD) processes, automated workflows, and integrated Unit and Integration testing for an efficient development pipeline.`,
    detail3: `Our learning as a team was on the top level in this project, as we were engaged actively with the client to identify and integrate new tools. We worked on project management skills, emphasizing code quality and enhancing the overall quality of web app features within a tight timeframe. We were also engaged in research and development (R&D) to implement new libraries, further expanding our technical capabilities and expertise.`,
    description1: `Sourcr is a game-changing reputation management platform created by recruiters, for recruiters, with the mission of helping businesses rise above the competition in a crowded market. It offers a comprehensive toolkit for businesses to stand out to potential candidates, creating branded profiles that reflect their unique identity and reputation.`,
    description2: `Sourcr simplifies the review collection process with automated integration into Applicant Tracking Systems (ATS) and Customer Relationship Management (CRM) software. Moreover, it optimizes online visibility by showcasing reviews on Google to enhance Search Engine Optimization (SEO) rankings. With a library of widgets, it supercharges website conversions, delivering a powerful, all-in-one solution for businesses striving to excel in the digital era. Sourcr is the key to maximizing your brand's full potential.`,
  },
  {
    id: 'active-prime',
    projectName: 'ActivePrime',
    sectionTitle: 'Enhancing CRM Data Quality: ActivePrime Case Study',
    sectionDescription: 'Explore how we collaborated with Active Prime to optimize CRM data quality and the valuable insights gained during the project.',
    projectStack: 'Web Application',
    country: 'United States',
    industry: 'E-Commerce',
    timeLine: 'Sept 2022 - Ongoing',
    image: sourcrBg,
    bgImage: projectsSectionBg,
    activeUser: '1M+',
    rating: '4.6',
    userSatisfactionScore: '86%',
    technologies: [reactJsImg, vueJsImg, awsImg],
    detail1: `While working on the project, we primarily focused on enhancing the platform's front end. We successfully implemented various new features and seamlessly integrated them with the client's existing server infrastructure. This collaborative approach ensured a smoother and more efficient user experience.`,
    detail2: `The project required the expertise of 1 senior developer, and we appointed a seasoned leader to address the issue. Working actively, the team took the challenge and demonstrated their proficiency, ensuring the delivery of high-quality work within the given time frame. This proactive approach showcased our commitment to efficient project management and client satisfaction.`,
    detail3: `Our team learned multiple new aspects while working on this project. The team, operating within the main project framework, acquired a deeper understanding of CRM tools by implementing innovative features. This experience enhanced our expertise, positioning us for more effective utilization of CRM tools in future projects.`,
    description1: `ActivePrime is a pioneering software company dedicated to improving Customer Relationship Management (CRM) data quality. Their innovative tools and solutions are designed to enable businesses to search for and maintain cleaner CRM data effectively. ActivePrime's flexible software can be integrated with popular CRM platforms such as Salesforce, Oracle CRM On Demand, Oracle Engagement Cloud, and Microsoft Dynamics.`,
    description2: `By providing companies with the means to enhance their data quality and CRM performance, ActivePrime helps them make more informed decisions, better understand their customers, and ultimately achieve greater success in a highly competitive market. Their commitment to CRM data quality makes them a trusted partner for businesses seeking to optimize their customer relationship management strategies.`,
  },
  {
    id: 'evercare',
    projectName: 'Evercare',
    sectionTitle: `Streamlining Caregiver-Patient Connections: Evercare Case Study`,
    sectionDescription: `Discover how Devorbis engineered a comprehensive web application that enhances caregiver-patient interactions through streamlined processes and collaboration with Evercare.`,
    projectStack: 'Web Application',
    country: 'United States',
    industry: 'E-Commerce',
    timeLine: 'Sept 2022 - Ongoing',
    image: sourcrBg,
    bgImage: projectsSectionBg,
    activeUser: '1M+',
    rating: '4.6',
    userSatisfactionScore: '86%',
    technologies: [reactJsImg, vueJsImg, awsImg],
    detail1: `Our journey on this project started from scratch. Devorbis took charge of managing the complete development process and assembling a dedicated team to bring the project to life, ensuring a streamlined and successful execution from start to finish.`,
    detail2: `We held daily scrums to discuss the progress, gather requirements, and collaborate closely with the team. Team Leads, Architects, and Senior Software Engineers with years of experience were assigned to various project features. Our team has provided services to Evercare for the past five years, fostering a strong and enduring partnership.`,
    detail3: `The project extended our expertise in agile development methodologies and improved our understanding of the complex healthcare sector. We refined our abilities to facilitate seamless collaboration and implement solutions across diverse aspects of the Evercare ecosystem, building on our five years of successful service delivery to the client.`,
    description1: `Evercare is a dynamic healthcare platform that empowers patients and caregivers. Their commitment to enhancing the quality of care and streamlining caregiver-patient interactions is visible in their collaboration with Devorbis. By facilitating seamless onboarding, appointments, and certificate verification, Evercare ensures a reliable and efficient process for caregivers and patients. `,
    description2: `The successful partnership with Devorbis has not only resulted in a revolutionary web application but also reflects Evercare's dedication to improving healthcare access while encouraging a collaborative, agile, and responsive environment. This dedication to healthcare innovation has set new standards in the industry.`,
  },
  {
    id: 'volt-land',
    projectName: 'Volt Land',
    sectionTitle: `Transforming Electric Car Shopping: Volt Land Case Study`,
    sectionDescription: `See our journey in shaping Volt Land, a cutting-edge web app enhancing electric car shopping with unique user engagement and innovative features.`,
    projectStack: 'Web Application',
    country: 'United States',
    industry: 'E-Commerce',
    timeLine: 'Sept 2022 - Ongoing',
    image: sourcrBg,
    bgImage: projectsSectionBg,
    activeUser: '1M+',
    rating: '4.6',
    userSatisfactionScore: '86%',
    technologies: [reactJsImg, vueJsImg, awsImg],
    detail1: `Our collaboration model for Volt Land focused on assembling a versatile team capable of both front-end and back-end development. We tailored an e-commerce solution that emphasized automation to streamline the user experience. This collaborative approach empowered us to create an innovative platform, setting new standards in electric car shopping.`,
    detail2: `Devorbis strategically assigned a versatile team with expertise in frontend and backend development to address the project's unique challenges. We implemented a highly automated e-commerce solution that streamlined the user experience, ensuring efficient and innovative outcomes for Volt Land.`,
    detail3: `The project introduced our team to multiple aspects, prompting them to explore various automation tools to enhance order processing. This experience expanded our knowledge base and allowed us to integrate advanced automation solutions into our projects.`,
    description1: `Volt Land web application redefines the electric car shopping experience. This innovative platform enables users to interact seamlessly, regardless of their device. One standout feature is the intuitive swipe function that simplifies selecting electric cars. Volt Land's mission is to revolutionize how electric cars are ordered and purchased, providing a fresh and user-friendly approach that has transformed how users engage with electric vehicles, making the process more accessible and enjoyable.`,
    description2: ``,
  },
  {
    id: 'benji-provider ',
    projectName: 'Benji Provider',
    sectionTitle: `A Greener Approach to Lawn Care - Benji Provider Case Study`,
    sectionDescription: `Explore how we helped Benji Provider develop a mobile platform for lawn care, connecting homeowners with eco-friendly technicians for seamless, secure transactions.`,
    projectStack: 'Web Application',
    country: 'United States',
    industry: 'E-Commerce',
    timeLine: 'Sept 2022 - Ongoing',
    image: sourcrBg,
    bgImage: projectsSectionBg,
    activeUser: '1M+',
    rating: '4.6',
    userSatisfactionScore: '86%',
    technologies: [reactJsImg, vueJsImg, awsImg],
    detail1: `We dedicated a specialized team for mobile application development. We coordinated and managed the development process, ensuring a seamless and efficient workflow. By leveraging our expertise in mobile applications and deep understanding of client requirements, we delivered a quality product on time, meeting the client's expectations.`,
    detail2: `Leveraging our extensive experience developing similar applications, Devorbis delivered a high-quality product for the Benji Provider project, meeting both deadlines and quality standards. Our expertise and commitment ensured a successful outcome, aligning with the client's requirements and expectations.`,
    detail3: `The Benji Provider project offered valuable insights into streamlining the development of service-oriented apps. The Devorbis team improved their knowledge in optimizing user interfaces and integrating efficient communication features. This experience enhanced their ability to meet specific project requirements and deliver top-quality results.`,
    description1: `Benji Provider is an innovative platform empowering lawn care technicians to deliver efficient, eco-friendly services. Committing to environmental responsibility, it equips service providers with state-of-the-art electric equipment, ensuring reduced carbon emissions while preserving the pristine condition of outdoor spaces. The platform fosters seamless communication between providers and clients through in-app chat features.`,
    description2: `Moreover, Benji Provider facilitates secure payment processing through the Stripe gateway, ensuring that transactions are smooth, reliable, and trustworthy. In an era where sustainability and convenience are paramount, Benji Provider stands out as a forward-thinking solution for modern lawn care services.`,
  },
  {
    id: 'barter-loot',
    projectName: 'Barter Loot',
    sectionTitle: `Ensuring Sneaker Authenticity: Barter Loot Case Study`,
    sectionDescription: `Explore how we helped Benji Provider develop a mobile platform for lawn care, connecting homeowners with eco-friendly technicians for seamless, secure transactions.`,
    projectStack: 'Web Application',
    country: 'United States',
    industry: 'E-Commerce',
    timeLine: 'Sept 2022 - Ongoing',
    image: sourcrBg,
    bgImage: projectsSectionBg,
    activeUser: '1M+',
    rating: '4.6',
    userSatisfactionScore: '86%',
    technologies: [reactJsImg, vueJsImg, awsImg],
    detail1: `Collaboration with Barter Loot involved a dedicated and agile approach. Our cross-functional team navigated the complexities of mobile app development. Through frequent communication, we maintained alignment with Barter Loot's vision. This flexible partnership led to the successful creation of a dynamic platform for sneaker enthusiasts.`,
    detail2: `Devorbis provided an expert team to focus on both the frontend and backend aspects, addressing the project's specific needs. This careful approach ensured the development of a seamless and efficient sneaker verification platform that guarantees authenticity for users, promoting trust and credibility.`,
    detail3: `The Devorbis team gained valuable insights into sneaker authentication and verification. This project exposed them to the intricacies of ensuring 100% authenticity in a highly specialized niche. The team expanded their knowledge, problem-solving abilities, and expertise in delivering secure and trusted solutions.`,
    description1: `Barter Loot is a dynamic mobile platform that revolutionizes the art of sneaker trading. It allows users to seamlessly swap or purchase coveted sneakers while ensuring the authenticity of every pair. With a robust system that mandates detailed item descriptions and photographic verification, Barter Loot has created a trustworthy environment for sneaker enthusiasts. This innovative app is a haven for sneaker collectors and trading enthusiasts. It provides a secure platform for users to acquire their desired kicks, transforming sneaker transactions in the digital age. Barter Loot's commitment to authenticity and user satisfaction sets it apart in the sneaker trading industry.`,
    description2: ``,
  },
  {
    id: 'spookhost',
    projectName: 'Spookhost',
    sectionTitle: `Enhancing Social Entertainment Application: Spookhost Case Study`,
    sectionDescription: `Discover how Devorbis overcame intricate backend challenges, ensuring a seamless Beta launch and enhancing Spookhost, a social entertainment application.`,
    projectStack: 'Web Application',
    country: 'United States',
    industry: 'E-Commerce',
    timeLine: 'Sept 2022 - Ongoing',
    image: sourcrBg,
    bgImage: projectsSectionBg,
    activeUser: '1M+',
    rating: '4.6',
    userSatisfactionScore: '86%',
    technologies: [reactJsImg, vueJsImg, awsImg],
    detail1: `Our experts made daily communication and active engagement, ensuring efficient coordination with the client. We worked in sync with the client, ensuring that our team was readily available to address the challenges and complexities of the project. This flexible approach was instrumental in achieving a seamless Beta version launch.`,
    detail2: `Our strategy involved assigning the team to maintain daily communication and aligning our activities with the client's schedule for enhanced collaboration. Despite the complex backend challenges, our team's unwavering commitment and effective coordination led to the successful completion of the project and the successful launch of the Beta version.`,
    detail3: `The Spookhost project provided valuable insights to the Devorbis team. Working on the complex backend challenges enhanced our problem-solving skills. It also reinforced the importance of open and active communication with clients to overcome hurdles and successfully deliver a seamless Beta version.`,
    description1: `Spookhost is a vibrant and powerful social entertainment application that offers users a captivating experience. With features like story sharing, live chat interactions, and access to real-time streaming of American movies in cinemas, Spookhost fosters a unique sense of community among its users. The platform also incorporates a Map feature, enabling users to explore precise movie details, locations, and valuable feedback. Spookhost's innovative approach to social entertainment and its features make it a compelling choice for users seeking immersive and engaging experiences in the digital realm.`,
    description2: ``,
  }
]

export const serviceCompleteDetail = [
  {
    id: "web-app-development",
    projectName: 'Web App Development',
    technologies: [ reactJsImg, tScriptImg, laravelImg, jScriptImg, sForceImg, vueJsImg, nextJsImg, awsImg ],
    mainDetail: 'Transform your vision into a cutting-edge web application. At Devorbis, we specialize in crafting dynamic, user-centric web apps that elevate your digital presence.',
    serviceDetail: [
      {
        id: '01',
        ascending: false,
        image: girlComp,
        name: 'Technologies We Work With',
        description: (
          <div className='w-full flex flex-col justify-between xl:text-[15px] lg:text-[12px] text-black300 leading-6 font-normal xl:h-[440px] md:h-[425px]'>
          <div className=''>At Devorbis, we excel in web app development, and we're eager to transform your vision into a cutting-edge reality. Our specialized team is committed to crafting dynamic, user-centric web applications that meet and exceed your expectations, elevating your digital presence to new heights. With our comprehensive web app development services, we're here to guide you through every phase of your project.</div>
          <div className=''>Our approach is defined by our skilled developers' adept utilization of various technologies, ensuring your web app is tailored precisely to your needs. We're well-versed in the intricate workings of technologies like:</div>
          <div className="flex flex-col flex-wrap h-[175px]">
            {
              ['Node.js','Vue','Angular.js', 'Next.js', 'Express.js', 'GraphQL', 'MY SQL', 'MongoDB', 'Postgres DB', 'AWS', 'Google Cloud', 'Azure'].map((item, index)=>(
                <div key={index} className="flex items-center"><div className="h-[6px] w-[6px] bg-mustered600 rounded-full mr-1" /><div className=''>{item}</div></div>
              ))
            }
          </div>
          <div className=''>Your journey to a powerful, user-friendly web app begins here with Devorbis.</div>
          <Link href={'/contact'}>
            <MyButton
              text='Let’s Talk'
              style='w-[160px] text-mustered600 border-mustered600 hover:bg-mustered600 hover:border-mustered600 hover:text-white px-[26px] py-[20px] h-[60px]'
            />
          </Link>
        </div>
        ),
      },
      {
        id: '02',
        ascending: true,
        image: mobileService,
        name: 'Our Process & Strategy',
        description: (
          <div className='w-full flex flex-col justify-between xl:text-[15px] lg:text-[12px] text-black300 leading-6 font-normal xl:h-[360px] md:h-[340px] h-[430px]'>
          <div className=''>Devorbis follows a strategic and transparent process to ensure the success of your web app project. We collaborate closely with you to define objectives, establish a development roadmap, and craft a user-focused experience. Our approach includes design, development, rigorous testing, and seamless deployment, all while maintaining clear communication at every stage.</div>
          <div className=''>Our dedicated team is equipped to tackle complex challenges and deliver web apps that stand out in the digital landscape. Talk to our experts to transform your vision into reality with our web app development services. Let's start the journey of your digital transformation!</div>
          <Link href={'/contact'}>
            <MyButton
              text='Get A Quote'
              style='w-[190px] text-mustered600 border-mustered600 hover:bg-mustered600 hover:border-mustered600 hover:text-white px-[26px] py-[20px] h-[60px]'
            />
          </Link>
        </div>
        ),
      }
    ]
  },
  {
    id: "mobile-app-development",
    projectName: 'Mobile Application Development',
    technologies: [ reactJsImg, tScriptImg, laravelImg, jScriptImg, sForceImg, vueJsImg, nextJsImg, awsImg ],
    mainDetail: 'Let’s go on a dynamic mobile app journey where we craft engaging, beautiful, and high-performance mobile apps from your unique ideas.',
    serviceDetail: [
      {
        id: '01',
        ascending: false,
        image: girlComp,
        name: 'Technologies We Work With',
        description: (
          <div className='w-full flex flex-col justify-between xl:text-[15px] lg:text-[12px] text-black300 leading-6 font-normal xl:h-[400px] md:h-[380px] h-[400px]'>
          <div className=''>Devorbis recognizes the role mobile apps play in today's digital success. Whether you want to engage customers, optimize internal processes, or launch a groundbreaking startup, we're your dedicated partners. Our seasoned developers excel in creating cross-platform mobile apps using the following: </div>
          <div>
            {
              ['React Native','Flutter','NativeScrip'].map((item, index)=>(
                <div key={index} className="flex items-center"><div className="h-[6px] w-[6px] bg-mustered600 rounded-full mr-1" /><div className=''>{item}</div></div>
              ))
            }
          </div>
          <div className=''>Our core focus remains on delivering a seamless user experience, robust functionality, and captivating design. We aim to develop mobile applications that not only fulfil your current requirements but also evolve to meet future growth and dynamic market needs.</div>
          <Link href={'/contact'}>
            <MyButton
              text='Let’s Talk'
              style='w-[160px] text-mustered600 border-mustered600 hover:bg-mustered600 hover:border-mustered600 hover:text-white px-[26px] py-[20px] h-[60px]'
            />
          </Link>
        </div>
        ),
      },
      {
        id: '02',
        ascending: true,
        image: mobileService,
        name: 'Our Process & Strategy',
        description: (
          <div className='w-full flex flex-col justify-between xl:text-[15px] lg:text-[12px] text-black300 leading-6 font-normal xl:h-[340px] md:h-[320px] h-[400px]'>
          <div className=''>Our well-defined process and strategic approach begins by thoroughly understanding your goals and requirements, which sets the foundation for the entire project. From ideation and wireframing to development, testing, and deployment, we ensure that every step aligns with your vision. Our strategy is built upon delivering user-centric, feature-rich applications that provide a competitive edge in your industry.</div>
          <div className=''>Explore the possibilities of mobile application development with Devorbis. Talk to our experts to transform your concepts into high-quality, user-friendly mobile apps.</div>
          <Link href={'/contact'}>
            <MyButton
              text='Get A Quote'
              style='w-[190px] text-mustered600 border-mustered600 hover:bg-mustered600 hover:border-mustered600 hover:text-white px-[26px] py-[20px] h-[60px]'
            />
          </Link>
        </div>
        ),
      }
    ]
  },
  {
    id: 'ui-ux',
    projectName: 'UI/UX Design',
    technologies: [ reactJsImg, tScriptImg, laravelImg, jScriptImg, sForceImg, vueJsImg, nextJsImg, awsImg ],
    description : 'Maximize your digital presence with our UI/UX design services. We have the power to ensure your designs are visually stunning and have user-centric interfaces.',
    mainDetail: 'Maximize your digital presence with our UI/UX design services. We have the power to ensure your designs are visually stunning and have user-centric interfaces.',
    serviceDetail: [
      {
        id: '01',
        ascending: false,
        image: girlComp,
        name: 'Technologies We Work With',
        description: (
        <div className='w-full flex flex-col justify-between xl:text-[15px] lg:text-[12px] text-black300 leading-6 font-normal xl:h-[355px] lg:h-[310px] md:h-[340px] h-[400px]'>
          <div className=''>We understand that aesthetically pleasing design is the backbone of a successful digital product. Our design gurus help you transform complex ideas into simple, intuitive, and aesthetically pleasing interfaces that are visually stunning and offer user-centric experiences that resonate with your audience. Our team is well-versed in harnessing the power of leading design tools like:</div>
          <div>
            {
              ['Adobe','Figma'].map((item, index)=>(
                <div key={index} className="flex items-center"><div className="h-[6px] w-[6px] bg-mustered600 rounded-full mr-1" /><div className=''>{item}</div></div>
              ))
            }
          </div>
          <div className=''>We use these platforms to craft seamless user interfaces and engaging user experiences.</div>
          <Link href={'/contact'}>
            <MyButton
              text='Let’s Talk'
              style='w-[160px] text-mustered600 border-mustered600 hover:bg-mustered600 hover:border-mustered600 hover:text-white px-[26px] py-[20px] h-[60px]'
            />
          </Link>
        </div>
        ),
      },
      {
        id: '02',
        ascending: true,
        image: mobileService,
        name: 'Our Process & Strategy',
        description: (
          <div className='w-full flex flex-col justify-between xl:text-[15px] lg:text-[12px] text-black300 leading-6 font-normal xl:h-[320px] md:h-[310px] h-[360px]'>
          <div className=''>Our design process involves creativity, collaboration, and precision. We start with a deep look into your vision and objectives, ensuring we fully grasp your project's essence. Our team then moves on to wireframing, prototyping, and mockups. With your input, we refine every detail to perfection. The final design is the outcome of this iterative journey, tailored to your brand and users. Our strategic approach ensures the design aligns with your goals and stands out in a competitive digital landscape. Elevate your digital presence with UI/UX design that wows.</div>
          <Link href={'/contact'}>
            <MyButton
              text='Get A Quote'
              style='w-[190px] text-mustered600 border-mustered600 hover:bg-mustered600 hover:border-mustered600 hover:text-white px-[26px] py-[20px] h-[60px]'
            />
          </Link>
        </div>
        ),
      }
    ]
  },
  {
    id: 'website-ecommerce-development',
    projectName: 'Website & E-commerce Development',
    technologies: [ reactJsImg, tScriptImg, laravelImg, jScriptImg, sForceImg, vueJsImg, nextJsImg, awsImg ],
    mainDetail: 'Enhance your online presence and streamline the shopping experience. Our experts specialize in user-friendly websites and robust e-commerce solutions.',
    serviceDetail: [
      {
        id: '01',
        ascending: false,
        image: girlComp,
        name: 'Technologies We Work With',
        description: (
          <div className='w-full flex flex-col justify-between xl:text-[15px] lg:text-[12px] text-black300 leading-6 font-normal xl:h-[390px] md:h-[425px] h-[500px]'>
          <div className=''>Our team of expert developers leverages cutting-edge technologies to bring your website and e-commerce vision to life. We create user-friendly, visually engaging online stores that drive conversion and customer satisfaction. From seamless product browsing and checkout processes to secure payment gateways, our focus is on providing a comprehensive e-commerce solution tailored to your specific needs. We're proficient in platforms like:</div>
          <div className="flex flex-col flex-wrap h-[100px]">
            {
              ['WordPress','WooCommerce','Magento','Shopify','HTML5','CSS3','JavaScript','PHP'].map((item, index)=>(
                <div key={index} className="flex items-center"><div className="h-[6px] w-[6px] bg-mustered600 rounded-full mr-1" /><div className=''>{item}</div></div>
              ))
            }
          </div>
          <div className=''>Whether you need a simple and elegant website or a robust e-commerce platform, we have the tools and expertise to deliver it.</div>
          <Link href={'/contact'}>
            <MyButton
              text='Let’s Talk'
              style='w-[160px] text-mustered600 border-mustered600 hover:bg-mustered600 hover:border-mustered600 hover:text-white px-[26px] py-[20px] h-[60px]'
            />
          </Link>
        </div>
        ),
      },
      {
        id: '02',
        ascending: true,
        image: mobileService,
        name: 'Our Process & Strategy',
        description: (
          <div className='w-full flex flex-col justify-between xl:text-[15px] lg:text-[12px] text-black300 leading-6 font-normal xl:h-[345px] md:h-[330px]'>
          <div className=''>Our approach to website and e-commerce development is built on a strategic foundation. We start with a detailed analysis of your goals and target audience, followed by meticulous planning and design. Our development phase is focused on creating a responsive, user-friendly interface, while rigorous testing ensures a bug-free experience. We offer secure and optimized e-commerce solutions that enhance user trust and conversion rates. Post-launch, our support and maintenance services keep your site running smoothly, and our digital marketing strategies drive traffic and sales. With Devorbis, you get a comprehensive package to make your online presence thrive.</div>
          <Link href={'/contact'}>
            <MyButton
              text='Get A Quote '
              style='w-[190px] text-mustered600 border-mustered600 hover:bg-mustered600 hover:border-mustered600 hover:text-white px-[26px] py-[20px] h-[60px]'
            />
          </Link>
        </div>
        ),
      }
    ]
  },
  {
    id: 'staff-augmentation',
    projectName: 'Staff Augmentation Services',
    technologies: [ reactJsImg, tScriptImg, laravelImg, jScriptImg, sForceImg, vueJsImg, nextJsImg, awsImg ],
    mainDetail: 'Increase your development team and make your project successful. We provide skilled professionals to augment your team without you worrying about anything.',
    serviceDetail: [
      {
        id: '01',
        ascending: false,
        image: girlComp,
        name: 'Our Services',
        description: (
          <div className='w-full flex flex-col justify-between xl:text-[15px] lg:text-[12px] text-black300 leading-6 font-normal xl:h-[440px] md:h-[425px] h-[550px]'>
          <div className=''>At Devorbis, we offer a comprehensive range of Staff Augmentation services to help you bridge your resource gaps. Our dedicated professionals can assist you in various domains, including software development, quality assurance, project management, and more. We carefully match our experts' skills to your project's demands, ensuring a smooth and productive collaboration. Our tailored services include:</div>
          <div>
            {
              ['Technical and Non-Technical Staff Augmentation','Full-Time and Part-Time Resources','Flexible Engagement Models','Scalable Team Expansion','Onboarding and Continuous Support'].map((item, index)=>(
                <div key={index} className="flex items-center"><div className="h-[6px] w-[6px] bg-mustered600 rounded-full mr-1" /><div className=''>{item}</div></div>
              ))
            }
          </div>
          <div className=''>See your projects completed quickly with our skilled professionals. Get started with Devorbis Staff Augmentation and power your success today!</div>
          <Link href={'/contact'}>
            <MyButton
              text='Let’s Talk'
              style='w-[160px] text-mustered600 border-mustered600 hover:bg-mustered600 hover:border-mustered600 hover:text-white px-[26px] py-[20px] h-[60px]'
            />
          </Link>
        </div>
        ),
      },
      {
        id: '02',
        ascending: true,
        image: mobileService,
        name: ' Our Process & Strategy',
        description: (
          <div className='w-full flex flex-col justify-between xl:text-[15px] lg:text-[12px] text-black300 leading-6 font-normal xl:h-[310px] md:h-[300px]'>
            <div className=''>Our Staff Augmentation process is designed to simplify your hiring experience. We begin by understanding your staffing needs, followed by candidate sourcing, screening, and selection. Our team of experts then integrates seamlessly into your operations, providing the skills and experience needed to meet your project objectives. Uplift your team's capabilities with Devorbis Staff Augmentation. Collaborate with our experts to transform your projects and reach new heights.</div>
            <Link href={'/contact'}>
              <MyButton
                text='Get A Quote'
                style='w-[190px] text-mustered600 border-mustered600 hover:bg-mustered600 hover:border-mustered600 hover:text-white px-[26px] py-[20px] h-[60px]'
              />
            </Link>
        </div>
        ),
      }
    ]
  },
  {
    id: 'support-maintenance',
    projectName: 'Support and Maintenance Services',
    technologies: [ reactJsImg, tScriptImg, laravelImg, jScriptImg, sForceImg, vueJsImg, nextJsImg, awsImg ],
    mainDetail: 'Our experts help your IT infrastructure with Support and Maintenance to ensure it runs smoothly, providing peak performance for your systems and applications.',
    serviceDetail: [
      {
        id: '01',
        ascending: false,
        image: girlComp,
        name: 'Our Services',
        description: (
          <div className='w-full flex flex-col justify-between xl:text-[15px] lg:text-[12px] text-black300 leading-6 font-normal xl:h-[440px] md:h-[425px]'>
          <div className=''>In a technology-driven office environment, IT Support and Maintenance services are essential. They offer a proactive approach to technology management, ensuring the seamless operation of your digital infrastructure, enhancing security, and optimizing the performance of your applications and websites. They contribute to productivity, business continuity, and the longevity of your IT investments while minimizing risks and costs. We offer the following services to help you stay on track for your projects without worrying about anything:</div>
          <div>
            {
              ['Application Support and Maintenance Services','Web App and Website Maintenance Services','Security Management and Enhancement','Software upgrades','Troubleshooting & Root Cause Analysis'].map((item, index)=>(
                <div key={index} className="flex items-center"><div className="h-[6px] w-[6px] bg-mustered600 rounded-full mr-1" /><div className=''>{item}</div></div>
              ))
            }
          </div>
          <div className=''>Get the best software maintenance services to safeguard your systems, enhance performance, and fortify your digital assets against vulnerabilities.</div>
          <Link href={'/contact'}>
            <MyButton
              text='Let’s Talk'
              style='w-[190px] text-mustered600 border-mustered600 hover:bg-mustered600 hover:border-mustered600 hover:text-white px-[26px] py-[20px] h-[60px]'
            />
          </Link>
        </div>
        ),
      },
      {
        id: '02',
        ascending: true,
        image: mobileService,
        name: ' Our Process',
        description: (
          <div className='w-full flex flex-col justify-between xl:text-[15px] lg:text-[12px] text-black300 leading-6 font-normal xl:h-[440px] md:h-[425px]'>
          <div className=''>Our approach to IT Support and Maintenance revolves around a seamless flow of activities. It begins with requirements collection, where we collaborate closely with your team to understand your unique needs. Following this, we embark on software maintenance and support services planning, formulating a tailored strategy for your specific systems.</div>
          <div className=''>The stage of responsibility transfer comes next, where we smoothly transition the maintenance and support roles to ensure a continuous and efficient operation. Finally, we initiate the support and maintenance launch, implementing our plans and ensuring your digital infrastructure operates at its best while minimizing downtime and maximizing performance.</div>
          <Link href={'/contact'}>
            <MyButton
              text='Get A Quote'
              style='w-[190px] text-mustered600 border-mustered600 hover:bg-mustered600 hover:border-mustered600 hover:text-white px-[26px] py-[20px] h-[60px]'
              />
          </Link>
        </div>
        ),
      }
    ]
  },
  {
    id: 'quality-assurance',
    projectName: 'Quality Assurance',
    technologies: [ reactJsImg, tScriptImg, laravelImg, jScriptImg, sForceImg, vueJsImg, nextJsImg, awsImg ],
    mainDetail: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit',
    serviceDetail: [
      {
        id: '01',
        ascending: false,
        image: girlComp,
        name: 'Case Study name',
        description: (
          <div className='w-full flex flex-col justify-between xl:text-[15px] lg:text-[12px] text-black300 leading-6 font-normal xl:h-[440px] md:h-[425px]'>
          <div className=''>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed qu.</div>
          <div className=''>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al.</div>
          <div>
            <div className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con</div>
            <div className=''>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu cepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es.</div>
          </div>
          <div className=''>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma.</div>
        </div>
        ),
      },
      {
        id: '02',
        ascending: true,
        image: mobileService,
        name: 'Case Study name',
        description: (
          <div className='w-full flex flex-col justify-between xl:text-[15px] lg:text-[12px] text-black300 leading-6 font-normal xl:h-[440px] md:h-[425px]'>
          <div className=''>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed qu.</div>
          <div className=''>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al.</div>
          <div>
            <div className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con</div>
            <div className=''>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu cepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es.</div>
          </div>
          <div className=''>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma.</div>
        </div>
        ),
      }
    ]
},
];







export const contactCardInfo = [
  { icon: MobileMustered, text: '+92 330 185 6869' },
  { icon: EmailMustered, text: 'info@devorbis.com' },
  { icon: LocationMustered, text: '8502 Preston Rd. Inglewood, Maine 98380' }
]
