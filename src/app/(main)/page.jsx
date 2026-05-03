import { coursesdata, instructors, techniquesData, trendingTopics } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { IoIosTrendingUp } from "react-icons/io";
import Card from "../components/shared/Card";
import { BiTimer } from "react-icons/bi";
import { FiBookOpen } from "react-icons/fi";
import Hero from "../components/Hero";
import Trending from "../components/Trending";





export default async function Home() {

  const courseData = await coursesdata();
  const popularCourses = courseData.slice(0, 3);
  const trending = trendingTopics;
  const mentors = instructors;
  const techniques = techniquesData;

  return (
    <div className="bg-slate-50">
      {/* Hero section */}
      <Hero></Hero>

      {/* course Section */}
      <section className=" py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">

          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
                Popular Courses
              </h2>
              <p className="mt-2 text-slate-500">
                Our most loved learning paths this month
              </p>
            </div>
            <Link
              href="/courses"
              className="mt-4 sm:mt-0 flex items-center text-emerald-600 hover:text-emerald-700 font-medium group transition-colors"
            >
              View All
              <svg
                className="ml-1 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {popularCourses.map((course) => (
              <Card key={course.id} course={course} />
            ))}
          </div>

        </div>
      </section>

      {/* Trending section */}
      <Trending></Trending>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-slate-800">Master Your Learning</h2>
            <p className="text-slate-500 mt-2">Scientifically proven methods to help you study more effectively.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techniques.map((item, index) => (
              <div key={index} className="p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow duration-300">
                <div className={`w-12 h-12 text-green-600 rounded-xl flex items-center justify-center mb-4 text-xl`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Study Routine */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 ">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                Optimize Your Study Routine
              </h2>
              <p className="text-slate-500 text-lg mb-8 leading-relaxed max-w-lg">
                Small changes in how you learn can lead to massive improvements in retention and success.
              </p>

              <div className="space-y-4">
                <div className="flex items-start p-5 border border-slate-200 rounded-xl bg-white hover:shadow-sm transition-shadow">
                  <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-[#A7F3D0] text-[#065F46] mr-5">
                    <BiTimer className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-bold text-lg">Pomodoro Power</h3>
                    <p className="text-slate-500 mt-1 text-sm leading-relaxed">
                      Learn in 25-minute sprints to maintain peak focus and cognitive stamina.
                    </p>
                  </div>
                </div>

                <div className="flex items-start p-5 border border-slate-200 rounded-xl bg-white hover:shadow-sm transition-shadow">
                  <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-[#FECDD3] text-[#9F1239] mr-5">
                    <FiBookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-bold text-lg">Active Recall</h3>
                    <p className="text-slate-500 mt-1 text-sm leading-relaxed">
                      Test yourself frequently rather than just re-reading notes to solidify knowledge.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#EAF0F8] p-6 sm:p-8 rounded-2xl border border-[#D3E0F1]">

              <div className="bg-white rounded-xl p-6 shadow-sm mb-4">
                <div className="flex justify-between items-end mb-3">
                  <h4 className="font-bold text-[#0F4A3A]">Weekly Goal</h4>
                </div>

                <div className="w-full h-2.5 bg-[#E2E8F0] rounded-full overflow-hidden mb-3">
                  <div className="bg-green-700 h-full rounded-full w-3/4"></div>
                </div>

                <p className="text-slate-500 text-xs font-medium">
                  75% of your target reached
                </p>
              </div>

              <div className="bg-[#1A202C] rounded-xl p-6 shadow-sm flex justify-between items-center text-white">
                <div>
                  <h4 className="font-bold mb-1">Upcoming Class</h4>
                  <p className="text-slate-400 text-sm mb-3">
                    Full-Stack Development Review
                  </p>
                  <div className="inline-flex items-center text-sm font-mono bg-white/10 px-3 py-1 rounded-md text-slate-200">
                    Starts in 14:02
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* Mentors */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-300">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Learn from the Best
            </h2>
            <p className="text-slate-500 text-lg">
              Our instructors are active industry leaders and researchers
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {mentors.map((instructor) => (
              <div key={instructor.id} className="flex flex-col items-center text-center cursor-pointer">

                <div className="relative w-36 h-36 mb-6">
                  <div className="absolute inset-0 rounded-full border-2 group-hover:scale-105 transition-transform duration-300"></div>
                  <div className="absolute inset-1.5 rounded-full overflow-hidden bg-slate-200">
                    <Image src={instructor.image} alt={instructor.name} width={200} height={200}
                      className="object-cover"
                    />
                  </div>
                </div>

                <h3 className="text-xl font-medium text-slate-900 mb-1">
                  {instructor.name}
                </h3>
                <p className="text-green-600 font-medium text-sm mb-4">
                  {instructor.role}
                </p>

                <div className="flex flex-wrap justify-center gap-2">
                  {instructor.tags.map((tag, index) => (
                    <span key={index}
                      className="px-3 py-1 bg-[#F1F5F9] text-slate-600 text-xs font-semibold rounded-full" >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
