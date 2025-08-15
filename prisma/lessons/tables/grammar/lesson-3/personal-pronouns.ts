import { PronounTableProps } from "@/types";

const personalPronounsTable: PronounTableProps = {
  type: "personal-pronouns-table",
  //   title: ["ЛИЧНЫЕ МЕСТОИМЕНИЯ"],
  subtitle: ["Дательный падеж", "Винительный падеж"],
  content: {
    dativeHeader: "Дательный падеж",
    accusativeHeader: "Винительный падеж",
    columns: ["Краткая форма", "Полная форма", "Краткая форма", "Полная форма"],
    rows: [
      {
        pronoun: "јас",
        dativeShort: "ми",
        dativeFull: "ме́не (на́ мене)",
        accusativeShort: "ме",
        accusativeFull: "ме́не",
      },
      {
        pronoun: "ти",
        dativeShort: "ти",
        dativeFull: "те́бе (на́ тебе)",
        accusativeShort: "те",
        accusativeFull: "те́бе",
      },
      {
        pronoun: "тој",
        dativeShort: "му",
        dativeFull: "не́му (на́ него)",
        accusativeShort: "го",
        accusativeFull: "не́го",
      },
      {
        pronoun: "тоа",
        dativeShort: "му",
        dativeFull: "не́му (на него)",
        accusativeShort: "го",
        accusativeFull: "не́го",
      },
      {
        pronoun: "таа",
        dativeShort: "ј",
        dativeFull: "не́јзе (на́ неа)",
        accusativeShort: "ја",
        accusativeFull: "не́а",
      },
      {
        pronoun: "ние",
        dativeShort: "ни",
        dativeFull: "нам (на́ нас)",
        accusativeShort: "нè",
        accusativeFull: "нас",
      },
      {
        pronoun: "вие",
        dativeShort: "ви",
        dativeFull: "вам (на́ вас)",
        accusativeShort: "ве",
        accusativeFull: "вас",
      },
      {
        pronoun: "тие",
        dativeShort: "им",
        dativeFull: "ним (на́ нив)",
        accusativeShort: "ги",
        accusativeFull: "нив",
      },
      {
        pronoun: "си",
        dativeShort: "си",
        dativeFull: "се́бе/се́беси (на себе/ на себеси)",
        accusativeShort: "се",
        accusativeFull: "се́бе/се́беси",
      },
      {
        pronoun: "кој",
        dativeShort: "",
        dativeFull: "ко́му (на́ кого)",
        accusativeShort: "",
        accusativeFull: "ко́го",
      },
    ],
  },
};

export default personalPronounsTable;
