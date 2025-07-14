import {
  phonetics,
  features,
  accent,
  exceptions,
  spelling,
} from "@/prisma/lessons/paragraph";
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
  ],
  paragraph: [phonetics, features, accent, exceptions, spelling],
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
};

export default lesson1;
