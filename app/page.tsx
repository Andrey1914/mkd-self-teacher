import { redirect } from "next/navigation";

export default function Home() {
  redirect("/lesson/1");
}

// "use client";

// import { useState, useRef, useEffect, useMemo } from "react";

// import { Swiper, SwiperSlide } from "swiper/react";
// import type { Swiper as SwiperType } from "swiper";
// import "swiper/css";

// import styles from "./page.module.css";
// import {
//   Lesson1,
//   Lesson2,
//   Lesson3,
//   Lesson4,
//   Lesson5,
//   Lesson6,
//   Lesson7,
//   Lesson8,
//   Lesson9,
// } from "@/components/Lessons";
// import { Header } from "@/components/app";

// export default function Home() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const swiperRef = useRef<SwiperType | null>(null);

//   const lessons = useMemo(
//     () => [
//       {
//         component: <Lesson1 />,
//         title: "Урок 1",
//         description:
//           "Введение, алфавит, особенности произношения, правописание, глаголы.",
//       },
//       {
//         component: <Lesson2 />,
//         title: "Урок 2",
//         description:
//           "Грамматика имен существительных, прилагательных, числительных.",
//       },
//       {
//         component: <Lesson3 />,
//         title: "Урок 3",
//         description: "Грамматика личных местоимений, глаголы.",
//       },
//       {
//         component: <Lesson4 />,
//         title: "Урок 4",
//         description:
//           "Грамматика категорий определённоси, глаголы и конструкции.",
//       },
//       {
//         component: <Lesson5 />,
//         title: "Урок 5",
//         description:
//           "Грамматика прямых объектов, глагольные существительные и союзы.",
//       },
//       {
//         component: <Lesson6 />,
//         title: "Урок 6",
//         description: "Грамматика имперфекта, имён прилагательных.",
//       },
//       {
//         component: <Lesson7 />,
//         title: "Урок 7",
//         description: "Грамматика косвенных объектов.",
//       },
//       {
//         component: <Lesson8 />,
//         title: "Урок 8",
//         description: "Грамматика повелительного наклонения и союзы.",
//       },
//       { component: <Lesson9 />, title: "Урок 9", description: "Описание." },
//     ],
//     []
//   );

//   // const handleTabChange = (index: number) => {
//   //   setActiveIndex(index);
//   //   swiperRef.current?.slideTo(index);
//   // };

//   const updateUrlHash = (index: number) => {
//     const newHash = `#lesson-${index + 1}`;
//     if (typeof window !== "undefined" && window.location.hash !== newHash) {
//       window.history.replaceState(null, "", newHash);
//     }
//   };

//   const handleTabChange = (index: number) => {
//     setActiveIndex(index);
//     swiperRef.current?.slideTo(index);
//     updateUrlHash(index);
//   };

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const hash = window.location.hash;
//       const match = hash.match(/#lesson-(\d+)/);
//       let initialIndexFromHash = 0;

//       if (match && match[1]) {
//         const lessonNumber = parseInt(match[1]);
//         const calculatedIndex = lessonNumber - 1;
//         if (calculatedIndex >= 0 && calculatedIndex < lessons.length) {
//           initialIndexFromHash = calculatedIndex;
//         }
//       }

//       if (initialIndexFromHash !== activeIndex) {
//         setActiveIndex(initialIndexFromHash);
//       }

//       updateUrlHash(initialIndexFromHash);
//     }
//   }, [activeIndex, lessons.length]);

//   useEffect(() => {
//     const activeLesson = lessons[activeIndex];

//     if (activeLesson) {
//       document.title =
//         activeLesson.title + " | Самоучитель македонского языка.";

//       let metaDescription = document.querySelector('meta[name="description"]');

//       if (!metaDescription) {
//         metaDescription = document.createElement("meta");
//         metaDescription.setAttribute("name", "description");
//         document.head.appendChild(metaDescription);
//       }

//       const descriptionContent =
//         activeLesson.description ||
//         activeLesson.title + " | Уроки македонского языка.";
//       metaDescription.setAttribute("content", descriptionContent);
//     }
//   }, [activeIndex, lessons]);

//   return (
//     <>
//       <div className={styles.page}>
//         <>
//           <Header
//             activeIndex={activeIndex}
//             onChange={handleTabChange}
//             lessonTitles={lessons.map((l) => l.title)}
//           />
//         </>
//         <main className={styles.main}>
//           <Swiper
//             // onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
//             onSlideChange={(swiper) => {
//               setActiveIndex(swiper.activeIndex);
//               updateUrlHash(swiper.activeIndex);
//             }}
//             // onSwiper={(swiper) => (swiperRef.current = swiper)}
//             onSwiper={(swiper) => {
//               swiperRef.current = swiper;

//               if (activeIndex !== 0) {
//                 swiper.slideTo(activeIndex, 0);
//               }
//             }}
//             spaceBetween={15}
//             slidesPerView={1}
//             allowTouchMove
//             // initialSlide={activeIndex}
//             initialSlide={0}
//             style={{ padding: "10px 5px" }}
//           >
//             {lessons.map((lesson, index) => (
//               <SwiperSlide key={index}>{lesson.component}</SwiperSlide>
//             ))}
//           </Swiper>
//         </main>
//         <footer className={styles.footer}>
//           <p>- Ready to move on to the next lesson? -</p>
//         </footer>
//       </div>
//     </>
//   );
// }
