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
  icon: <FaTv size={30} color="#211da6e8" />,
  url: "/commonservice",
  imageUrl: "/assets/windowdevelopment.png",
  subLink: [
    
    { id: 1, url: "/commonservice", text: "Cross-Platform Development", data: "Ensuring seamless operation across multiple operating systems." },
    { id: 2, url: "/commonservice", text: "Performance Optimization", data: "Maximizing the app's speed, responsiveness, and efficiency." },
    
   
    { id: 3, url: "/commonservice", text: "App Maintenance & Support", data: "Ongoing support for updates, bug fixes, and feature enhancements." },
    { id: 4, url: "/commonservice", text: "User-Centered Design", data: "Focusing on UI/UX design to enhance user engagement and satisfaction." },
  ],
}
,
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
  icon: <FaRegHandshake size={30} color="#211da6e8" />,
  url: "/consultancy",
  imageUrl: "/assets/consultant.avif",
  subLink: [
    
    { 
      id: 1, 
      url: "/consultancy/digital-transformation", 
      text: "Digital Transformation", 
      data: "Guiding businesses through digital innovations and technology adoption to stay competitive in the modern market." 
    },
    { 
      id: 2, 
      url: "/consultancy/process-optimization", 
      text: "Process Optimization", 
      data: "Improving business processes to maximize efficiency, reduce costs, and streamline operations." 
    },
    { 
      id: 3, 
      url: "/consultancy/product-development", 
      text: "Product Development", 
      data: "Supporting the development of innovative, market-ready products with a focus on user experience and scalability." 
    },
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



