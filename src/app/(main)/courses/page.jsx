import React from 'react';
import { coursesdata } from "@/lib/data";
import Card from '@/app/components/shared/Card';
import SearchableCourses from '@/app/components/SearchableCourses';


const coursesPage = async () => {

   const courses = await coursesdata();

    return (
        <div>
            <SearchableCourses initialCourses={courses} />
        </div>
    );
};

export default coursesPage;