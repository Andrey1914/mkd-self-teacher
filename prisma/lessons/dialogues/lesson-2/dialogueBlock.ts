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
          mkd: `<em>И*ван и На*таша ве*к*е се во Ско*пје. Ту*ка е мно*гу топло. Се качу*ваат во та*кси. </em>`,
          ru: `<em>Иван и Наташа уже в Скопье. Здесь жарко. Они содятся в такси.</em>`,
        },
        dialogue: [
          {
            speaker: {
              id: `taxi-driver`,
              mkd: `Такси*стот:`,
              ru: `Таксист:`,
            },
            mkd: [
              `Два*есет и пет е*вра.`,
              `Од аеродро*мот и*маме фикси*рани це*ни.`,
            ],
            ru: [
              `Двадцать пять евро.`,
              `От аэропорта у нас фиксированные цены.`,
            ],
          },
          {
            speaker: {
              id: `ivan`,
              mkd: `И*ван:`,
              ru: `Иван:`,
            },
            mkd: [
              `Здра*во! Ко*лку к*е чи*ни до "Хо*лидеj Инн".`,
              `До*бро, ра*збирам. То*гаш до "Хо*лидеj Инн", ве молам. `,
              `До*бар ден! Имаме резервациjа за двокреветна соба на презиме Шчукин.`,
              `Со ка*ртичка.`,
              `Во ко*лку е поjа*докот?`,
              `А ка*де е рестора*нот?`,
              `Фа*ла!`,
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
              mkd: `На*таша:`,
              ru: `Наташа:`,
            },
            mkd: [`Ска*по е. А не кори*стите таксоме*тар?`],
            ru: [`Дорого. А вы не используете таксометр?`],
          },
          {
            speaker: {
              id: `administrator`,
              mkd: `Рецепционе*рот:`,
              ru: `Администратор:`,
            },
            mkd: [
              `До*бар ден! Пове*лете!`,
              `Са*мо мом*ент. Да, то*кму та*ка. Двокре*ветна со*ба за непу*шачи, со по*jадок, за три но*к*и.
              Де*вет и*лjади де*нари, ве мо*лам. К*е пла*кате со ка*ртичка или со го*тово`,
              `Благо*дарам. Пове*лете - клуч. Ва*шата со*ба е броj сто четири*есет и два. Се на*ог*а на пр*виот кат`,
              `Поjа*докот е од шест и три*есет до де*вет ча*сот.`,
              `На призе*мjето, де*сно од рецепци*jата.`,
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
              `<em>"Хо*лидеj Инн" се на*ог*а во це*нтарот на гра*дот.
              Стигну*ваат за три*есет ми*нути. И*ван пла*к*а
              и сопружни*ците влегу*ваат во хо*телот.</em>`,
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
