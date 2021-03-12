/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, 
};

//Home Page
const greeting = {


title: "Raquel Ceron",
  logo_name: "Raquel",
  nickname: "Rakeru2006",
  subTitle:
    "Hello, I am Raquel Ceron, a student at TEC Monterrey, I am a volunteer as a project management assistant in a small company. I am a communications and electronics engineer; I am currently training in and contributing to various open source projects and working on some personal projects. ",
  resumeLink:
    "https://www.linkedin.com/in/raquelcerongarcia/",
  portfolio_repository: "https://github.com/rakeru2006/portfolio-react",

};

const socialMediaLinks = [

  {
    name: "Github",
    link: "https://github.com/rakeru2006",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/raquelcerongarcia/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:rakeru2006@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  
  {
    name: "Instagram",
    link: "https://www.instagram.com/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Relevant tools and technologies including intermediate Excel, Python and R programming, JavaScript, API interactions, SQL",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React, Bootstrap.",
        "⚡ Developing mobile applications using Heroku ",
        "⚡ Creating application backend in Node  ",
        "⚡ Manage Databases MONGO-DB, MySql   ",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud Heroku",
      ],
      softwareSkills: [
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "WIP",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "WIP",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: " Administration - MBAMaster of Business",
      subtitle: "Universidad de Guadalajara",
      logo_path: "biet_logo.png",
      alt_name: "udg",
      duration: "2011 - 2013",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I secured first place in Hackathon with over 100 participants for coming up with the idea of Agrodrone. Though agrodrones already exist, our model is more affordable and efficient.",
      ],
      website_link: "https://www.udg.mx/",
    },
    {
      title: " Bachelor of Engineering - BE",
      subtitle: "Instituto Politécnico Nacional",
      logo_path: "biet_logo.png",
      alt_name: "ipn",
      duration: "2000 - 2004",
      descriptions: [
        "⚡ I have studied Electrical, Electronics and Communications Engineering ",
        "⚡ I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
      ],
      website_link: "https://www.ipn.mx/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "PMO",
      subtitle: "Netec",
      logo_path: "USD_logo.png",
      certificate_link:
        "https://www.netec.com/",
      alt_name: "pmo",
      color_code: "#D83B0199",
    }, 
    {
      title: "Bootcamp Web Develop",
      subtitle: "TEC Monterey",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://bootcamp.tec.mx/coding/",
      alt_name: "Web Develop",
      color_code: "#00000099",
    },
    {
      title: " Dreamweaver",
      subtitle: " CCSF ",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.ccsf.edu/",
      alt_name: "Dreamweaver",
      color_code: "#4285F499",
    },
    {
      title: "WordPress",
      subtitle: "Coursera ",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://coursera.org",
      alt_name: "Word Press",
      color_code: "#00000099",
    },    
    {
      title: "Front-End Responsive with  Materialize",
      subtitle: "Udemy ",
      logo_path: "HKU.jpg",
      certificate_link:
        "https://www.udemy.com/",
      alt_name: "Materialize",
      color_code: "#00000099",
    },
    {
      title: "Linux Vi",
      subtitle: "The Linux Foundation",
      logo_path: "Tlf_logo.png",
      certificate_link:
        "https://www.linuxfoundation.org/",
      alt_name: "The Linux Foundation",
      color_code: "#0C9D5899",
    },

  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "WIP.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "WIP",
          company: "WIP.",
          company_url: "WIP",
          logo_path: "hfil_logo.png",
          duration: "November 2020 - PWIPresent",
          location: "WIP",
          description:
            "WIP.",
          color: "#ee3c26",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "WIP",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will try to reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs to study",
    subtitle:
      "I want to share some to otrers can learn easy way For individual fundamental empowerment.",
    link: "https://rakeru2006.github.io/cursochkp/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "San Antonio, Texas",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/vt/data=9MoWIxqvnlO-3EWjeUs0vK_5vT8SlMEGCMZ6qUp0eGIPuh-fvRgWA9jqRpnYsT_HzZPhxSKUNct6AUqX61XhHBy5ON4EW0gW9RUIKs29g3gce5tU0Bg0sGabE4-KQy4zQIZ8NW8PHsGEyEV5lKS4Q5h2MBnm-_ExueTE5QOr-x7K9P92t09K7tHEk-DyY4WCMimfoUn8ZERIuEWKJOXOnYKDlMzvt2c4sLt-XdI7IAk4aW__NSD9EMeboZU",
  },
  phoneSection: {
    title: "Phone Number Tempral",
    subtitle: "+415 200 83 83",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
