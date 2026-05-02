export const courses = async () => {
    const res = await fetch('https://skillsphere-server-jrdz.onrender.com/courses');
    const data = await res.json();
    return data;
}

