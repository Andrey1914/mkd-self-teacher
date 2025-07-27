import {
  verbs,
  grammar,
  paragraph,
  sentences,
} from "@/prisma/lessons/paragraph";
import { grammarPronouns } from "@/prisma/lessons/tables";
import { conjugationLesson1 } from "@/prisma/lessons/tables";
import { examplesLesson1 as examplesLesson1 } from "@/prisma/lessons/tables";
import {
  exercise1,
  exercise2,
  exercise3,
  exercise4,
  exercise5,
  exercise6,
  exercise7,
  exercise8,
  exercise9,
} from "@/prisma/lessons/exercises/lesson-1";
import { dialogueBlock } from "@/prisma/lessons/dialogues/lesson-1";
import {
  payAttention1,
  payAttention2,
  payAttention3,
} from "@/prisma/lessons/pay-attention/lesson-1";
import { vocabulary1, vocabulary2 } from "@/prisma/lessons/vocabulary/lesson-1";
import {
  alphabetTable,
  countriesNationalitiesTable,
} from "@/prisma/lessons/tables";

const { phonetics, features, accent, exceptions, spelling } = paragraph;

const {
  sentences1,
  sentences2,
  sentences3,
  sentences4,
  sentences5,
  sentences6,
} = sentences;

const { formsToVerb, reflexiveVerbs, toBe, verbConjugation, verbType } = verbs;

const { intro, ruleConjugation, negation } = grammar;

const { aClass, eClass, iClass } = conjugationLesson1;

const {
  example1,
  example2,
  example3,
  example4,
  example5,
  example6,
  example7,
  example8,
} = examplesLesson1;

const { grammarPronouns1, grammarPronouns2 } = grammarPronouns;

const lesson1 = {
  title: [`<span>Урок 1, Лекциjя 1</span>`],
  slug: "lesson-1",
  sections: [
    {
      type: "lecture",
      lecture: true,
      title: [`ЛЕКСИКА`, `<span>ЛЕКСИКА</span>`],
      content: {
        intro: {
          subtitle: ["ВВЕДЕНИЕ"],
          intro: `Македонский язык — южнославянский язык, литературная норма которого была кодифицирована только в 1945 году. 
          Долгое время судьбы македонцев были связаны с болгарами. Болгарский и македонский языки заметно отличаются от других южнославянских языков,
          что связывается с участием в так называемом Балканском языковом союзе, куда также входят греческий, албанский (утрата падежей у имен
          существительных и прилагательных, утрата инфинитива у глаголов и некоторые другие особенности). Несмотря на объединяющие черты,
          некоторые диалекты болгарского и македонского языков очень сильно отличаются друг от друга, вплоть до взаимного непонимания. После
          кодификации болгарского литературного языка, основанного на далеких от Македонии восточно-болгарских говорах, некоторые македонцы
          решили использовать этот письменный язык. Большая же часть решительно высказалась против, так как ситала себя отдельным народом.
          Литературный македонский язык был кодифицирован в 1945 году на базе центральных базоввых македонских говоров, на данный момент
          признается практически всеми лингвистами, кроме некоторых, настаивающих на том, что македонские говоры - это говоры болгарского языка,
          а македонский язык - искусственное образование. Такое мнение очень болезненно воспринимается македонцами, поэтому будьте осторожны!`,
        },
      },
    },
    ...alphabetTable.sections.map((section) => ({
      ...section,
      type: "alphabet",
      title: "Македонский алфавит",
    })),
  ],
  paragraph: [
    { type: "phonetics", content: phonetics },
    { type: "features", content: features },
    { type: "accent", content: accent },
    { type: "exceptions", content: exceptions },
    { type: "spelling", content: spelling },

    { type: "sentences", subtype: "sentences1", content: sentences1 },
    { type: "sentences", subtype: "sentences2", content: sentences2 },
    { type: "sentences", subtype: "sentences3", content: sentences3 },
    { type: "sentences", subtype: "sentences4", content: sentences4 },
    { type: "sentences", subtype: "sentences5", content: sentences5 },
    { type: "sentences", subtype: "sentences6", content: sentences6 },

    { type: "verbs", subtype: "formsToVerb", content: formsToVerb },
    { type: "verbs", subtype: "reflexiveVerbs", content: reflexiveVerbs },
    { type: "verbs", subtype: "toBe", content: toBe },
    { type: "verbs", subtype: "verbConjugation", content: verbConjugation },
    { type: "verbs", subtype: "verbType", content: verbType },

    { type: "grammar", subtype: "intro", content: intro },
    { type: "grammar", subtype: "ruleConjugation", content: ruleConjugation },
    { type: "grammar", subtype: "negation", content: negation },
  ],
  exercises: [
    exercise1,
    exercise2,
    exercise3,
    exercise4,
    exercise5,
    exercise6,
    exercise7,
    exercise8,
    exercise9,
  ],
  dialogues: [dialogueBlock],
  payAttention: [payAttention1, payAttention2, payAttention3],
  vocabulary: [vocabulary1, vocabulary2],
  tables: [
    {
      category: "conjugation",
      title: aClass.subtitle?.[0] || "A-Class Verbs",
      data: aClass,
    },
    {
      category: "conjugation",
      title: eClass.subtitle?.[0] || "E-Class Verbs",
      data: eClass,
    },
    {
      category: "conjugation",
      title: iClass.subtitle?.[0] || "I-Class Verbs",
      data: iClass,
    },
    {
      category: "example",
      data: example1,
    },
    {
      category: "example",
      data: example2,
    },
    {
      category: "example",
      data: example3,
    },
    {
      category: "example",
      data: example4,
    },
    {
      category: "example",
      data: example5,
    },
    {
      category: "example",
      data: example6,
    },
    {
      category: "example",
      data: example7,
    },
    {
      category: "example",
      data: example8,
    },
    {
      category: "grammar-pronouns",
      title: grammarPronouns1.subtitle?.[0] || "Grammar Pronouns 1",
      data: grammarPronouns1,
    },
    {
      category: "grammar-pronouns",
      title: grammarPronouns2.subtitle?.[0] || "Grammar Pronouns 2",
      data: grammarPronouns2,
    },

    {
      category: "countries-nationalities",
      title:
        countriesNationalitiesTable.title?.[0] || "Countries and Nationalities",
      data: countriesNationalitiesTable,
    },
  ],
};

export default lesson1;
