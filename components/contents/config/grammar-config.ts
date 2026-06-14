import type { GrammarConfig, LocalizedText } from "@/components/contents/types";

import {
  grammarLesson1,
  grammarLesson2,
  grammarLesson3,
  grammarLesson4,
  grammarLesson8,
  grammarLesson10,
  lectureLesson5,
} from "@/prisma/lessons/paragraph";
import {
  grammarPronouns,
  examples,
  conjugationLesson1,
  grammarTables,
} from "@/prisma/lessons/tables";

export default function grammarConfigs(): Record<string, GrammarConfig> {
  return {
    "1": {
      lessonId: 1,
      mainAnchor: "pronouns",
      title: grammarPronouns.grammarPronouns1?.title as LocalizedText,
      items: [
        {
          id: "pronouns-sub",
          anchor: "pronouns",
          text: grammarPronouns.grammarPronouns1?.subtitle as string[],
        },
        {
          id: "to-be",
          anchor: "to-be",
          text: grammarLesson1.toBe.title as string,
          children: [
            {
              id: "to-be-subtitle",
              anchor: "to-be",
              text: grammarLesson1.toBe.subtitle as string,
              formatText: true,
            },
            {
              id: "verb-type",
              anchor: "verb-type",
              text: grammarLesson1.verbType.title as string,
              children: [
                {
                  id: "reflexive-verbs",
                  anchor: "reflexive-verbs",
                  text: examples.lesson1.example2.subtitle as string,
                },
                {
                  id: "conjugation-verb",
                  anchor: "conjugation-verb",
                  text: grammarLesson1.verbConjugation.subtitle as string,
                },
                {
                  id: "a-class",
                  anchor: "a-class",
                  text: conjugationLesson1.aClass.subtitle as string,
                },
                {
                  id: "i-class",
                  anchor: "i-class",
                  text: conjugationLesson1.iClass.subtitle as string,
                },
                {
                  id: "e-class",
                  anchor: "e-class",
                  text: conjugationLesson1.eClass.subtitle as string,
                },
              ],
            },
          ],
        },
        {
          id: "negation",
          anchor: "negation",
          text: grammarLesson1.negation.title as string,
        },
        {
          id: "interrogative",
          anchor: "interrogative-sentences",
          text: examples.lesson1.example3.subtitle as string,
        },
      ],
    },

    "2": {
      lessonId: 2,
      mainAnchor: "gender-of-nouns",
      title: grammarLesson2.genderOfNouns?.title as LocalizedText,
      items: [
        {
          id: "gender-subtitle",
          anchor: "gender-of-nouns",
          text: grammarLesson2.genderOfNouns?.subtitle as string[],
          children: [
            {
              id: "gender-content-sub",
              anchor: "gender-of-nouns",
              text: grammarLesson2.genderOfNouns?.content?.subtitle as string,
            },
            {
              id: "plural-nouns",
              anchor: "plural-of-nouns",
              text: grammarLesson2.pluralOfNouns.subtitle as string,
              children: [
                {
                  id: "plural-content-sub",
                  anchor: "plural-of-nouns",
                  text: grammarLesson2.pluralOfNouns.content
                    ?.subtitle as string,
                },
                {
                  id: "countable-plural",
                  anchor: "countable-plural",
                  text: grammarLesson2.countablePlural.content
                    ?.subtitle as string,
                },
              ],
            },
          ],
        },
        {
          id: "adjectives",
          anchor: "adjectives",
          text: grammarLesson2.introAdjectives.subtitle as string,
        },
        {
          id: "numerals",
          anchor: "numerals-cardinal-ordinal",
          text: grammarLesson2.cardinalOrdinalNumerals.subtitle as string,
        },
      ],
    },

    "3": {
      lessonId: 3,
      mainAnchor: "personal-pronouns",
      title: grammarLesson3.personalPronouns?.title as LocalizedText,
      items: [
        {
          id: "personal-sub",
          anchor: "personal-pronouns",
          text: grammarLesson3.personalPronouns?.subtitle as string[],
        },
        {
          id: "verbs-wrapper",
          anchor: "verb-3",
          text: examples.lesson3.example5.subtitle as string,
          children: [
            {
              id: "verb-need",
              anchor: "verb-need",
              text: grammarLesson3.needVerb.subtitle as string,
              formatText: true,
            },
            {
              id: "verb-can",
              anchor: "verb-can",
              text: examples.lesson3.example12.subtitle as string,
              formatText: true,
            },
          ],
        },
      ],
    },

    "4": {
      lessonId: 4,
      mainAnchor: "definiteness-category",
      title: grammarLesson4.definitenessCategory?.title as LocalizedText,
      items: [
        {
          id: "definiteness-sub",
          anchor: "definiteness-category",
          text: grammarLesson4.definitenessCategory?.content?.intro
            ?.subtitle as string[],
        },
        {
          id: "verb-future-root",
          anchor: "verb-future",
          text: examples.lesson4.example1.subtitle as string,
          children: [
            {
              id: "verb-future-content",
              anchor: "verb-future",
              text: examples.lesson4.example1.content.subtitle as string,
            },
            {
              id: "verb-have-not",
              anchor: "verb-have-have-not",
              text: examples.lesson4.example6.subtitle as string,
              formatText: true,
            },
            {
              id: "lets-construction",
              anchor: "lets-construction",
              text: examples.lesson4.example9.subtitle as string,
              formatText: true,
            },
          ],
        },
        {
          id: "prepositions",
          anchor: "prepositions",
          text: grammarLesson4.prepositions.subtitle as string,
        },
      ],
    },

    "5": {
      lessonId: 5,
      mainAnchor: "direct-object",
      title: examples.lesson5.example1.title as LocalizedText,
      items: [
        {
          id: "direct-object-sub",
          anchor: "direct-object",
          text: examples.lesson5.example1.subtitle as string,
        },
        {
          id: "verbal-noun",
          anchor: "verbal-noun",
          text: lectureLesson5.verbalNoun.subtitle as string,
        },
        {
          id: "conjunctions-root",
          anchor: "conjanctions",
          text: examples.lesson5.example8.subtitle as string,
          children: [
            {
              id: "conjunctions-sub",
              anchor: "conjanctions",
              text: examples.lesson5.example8.content.subtitle as string,
            },
            {
              id: "adversary-conjunctions",
              anchor: "adversary-conjanctions",
              text: examples.lesson5.example10.content.subtitle as string,
            },
            {
              id: "disjunctive-conjunctions",
              anchor: "disjunctive-conjunctions",
              text: examples.lesson5.example12.content.subtitle as string,
            },
            {
              id: "conjunctions-that-whether",
              anchor: "conjunctions-that-whether",
              text: examples.lesson5.example13.subtitle as string,
              formatText: true,
            },
          ],
        },
      ],
    },

    "6": {
      lessonId: 6,
      mainAnchor: "imperfect",
      title: grammarTables.imperfect.title as LocalizedText,
      items: [
        {
          id: "imperfect-sub",
          anchor: "imperfect",
          text: grammarTables.imperfect.subtitle as string,
        },
        {
          id: "adjective",
          anchor: "adjective",
          text: examples.lesson6.example1.subtitle as string,
          children: [
            {
              id: "degrees-of-comparison",
              anchor: "adjective",
              text: examples.lesson6.example1.content.subtitle as string,
            },
          ],
        },
      ],
    },
    "7": {
      lessonId: 7,
      mainAnchor: "indirect-object",
      title: examples.lesson7.example1.title as LocalizedText,
      items: [
        {
          id: "indirect-object-sub",
          anchor: "indirect-object",
          text: examples.lesson7.example1.subtitle as string,
        },
      ],
    },
    "8": {
      lessonId: 8,
      mainAnchor: "imperative",
      title: grammarLesson8.imperative.title as LocalizedText,
      items: [
        {
          id: "imperative-sub",
          anchor: "imperative",
          text: grammarLesson8.imperative.subtitle as string,
        },
        {
          id: "conjunctions",
          anchor: "conjunctions",
          text: examples.lesson8.example5.subtitle as string,
          formatText: true,
        },
      ],
    },
    "9": {
      lessonId: 9,
      mainAnchor: "aorist",
      title: grammarTables.aorist.title as LocalizedText,
      items: [
        {
          id: "aorist-sub",
          anchor: "aorist",
          text: grammarTables.aorist.subtitle as string,
        },
        {
          id: "conjunctions",
          anchor: "conjunctions",
          text: examples.lesson9.example1.subtitle as string,
          formatText: true,
        },
      ],
    },
    "10": {
      lessonId: 10,
      mainAnchor: "aorist-continued",
      title: grammarLesson10.aorist.title as LocalizedText,
      items: [
        {
          id: "aorist-sub",
          anchor: "aorist-continued",
          text: grammarLesson10.aorist.subtitle as string,
        },
        // {
        //   id: "conjunctions",
        //   anchor: "conjunctions",
        //   text: examples.lesson9.example1.subtitle as string,
        //   formatText: true,
        // },
      ],
    },
  };
}
