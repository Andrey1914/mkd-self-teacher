import { DialogueBlockProps } from "@/types";

export const dialogueBlock: DialogueBlockProps = {
  slug: `lesson-9`,
  sections: [
    {
      type: "lecture",
      subtitle: {
        ru: "ДИАЛОГ",
        mkd: "ДИЈАЛОГ",
      },
      content: {
        description: {
          mkd: `<em>На*таша и И*ван ше*таат по ко*рзото во О*хрид.</em>`,
          ru: `<em>Наташа и Иван гуляют по променаду в Охриде.</em>`,
        },
        dialogue: [
          {
            speaker: {
              id: `ivan`,
              mkd: `И*ван:`,
              ru: `Иван:`,
            },
            mkd: [
              `Тре*ба да си ку*пам џе*мпер. Не зна*ев де*ка во О*хрид е то*ку ла*дно на*вечер.`,
              `Сее*дно ми е, са*мо да би*де то*пол.`,
              `О*воj си*гурно ми е мал. Да*ли и*мате е*ден броj по*голем?`,
              `Та*ман ми е, но и*ма ски*нато ко*пче. Да*ли мо*же да да*дете по*пуст?`,
              `О*длично. На*таша, са*каш ли не*што?`,
              `Ко*лку чи*ни сѐ за*едно?`,
              `Мо*же да пла*там со ка*ртичка?`,
              `Ни*што стра*шно, и*мам во го*тово. Е*ве, пове*лете.`,
            ],
            ru: [
              `Мне нужно купить свитер. Я не знал, что в Охриде так холодно вечером.`,
              `Мне все равно, только чтобы был тёплый.`,
              `Этот точно мне мал. У вас есть на размер больше?`,
              `Он мне как раз, но оторвана кнопочка. Вы можете сделать скидку.`,
              `Отлично. Наташа, хочешь что-нибудь?`,
              `Сколько стоит все вместе?`,
              `Я могу заплатить карточкой?`,
              `Ничего страшного, у меня есть наличные. Вот, пожалуйста.`,
            ],
          },
          {
            speaker: {
              id: `natasha`,
              mkd: `На*таша:`,
              ru: `Наташа:`,
            },
            mkd: [
              `На биле*тите пи*шува де*ка на*шиот а*втобус тр*гнува од перо*ниот 5. Е*ве го.`,
              `Изви*нете, ка*де мо*же да ги ста*виме куфе*рите?`,
              `Ви благо*дарам.`,
              `Ми се чи*ни де*ка и*маме у*ште вре*ме. А*jде да нара*чаме ка*фе во о*ва ка*фуле и да ка*снеме не*што.`,
            ],
            ru: [
              `На билетах написано, что наш автобус отправляется в перона 5. Вот он.`,
              `Извините, где мы можем поставить чемоданы?`,
              `Спасибо.`,
              `Мне кажется, что у нас ещё есть время. Давай закажем кофе в этом кафе и перекусим чем-нибудь.`,
            ],
          },

          {
            speaker: {
              id: `shoplady`,
              mkd: `Продава*чката:`,
              ru: `Продавщица:`,
            },
            mkd: [
              `Пр*виот тр*гнува во ше*ст ча*сот на*утро и сти*гнува за три ча*са.`,
              `По*вратни и*ли во е*ден пра*вец?`,
            ],
            ru: [
              `Первый отправляется в шесть утра и прибывает на место через три часа.`,
              `Туда-обратно или в одном направлении?`,
            ],
          },

          {
            speaker: {
              id: `description`,
            },
            mkd: [`<em>Влегу*ваат.</em>`],
            ru: [`<em>Входят.</em>`],
          },
        ],
        dialogueOrder: [
          { speakerId: "ivan", language: "ru", replyIndex: 0 },
          { speakerId: "ivan", language: "mkd", replyIndex: 0 },
          { speakerId: "passerby", language: "ru", replyIndex: 0 },
          { speakerId: "passerby", language: "mkd", replyIndex: 0 },
          { speakerId: "ivan", language: "ru", replyIndex: 1 },
          { speakerId: "ivan", language: "mkd", replyIndex: 1 },

          { speakerId: "description", language: "ru", replyIndex: 0 },
          { speakerId: "description", language: "mkd", replyIndex: 0 },

          { speakerId: "ivan", language: "ru", replyIndex: 2 },
          { speakerId: "ivan", language: "mkd", replyIndex: 2 },
          { speakerId: "cashier", language: "ru", replyIndex: 0 },
          { speakerId: "cashier", language: "mkd", replyIndex: 0 },
          { speakerId: "ivan", language: "ru", replyIndex: 3 },
          { speakerId: "ivan", language: "mkd", replyIndex: 3 },
          { speakerId: "cashier", language: "ru", replyIndex: 1 },
          { speakerId: "cashier", language: "mkd", replyIndex: 1 },
          { speakerId: "ivan", language: "ru", replyIndex: 4 },
          { speakerId: "ivan", language: "mkd", replyIndex: 4 },

          { speakerId: "natasha", language: "ru", replyIndex: 0 },
          { speakerId: "natasha", language: "mkd", replyIndex: 0 },

          { speakerId: "natasha", language: "ru", replyIndex: 1 },
          { speakerId: "natasha", language: "mkd", replyIndex: 1 },
          { speakerId: "driver", language: "ru", replyIndex: 0 },
          { speakerId: "driver", language: "mkd", replyIndex: 0 },
          { speakerId: "natasha", language: "ru", replyIndex: 2 },
          { speakerId: "natasha", language: "mkd", replyIndex: 2 },

          { speakerId: "ivan", language: "ru", replyIndex: 5 },
          { speakerId: "ivan", language: "mkd", replyIndex: 5 },
          { speakerId: "passenger", language: "ru", replyIndex: 0 },
          { speakerId: "passenger", language: "mkd", replyIndex: 0 },
          { speakerId: "ivan", language: "ru", replyIndex: 6 },
          { speakerId: "ivan", language: "mkd", replyIndex: 6 },

          { speakerId: "natasha", language: "ru", replyIndex: 3 },
          { speakerId: "natasha", language: "mkd", replyIndex: 3 },
          { speakerId: "driver", language: "ru", replyIndex: 1 },
          { speakerId: "driver", language: "mkd", replyIndex: 1 },

          { speakerId: "ivan", language: "ru", replyIndex: 7 },
          { speakerId: "ivan", language: "mkd", replyIndex: 7 },
          { speakerId: "driver", language: "ru", replyIndex: 2 },
          { speakerId: "driver", language: "mkd", replyIndex: 2 },
          { speakerId: "ivan", language: "ru", replyIndex: 8 },
          { speakerId: "ivan", language: "mkd", replyIndex: 8 },
          { speakerId: "driver", language: "ru", replyIndex: 3 },
          { speakerId: "driver", language: "mkd", replyIndex: 3 },
          { speakerId: "ivan", language: "ru", replyIndex: 9 },
          { speakerId: "ivan", language: "mkd", replyIndex: 9 },
          { speakerId: "driver", language: "ru", replyIndex: 4 },
          { speakerId: "driver", language: "mkd", replyIndex: 4 },
          { speakerId: "ivan", language: "ru", replyIndex: 10 },
          { speakerId: "ivan", language: "mkd", replyIndex: 10 },
        ],
      },
    },
  ],
};

// Alt + 1120   → ѐ
// Alt + 1121   → ѝ
