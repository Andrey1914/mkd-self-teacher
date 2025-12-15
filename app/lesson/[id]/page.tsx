import { notFound } from "next/navigation";
import { LessonPageContent } from "./LessonPageContent";
import { lessonsData } from "@/data";

export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
  return lessonsData.map((lesson) => ({
    id: lesson.id.toString(),
  }));
}

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { id: rawId } = await params;
  const id = parseInt(rawId);

  const lesson = lessonsData.find((l) => l.id === id);

  if (!lesson) {
    return {
      title: "Самоучитель македонского языка | Урок не найден",
      description: "Страница не найдена для самоучителя македонского языка.",
      keywords: [
        "самоучитель",
        "self techer",
        "македонский язык",
        "урок",
        "македонский",
        "macedonian",
        "язык",
      ],
    };
  }

  return {
    title: `Macedonian self teacher | ${lesson.title}`,
    // title: `Macedonian self teacher | Самоучитель македонского языка.`,

    description: lesson.description,
    keywords: [
      "самоучитель",
      "self techer",
      "македонский язык",
      "урок",
      "македонский",
      "macedonian",
      "язык",
    ],
  };
}

export default async function LessonPage({ params }: Props) {
  const { id: rawId } = await params;
  const id = parseInt(rawId);
  const lesson = lessonsData.find((l) => l.id === id);

  if (!lesson) {
    notFound();
  }

  return <LessonPageContent lessons={lessonsData} activeLessonId={id} />;
}
