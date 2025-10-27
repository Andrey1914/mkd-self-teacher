import { DialogueBlockProps } from "@/types";

export const dialogueBlock: DialogueBlockProps = {
  slug: `lesson-7`,
  sections: [
    {
      type: "lecture",
      subtitle: {
        ru: "ДИАЛОГ",
        mkd: "ДИЈАЛОГ",
      },
      content: {
        description: {
          mkd: `<em>И*ван пра*ша е*ден ми*нувач.</em>`,
          ru: `<em>Иван спрашивает прохожего.</em>`,
        },
        dialogue: [
          {
            speaker: {
              id: `ivan`,
              mkd: `И*ван:`,
              ru: `Иван:`,
            },
            mkd: [
              `Изви*нете, а ка*де се на*оѓа Меѓу*градска авто*буска ста*ница?`,
              `Ви благо*дарам!`,
              `Каже*те ми, ве мо*лам, во ко*лку тр*гнува пр*виот а*втобус за О*хрид и во ко*лку сти*гнува?`,
              `Ве мо*лам два би*лети.`,
              `Во е*ден пра*вец.`,
              `Се изви*нувам, но о*ва се на*шите ме*ста.`,
              `Се изви*нувам, но ни*е са*каме да се*диме на ме*стото спо*ред биле*тите.`,
              `Изви*нете, да*ли во авто*бусот и*ма ве*це?`,
              `Мно*гу ми се о*ди во ве*це. Што да пра*вам?`,
              `Не мо*жам да че*кам. Ве мо*лам.`,
              `Ви благо*дарам за разбира*њето!`,
            ],
            ru: [
              `Извините, а где находится автовокзал?`,
              `Спасибо!`,
              `Скажите, пожалуйста, во сколько отправляется первый автобус в Охрид и во сколько прибывает?`,
              `Два билета, пожалуйста.`,
              `В одном направлении.`,
              `Извините, но это наши места.`,
              `Извините, но мы хотим сидеть на местах согласно билетам.`,
              `Извините, а в автобусе есть туалет?`,
              `Мне очень нужно в туалет. Что же мне делать?`,
              `Я не могу подождать. Пожалуйста.`,
              `Спасибо за понимание!`,
            ],
          },
          {
            speaker: {
              id: `passerby`,
              mkd: `Мину*вачот:`,
              ru: `Прохожий:`,
            },
            mkd: [
              `Продо*лжете пра*во до мо*стот, пред не*го свр*тете де*сно и ве*днаш ле*во. Та*му е вле*зот во стани*цата.`,
            ],
            ru: [
              `Продолжайте идти прямо до моста, перед ним поверните направо и сразу же налево. Там вход в автовокзал.`,
            ],
          },
          {
            speaker: {
              id: `cashier`,
              mkd: `Касие*рот:`,
              ru: `Кассир:`,
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
              id: `driver`,
              mkd: `Во*зачот:`,
              ru: `Водитель:`,
            },
            mkd: [
              `Пове*лете ту*ка.`,
              `Тргну*ваме за пет ми*нути. Побр*заjте.`,
              `За жал, не.`,
              `Стрпе*те се у*ште поло*вина час, ќе и*маме па*уза на "Стра*жа".`,
              `До*бро, се*га ќе jа поми*неме патари*ната и ќе заста*неме.`,
            ],
            ru: [
              `Пожалуйста, тут.`,
              `Мы отправляемся через пять минут. Поспешите.`,
              `К сожалению, нет.`,
              `Потерпите ещё пол часа, у нас будет остановка на "Страже".`,
              `Хорошо, сейчас проедем пункт оплаты дороги и остановимся.`,
            ],
          },
          {
            speaker: {
              id: `passenger`,
              mkd: `Па*тникот:`,
              ru: `Пассажир:`,
            },
            mkd: [
              `На мо*ето ме*сто ве*ќе се*ди не*коj. Е*ве о*дзади и*ма сло*бодни ме*ста, се*днете.`,
            ],
            ru: [
              `На моём месте уже кто-то сидит. Вот сзади есть свободные места, садитесь.`,
            ],
          },
          {
            speaker: {
              id: `description`,
            },
            mkd: [
              `<em>На ка*са.</em>`,
              `<em>На автобу*ската.</em>`,
              `<em>На*таша му при*оѓа на во*зачот.</em>`,
              `<em>Во авто*бусот</em>`,
              `<em>Па*тникот ста*нува.</em>`,
              `<em>По е*ден час во*зење И*ван му при*оѓа на во*зачот.</em>`,
            ],
            ru: [
              `<em>У касы.</em>`,
              `<em>На вокзале.</em>`,
              `<em>Наташа подходит к водителю.</em>`,
              `<em>В автобусе.</em>`,
              `<em>Пассажир втаёт.</em>`,
              `<em>Через час езды Иван подходит к водителю.</em>`,
            ],
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

          { speakerId: "description", language: "ru", replyIndex: 1 },
          { speakerId: "description", language: "mkd", replyIndex: 1 },

          { speakerId: "natasha", language: "ru", replyIndex: 0 },
          { speakerId: "natasha", language: "mkd", replyIndex: 0 },

          { speakerId: "description", language: "ru", replyIndex: 2 },
          { speakerId: "description", language: "mkd", replyIndex: 2 },

          { speakerId: "natasha", language: "ru", replyIndex: 1 },
          { speakerId: "natasha", language: "mkd", replyIndex: 1 },
          { speakerId: "driver", language: "ru", replyIndex: 0 },
          { speakerId: "driver", language: "mkd", replyIndex: 0 },
          { speakerId: "natasha", language: "ru", replyIndex: 2 },
          { speakerId: "natasha", language: "mkd", replyIndex: 2 },

          { speakerId: "description", language: "ru", replyIndex: 3 },
          { speakerId: "description", language: "mkd", replyIndex: 3 },

          { speakerId: "ivan", language: "ru", replyIndex: 5 },
          { speakerId: "ivan", language: "mkd", replyIndex: 5 },
          { speakerId: "passenger", language: "ru", replyIndex: 0 },
          { speakerId: "passenger", language: "mkd", replyIndex: 0 },
          { speakerId: "ivan", language: "ru", replyIndex: 6 },
          { speakerId: "ivan", language: "mkd", replyIndex: 6 },

          { speakerId: "description", language: "ru", replyIndex: 4 },
          { speakerId: "description", language: "mkd", replyIndex: 4 },

          { speakerId: "natasha", language: "ru", replyIndex: 3 },
          { speakerId: "natasha", language: "mkd", replyIndex: 3 },
          { speakerId: "driver", language: "ru", replyIndex: 1 },
          { speakerId: "driver", language: "mkd", replyIndex: 1 },

          { speakerId: "description", language: "ru", replyIndex: 5 },
          { speakerId: "description", language: "mkd", replyIndex: 5 },

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
