import { AlphabetTable } from "@/types/alphabetTable";

const alphabetTable: AlphabetTable = {
  type: "alphabet-table",
  slug: "lesson-1",
  sections: [
    {
      tableEntries: {
        create: [
          {
            title: "Македонский алфавит",
            rows: [
              { letter: `Аа`, sound: `[a]` },
              { letter: `Бб`, sound: `[б]` },
              { letter: `Вв`, sound: `[в]` },
              { letter: `Гг`, sound: `[г]` },
              { letter: `Дд`, sound: `[д]` },
              {
                letter: `Ѓг\u0301`,
                sound: `[г\u0301] — звук похож на мягкий звук [гь] в слове <em>гюрза</em>, но более взрывной.
                      При произнесении этого звука язык сильнее прижимается к нёбу, образуя взрыв как при [г] или [б]`,
              },
              {
                letter: `Ее`,
                sound: `[э] — в отличие от русского <em>е</em> македонское <em>е</em> не йотируется,
                    ср. русское <em>ель</em> [йэль] и македонское <span>Елка</span> [э\u0301лка]`,
              },
              {
                letter: `Жж`,
                sound: `[ж] — немного мягче, чем в русском`,
              },
              { letter: `Зз`, sound: `[з]` },
              {
                letter: `Ѕs`,
                sound: `[дз] — произносится как сочетание друх звуков: [д] и [з],
                    например <span>sвон</span> [дзвон]`,
              },
              { letter: `Ии`, sound: `[и]` },
              { letter: `Јj`, sound: `[й]` },
              { letter: `Кк`, sound: `[к]` },
              { letter: `Лл`, sound: `[л]` },
              {
                letter: `Љљ`,
                sound: `[љ] — мягкое <em>л</em>, как в русском слове <em>любовь</em>`,
              },
              { letter: `Мм`, sound: `[м]` },
              { letter: `Нн`, sound: `[н]` },
              {
                letter: `Њњ`,
                sound: `<em>[њ]</em> — мягкое <em>н</em> как в русском слове <em>няня</em>`,
              },
              { letter: `Оо`, sound: `[о]` },
              { letter: `Пп`, sound: `[п]` },
              { letter: `Рр`, sound: `[р]` },
              { letter: `Сс`, sound: `[с]` },
              { letter: `Тт`, sound: `[т]` },
              {
                letter: `Ќќ`,
                sound: `[ќ] — звук похож на мягкий звук <em>кь</em> в слове <em>кювет</em>, но более взрывной.
                      При произнесении этого звука язык сильнее прижимается к нёбу, образуя взрыв как при [к] или [п].`,
              },
              { letter: `Уу`, sound: `[у]` },
              { letter: `Фф`, sound: `[ф]` },
              { letter: `Хх`, sound: `[х]` },
              { letter: `Цц`, sound: `[ц]` },
              {
                letter: `Чч`,
                sound: `[ч] — немного тверже, чем в русском `,
              },
              {
                letter: `Џџ`,
                sound: `[дж] — произносится как сочетание двух звуков: [д] и [ж]
                    (мягче, чем в русском), например, <span>џем</span> [джем]`,
              },
              {
                letter: `Шш`,
                sound: `[ш] — немного мягче, чем в русском`,
              },
            ],
          },
        ],
      },
    },
  ],
};

export default alphabetTable;
