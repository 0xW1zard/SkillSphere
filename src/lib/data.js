import { BiBarChartAlt2, BiBrain, BiPalette } from "react-icons/bi";
import { BsCashStack } from "react-icons/bs";
import { FiCloud, FiLayout, FiLock, FiSmartphone } from "react-icons/fi";

export const coursesdata = async () => {
    const res = await fetch('https://skillsphere-server-jrdz.onrender.com/courses');
    const data = await res.json();
    return data;
}

export const singleCourseData = async (id) => {
    const res = await fetch(`https://skillsphere-server-jrdz.onrender.com/courses/${id}`);
    const data = await res.json();
    return data;
}

export const instructors = [
    {
        id: 1,
        name: "Dr. James Wilson",
        role: "Senior AI Scientist",
        tags: ["Machine Learning", "Python"],
        image: "https://i.pravatar.cc/301", // Replace with real image path
    },
    {
        id: 2,
        name: "Sarah Jenkins",
        role: "UX Lead at Meta",
        tags: ["Figma", "UI Strategy"],
        image: "https://i.pravatar.cc/300", // Replace with real image path
    },
    {
        id: 3,
        name: "Marcus Chen",
        role: "Principal Architect",
        tags: ["Cloud Native", "Go"],
        image: "https://i.pravatar.cc/303", // Replace with real image path
    },
    {
        id: 4,
        name: "Elena Rodriguez",
        role: "Head of Analytics",
        tags: ["Tableau", "Statistics"],
        image: "https://i.pravatar.cc/304", // Replace with real image path
    }
];


export const trendingTopics = [
    {
        id: 1,
        title: "AI Foundations",
        students: "8.4k New Students",
        icon: <BiBrain className="w-6 h-6 text-[#104A3A]" />
    },
    {
        id: 2,
        title: "Cybersecurity Essentials",
        students: "5.2k New Students",
        icon: <FiLock className="w-6 h-6 text-[#104A3A]" />
    },
    {
        id: 3,
        title: "Cloud Architecture",
        students: "4.1k New Students",
        icon: <FiCloud className="w-6 h-6 text-[#104A3A]" />
    },
    {
        id: 4,
        title: "Financial Modeling",
        students: "3.8k New Students",
        icon: <BsCashStack className="w-6 h-6 text-[#104A3A]" />
    },
    {
        id: 5,
        title: "UX/UI Design Systems",
        students: "7.1k New Students",
        icon: <BiPalette className="w-6 h-6 text-[#104A3A]" />
    },
    {
        id: 6,
        title: "Full-Stack Next.js",
        students: "9.3k New Students",
        icon: <FiLayout className="w-6 h-6 text-[#104A3A]" />
    },
    {
        id: 7,
        title: "Applied Data Science",
        students: "6.5k New Students",
        icon: <BiBarChartAlt2 className="w-6 h-6 text-[#104A3A]" />
    },
    {
        id: 8,
        title: "Mobile App Dev",
        students: "4.9k New Students",
        icon: <FiSmartphone className="w-6 h-6 text-[#104A3A]" />
    },
];