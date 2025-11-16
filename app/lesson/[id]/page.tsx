import { notFound } from "next/navigation";
import { LessonPageContent } from "./LessonPageContent";

const lessonData = [
  {
    id: 1,
    numericId: 1,
    component: "Lesson1",
    title: "Урок 1",
    description:
      "Введение, алфавит, особенности произношения, правописание, глаголы.",
  },
  {
    id: 2,
    numericId: 2,
    component: "Lesson2",
    title: "Урок 2",
    description:
      "Грамматика имен существительных, прилагательных, числительных.",
  },
  {
    id: 3,
    numericId: 3,
    component: "Lesson3",
    title: "Урок 3",
    description: "Грамматика личных местоимений, глаголы.",
  },
  {
    id: 4,
    numericId: 4,
    component: "Lesson4",
    title: "Урок 4",
    description: "Грамматика категорий определённости, глаголы и конструкции.",
  },
  {
    id: 5,
    numericId: 5,
    component: "Lesson5",
    title: "Урок 5",
    description:
      "Грамматика прямых объектов, глагольные существительные и союзы.",
  },
  {
    id: 6,
    numericId: 6,
    component: "Lesson6",
    title: "Урок 6",
    description: "Грамматика имперфекта, имён прилагательных.",
  },
  {
    id: 7,
    numericId: 7,
    component: "Lesson7",
    title: "Урок 7",
    description: "Грамматика косвенных объектов.",
  },
  {
    id: 8,
    numericId: 8,
    component: "Lesson8",
    title: "Урок 8",
    description: "Грамматика повелительного наклонения и союзы.",
  },
  {
    id: 9,
    numericId: 9,
    component: "Lesson9",
    title: "Урок 9",
    description: "Описание и повторение материала.",
  },
];

export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
  return lessonData.map((lesson) => ({
    id: lesson.id.toString(),
  }));
}

type Props = {
  // params: { id: string };
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { id: rawId } = await params;
  const id = parseInt(rawId);

  const lesson = lessonData.find((l) => l.id === id);

  if (!lesson) {
    return {
      title: "Урок не найден | Самоучитель македонского языка.",
    };
  }

  return {
    title: `${lesson.title} | Самоучитель македонского языка.`,
    description: lesson.description,
  };
}

export default async function LessonPage({ params }: Props) {
  const { id: rawId } = await params;
  const id = parseInt(rawId);
  const lesson = lessonData.find((l) => l.id === id);

  if (!lesson) {
    notFound();
  }

  return <LessonPageContent lessons={lessonData} activeLessonId={id} />;
}
