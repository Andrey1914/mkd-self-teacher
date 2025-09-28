import { DialogueBlockProps } from "@/types";

export const dialogueBlock: DialogueBlockProps = {
  slug: `lesson-2`,
  sections: [
    {
      type: "lecture",
      subtitle: {
        ru: "ДИАЛОГ",
        mkd: "ДИЈАЛОГ",
      },
      content: {
        description: {
          mkd: `<em>И\u0301ван и На\u0301таша ве\u0301к\u0301е се во Ско\u0301пје. Ту\u0301ка е мно\u0301гу топло.
                Се качу\u0301ваат во та\u0301кси. </em>`,
          ru: `<em>Иван и Наташа уже в Скопье. Здесь жарко. Они содятся в такси.</em>`,
        },
        dialogue: [
          {
            speaker: {
              id: `taxi-driver`,
              mkd: `Такси\u0301стот:`,
              ru: `Таксист:`,
            },
            mkd: [
              `Два\u0301есет и пет е\u0301вра.`,
              `Од аеродро\u0301мот и\u0301маме фикси\u0301рани це\u0301ни.`,
            ],
            ru: [
              `Двадцать пять евро.`,
              `От аэропорта у нас фиксированные цены.`,
            ],
          },
          {
            speaker: {
              id: `ivan`,
              mkd: `И\u0301ван:`,
              ru: `И\u0301ван:`,
            },
            mkd: [
              `Здра\u0301во! Ко\u0301лку к\u0301е чи\u0301ни до "Хо\u0301лидеj Инн".`,
              `До\u0301бро, ра\u0301збирам. То\u0301гаш до "Хо\u0301лидеj Инн", ве молам. `,
              `До\u0301бар ден! Имаме резервациjа за двокреветна соба на презиме Шчукин.`,
              `Со ка\u0301ртичка.`,
              `Во ко\u0301лку е поjа\u0301докот?`,
              `А ка\u0301де е рестора\u0301нот?`,
              `Фа\u0301ла!`,
            ],
            ru: [
              `Здавствуйте! Сколько будет стоить до "Холидей Инн"?`,
              `Хорошо, понимаю. Тогда до "Холидей Инн", пожалуйста`,
              `Добрий день! У нас бронь двухместного номера на фамилию Щукин.`,
              `Карточкой.`,
              `Во сколько завтрак?`,
              `А где ресторан?`,
              `Спасибо!`,
            ],
          },
          {
            speaker: {
              id: `natasha`,
              mkd: `На\u0301таша:`,
              ru: `Наташа:`,
            },
            mkd: [`Ска\u0301по е. А не кори\u0301стите таксоме\u0301тар?`],
            ru: [`Дорого. А вы не используете таксометр?`],
          },
          {
            speaker: {
              id: `administrator`,
              mkd: `Рецепционе\u0301рот:`,
              ru: `Администратор:`,
            },
            mkd: [
              `До\u0301бар ден! Пове\u0301лете!`,
              `Са\u0301мо мом\u0301ент. Да, то\u0301кму та\u0301ка. Двокре\u0301ветна со\u0301ба за непу\u0301шачи, со по\u0301jадок, за три но\u0301к\u0301и.
              Де\u0301вет и\u0301лjади де\u0301нари, ве мо\u0301лам. К\u0301е пла\u0301кате со ка\u0301ртичка или со го\u0301тово`,
              `Благо\u0301дарам. Пове\u0301лете - клуч. Ва\u0301шата со\u0301ба е броj сто четири\u0301есет и два. Се на\u0301ог\u0301а на пр\u0301виот кат`,
              `Поjа\u0301докот е од шест и три\u0301есет до де\u0301вет ча\u0301сот.`,
              `На призе\u0301мjето, де\u0301сно од рецепци\u0301jата.`,
            ],
            ru: [
              `Добрий день! Пожалуйста!`,
              `Минутку. Да, всё верно. Двухмесный номер для некурящих с завтраком на три ночи. Девять тысяч денар, пожалуйста.
              Ви будете платить карточкой или наличными?`,
              `Спасибо. Пожалуйста, ключ. Ваш номер сто сорок два. Он находится на втором этаже.`,
              `Завтрак с шести тридцати до девяти часов.`,
              `На первом этаже, справа от стойки администратора.`,
            ],
          },
          {
            speaker: {
              id: `description`,
            },
            mkd: [
              `<em>"Хо\u0301лидеj Инн" се на\u0301ог\u0301а во це\u0301нтарот на гра\u0301дот.
              Стигну\u0301ваат за три\u0301есет ми\u0301нути. И\u0301ван пла\u0301к\u0301а
              и сопружни\u0301ците влегу\u0301ваат во хо\u0301телот.</em>`,
            ],
            ru: [
              `<em>"Холидей Инн" находится в центре города. Они добираются за тридцать минут. Иван платит,
              и супруги входят в гостиницу.</em>`,
            ],
          },
        ],
        dialogueOrder: [
          { speakerId: "ivan", language: "ru", replyIndex: 0 },
          { speakerId: "ivan", language: "mkd", replyIndex: 0 },
          { speakerId: "taxi-driver", language: "ru", replyIndex: 0 },
          { speakerId: "taxi-driver", language: "mkd", replyIndex: 0 },
          { speakerId: "natasha", language: "ru", replyIndex: 0 },
          { speakerId: "natasha", language: "mkd", replyIndex: 0 },
          { speakerId: "taxi-driver", language: "ru", replyIndex: 1 },
          { speakerId: "taxi-driver", language: "mkd", replyIndex: 1 },
          { speakerId: "ivan", language: "ru", replyIndex: 1 },
          { speakerId: "ivan", language: "mkd", replyIndex: 1 },

          { speakerId: "description", language: "ru", replyIndex: 0 },
          { speakerId: "description", language: "mkd", replyIndex: 0 },

          { speakerId: "administrator", language: "ru", replyIndex: 0 },
          { speakerId: "administrator", language: "mkd", replyIndex: 0 },
          { speakerId: "ivan", language: "ru", replyIndex: 2 },
          { speakerId: "ivan", language: "mkd", replyIndex: 2 },
          { speakerId: "administrator", language: "ru", replyIndex: 1 },
          { speakerId: "administrator", language: "mkd", replyIndex: 1 },
          { speakerId: "ivan", language: "ru", replyIndex: 3 },
          { speakerId: "ivan", language: "mkd", replyIndex: 3 },
          { speakerId: "administrator", language: "ru", replyIndex: 2 },
          { speakerId: "administrator", language: "mkd", replyIndex: 2 },
          { speakerId: "ivan", language: "ru", replyIndex: 4 },
          { speakerId: "ivan", language: "mkd", replyIndex: 4 },
          { speakerId: "administrator", language: "ru", replyIndex: 3 },
          { speakerId: "administrator", language: "mkd", replyIndex: 3 },
          { speakerId: "ivan", language: "ru", replyIndex: 5 },
          { speakerId: "ivan", language: "mkd", replyIndex: 5 },
          { speakerId: "administrator", language: "ru", replyIndex: 4 },
          { speakerId: "administrator", language: "mkd", replyIndex: 4 },
          { speakerId: "ivan", language: "ru", replyIndex: 6 },
          { speakerId: "ivan", language: "mkd", replyIndex: 6 },
        ],
      },
    },
  ],
};
