import React from "react";

import { Intro, Lecture } from "@/components/Lessons/Lesson-1/Lecture";
import { Phonetics } from "@/components/Lessons/Lesson-1/Phonetics/Phonetics";
import { Grammar } from "@/components/Lessons/Lesson-1/Grammar";

export const Lesson1 = () => {
  return (
    <>
      <Intro />
      <Phonetics />
      <Lecture />
      <Grammar />
    </>
  );
};

// import lesson1 from "../../../prisma/lessons/lesson-1";
// import { Paragraph } from "@/components/lesson/Paragraph/Paragraph";
// import { Heading } from "@/components/lesson/Heading/Heading";
// import { DialogueBlock } from "@/components/lesson/DialogueBlock/DialogueBlock";
// import { PayAttentionBlock } from "@/components/lesson/PayAttentionBlock/PayAttentionBlock";
// import { Vocabulary } from "@/components/lesson/Vocabulary/Vocabulary";
// import {
//   AlphabetTable,
//   CountriesNationalitiesTable,
//   GrammarTable,
//   ExamplesTable,
//   ConjugationTable,
// } from "@/components/lesson/Tables";
// import {
//   FillInExercise,
//   ParagraphExercise,
//   StaticExercise,
//   TranslateParagraphExercise,
// } from "@/components/lesson/Exercises";
// import {
//   exercise1,
//   exercise2,
//   exercise3,
//   exercise4,
//   exercise5,
//   exercise6,
//   exercise7,
//   exercise8,
//   exercise9,
// } from "@/prisma/lessons/exercises/lesson-1";
// import {
//   payAttention1,
//   payAttention2,
//   payAttention3,
// } from "@/prisma/lessons/pay-attention/lesson-1";
// import { lectureLesson1 } from "@/prisma/lessons/heading/lesson-1/headings";
// import { vocabulary1, vocabulary2 } from "@/prisma/lessons/vocabulary/lesson-1";
// import {
//   countriesNationalitiesTable,
//   grammarPronouns1,
//   grammarPronouns2,
//   example1,
//   example2,
//   example3,
//   example4,
//   example5,
//   example6,
//   example7,
//   example8,
//   aClass,
//   eClass,
//   iClass,
// } from "@/prisma/lessons/tables";
// import { dialogueBlock } from "@/prisma/lessons/dialogues/lesson-1";
// import {
//   phonetics,
//   features,
//   accent,
//   exceptions,
//   spelling,
//   explanation,
//   intro,
//   toBe,
//   formsToVerb,
//   verbType,
//   reflexiveVerbs,
//   verbConjugation,
//   ruleConjugation,
//   negation,
//   sentences1,
//   sentences2,
//   sentences3,
//   sentences4,
//   sentences5,
//   sentences6,
// } from "@/prisma/lessons/paragraph/lesson-1";
// import { formatText } from "@/utils";

// export function Lesson1() {
//   // const section = lectureLesson1.sections.find((s) => s.type === "lecture");

//   const handledTypes = ["pay-attention"];

//   return (
//     <>
//       {/* <h1>{formatText(lesson1.title?.join(", ") ?? "Без названия")}</h1> */}

//       <Heading level={lectureLesson1.level}>{lectureLesson1.title}</Heading>

//       {/* {section && (
//         <>
//           <Heading level={section.level}>{section.title}</Heading>
//           {section.content?.subtitle && (
//             <Heading level={section.content.level}>
//               {section.content.subtitle}
//             </Heading>
//           )}
//         </>
//       )} */}

//       {lesson1.sections?.map((section, i) => (
//         <section key={i} style={{ marginBottom: "2rem" }}>
//           {!handledTypes.includes(section.type) &&
//             (Array.isArray(section.title)
//               ? section.title.length > 0 && (
//                   <h2 style={{ margin: "1rem 0" }}>
//                     {formatText(section.title.join(", "))}
//                   </h2>
//                 )
//               : section.title && <h2>{formatText(section.title)}</h2>)}

//           {/* {Array.isArray(section.subtitle) && section.subtitle.length > 0 && (
//             <h3 style={{ margin: "2rem 0" }}>
//               {formatText(section.subtitle.join(", "))}
//             </h3>
//           )} */}

//           {section.content?.intro && (
//             <>
//               {(section.content.intro.subtitle ?? []).map((sub, idx) => (
//                 <p key={idx}>{sub}</p>
//               ))}

//               <p>{section.content.intro.intro}</p>
//             </>
//           )}

//           <>
//             {section.type === "lecture" && section.lecture && (
//               <>
//                 <Paragraph data={phonetics} part="title" />
//                 <AlphabetTable />
//                 <Paragraph data={phonetics} part="text" />
//                 <Paragraph data={features} />
//                 <Paragraph data={accent} />
//                 <Paragraph data={exceptions} />
//                 <Paragraph data={spelling} />
//                 <StaticExercise data={exercise1} />
//                 <DialogueBlock data={dialogueBlock} />
//                 <PayAttentionBlock data={payAttention1} />
//                 <Vocabulary lesson={vocabulary1} />{" "}
//                 <PayAttentionBlock data={payAttention2} />
//                 <Vocabulary lesson={vocabulary2} />{" "}
//                 <Paragraph data={explanation} />
//                 <CountriesNationalitiesTable
//                   data={countriesNationalitiesTable}
//                 />
//                 <GrammarTable data={grammarPronouns1} />
//                 <Paragraph data={intro} />
//                 <Paragraph data={toBe} />
//                 <GrammarTable data={grammarPronouns2} />
//                 <Paragraph data={formsToVerb} />
//                 <ExamplesTable data={example1} />
//                 <FillInExercise data={exercise2} />
//                 <FillInExercise data={exercise3} />
//                 <Paragraph data={verbType} />
//                 <Paragraph data={reflexiveVerbs} />
//                 <ExamplesTable data={example2} />
//                 <Paragraph data={verbConjugation} />
//                 <ConjugationTable data={aClass} />
//                 <FillInExercise data={exercise4} />
//                 <GrammarTable data={iClass} />
//                 <PayAttentionBlock data={payAttention3} />
//                 <FillInExercise data={exercise5} />
//                 <ConjugationTable data={eClass} />
//                 <Paragraph data={ruleConjugation} />
//                 <FillInExercise data={exercise6} />
//                 <Paragraph data={negation} />
//                 <Paragraph data={sentences1} />
//                 <ExamplesTable data={example3} />
//                 <Paragraph data={sentences2} />
//                 <ExamplesTable data={example4} />
//                 <Paragraph data={sentences3} />
//                 <ExamplesTable data={example5} />
//                 <Paragraph data={sentences4} />
//                 <ExamplesTable data={example6} />
//                 <Paragraph data={sentences5} />
//                 <ExamplesTable data={example7} />
//                 <Paragraph data={sentences6} />
//                 <ExamplesTable data={example8} />
//                 <ParagraphExercise data={exercise7} />
//                 <TranslateParagraphExercise data={exercise8} />
//                 <TranslateParagraphExercise data={exercise9} />
//               </>
//             )}
//           </>
//         </section>
//       ))}
//     </>
//   );
// }
