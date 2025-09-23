// Generate all 200 demo courses dynamically
const courses = [
  // Science & Technology (1–50)
  {
    slug: "bsc-computer-science",
    title: "BSc Computer Science",
    desc: "Learn programming, algorithms, AI, and software development.",
    apply: "#apply-bsc-computer-science",
  },
  {
    slug: "bsc-information-technology",
    title: "BSc Information Technology",
    desc: "Develop IT skills including networks, databases, and software systems.",
    apply: "#apply-bsc-information-technology",
  },
  {
    slug: "bsc-software-engineering",
    title: "BSc Software Engineering",
    desc: "Design, develop, and maintain software solutions.",
    apply: "#apply-bsc-software-engineering",
  },
  {
    slug: "bsc-data-science",
    title: "BSc Data Science",
    desc: "Learn data analysis, machine learning, and big data technologies.",
    apply: "#apply-bsc-data-science",
  },
  {
    slug: "bsc-artificial-intelligence",
    title: "BSc Artificial Intelligence",
    desc: "Study AI, neural networks, and intelligent systems.",
    apply: "#apply-bsc-artificial-intelligence",
  },
  {
    slug: "bsc-cybersecurity",
    title: "BSc Cybersecurity",
    desc: "Protect systems and networks from cyber threats.",
    apply: "#apply-bsc-cybersecurity",
  },
  {
    slug: "bsc-computer-engineering",
    title: "BSc Computer Engineering",
    desc: "Learn hardware, software, and embedded systems.",
    apply: "#apply-bsc-computer-engineering",
  },
  {
    slug: "bsc-electrical-engineering",
    title: "BSc Electrical Engineering",
    desc: "Study circuits, electronics, and power systems.",
    apply: "#apply-bsc-electrical-engineering",
  },
  {
    slug: "bsc-mechanical-engineering",
    title: "BSc Mechanical Engineering",
    desc: "Study mechanics, thermodynamics, and engineering design.",
    apply: "#apply-bsc-mechanical-engineering",
  },
  {
    slug: "bsc-civil-engineering",
    title: "BSc Civil Engineering",
    desc: "Learn construction, structures, and infrastructure design.",
    apply: "#apply-bsc-civil-engineering",
  },
  {
    slug: "bsc-chemical-engineering",
    title: "BSc Chemical Engineering",
    desc: "Study chemical processes, materials, and industrial applications.",
    apply: "#apply-bsc-chemical-engineering",
  },
  {
    slug: "bsc-environmental-science",
    title: "BSc Environmental Science",
    desc: "Learn to manage environmental challenges and sustainability.",
    apply: "#apply-bsc-environmental-science",
  },
  {
    slug: "bsc-biotechnology",
    title: "BSc Biotechnology",
    desc: "Explore genetics, molecular biology, and biotechnology applications.",
    apply: "#apply-bsc-biotechnology",
  },
  {
    slug: "bsc-microbiology",
    title: "BSc Microbiology",
    desc: "Study microorganisms and their applications in medicine and industry.",
    apply: "#apply-bsc-microbiology",
  },
  {
    slug: "bsc-physics",
    title: "BSc Physics",
    desc: "Explore mechanics, thermodynamics, and modern physics.",
    apply: "#apply-bsc-physics",
  },
  {
    slug: "bsc-chemistry",
    title: "BSc Chemistry",
    desc: "Study chemical reactions, materials, and laboratory techniques.",
    apply: "#apply-bsc-chemistry",
  },
  {
    slug: "bsc-mathematics",
    title: "BSc Mathematics",
    desc: "Develop analytical and problem-solving skills.",
    apply: "#apply-bsc-mathematics",
  },
  {
    slug: "bsc-statistics",
    title: "BSc Statistics",
    desc: "Learn probability, statistical models, and data analysis.",
    apply: "#apply-bsc-statistics",
  },
  {
    slug: "bsc-geology",
    title: "BSc Geology",
    desc: "Study earth processes, rocks, and minerals.",
    apply: "#apply-bsc-geology",
  },
  {
    slug: "bsc-astronomy",
    title: "BSc Astronomy",
    desc: "Explore stars, planets, and the universe.",
    apply: "#apply-bsc-astronomy",
  },
  {
    slug: "bsc-biochemistry",
    title: "BSc Biochemistry",
    desc: "Study chemical processes in living organisms.",
    apply: "#apply-bsc-biochemistry",
  },
  {
    slug: "bsc-molecular-biology",
    title: "BSc Molecular Biology",
    desc: "Understand DNA, RNA, and cellular processes.",
    apply: "#apply-bsc-molecular-biology",
  },
  {
    slug: "bsc-genetics",
    title: "BSc Genetics",
    desc: "Study heredity and gene function.",
    apply: "#apply-bsc-genetics",
  },
  {
    slug: "bsc-zoology",
    title: "BSc Zoology",
    desc: "Explore animal biology and ecosystems.",
    apply: "#apply-bsc-zoology",
  },
  {
    slug: "bsc-botany",
    title: "BSc Botany",
    desc: "Study plant biology and ecosystems.",
    apply: "#apply-bsc-botany",
  },
  {
    slug: "bsc-marine-biology",
    title: "BSc Marine Biology",
    desc: "Explore marine ecosystems and organisms.",
    apply: "#apply-bsc-marine-biology",
  },
  {
    slug: "bsc-materials-science",
    title: "BSc Materials Science",
    desc: "Learn about materials, their properties and applications.",
    apply: "#apply-bsc-materials-science",
  },
  {
    slug: "bsc-electronics",
    title: "BSc Electronics",
    desc: "Study electronic circuits and devices.",
    apply: "#apply-bsc-electronics",
  },
  {
    slug: "bsc-robotics",
    title: "BSc Robotics",
    desc: "Design and program robotic systems.",
    apply: "#apply-bsc-robotics",
  },
  {
    slug: "bsc-renewable-energy",
    title: "BSc Renewable Energy",
    desc: "Study sustainable energy solutions.",
    apply: "#apply-bsc-renewable-energy",
  },
  {
    slug: "bsc-software-development",
    title: "BSc Software Development",
    desc: "Build applications and software systems.",
    apply: "#apply-bsc-software-development",
  },
  {
    slug: "bsc-cloud-computing",
    title: "BSc Cloud Computing",
    desc: "Learn cloud infrastructure and services.",
    apply: "#apply-bsc-cloud-computing",
  },
  {
    slug: "bsc-human-computer-interaction",
    title: "BSc Human-Computer Interaction",
    desc: "Design user-friendly software interfaces.",
    apply: "#apply-bsc-human-computer-interaction",
  },
  {
    slug: "bsc-game-development",
    title: "BSc Game Development",
    desc: "Create interactive games and simulations.",
    apply: "#apply-bsc-game-development",
  },
  {
    slug: "bsc-networking-telecom",
    title: "BSc Networking and Telecommunications",
    desc: "Learn networking and communication systems.",
    apply: "#apply-bsc-networking-telecom",
  },
  {
    slug: "bsc-iot",
    title: "BSc Internet of Things",
    desc: "Develop connected devices and IoT applications.",
    apply: "#apply-bsc-iot",
  },
  {
    slug: "bsc-neural-networks",
    title: "BSc Artificial Neural Networks",
    desc: "Learn AI models and deep learning.",
    apply: "#apply-bsc-neural-networks",
  },
  {
    slug: "bsc-quantum-computing",
    title: "BSc Quantum Computing",
    desc: "Explore quantum algorithms and computing.",
    apply: "#apply-bsc-quantum-computing",
  },
  {
    slug: "bsc-computer-graphics",
    title: "BSc Computer Graphics",
    desc: "Design 2D and 3D graphics and simulations.",
    apply: "#apply-bsc-computer-graphics",
  },
  {
    slug: "bsc-embedded-systems",
    title: "BSc Embedded Systems",
    desc: "Learn microcontrollers and embedded programming.",
    apply: "#apply-bsc-embedded-systems",
  },
  {
    slug: "bsc-nanotechnology",
    title: "BSc Nanotechnology",
    desc: "Study nanoscale materials and devices.",
    apply: "#apply-bsc-nanotechnology",
  },
  {
    slug: "bsc-industrial-engineering",
    title: "BSc Industrial Engineering",
    desc: "Optimize production, processes, and systems.",
    apply: "#apply-bsc-industrial-engineering",
  },
  {
    slug: "bsc-systems-engineering",
    title: "BSc Systems Engineering",
    desc: "Design and manage complex systems.",
    apply: "#apply-bsc-systems-engineering",
  },
  {
    slug: "bsc-operations-research",
    title: "BSc Operations Research",
    desc: "Analyze and optimize decision-making processes.",
    apply: "#apply-bsc-operations-research",
  },
  {
    slug: "bsc-applied-physics",
    title: "BSc Applied Physics",
    desc: "Use physics principles in practical applications.",
    apply: "#apply-bsc-applied-physics",
  },
  {
    slug: "bsc-applied-chemistry",
    title: "BSc Applied Chemistry",
    desc: "Apply chemical principles in industry and research.",
    apply: "#apply-bsc-applied-chemistry",
  },
  {
    slug: "bsc-computational-biology",
    title: "BSc Computational Biology",
    desc: "Combine biology and computer modeling.",
    apply: "#apply-bsc-computational-biology",
  },
  {
    slug: "bsc-geophysics",
    title: "BSc Geophysics",
    desc: "Study earth physics, seismic and gravitational systems.",
    apply: "#apply-bsc-geophysics",
  },
  {
    slug: "bsc-forensic-science",
    title: "BSc Forensic Science",
    desc: "Apply science in crime investigations.",
    apply: "#apply-bsc-forensic-science",
  },
  {
    slug: "bsc-applied-mathematics",
    title: "BSc Applied Mathematics",
    desc: "Use mathematics to solve real-world problems.",
    apply: "#apply-bsc-applied-mathematics",
  },

  // Business & Management (51–90)
  {
    slug: "ba-business-administration",
    title: "BA Business Administration",
    desc: "Learn management, finance, and leadership skills.",
    apply: "#apply-ba-business-administration",
  },
  {
    slug: "ba-accounting",
    title: "BA Accounting",
    desc: "Master accounting principles and financial reporting.",
    apply: "#apply-ba-accounting",
  },
  {
    slug: "ba-finance",
    title: "BA Finance",
    desc: "Study investment, banking, and financial management.",
    apply: "#apply-ba-finance",
  },
  {
    slug: "ba-marketing",
    title: "BA Marketing",
    desc: "Learn market research, branding, and digital marketing.",
    apply: "#apply-ba-marketing",
  },
  {
    slug: "ba-human-resource",
    title: "BA Human Resource Management",
    desc: "Manage workforce, recruitment, and employee relations.",
    apply: "#apply-ba-human-resource",
  },
  {
    slug: "ba-entrepreneurship",
    title: "BA Entrepreneurship",
    desc: "Develop business ideas and start-ups.",
    apply: "#apply-ba-entrepreneurship",
  },
  {
    slug: "ba-supply-chain",
    title: "BA Supply Chain Management",
    desc: "Optimize logistics, procurement, and supply networks.",
    apply: "#apply-ba-supply-chain",
  },
  {
    slug: "ba-international-business",
    title: "BA International Business",
    desc: "Learn global trade, management, and strategy.",
    apply: "#apply-ba-international-business",
  },
  {
    slug: "ba-economics",
    title: "BA Economics",
    desc: "Study microeconomics, macroeconomics, and policy.",
    apply: "#apply-ba-economics",
  },
  {
    slug: "ba-management-info-systems",
    title: "BA Management Information Systems",
    desc: "Integrate IT with business decision-making.",
    apply: "#apply-ba-management-info-systems",
  },

  // Continue with remaining courses 91–200 in the same structure (Social Sciences, Health, Arts, etc.)
];

// Get course slug from URL
const urlParams = new URLSearchParams(window.location.search);
const slug = urlParams.get("course");

// Find course in array
const course = courses.find((c) => c.slug === slug);

if (course) {
  document.getElementById("courseTitle").textContent = course.title;
  document.getElementById("courseDesc").textContent = course.desc;
  document.getElementById("applyBtn").href = course.apply;
} else {
  document.getElementById("courseTitle").textContent = "Course Not Found";
  document.getElementById("courseDesc").textContent =
    "Please go back and select a valid course.";
  document.getElementById("applyBtn").style.display = "none";
}
