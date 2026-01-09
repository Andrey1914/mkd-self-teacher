import { DialogueBlockProps } from "@/types";

export const dialogueBlock: DialogueBlockProps = {
  slug: `lesson-13`,
  sections: [
    {
      type: "lecture",
      subtitle: {
        ru: "ДИАЛОГ",
        mkd: "ДИЈАЛОГ",
      },
      content: {
        description: {
          mkd: `<em>На*таша и И*ван се во е*ден бу*тик со на*кит. На*таша са*ка да ку*пи е*дна беле*зица од сре*бро со о*хридски бисер 
          што се пра*ви од крлу*шките на ри*бата пла*шица.</em>`,
          ru: `<em>Наташа и Иван зашли в бутик с украшениями. Наташа хочет купить себе браслет из серебра с охридским жемчугом, который 
          делают из чешуек рыбы уклейки.</em>`,
        },
        dialogue: [
          {
            speaker: {
              id: `ivan`,
              mkd: `И*ван:`,
              ru: `Иван:`,
            },
            mkd: [
              `Не знам. Не е во ча*нтата?`,
              `Аj ви*ди у*ште е*днаш.`,
              `Пла*ти ко*га бе*вме во кафу*лето. Ка*де го ста*ви по*тоа?`,
              `Здра*во у*ште е*днаш! И*згледа же*на ми го забора*вила пари*чникот. Да не сте го ви*деле?`,
              `Ка*ко пр*во, не се нерви*раj. Што и*маше во пари*чникот?`,
              `Пр*во jа*ви се во ба*нката да jа блоки*раш карти*чката. Па*тниот чек не мо*же ни*коj да го иско*ристи о*свен те*бе, но 
              тре*ба да приjа*виме во поли*циjа де*ка ти ги у*крале ли*чната ка*рта и че*кот. А ка*ко изгле*даше чо*векот? `,
              `Благо*дарам!`,
            ],
            ru: [
              `Не знаю. Не в сумке?`,
              `Посмотри ещё раз.`,
              `Ты заплтила, когда мы были в кафе. Куда ты положила его потом?`,
              `Здравствуйте ещё раз! Кажется, моя жена забыла кошелёк. Вы его не видели?`,
              `Во-первых, не нервничай. Что было в кошельке?`,
              `Позвони сначала в банк, чтобы заблокировать карточку. Никто не может использовать дорожный чек, кроме тебя, но нужно 
              заявить в полицию, что у тебя украли личную карту и чек. А как выглядел тот человек?`,
              `Спасибо!`,
            ],
          },
          {
            speaker: {
              id: `shopgirl`,
              mkd: `Продава*чката:`,
              ru: `Продавщица:`,
            },
            mkd: [`Со по*пуст ќе чи*ни три и*лjади`, `Да, да, се ра*збира.`],
            ru: [`Со скидкой будет три тысячи.`, `Да, да, разумеется.`],
          },
          {
            speaker: {
              id: `natasha`,
              mkd: `На*таша:`,
              ru: `Наташа:`,
            },
            mkd: [
              `До*бро, ќе пла*там со ка*ртичка. И*ван, ка*де е мо*jот па*ричник?`,
              `Не, ту*ка го не*ма.`,
              `Е*ве сè што и*мам во ча*нтата, пари*чникот го не*ма`,
              `Не се се*ќавам. А*jде да пра*шаме во кафу*лето, мо*жеби та*му сум забора*вила. Изви*нете, да*ли мо*же да jа тр*гнете 
              белези*цата на*страна? На*брзо ќе се вра*там.`,
              `Ле*ле, то*а си*гурно бил мо*jот па*ричник. Што да пра*вам се*га?`,
              `Па*ри, кре*дитна ка*ртичка, е*ден па*тен чек и ли*чна ка*рта.`,
            ],
            ru: [
              `Хорошо. Я заплачу карточкой. Иван, где мой кошелёк?`,
              `Нет, его здесь нет.`,
              `Вот всё, что есть у меня в сумке, кошелька нет.`,
              `Я не помню. Давай спросим в кафе, может быть, я там его забыла. Извините, вы можете отложить этот браслет? Я бысто 
              вернусь.`,
              `Ох, это точно был мой кошелёк. Что мне теперь делать?`,
              `Деньги, кредитная карточка, один дорожный чек и личная карта.`,
            ],
          },
          {
            speaker: {
              id: `waiter`,
              mkd: `Ке*лнерот:`,
              ru: `Официант:`,
            },
            mkd: [
              `Здра*во! На ва*шата ма*са ни*коj не се*деше по вас. Ви*дов од ша*нкот ка*ко по*мина е*ден чо*век та*му и не*што зе*де 
              од по*дот. Се чу*дев што би мо*жело да би*де то*а.`,
              `Млад ви*сок чо*век со кра*тка те*мна ко*са. Бе*ше о*блечен во бе*ла ма*ица и фа*рмерки. То*лку у*спеав да забе*лежам.`,
            ],
            ru: [
              `Здравствуйте! За вашим столом никто не сидел после вас. Я видел из-за барной стойки, как там прошёл один человек и 
              что-то взял с пола. Я удивился, что бы это могло быть.`,
              `Молодой высокий человек с короткими тёмными волосами. Он был одет в белую футболку и джинсы. Только это смог заметить.`,
            ],
          },
          {
            speaker: {
              id: `description`,
            },
            mkd: [
              `<em>На*тша и И*ван се враќаат во кафу*лето. Го прашу*ваат ке*лнерот.</em>`,
            ],
            ru: [
              `<em>Наташа и Иван возвращаются в кафе. Спрашивают официанта.</em>`,
            ],
          },
        ],
        dialogueOrder: [
          { speakerId: "shopgirl", language: "ru", replyIndex: 0 },
          { speakerId: "shopgirl", language: "mkd", replyIndex: 0 },
          { speakerId: "natasha", language: "ru", replyIndex: 0 },
          { speakerId: "natasha", language: "mkd", replyIndex: 0 },
          { speakerId: "ivan", language: "ru", replyIndex: 0 },
          { speakerId: "ivan", language: "mkd", replyIndex: 0 },
          { speakerId: "natasha", language: "ru", replyIndex: 1 },
          { speakerId: "natasha", language: "mkd", replyIndex: 1 },
          { speakerId: "ivan", language: "ru", replyIndex: 1 },
          { speakerId: "ivan", language: "mkd", replyIndex: 1 },
          { speakerId: "natasha", language: "ru", replyIndex: 2 },
          { speakerId: "natasha", language: "mkd", replyIndex: 2 },
          { speakerId: "ivan", language: "ru", replyIndex: 2 },
          { speakerId: "ivan", language: "mkd", replyIndex: 2 },
          { speakerId: "natasha", language: "ru", replyIndex: 3 },
          { speakerId: "natasha", language: "mkd", replyIndex: 3 },
          { speakerId: "shopgirl", language: "ru", replyIndex: 1 },
          { speakerId: "shopgirl", language: "mkd", replyIndex: 1 },

          { speakerId: "description", language: "ru", replyIndex: 0 },
          { speakerId: "description", language: "mkd", replyIndex: 0 },

          { speakerId: "ivan", language: "ru", replyIndex: 3 },
          { speakerId: "ivan", language: "mkd", replyIndex: 3 },
          { speakerId: "waiter", language: "ru", replyIndex: 0 },
          { speakerId: "waiter", language: "mkd", replyIndex: 0 },
          { speakerId: "natasha", language: "ru", replyIndex: 4 },
          { speakerId: "natasha", language: "mkd", replyIndex: 4 },
          { speakerId: "ivan", language: "ru", replyIndex: 4 },
          { speakerId: "ivan", language: "mkd", replyIndex: 4 },
          { speakerId: "natasha", language: "ru", replyIndex: 5 },
          { speakerId: "natasha", language: "mkd", replyIndex: 5 },
          { speakerId: "ivan", language: "ru", replyIndex: 5 },
          { speakerId: "ivan", language: "mkd", replyIndex: 5 },
          { speakerId: "waiter", language: "ru", replyIndex: 1 },
          { speakerId: "waiter", language: "mkd", replyIndex: 1 },
          { speakerId: "ivan", language: "ru", replyIndex: 6 },
          { speakerId: "ivan", language: "mkd", replyIndex: 6 },
        ],
      },
    },
  ],
};

//  ѐ
