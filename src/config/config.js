import { FaMobileAlt ,FaCode,FaTv,FaRegHandshake} from "react-icons/fa";
import { MdOutlineVideoSettings } from "react-icons/md";
import { TbSpeakerphone } from "react-icons/tb";


export const color = {
  lgfirstcolor: "#6EA7FC",
  lgsecondcolor: "#F1245B",
  hovlgfirstcolor: "#FFE2EA",
  hovlgsecondcolor: "#C5DCFF",
};


export const solutiondata = [
  { id: 1, name: "Healthcare", route: "/" },
  { id: 2, name: "Technology", route: "/" },
  { id: 3, name: "ERP", route: "/" },
  { id: 4, name: "POS", route: "/" },
  { id: 5, name: "Custom", route: "/" },
];
export const  navbarlink = [
  { item: "Home", key: "/" },
  { item: "Services", key: "/services" },
  { item: "About", key: "/about" },
];


export const servicesData = [
  {
    id: 1,
    name: "Web App Development",
    description: "We offer comprehensive web-related services, specializing in custom web app development, responsive web design, e-commerce solutions, UI/UX optimization, CMS integration, SEO services, performance enhancement, security solutions, and ongoing maintenance, ensuring seamless, scalable, and user-friendly digital experiences tailored to your business needs",
    
    icon: <FaCode size={30} color="#211da6e8"/>,
    url: "/commonservice",
    imageUrl: "/assets/webdevelopment.png",
    subLink: [
      { id: 1, url: "/commonservice", text: "UI/UX Design", data: "Crafting seamless and engaging user experiences." },
      { id: 2, url: "/commonservice", text: "Website Maintenance", data: "Ensuring your site remains updated and secure." },
      { id: 3, url: "/commonservice", text: "Responsive Design", data: "Designing for optimal performance on any device." },
      { id: 4, url: "/commonservice", text: "API Integration", data: "Connecting systems for seamless data exchange." },
    ],
  },
  {
    id: 2,
    name: "Mobile App Development",
    description: "We provide expert mobile app development services, including custom app design, iOS and Android development, cross-platform solutions, UI/UX optimization, performance enhancement, backend integration, testing, and ongoing support to create intuitive, scalable, and high-performance mobile applications tailored to your business requirements.",
    icon: <FaMobileAlt size={30} color="#211da6e8"/>,
    url: "/commonservice",
    imageUrl: "/assets/mobiledevelopment.png",
    subLink: [
      { id: 1, url: "/commonservice", text: "Android Development", data: "Building robust apps for Android platforms." },
      { id: 2, url: "/commonservice", text: "iOS Development", data: "Delivering sleek and efficient iOS applications." },
      { id: 3, url: "/commonservice", text: "App UI/UX Design", data: "Ensuring user-centric and intuitive app designs." },
      { id: 4, url: "/commonservice", text: "App Support", data: "Ongoing maintenance for optimal performance." },
    ],
  },
  {
    id: 3,
    name: "Window/macOS/TVOS App",
    description: "We specialize in developing custom applications for Windows, macOS, and TVOS platforms. Our services include app design, development, UI/UX optimization, cross-platform compatibility, performance enhancement, and ongoing maintenance to create intuitive, responsive, and feature-rich applications tailored to your business needs across desktop and TV devices.",
    icon: <FaTv size={30} color="#211da6e8"/>,
    url: "",
    imageUrl: "/assets/windowdevelopment.png",
    subLink: [
      { id: 1, url: "/commonservice", text: "Problem Solving", data: "Strategic solutions to anticipate potential issues." },
      { id: 2, url: "/commonservice", text: "Innovative Solutions", data: "Creative approaches for long-term scalability." },
      { id: 3, url: "/commonservice", text: "Product Development", data: "From concept to launch, we ensure quality." },
    ],
  },
  {
    id: 4,
    name: "Product Engineering Services",
    description: "We offer end-to-end product engineering services, including product design, development, testing, and deployment. Our team specializes in building scalable, high-performance products across various platforms, focusing on innovation, quality assurance, and continuous optimization to deliver exceptional user experiences and meet your business goals efficiently.",
    icon: <MdOutlineVideoSettings size={30} color="#211da6e8"/>,
    url: "/commonservice",
     imageUrl: "/assets/productengineering.avif",
    subLink: [
      { id: 1, url: "/commonservice", text: "Problem Solving", data: "Strategic solutions to anticipate potential issues." },
      { id: 2, url: "/commonservice", text: "Innovative Solutions", data: "Creative approaches for long-term scalability." },
      { id: 3, url: "/commonservice", text: "Product Development", data: "From concept to launch, we ensure quality." },
    ],
  },
  {
    id: 5,
    name: "Consultancy",
    description: "We provide expert consultancy services, offering strategic advice and insights across various industries. Our team helps businesses with technology adoption, process optimization, product development, and digital transformation, ensuring tailored solutions to drive growth, innovation, and long-term success.",
    icon: <FaRegHandshake size={30} color="#211da6e8"/>,
    url: "/commonservice",
     imageUrl: "/assets/consulant.avif",
    subLink: [
      { id: 1, url: "/commonservice", text: "Cloud Migration", data: "Seamless transitions to secure cloud platforms." },
      { id: 2, url: "/commonservice", text: "AI/ML Infrastructure", data: "Building reliable frameworks for AI/ML applications." },
      { id: 3, url: "/commonservice", text: "Modernization", data: "Upgrading systems for enhanced functionality." },
      { id: 4, url: "/commonservice", text: "Cloud-Native Dev", data: "Optimized solutions for scalable applications." },
      { id: 5, url: "/commonservice", text: "DevOps", data: "Streamlining workflows for efficient development." },
    ],
  },
  {
    id: 6,
    name: "Advertising and Marketing",
    description: "We offer comprehensive advertising and marketing services, including digital marketing, SEO, social media strategy, content creation, brand positioning, and targeted campaigns. Our goal is to enhance your brand visibility, drive engagement, and increase conversions, ensuring measurable results and sustainable growth for your business.",
    icon: <TbSpeakerphone size={30} color="#211da6e8"/>,
    url: "/commonservice",
     imageUrl: "/assets/marketing.avif",
    subLink: [
      { id: 1, url: "/commonservice", text: "Content Marketing", data: "Attracting and engaging audiences with valuable content." },
      { id: 2, url: "/commonservice", text: "Social Media", data: "Building brand presence on social platforms." },
      { id: 3, url: "/commonservice", text: "Email Campaigns", data: "Delivering targeted messages to your audience." },
      { id: 4, url: "/commonservice", text: "SEO", data: "Boosting visibility with optimized web content." },
      { id: 5, url: "/commonservice", text: "PPC Advertising", data: "Driving traffic with strategic ad placements." },
    ],
  },
];



// export const servicesData = [
//   {
//     id: 1,
//     name: "Web App Development",
//     description:
//       "Transforming Data into Intelligence Harness the power of artificial intelligence and machine learning to unlock new opportunities and drive innovation. Our AI solutions are designed to enhance decision-making, optimize operations, and deliver personalized experiences. From predictive analytics to natural language processing, we have the expertise to turn your data into actionable insights",
//     icon: "/assets/aimlicon.webp",
//     url: "",
//     subLink: [
//       {
//         id: 1,
//         url: "/commonservice",
//         text: "UI/UX Design",
//         data: "Our Data Science experts will turn raw data into actionable insights that drive growth and innovation.",
//       },
//       {
//         id: 2,
//         url: "/commonservice",
//         text: "Website Maintenance and Support",
//         data: "Our GenAI experts will help you use GenAI to address diverse business challenges with deep expertise.",
//       },
//       {
//         id: 3,
//         url: "/commonservice",
//         text: "Responsive Design",
//         data: "Our experts develop Conversational AI solutions to boost efficiency and deliver exceptional customer experiences.",
//       },
//       {
//         id: 4,
//         url: "/commonservice",
//         text: "API Integration",
//         data: "We unlock ML's potential through MLOps by streamlining workflows, optimizing resources, and mitigating risks.",
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: "Mobile App Development",
//     description:
//       "Scalable, Secure, and Efficient Cloud Solutions Embrace the future with our cloud engineering services. We help businesses migrate to the cloud, optimize their cloud infrastructure, and implement robust security measures. Our cloud solutions are designed for scalability, ensuring your business can grow seamlessly while maintaining operational efficiency.",
//     icon: "/assets/datascienceicon.webp",
//     url: "",
//     subLink: [
//       {
//         id: 1,
//         url: "/commonservice",
//         text: "Android App Development ",
//         data: "Our Data Science experts will help your team extract unsurfaced insights, transforming raw data into actionable knowledge that drives growth, innovation, and success.",
//       },
//       {
//         id: 2,
//         url: "/commonservice",
//         text: "OS App Development",
//         data: "Our GenAI experts, armed with deep technical expertise, will provide guidance in leveraging GenAI’s capabilities to address a wide range of business challenges and opportunities.",
//       },
//       {
//         id: 3,
//         url: "/commonservice",
//         text: "App UI/UX Design",
//         data: "Our experts develop Conversational AI-powered journeys that drive operational efficiency and deliver optimal experiences for your customers.",
//       },
//       {
//         id: 4,
//         url: "/commonservice",
//         text: "App Maintenance and Support",
//         data: "Enhance error handling to ensure the application can correctly display and react to any issues.",
//       },
//       // {
//       //   id: 5,
//       //   url: "/commonservice",
//       //   text: "Website Development",
//       //   data: "Enhance error handling to ensure the application can correctly display and react to any issues.",
//       // },
//       // {
//       //   id: 6,
//       //   url: "/commonservice",
//       //   text: "Website Development",
//       //   data: "Enhance error handling to ensure the application can correctly display and react to any issues.",
//       // },
//     ],
//   },
//   {
//     id: 3,
//     name: "Product Engineering Services",
//     description:
//       "Making Data Work for You Turn raw data into meaningful insights with our advanced analytics and visualization services. We provide comprehensive data analysis, custom reporting, and interactive dashboards that enable you to make informed decisions and identify trends quickly.",
//     icon: "/assets/data-analysis.webp",
//     url: "",
//     subLink: [
//       {
//         id: 1,
//         url: "/commonservice",
//         text: "Proactive Problem Solving",
//         data: "By understanding both current market trends and future needs, we deliver strategic solutions that anticipate potential hurdles, ensuring smooth execution throughout the product lifecycle.",
//       },
//       {
//         id: 2,
//         url: "/commonservice",
//         text: "Innovation with Purpose",
//         data: "We leverage our deep technical expertise and creativity to craft innovative solutions that not only solve immediate problems but also address future challenges, ensuring long-term sustainability and scalability.",
//       },
//       {
//         id: 3,
//         url: "/commonservice",
//         text: "End-to-End Product Development",
//         data: "From ideation to deployment, we handle every stage of product development, ensuring seamless execution by integrating industry knowledge and technical expertise to create products that stand out in the market.",
//       },
//       // {
//       //   id: 4,
//       //   url: "/commonservice",
//       //   text: "Website Development",
//       //   data: "Enhance error handling to ensure the application can correctly display and react to any issues.",
//       // },
//       // {
//       //   id: 5,
//       //   url: "/commonservice",
//       //   text: "Website Development",
//       //   data: "Enhance error handling to ensure the application can correctly display and react to any issues.",
//       // },
//       // {
//       //   id: 6,
//       //   url: "/commonservice",
//       //   text: "Website Development",
//       //   data: "Enhance error handling to ensure the application can correctly display and react to any issues.",
//       // },
//     ],
//   },
//   {
//     id: 4,
//     name: "Consultancy",
//     description:
//       "Crafting Exceptional Online Experiences Your website is often the first impression customers have of your business. We specialize in creating responsive, user-friendly, and visually appealing websites that engage visitors and drive conversions. Our web development team ensures your site is optimized for performance and security.",
//     icon: "/assets/cloudengineering.webp",
//     url: "",
//     subLink: [
//       {
//         id: 1,
//         url: "/commonservice",
//         text: "Cloud Migration",
//         data: "Our Data Science experts will help your team extract unsurfaced insights, transforming raw data into actionable knowledge that drives growth, innovation, and success.",
//       },
//       {
//         id: 2,
//         url: "/commonservice",
//         text: "Infrastructure For AI/ML",
//         data: "Our GenAI experts, armed with deep technical expertise, will provide guidance in leveraging GenAI’s capabilities to address a wide range of business challenges and opportunities.",
//       },
//       {
//         id: 3,
//         url: "/commonservice",
//         text: "Appliction Modernization",
//         data: "Our experts develop Conversational AI-powered journeys that drive operational efficiency and deliver optimal experiences for your customers.",
//       },
//       {
//         id: 4,
//         url: "/commonservice",
//         text: "Cloud-Native Development",
//         data: "Through ML and LLMOps we help businesses unlock the full potential of ML by streamlining workflows, optimizing resources, and mitigating risks.",
//       },
//       {
//         id: 5,
//         url: "/commonservice",
//         text: "DevOps",
//         data: "Our expert software and AI/ML engineers transform your AI product vision into reality, with our cloud-native software development and deep AI/ML development expertise.",
//       },
//       // {
//       //   id: 6,
//       //   url: "/commonservice",
//       //   text: "Website Development",
//       //   data: "Enhance error handling to ensure the application can correctly display and react to any issues.",
//       // },
//     ],
//   },
//   {
//     id: 5,
//     name: "Advertising and Marketing",
//     description:
//       "Innovating on the Go Stay connected with your customers wherever they are with our mobile app development services. We create intuitive, high-performance mobile applications for both iOS and Android platforms, tailored to meet your specific business requirements and enhance user engagement.",
//     icon: "/assets/managedsolutions.webp",
//     url: "",
//     subLink: [
//       {
//         id: 1,
//         url: "/commonservice",
//         text: "Content Marketing",
//         data: "Creating and distributing valuable content (such as blog posts, videos, infographics, and eBooks) to attract, engage, and educate your target audience. The goal is to build trust and authority while nurturing long-term relationships with customers.",
//       },
//       {
//         id: 2,
//         url: "/commonservice",
//         text: "Social Media Marketing",
//         data: "Leveraging platforms like Facebook, Instagram, LinkedIn, Twitter, and TikTok to build brand awareness, engage with your audience, and drive traffic to your website. Social media marketing includes organic posts, paid ads, influencer partnerships, and community building.",
//       },
//       {
//         id: 3,
//         url: "/commonservice",
//         text: "Email Marketing",
//         data: "Sending targeted messages to a list of subscribers or potential customers through email. It can include newsletters, promotional offers, product updates, and personalized communications aimed at nurturing leads and driving conversions.",
//       },
//       {
//         id: 4,
//         url: "/commonservice",
//         text: "Search Engine Optimization (SEO)",
//         data: "Optimizing your website and content to rank higher in search engine results pages (SERPs). SEO involves on-page, off-page, and technical optimizations that help increase organic traffic, making your business more visible to potential customers searching for relevant keywords.",
//       },
//       {
//         id: 5,
//         url: "/commonservice",
//         text: "Pay-Per-Click (PPC) Advertising",
//         data: "Running paid ads on search engines (like Google Ads) or social media platforms, where you pay only when a user clicks on your ad. PPC can be a quick way to generate leads and traffic by targeting specific keywords and audience segments.",
//       },
//       // {
//       //   id: 6,
//       //   url: "/commonservice",
//       //   text: "Website Development",
//       //   data: "Enhance error handling to ensure the application can correctly display and react to any issues.",
//       // },
//     ],
//   },
// ];
