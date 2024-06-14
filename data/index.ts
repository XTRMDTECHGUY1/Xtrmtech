export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "We prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 text-white md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 text-white-200 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Our tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 text-white-200 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 text-white-200 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center text-white-200 md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 text-white-200  md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Applehills Academy",
    des: "A school with the passion and desire to train learner and inspire minds.",
    img: "/applehill.png",
    iconLists: ["/php-svgrepo-com.svg", "/tail.svg", "/ts.svg","/bootstrap-4-logo-svgrepo-com.svg", ],
    link: "http://applehills.com.ng/",
  },
  {
    id: 2,
    title: "HeadShot Professional AI",
    des: "a project capable of converting images to 4k",
    img: "/head.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/bootstrap-4-logo-svgrepo-com.svg" ],
    link: "https://headshot-ai-website.vercel.app/",
  },
  {
    id: 3,
    title: "Admin Panel Dashboard",
    des: "A project has including chart and other library",
    img: "/admin.png",
    iconLists: ["/vite-svgrepo-com.svg", "/tail.svg", "/ts.svg"],
    link: "https://react-admin-login-c9te.vercel.app/",
  },
  {
    id: 4,
    title: "LandKit Mob",
    des: "Beautiful website for developer intern",
    img: "/land.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://landpage-with-react-m9cj.vercel.app/",
  },

  {
    id: 5,
    title: "Car Stop",
    des: "Beautiful website display of cars to purchase",
    img: "/cars.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://carweb-steel.vercel.app/",
  },
  
];

export const testimonials = [
  {
    quote:
      "Collaborating with Xtrm Tech was an absolute pleasure. Their professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Xtrm's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, XtrmTech is the ideal partner.",
    name: "Amacol",
    title: "Director of Université Bilingue Libre du Togo",
    img:'/iblt-logo.png',
  },
  {
    quote:
      "Thank you for building a database that truly understands our business needs. Your work has streamlined our operations and improved our bottom line, Your dedication to delivering a top-notch database has paid off. Our team is now more productive, and our data is more secure than ever.",
    name: "Applehills Academy",
    title: "Director of Applehills",
    img:'/apa.png',
  },
  
  {
    quote:
      "I really love how XtrmTech balance your passion for tech with your creative flair for design.",
    name: "Geniefollowers",
    title: "CEO of GenieFollowers",
    img:'/genie2.c23c98831711ff85485c.png',
    

  },
 
];

export const companies = [
  {
    id: 1,
    name: "Amacol",
    img: "/iblt-logo.png",
    nameImg: "/ama.svg",
  },
  {
    id: 3,
    name: "GenieFollowers",
    img: "/genie2.c23c98831711ff85485c.png",
    nameImg: "/gene.svg",
  },
  {
    id: 4,
    name: "Seedouf",
    img: "/seed.png",
    nameImg: "/seee.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/apa.png",
    nameImg: "/appe.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - Xtrm Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Software Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/XTRMDTECHGUY1"
  },
  {
    id: 2,
    img: "/insta.svg",
    link: "https://instagram.com/iamyemi_joshua"
  },
  {
    id: 3,
    img: "/you.svg",
    link: "https://youtube.com/XtrmDTechGuy."
  },
];
