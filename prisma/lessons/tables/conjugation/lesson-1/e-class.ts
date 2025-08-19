import { ConjugationTableSection } from "@/types/conjugationTypes";

const eClass: ConjugationTableSection = {
  type: `e-class`,
  subtitle: [`СПРЯЖЕНИЕ ГЛАГОЛОВ E-КЛАССА`],
  text: `<span>ја́де</span> есть, <span>живе́е</span> жить, <span>вли́јае</span> влиять, <span>пи́е</span> пить, <span>пцу́е</span> ругать, материться`,

  content: {
    words: [
      {
        person: `<span>јас</span>`,
        forms: [
          `<span>ја́д-а-м</span>`,
          `<span>живе-е-ам</span>`,
          `<span>вли́ја-а-м</span>`,
          `<span>пи́ј-а-м</span>`,
          `<span>пцу́ј-а-м</span>`,
        ],
      },
      {
        person: `<span>ти</span>`,
        forms: [
          `<span>ја́д-е-ш</span>`,
          `<span>живе-е-ш</span>`,
          `<span>вли́ја-е-ш</span>`,
          `<span>пи́е-ш</span>`,
          `<span>пцу́е-ш</span>`,
        ],
      },
      {
        person: `<span>тој, таа, тоа</span>`,
        forms: [
          `<span>ја́д-е</span>`,
          `<span>живе-е</span>`,
          `<span>вли́ја-е</span>`,
          `<span>пи́е</span>`,
          `<span>пцу́е</span>`,
        ],
      },
      {
        person: `<span>ние</span>`,
        forms: [
          `<span>ја́д-е-ме</span>`,
          `<span>живе-е-ме</span>`,
          `<span>вли́ја-е-ме</span>`,
          `<span>пи́е-ме</span>`,
          `<span>пцу́е-ме</span>`,
        ],
      },
      {
        person: `<span>вие</span>`,
        forms: [
          `<span>ја́д-е-те</span>`,
          `<span>живе-е-те</span>`,
          `<span>вли́ја-е-те</span>`,
          `<span>пи́е-те</span>`,
          `<span>пцу́е-те</span>`,
        ],
      },
      {
        person: `<span>тие</span>`,
        forms: [
          `<span>ја́д-а-т</span>`,
          `<span>живе-е-а-т</span>`,
          `<span>вли́ја-а-т</span>`,
          `<span>пи́ј-а-т</span>`,
          `<span>пцу́ј-а-т</span>`,
        ],
      },
    ],
  },
};

export default eClass;
