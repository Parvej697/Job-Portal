import {  IconMapPin, IconRecharging, IconSearch } from "@tabler/icons-react";

export const searchFields = [
  {
    title: "Job Title",
    icon: IconSearch,
    options: [
      "Designer",
      "Developer",
      "Product Manager",
      "Marketing Specialist",
      "Data Analyst",
      "Sales Executive",
      "Content Writer",
      "Customer Support"
    ]
  },
  {
    title: "Location",
    icon: IconMapPin,
    options: [
      "Delhi",
      "New York",
      "San Francisco",
      "London",
      "Berlin",
      "Tokyo",
      "Sydney",
      "Toronto"
    ]
  },
  {
    title: "Skills",
    icon: IconRecharging,
    options: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Angular",
      "Node.js",
      "Python",
      "Java",
      "Ruby",
      "PHP",
      "SQL",
      "MongoDB",
      "PostgreSQL",
      "Git",
      "API Development",
      "Testing and Debugging",
      "Agile Methodologies",
      "DevOps",
      "AWS",
      "Azure",
      "Google Cloud"
    ]
  }
]

export const profile = [
  {
  name: "Aarav Sharma",
  role: "Full Stack Developer",
  company: "Google",
  location: "Bangalore, India",
  about: "I am a passionate Full Stack Developer with over 5 years of experience building scalable and maintainable web applications. I specialize in React for front-end development and Spring Boot for backend services. I enjoy solving real-world problems with clean and efficient code and thrive in team environments that foster learning and collaboration.",
  skills: [
    "React",
    "JavaScript",
    "TypeScript",
    "Spring Boot",
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "HTML",
    "CSS",
    "Docker",
    "Git", 
    "REST APIs"
  ],
  experiences: [
    {
      title: "Senior Software Engineer",
      company: "Spotify",
      location: "Bangalore",
      startDate: "May 2022",
      endDate: "Present",
      description: "Leading a team of 4 developers to build a microservice-based ERP solution using Spring Boot and React. Optimized RESTful APIs for performance and collaborated with frontend team for feature rollout."
    },
    {
      title: "Software Engineer",
      company: "Meta",
      location: "Hyderabad",
      startDate: "Jan 2020",
      endDate: "Apr 2022",
      description: "Worked on a large-scale e-commerce platform handling frontend development with React and Redux. Integrated secure payment gateways and optimized site performance by 30%."
    }
  ],
  certifications: [
    {
      name: "Full Stack Web Development",
      issuer: "Microsoft",
      issueDate: "Mar 2021",
      certificateId:"MSI49567AZ"
    },
    {
      name: "Docker Essentials",
      issuer: "Amazon",
      issueDate: "Aug 2022",
      certificateId:"CB386867GG"
    }
  ]
}

];
