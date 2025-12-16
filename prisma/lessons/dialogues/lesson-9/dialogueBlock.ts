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
              `Тама*н ми е, но и*ма ски*нато ко*пче. Да*ли мо*же да да*дете по*пуст?`,
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
              `Па О*хрид е на пла*нина за*тоа ду*ри и во ле*то е све*жо на*вечер. А*jде да ви*диме во не*коj бу*тик.`,
              `Ба*раме џе*мпер за маж ми.`,
              `И*маш си*ни о*чи за*тоа си*но мно*гу у*баво ти сто*и. Про*баj го о*воj.`,
              `Ги са*кам о*вие о*чила за со*нце. Мо*ите се скр*шиjа.`,
            ],
            ru: [
              `Ну, Охрид в горах, поэтому даже летом вечером свежо. Давай посмотрим в каком-нибудь бутике.`,
              `Мы ищем свитер для моего мужа.`,
              `У тебя голубые глаза, поэтому тебе идёт голубой. Померь вот этот.`,
              `Я хочу эти солнцезащитные очки. Мои сломались.`,
            ],
          },

          {
            speaker: {
              id: `shoplady`,
              mkd: `Продава*чката:`,
              ru: `Продавщица:`,
            },
            mkd: [
              `Пове*лете! Ка*ко мо*жам да ви по*могнам?`,
              `Е*ве ту*ка и*ма џе*мпери. Ка*ква бо*jа са*кате?`,
              `Да, се*га ќе ви до*несам. Ту*ка е гардеро*бата.`,
              `За жал не, ќе ви до*несам друг. И*наку, се*га и*маме а*кциjа. Ку*пете две ра*боти и ќе и*мате де*сет о*тсто по*пуст.`,
              `Три и*лjади де*нари.`,
              `За жал, ни се ра*сипа апара*тот. А*ко са*кате, банкома*тот се на*оѓа зад а*голот.`,
              `Е*ве го ку*сорот. Со зра*вjе да ги но*сите.`,
            ],
            ru: [
              `Проходите! Как я могу вам помочь?`,
              `Вот здесь лежат свитеры. Какого цвета вы хотите?`,
              `Да, сейчас принесу. Здесь примерочная.`,
              `К сожалению, нет. Я принесу вам другой. А вообще у нас сейчас акция. Купите две вещи, и у вас будет скидка 10%`,
              `Три тысячи денар.`,
              `К сожалению, у нас сломался аппарат. Если хотите, банкомат за углом.`,
              `Вот сдача. Носите на здоровье.`,
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
          { speakerId: "natasha", language: "ru", replyIndex: 0 },
          { speakerId: "natasha", language: "mkd", replyIndex: 0 },

          { speakerId: "description", language: "ru", replyIndex: 0 },
          { speakerId: "description", language: "mkd", replyIndex: 0 },

          { speakerId: "shoplady", language: "ru", replyIndex: 0 },
          { speakerId: "shoplady", language: "mkd", replyIndex: 0 },
          { speakerId: "natasha", language: "ru", replyIndex: 1 },
          { speakerId: "natasha", language: "mkd", replyIndex: 1 },
          { speakerId: "shoplady", language: "ru", replyIndex: 1 },
          { speakerId: "shoplady", language: "mkd", replyIndex: 1 },
          { speakerId: "ivan", language: "ru", replyIndex: 1 },
          { speakerId: "ivan", language: "mkd", replyIndex: 1 },
          { speakerId: "natasha", language: "ru", replyIndex: 2 },
          { speakerId: "natasha", language: "mkd", replyIndex: 2 },
          { speakerId: "ivan", language: "ru", replyIndex: 2 },
          { speakerId: "ivan", language: "mkd", replyIndex: 2 },
          { speakerId: "shoplady", language: "ru", replyIndex: 2 },
          { speakerId: "shoplady", language: "mkd", replyIndex: 2 },
          { speakerId: "ivan", language: "ru", replyIndex: 3 },
          { speakerId: "ivan", language: "mkd", replyIndex: 3 },
          { speakerId: "shoplady", language: "ru", replyIndex: 3 },
          { speakerId: "shoplady", language: "mkd", replyIndex: 3 },
          { speakerId: "ivan", language: "ru", replyIndex: 4 },
          { speakerId: "ivan", language: "mkd", replyIndex: 4 },
          { speakerId: "natasha", language: "ru", replyIndex: 3 },
          { speakerId: "natasha", language: "mkd", replyIndex: 3 },
          { speakerId: "ivan", language: "ru", replyIndex: 5 },
          { speakerId: "ivan", language: "mkd", replyIndex: 5 },
          { speakerId: "shoplady", language: "ru", replyIndex: 4 },
          { speakerId: "shoplady", language: "mkd", replyIndex: 4 },
          { speakerId: "ivan", language: "ru", replyIndex: 6 },
          { speakerId: "ivan", language: "mkd", replyIndex: 6 },
          { speakerId: "shoplady", language: "ru", replyIndex: 5 },
          { speakerId: "shoplady", language: "mkd", replyIndex: 5 },
          { speakerId: "ivan", language: "ru", replyIndex: 7 },
          { speakerId: "ivan", language: "mkd", replyIndex: 7 },
          { speakerId: "shoplady", language: "ru", replyIndex: 6 },
          { speakerId: "shoplady", language: "mkd", replyIndex: 6 },
        ],
      },
    },
  ],
};

// Alt + 1120   → ѐ
// Alt + 1121   → ѝ
