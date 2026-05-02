import { courses } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { IoIosTrendingUp } from "react-icons/io";
import Card from "../components/shared/Card";

export default async function Home() {

  const courseData = await courses()
  const popularCourses = courseData.slice(0, 3);


  return (
    <>
      {/* Hero section */}
      <section className="container mx-auto px-8 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Upgrade Your Skills Today
          </h1>
          <p className="text-lg text-secondary max-w-lg leading-relaxed">
            Join thousands of professionals mastering new technologies with our industry-leading courses. Learn at your own pace from world-class instructors.
          </p>
          <Link href="/courses">
            <button className="btn btn-success btn-outline p-5.5 rounded font-semibold active:scale-95 transition-all hover:text-white ">
              Browse Courses
            </button>
          </Link>
        </div>
        <div className="relative">
          <div className="aspect-4/3 rounded-xl overflow-hidden shadow-2xl">
            <Image
              className="w-full h-full object-cover"
              alt="Students collaborating"
              width={600}
              height={400} loading="eager"
              src='https://plus.unsplash.com/premium_vector-1726350510482-b9fa79c5b2f0?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl border border-green-200 border-outline-variant hidden lg:block">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-300 flex items-center justify-center">
                <IoIosTrendingUp></IoIosTrendingUp>
              </div>
              <div>
                <p className="font-bold text-sm tracking-wide">15k+ Learners</p>
                <p className="text-xs text-secondary">Actively growing today</p>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* course Section */}
      <section className="bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularCourses.map((course) => (
              <Card key={course.id} course={course} />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
