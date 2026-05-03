"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { trendingTopics } from "@/lib/data";

const TrendingCarousel = () => {
    return (
        <section className="bg-sky-50 py-12 px-4 overflow-hidden">
            <div className="container mx-auto">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
                        Trending Right Now
                    </h2>
                    <p className="mt-2 text-slate-500">Fast-growing subjects this week</p>
                </div>

                <Swiper
                   modules={[Autoplay]}
                   loop={true}
                   speed={8000}
                   autoplay={{
                       delay: 0, 
                       disableOnInteraction: false,
                   }}
                   slidesPerView={1.2}
                   spaceBetween={24}
                   breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 },
                }}
                   allowTouchMove={false} 
                   className="linear-swiper"
                >
                    {trendingTopics.map((topic) => (
                        <SwiperSlide key={topic.id}>
                            <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer h-full">
                                <div className="w-14 h-14 rounded-xl bg-[#EAF0F6] flex items-center justify-center shrink-0 text-2xl">
                                    {topic.icon}
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="font-bold text-slate-900 text-[15px]">
                                        {topic.title}
                                    </h3>
                                    <p className="text-sm text-slate-500 mt-0.5">
                                        {topic.students}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default TrendingCarousel;