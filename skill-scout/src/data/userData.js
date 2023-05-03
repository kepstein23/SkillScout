import profilePictures from '../img/profilePictures';

const users = [
    {
        name: "Zohaib Corrigan-Scantling",
        title: "Frontend Engineer",
        profilePic: profilePictures.zohaib,
        skills: [{ name: "Java", progress: "90%" }, { name: "CSS", progress: "50%" }],
        interests: ["CSS", "Frontend", "Design", "Testing", "Java", "React"],
        achievements: ["achievement", "achievement", "achievement"],
        bio: "Frontend Engineer with expertise in React, CSS, and HTML. Passionate about creating beautiful and engaging user interfaces. Interested in data analytics, algorithms, and animation",
        pastProjects: [
            {
                name: "Project Apollo",
                description: "As part of the Project Apollo initiative, I helped design and develop an innovative frontend solution for a data-driven web application. I focused on creating responsive UI components using React and optimized CSS animations."
            },
            {
                name: "Design System Revamp",
                description: "I collaborated with the design team to revamp our company's design system, improving the overall UI/UX consistency across our products. I implemented the new design language in our frontend codebase and documented best practices."
            }
        ],
        availability: [
            { day: "Monday", start: "1:00", end: "2:00", period: "PM" },
            { day: "Tuesday", start: "4:30", end: "5:30", period: "PM" },
            { day: "Wednesday", start: "12:30", end: "2:00", period: "PM" }
        ]
    },
    {
        name: "Grace Lin",
        title: "Data Analyst",
        profilePic: profilePictures.grace,
        skills: [
            { name: "Python", progress: "90%" },
            { name: "SQL", progress: "80%" },
            { name: "Data Visualization", progress: "75%" },
        ],
        interests: ["Data Analysis", "Machine Learning", "Big Data", "Statistics"],
        achievements: ["Certified Data Analyst", "Data Science Competition Winner", "Published Research Paper"],
        bio: "Data Analyst with expertise in data analysis, statistics, and visualization. Passionate about exploring data to uncover insights and drive decision-making. Experienced in using tools such as Excel, Tableau, and Python for data analysis. Interested in machine learning, data mining, and predictive modeling.",
        pastProjects: [
            {
                name: "Data Insights Pipeline",
                description: "I designed and implemented a data insights pipeline that automated the analysis of large datasets for a company-wide initiative. Using Python and SQL, I optimized data processing and created dynamic visualizations using Tableau."
            },
            {
                name: "Market Segmentation Study",
                description: "I conducted a market segmentation study to identify key customer segments and their preferences, which informed the development of targeted marketing strategies. I applied statistical methods to analyze customer data and presented the results to stakeholders."
            }
        ],
        availability:
            [
                { day: "Monday", start: "1:30", end: "2:00", period: "PM" },
                { day: "Wednesday", start: "3:30", end: "5:00", period: "PM" },
                { day: "Friday", start: "12:00", end: "2:00", period: "PM" }
            ]
    },
    {
        name: "Mark Johnson",
        title: "Head Researcher",
        profilePic: profilePictures.mark,
        skills: [
            { name: "Research Methodology", progress: "95%" },
            { name: "Python", progress: "80%" },
            { name: "Project Management", progress: "85%" },
        ],
        interests: ["Scientific Research", "Innovation", "AI", "Data Science"],
        achievements: ["Best Research Paper Award", "Research Grant Recipient", "Innovative Research Award"],
        bio: "Head Researcher with expertise in research methodology, project management, and data analysis. Passionate about using data to drive innovation and decision-making. Experienced in leading research teams and managing projects. Interested in AI, machine learning, and data science.",
        pastProjects: [
            {
                name: "AI for Healthcare",
                description: "I led a research team to develop AI-driven solutions for healthcare, focusing on early diagnosis and personalized treatment. We employed machine learning techniques and worked closely with medical professionals to validate our models."
            },
            {
                name: "Project Quantum",
                description: "As the head researcher, I managed a multidisciplinary team working on Project Quantum, a cutting-edge initiative that aimed to revolutionize computing through the development of novel algorithms and architectures."
            }
        ],
        availability:
            [
                { day: "Thursday", start: "4:30", end: "6:00", period: "PM" },
                { day: "Friday", start: "5:00", end: "7:30", period: "PM" }
            ]

    },
    {
        name: "Emma Thompson",
        title: "Backend Engineer",
        profilePic: "https://randomuser.me/api/portraits/women/90.jpg",
        skills: [
            { name: "Node.js", progress: "80%" },
            { name: "Python", progress: "70%" },
            { name: "Django", progress: "60%" }
        ],
        interests: ["APIs", "Microservices", "Scalability", "Security"],
        achievements: ["Backend Developer of the Year", "Contributor to Open Source Project", "Speaker at Developer Conference"],
        bio: "Backend Engineer with expertise in Node.js, Python, and Django. Passionate about building efficient and scalable applications. Experienced in API design, microservices, and security best practices. Interested in cloud computing, serverless architecture, and containerization.",
        pastProjects: [
            {
                name: "Microservices Migration",
                description: "I played a key role in migrating a monolithic application to a microservices architecture, improving scalability and maintainability. I developed APIs using Node.js and Python, and ensured adherence to best practices for security and performance."
            },
            {
                name: "Project Vulcan",
                description: "I contributed to the development of a high-performance backend system for Project Vulcan, a company-wide initiative that required processing and serving large amounts of data. I implemented caching and database optimizations to ensure efficiency."
            }
        ],
        availability: [
            { day: "Monday", start: "10:00", end: "11:30", period: "AM" },
            { day: "Wednesday", start: "3:00", end: "5:00", period: "PM" },
            { day: "Friday", start: "9:00", end: "10:30", period: "AM" }
        ]
    },
    {
        name: "Margaret Thompson",
        title: "Professor of Physics",
        profilePic: "https://randomuser.me/api/portraits/women/62.jpg",
        skills: [
            { name: "Quantum Mechanics", progress: "90%" },
            { name: "Statistical Mechanics", progress: "80%" },
            { name: "Electromagnetism", progress: "75%" },
        ],
        interests: ["Theoretical Physics", "Quantum Computing", "Science Outreach"],
        achievements: ["Nobel Prize in Physics", "Fellow of the Royal Society", "Breakthrough Prize in Fundamental Physics"],
        bio:
            "Professor of Physics with expertise in theoretical physics and quantum computing. Passionate about advancing our understanding of the fundamental laws of nature. Experienced in teaching and mentoring students in physics and related fields. Interested in science outreach and communication.",
        pastProjects: [
            {
                name: "Quantum Gravity Unification",
                description: "I led a research group focused on unifying quantum mechanics and general relativity, working towards a coherent theory of quantum gravity. Our work involved extensive mathematical modeling and cutting-edge computational simulations."
            },
            {
                name: "Physics Outreach Initiative",
                description: "As part of a science outreach initiative, I organized and participated in public lectures, workshops, and educational programs to promote interest in physics and inspire the next generation of scientists."
            }
        ],
        availability: [
            { day: "Monday", start: "1:00", end: "2:30", period: "PM" },
            { day: "Wednesday", start: "3:00", end: "4:30", period: "PM" },
            { day: "Friday", start: "10:00", end: "11:30", period: "AM" },
        ],
    },
    {
        name: "Michael Patel",
        title: "Assistant Professor of Computer Science",
        profilePic: "https://randomuser.me/api/portraits/men/37.jpg",
        skills: [
            { name: "Artificial Intelligence", progress: "90%" },
            { name: "Machine Learning", progress: "80%" },
            { name: "Computer Vision", progress: "75%" },
        ],
        interests: ["Deep Learning", "Robotics", "Data Privacy"],
        achievements: ["Best Paper Award at CVPR", "NSF CAREER Award", "Google Faculty Research Award"],
        bio:
            "Assistant Professor of Computer Science with expertise in artificial intelligence, machine learning, and computer vision. Passionate about developing algorithms that can learn from data and make intelligent decisions. Experienced in teaching and mentoring graduate students in computer science. Interested in robotics and data privacy.",
        pastProjects: [
            {
                name: "Autonomous Robotics",
                description: "I supervised a research group working on autonomous robotics, developing computer vision algorithms and control systems to enable robots to navigate and interact with their environments in a safe and efficient manner."
            },
            {
                name: "Data Privacy in AI",
                description: "I led a research project that focused on ensuring data privacy in AI systems, implementing techniques such as differential privacy and federated learning to protect user data while maintaining model performance."
            }
        ],
        availability: [
            { day: "Monday", start: "9:00", end: "11:00", period: "AM" },
            { day: "Tuesday", start: "1:00", end: "2:30", period: "PM" },
            { day: "Thursday", start: "10:00", end: "11:30", period: "AM" },
        ],
    },
    {
        name: "Oliver Smith",
        title: "Mobile Developer",
        profilePic: "https://randomuser.me/api/portraits/men/32.jpg",
        skills: [
            { name: "Swift", progress: "90%" },
            { name: "Kotlin", progress: "85%" },
            { name: "React Native", progress: "70%" },
        ],
        interests: ["iOS Development", "Android Development", "Cross-Platform", "UI/UX"],
        achievements: ["Published Mobile App", "Google Play Award", "Apple Design Award"],
        bio: "Mobile Developer with expertise in Swift, Kotlin, and React Native. Passionate about creating high-performance and user-friendly mobile applications for both iOS and Android platforms. Experienced in UI/UX design and cross-platform development. Interested in app optimization, accessibility, and app store success.",
        pastProjects: [
            {
                name: "Cross-Platform Fitness App",
                description: "I developed a cross-platform fitness app using React Native, which allowed users to track their workouts and progress on both iOS and Android devices. I focused on optimizing performance and creating an intuitive, user-friendly interface."
            },
            {
                name: "Mobile Game Development",
                description: "I collaborated with a team to develop a mobile game for iOS and Android, using Swift and Kotlin respectively. I implemented game mechanics, UI elements, and ensured a smooth user experience across different device types."
            }
        ],
        availability: [
            { day: "Tuesday", start: "2:00", end: "3:30", period: "PM" },
            { day: "Thursday", start: "10:30", end: "12:00", period: "PM" },
            { day: "Friday", start: "4:00", end: "6:00", period: "PM" }
        ]
    },
    {
        name: "Sophia Martinez",
        title: "DevOps Engineer",
        profilePic: "https://randomuser.me/api/portraits/women/45.jpg",
        skills: [
            { name: "AWS", progress: "85%" },
            { name: "Docker", progress: "80%" },
            { name: "CI/CD", progress: "75%" },
        ],
        interests: ["Infrastructure", "Automation", "Monitoring", "Performance"],
        achievements: ["AWS Certified DevOps Engineer", "Speaker at DevOps Conference", "Implemented CI/CD Pipeline"],
        bio: "DevOps Engineer with expertise in AWS, Docker, and CI/CD. Passionate about automating and streamlining processes to enable faster and more reliable software delivery. Experienced in infrastructure management, monitoring, and performance optimization. Interested in cloud computing, containerization, and distributed systems.",
        pastProjects: [
            {
                name: "Infrastructure Automation",
                description: "I implemented infrastructure-as-code (IAC) practices using AWS CloudFormation and Terraform to automate the provisioning and management of our cloud infrastructure, improving the efficiency of our DevOps processes."
            },
            {
                name: "Continuous Deployment Pipeline",
                description: "I designed and set up a continuous deployment pipeline using Jenkins and Docker, enabling faster and more reliable software releases. I integrated automated testing, performance monitoring, and rollback mechanisms to ensure stability."
            }
        ],
        availability: [
            { day: "Monday", start: "1:00", end: "3:00", period: "PM" },
            { day: "Wednesday", start: "9:00", end: "11:00", period: "AM" },
            { day: "Friday", start: "2:00", end: "4:00", period: "PM" }
        ]
    },
    {
        name: "Liam Brown",
        title: "UX/UI Designer",
        profilePic: "https://randomuser.me/api/portraits/men/58.jpg",
        skills: [
            { name: "Sketch", progress: "90%" },
            { name: "Figma", progress: "85%" },
            { name: "Adobe XD", progress: "80%" },
        ],
        interests: ["User Experience", "User Interface", "Interaction Design", "Wireframing"],
        achievements: ["UX Design Award", "Featured in Design Magazine", "Designed Top-rated App"],
        bio: "UX/UI Designer with expertise in Sketch, Figma, and Adobe XD. Passionate about creating visually appealing and user-centric designs. Experienced in wireframing, prototyping, and user testing. Interested in accessibility, design systems, and the latest design trends.",
        pastProjects: [
            {
                name: "E-commerce Website Redesign",
                description: "I led the UX/UI design for the redesign of an e-commerce website, focusing on improving user experience, increasing conversion rates, and modernizing the visual design. I conducted user research, developed wireframes, and created high-fidelity prototypes using Sketch and Figma."
            },
            {
                name: "Mobile Banking App",
                description: "I collaborated with a cross-functional team to design a mobile banking app, ensuring a seamless and user-friendly experience. I utilized Adobe XD for wireframing, prototyping, and user testing, incorporating feedback to iteratively improve the design."
            }
        ],
        availability: [
            { day: "Tuesday", start: "9:00", end: "11:00", period: "AM" },
            { day: "Thursday", start: "2:00", end: "4:00", period: "PM" },
            { day: "Saturday", start: "11:00", end: "1:00", period: "PM" }
        ]
    },
    {
        name: "Ava Wilson",
        title: "Laboratory Manager",
        profilePic: "https://randomuser.me/api/portraits/women/62.jpg",
        skills: [
            { name: "Lab Management", progress: "90%" },
            { name: "Quality Assurance", progress: "85%" },
            { name: "Communication", progress: "80%" },
        ],
        interests: ["Operations", "Budget Management", "Resource Allocation", "Safety"],
        achievements: ["Lab of the Year Award", "Safety Excellence Award", "Implemented Cost-saving Measures"],
        bio: "Laboratory Manager with expertise in lab operations, quality assurance, and communication. Passionate about ensuring a safe and efficient working environment. Experienced in budget management, resource allocation, and safety protocols. Interested in continuous improvement, staff training, and maintaining high-quality standards.",
        pastProjects: [
            {
                name: "Lab Expansion Project",
                description: "I managed the expansion of a laboratory facility, overseeing budgeting, resource allocation, and personnel management. I implemented cost-saving measures and streamlined operations, resulting in a more efficient and productive lab environment."
            },
            {
                name: "Quality Assurance Program",
                description: "I developed and led a comprehensive quality assurance program, focusing on improving safety and adherence to regulatory standards. This program resulted in the lab receiving the Safety Excellence Award and increased overall operational efficiency."
            }
        ],
        availability: [
            { day: "Monday", start: "10:00", end: "12:00", period: "AM" },
            { day: "Wednesday", start: "3:00", end: "5:00", period: "PM" },
            { day: "Friday", start: "1:00", end: "3:00", period: "PM" }
        ]
    },
    {
        name: "Noah Garcia",
        title: "Biomedical Engineer",
        profilePic: "https://randomuser.me/api/portraits/men/77.jpg",
        skills: [
            { name: "Biomedical Engineering", progress: "90%" },
            { name: "Prototyping", progress: "80%" },
            { name: "Data Analysis", progress: "75%" },
        ],
        interests: ["Medical Devices", "Tissue Engineering", "Biomaterials", "Biomechanics"],
        achievements: ["Patent Holder", "Published Research Articles", "Medical Device Award"],
        bio: "Biomedical Engineer with expertise in biomedical engineering, prototyping, and data analysis. Passionate about developing innovative medical devices and technologies. Experienced in tissue engineering, biomaterials, and biomechanics. Interested in translational research, biocompatibility, and improving patient outcomes.",
        pastProjects: [
            {
                name: "Innovative Prosthetic Device",
                description: "I designed and developed a novel prosthetic device using tissue engineering and biomaterials. I prototyped and tested the device, collected and analyzed data, and collaborated with interdisciplinary teams to refine the design, resulting in a patent and Medical Device Award."
            },
            {
                name: "Biomechanics Research",
                description: "I conducted research on biomechanics, focusing on improving patient outcomes in orthopedic applications. My work led to the publication of several research articles and contributed to the development of new diagnostic and treatment methods."
            }
        ],
        availability: [
            { day: "Tuesday", start: "11:00", end: "1:00", period: "AM" },
            { day: "Thursday", start: "2:00", end: "4:00", period: "PM" },
            { day: "Friday", start: "9:00", end: "11:00", period: "AM" }
        ]
    },
    {
        name: "Isabella Johnson",
        title: "Microbiologist",
        profilePic: "https://randomuser.me/api/portraits/women/89.jpg",
        skills: [
            { name: "Microbiology", progress: "95%" },
            { name: "Molecular Biology", progress: "85%" },
            { name: "Cell Culture", progress: "80%" },
        ],
        interests: ["Pathogens", "Antibiotics", "Immunology", "Genetics"],
        achievements: ["Author of Peer-reviewed Publications", "Conference Speaker", "Research Grant Recipient"],
        bio: "Microbiologist with expertise in microbiology, molecular biology, and cell culture. Passionate about investigating pathogens and their interactions with hosts. Experienced in antibiotic resistance, immunology, and genetics. Interested in disease prevention, novel therapeutics, and diagnostics.",
        pastProjects: [
            {
                name: "Antibiotic Resistance Study",
                description: "I led a research project investigating antibiotic resistance in bacterial pathogens, using molecular biology and genetics techniques. My work contributed to the development of novel therapeutics and diagnostics, and resulted in multiple peer-reviewed publications."
            },
            {
                name: "Immunology Research",
                description: "I conducted research on the immune system's response to bacterial infections, focusing on understanding the mechanisms of host-pathogen interactions. My findings were presented at conferences and published in scientific journals."
            }
        ],
        availability: [
            { day: "Monday", start: "1:00", end: "3:00", period: "PM" },
            { day: "Wednesday", start: "10:00", end: "12:00", period: "AM" },
            { day: "Friday", start: "2:00", end: "4:00", period: "PM" }
        ]
    },
    {
        name: "Mason Taylor",
        title: "Bioinformatician",
        profilePic: "https://randomuser.me/api/portraits/men/91.jpg",
        skills: [
            { name: "Bioinformatics", progress: "90%" },
            { name: "Python", progress: "85%" },
            { name: "R", progress: "80%" },
        ],
        interests: ["Genomics", "Proteomics", "Metagenomics", "Machine Learning"],
        achievements: ["Developed Bioinformatics Tool", "Published Research Articles", "Data Analysis Award"],
        bio: "Bioinformatician with expertise in bioinformatics, Python, and R. Passionate about analyzing biological data to uncover patterns and insights. Experienced in genomics, proteomics, and metagenomics. Interested in machine learning applications, big data, and interdisciplinary research.",
        pastProjects: [
            {
                name: "Genomic Data Analysis",
                description: "I developed a bioinformatics tool for analyzing large-scale genomic data using Python and R. My work enabled researchers to uncover patterns and insights in complex biological datasets, contributing to advancements in genomics and proteomics research."
            },
            {
                name: "Metagenomics Project",
                description: "I led a metagenomics project, analyzing microbial communities in various environments. I applied machine learning techniques to identify trends and relationships, resulting in the publication of several research articles."
            }
        ],
        availability: [
            { day: "Tuesday", start: "9:00", end: "11:00", period: "AM" },
            { day: "Thursday", start: "1:00", end: "3:00", period: "PM" },
            { day: "Saturday", start: "10:00", end: "12:00", period: "AM" }
        ]
    },
    {
        name: "Olivia Williams",
        title: "Neuroscientist",
        profilePic: "https://randomuser.me/api/portraits/women/26.jpg",
        skills: [
            { name: "Neuroscience", progress: "95%" },
            { name: "Electrophysiology", progress: "85%" },
            { name: "Imaging", progress: "80%" },
        ],
        interests: ["Cognition", "Neural Networks", "Synaptic Plasticity", "Neurodegenerative Diseases"],
        achievements: ["Author of Peer-reviewed Publications", "Conference Speaker", "Research Fellowship"],
        bio: "Neuroscientist with expertise in neuroscience, electrophysiology, and imaging. Passionate about understanding the brain and its mechanisms. Experienced in studying cognition, neural networks, and synaptic plasticity. Interested in neurodegenerative diseases, brain-computer interfaces, and neural engineering.",
        pastProjects: [
            {
                name: "Cognitive Neuroscience Research",
                description: "I conducted research on the neural mechanisms underlying cognitive processes, using electrophysiology and imaging techniques. My work led to the publication of several peer-reviewed articles and presentations at scientific conferences."
            },
            {
                name: "Neurodegenerative Disease Study",
                description: "I investigated the molecular and cellular mechanisms of neurodegenerative diseases, with the aim of identifying potential therapeutic"
            }
        ],
        availability: [
            { day: "Monday", start: "2:00", end: "4:00", period: "PM" },
            { day: "Wednesday", start: "9:00", end: "11:00", period: "AM" },
            { day: "Friday", start: "1:00", end: "3:00", period: "PM" }
        ]
    },
    {
        name: "Jasmine Johnson",
        title: "UX Designer",
        profilePic: "https://randomuser.me/api/portraits/women/42.jpg",
        skills: [
            { name: "User Research", progress: "90%" },
            { name: "Prototyping", progress: "80%" },
            { name: "Usability Testing", progress: "75%" },
        ],
        interests: ["UX Design", "Human-Computer Interaction", "Visual Design", "Product Management"],
        achievements: ["UX Design Award", "Published Design Case Study"],
        bio:
            "UX Designer with expertise in user research, prototyping, and usability testing. Passionate about creating intuitive and delightful user experiences. Experienced in using tools such as Sketch, Figma, and InVision for design. Interested in product management and design leadership.",
        pastProjects: [
            {
                name: "Healthcare App UX Design",
                description: "I designed the user experience for a healthcare app, focusing on intuitive navigation, clear visual design, and user engagement. I conducted user research, prototyping, and usability testing to ensure an optimal user experience, which contributed to the app's success."
            },
            {
                name: "E-learning Platform",
                description: "I worked with a team of designers and developers to create an e-learning platform, ensuring a user-centric design and seamless integration with various learning resources. I utilized Sketch, Figma, and InVision to create wireframes, prototypes, and conduct user testing."
            }
        ],
        availability: [
            { day: "Monday", start: "9:00", end: "10:30", period: "AM" },
            { day: "Wednesday", start: "2:00", end: "4:00", period: "PM" },
            { day: "Friday", start: "11:00", end: "12:30", period: "PM" },
        ],
    },
    {
        name: "Samuel Rodriguez",
        title: "Backend Developer",
        profilePic: "https://randomuser.me/api/portraits/men/98.jpg",
        skills: [
            { name: "Java", progress: "90%" },
            { name: "SQL", progress: "80%" },
            { name: "Spring Framework", progress: "75%" },
        ],
        interests: ["Backend Development", "Database Design", "Microservices", "DevOps"],
        achievements: ["Java Certification", "Spring Boot Project Award"],
        bio:
            "Backend Developer with expertise in Java, SQL, and Spring Framework. Passionate about designing scalable and reliable systems. Experienced in building microservices and deploying them with containerization technologies such as Docker and Kubernetes. Interested in database design and DevOps.",
        pastProjects: [
            {
                name: "E-commerce Backend Development",
                description: "I designed and implemented the backend architecture for an e-commerce platform, using Java, SQL, and the Spring Framework. I ensured scalability, reliability, and performance, contributing to the platform's success and positive user experience."
            },
            {
                name: "Microservices Migration",
                description: "I led a project to migrate a monolithic application to a microservices architecture, resulting in improved maintainability, scalability, and resilience. I utilized containerization technologies, such as Docker and Kubernetes, for deployment and orchestrated the development and operations processes."
            }
        ],
        availability: [
            { day: "Tuesday", start: "3:00", end: "5:00", period: "PM" },
            { day: "Thursday", start: "10:00", end: "11:30", period: "AM" },
            { day: "Friday", start: "2:00", end: "3:30", period: "PM" },
        ],
    }


]

export default users;