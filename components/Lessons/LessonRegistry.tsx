import dynamic from "next/dynamic";
import { Loader } from "@/components/app/Loader";

export const LessonComponents: { [key: string]: React.ElementType } = {
  Lesson1: dynamic(() => import("./Lesson-1").then((m) => m.Lesson1), {
    ssr: false,
    loading: () => <Loader />,
  }),
  Lesson2: dynamic(() => import("./Lesson-2").then((m) => m.Lesson2), {
    ssr: false,
    loading: () => <Loader />,
  }),
  Lesson3: dynamic(() => import("./Lesson-3").then((m) => m.Lesson3), {
    ssr: false,
    loading: () => <Loader />,
  }),
  Lesson4: dynamic(() => import("./Lesson-4").then((m) => m.Lesson4), {
    ssr: false,
    loading: () => <Loader />,
  }),
  Lesson5: dynamic(() => import("./Lesson-5").then((m) => m.Lesson5), {
    ssr: false,
    loading: () => <Loader />,
  }),
  Lesson6: dynamic(() => import("./Lesson-6").then((m) => m.Lesson6), {
    ssr: false,
    loading: () => <Loader />,
  }),
  Lesson7: dynamic(() => import("./Lesson-7").then((m) => m.Lesson7), {
    ssr: false,
    loading: () => <Loader />,
  }),
  Lesson8: dynamic(() => import("./Lesson-8").then((m) => m.Lesson8), {
    ssr: false,
    loading: () => <Loader />,
  }),
  Lesson9: dynamic(() => import("./Lesson-9").then((m) => m.Lesson9), {
    ssr: false,
    loading: () => <Loader />,
  }),
  Lesson10: dynamic(() => import("./Lesson-10").then((m) => m.Lesson10), {
    ssr: false,
    loading: () => <Loader />,
  }),
  Lesson11: dynamic(() => import("./Lesson-11").then((m) => m.Lesson11), {
    ssr: false,
    loading: () => <Loader />,
  }),
  Lesson12: dynamic(() => import("./Lesson-12").then((m) => m.Lesson12), {
    ssr: false,
    loading: () => <Loader />,
  }),
  Lesson13: dynamic(() => import("./Lesson-13").then((m) => m.Lesson13), {
    ssr: false,
    loading: () => <Loader />,
  }),
  Lesson14: dynamic(() => import("./Lesson-14").then((m) => m.Lesson14), {
    ssr: false,
    loading: () => <Loader />,
  }),
  Lesson15: dynamic(() => import("./Lesson-15").then((m) => m.Lesson15), {
    ssr: false,
    loading: () => <Loader />,
  }),
  Lesson16: dynamic(() => import("./Lesson-16").then((m) => m.Lesson16), {
    ssr: false,
    loading: () => <Loader />,
  }),
  //   Lesson17: dynamic(() => import("./Lesson-17").then((m) => m.Lesson17), {
  //     ssr: false,
  //     loading: LoadingState,
  //   }),
};
