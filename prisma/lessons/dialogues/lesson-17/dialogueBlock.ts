import { DialogueBlockProps } from "@/types";

export const dialogueBlock: DialogueBlockProps = {
  slug: `lesson-17`,
  sections: [
    {
      type: "lecture",
      subtitle: {
        ru: "ДИАЛОГ",
        mkd: "ДИЈАЛОГ",
      },
      content: {
        description: {
          mkd: `<em>На*таша и И*ван стигну*ваат на го*сти каj На*ум и Еми*лиjа.</em>`,
          ru: `<em>Наташа и Иван приходят в гости к Науму и Эмилии.</em>`,
        },
        dialogue: [
          {
            speaker: {
              id: `ivan`,
              mkd: `И*ван:`,
              ru: `Иван:`,
            },
            mkd: [
              `До*бре ве на*jдовме! Што пра*вите?.`,
              `То*лку ни помо*гнавте. Са*кавме не*како да ви се заблагода*риме. И се*како ве очеку*ваме на го*сти во Мо*сква.`,
              `Со задо*волство! А ка*де би мо*жел да ку*пам до*машна ра*кија? Са*кам да му о*днесам на та*тко ми. Си*гурно ќе му се до*падне.`,
              `Е*ден ли*тар. Без ца*рина мо*же да се по*несе 2 ли*тра ви*но и 1 ли*тар же*сток а*лкохол. Ко*лку ти до*лжам?`,
              `Догово*рено. Фа*ла ти. Мно*гу е у*бава ра*кијата.`,
              `У*тре на*вечер ќе се вра*тиме во Ско*пjе, ќе ноќе*ваме та*му и ра*но на*утро ќе ле*таме за Мо*сква пре*ку Вие*на.`,
            ],
            ru: [
              `Спасибо. Как вы поживате?`,
              `Вы нам так помогли. Мы хотели вас как-то отблагодарить. И, конечно же, мы ждём вас в гости в Москве.`,
              `С удовольствием! А где я бы мог купить домашнюю ракию? Я хочу отнести моему отцу. Ему наверняка понравится.`,
              `Один литр. Без таможенной пошлины можно провезти 2 литра вина и 1 литр крепкого алкоголя. Сколько я тебе должен?`,
              `Договорились. Спасибо. Очень вкусная ракия.`,
              `Завтра вечером мы возвращаемся в Скопье, там ночуем и рано утром летим в Москву через Вену.`,
            ],
          },
          {
            speaker: {
              id: `naum`,
              mkd: `На*ум:`,
              ru: `Наум:`,
            },
            mkd: [
              `До*бро до*јдовте! Пове*лете!`,
              `Фа*ла, до*бро сме. Ви*е ка*ко сте?`,
              `Фа*ла, задолжи*телно ќе до*jдеме. Пове*лете на ма*са. Што ќе се напи*ете? А*jде по е*дна ра*кија. До*машна е.`,
              `Jас ќе ти да*дам. Ко*лку ти тре*ба?`,
              `Ни*што. Ќе ме че*стиш е*дна во*тка во Мо*сква.`,
              `Мно*гу у*бав по*дарок! А*jде да наздра*виме! За а*рно, за у*баво! И сре*ќен пат!`,
            ],
            ru: [
              `Добро пожаловать! Проходите пожалуйста!`,
              `Спасибо, хорошо. Как дела?`,
              `Спасибо, мы обязательно приедем. Пожалуйста, к столу. Что будете пить? Давайте по одной ракии. Домашняя.`,
              `Я дам тебе. Сколько нужно?`,
              `Ничего. Угостишь меня водкой в Москве.`,
              `Очень хороший подарок! Давайте выпьем за здоровье! За всё хорошее! И счастливого пути!`,
            ],
          },
          {
            speaker: {
              id: `natasha`,
              mkd: `На*таша:`,
              ru: `Наташа:`,
            },
            mkd: [
              `Фа*ла, сѐ е во ред. Пове*лете, о*ва е ви*но за на ма*са и сла*долед, а о*ва се ру*ски ба*бушки за те*бе и Еми*лиjа.`,
              `И а*jварот е мно*гу вку*сен. До*машен е? Мо*же ли да го до*знаам рецеп*тот?`,
              `Да, да, е*ве го мо*jот меjл.`,
              `Де*нес цел ден ше*тавме по прода*вници. Купу*вавме пода*роци за приjате*лите и родни*ните — разгле*дници, ма*гнети, привр*зоци, 
              ма*ли бро*шови од сре*бро. За родите*лите на И*ван ку*пивме фи*лигран во фо*рма на пепе*рутка.`,
            ],
            ru: [
              `Спасибо, всё в порядке. Вот вино к столу и мороженое, а это русские матрёшки для вас с Эмилией.`,
              `И айвар очень вкусный. Домашний? А можно узнать рецепт?`,
              `Да, да, вот мой мейл.`,
              `Сегодня мы весь день гуляли по магазинам. Покупали подарки для друзей и родственников — открытки, магниты, брелоки, маленькие 
              брошки из серебра. Для родителей Ивана мы купили бабочку в стиле филигрань.`,
            ],
          },
          {
            speaker: {
              id: `еmilia`,
              mkd: `Еми*лиjа:`,
              ru: `Эмилия:`,
            },
            mkd: [
              `Фа*ла мно*гу! Не тре*бало.`,
              `Ма*jка ми го пра*веше. Ќе jа пра*шам за реце*птот и ќе ти на*пишам. Тре*ба да ги разме*ниме конта*ктите.`,
              `О*длично! А ко*га замину*вате?`,
            ],
            ru: [
              `Больше спасибо! Не стоило беспокоиться.`,
              `Моя мама его делала. Я спрошу рецепт и напишу тебе. Нам нужно обменяться контактами.`,
              `Отлично! А когда вы уезжаете?`,
            ],
          },
        ],
        dialogueOrder: [
          { speakerId: "naum", language: "ru", replyIndex: 0 },
          { speakerId: "naum", language: "mkd", replyIndex: 0 },
          { speakerId: "ivan", language: "ru", replyIndex: 0 },
          { speakerId: "ivan", language: "mkd", replyIndex: 0 },
          { speakerId: "naum", language: "ru", replyIndex: 1 },
          { speakerId: "naum", language: "mkd", replyIndex: 1 },
          { speakerId: "natasha", language: "ru", replyIndex: 0 },
          { speakerId: "natasha", language: "mkd", replyIndex: 0 },
          { speakerId: "еmilia", language: "ru", replyIndex: 0 },
          { speakerId: "еmilia", language: "mkd", replyIndex: 0 },
          { speakerId: "ivan", language: "ru", replyIndex: 1 },
          { speakerId: "ivan", language: "mkd", replyIndex: 1 },
          { speakerId: "naum", language: "ru", replyIndex: 2 },
          { speakerId: "naum", language: "mkd", replyIndex: 2 },
          { speakerId: "ivan", language: "ru", replyIndex: 2 },
          { speakerId: "ivan", language: "mkd", replyIndex: 2 },
          { speakerId: "naum", language: "ru", replyIndex: 3 },
          { speakerId: "naum", language: "mkd", replyIndex: 3 },
          { speakerId: "ivan", language: "ru", replyIndex: 3 },
          { speakerId: "ivan", language: "mkd", replyIndex: 3 },
          { speakerId: "naum", language: "ru", replyIndex: 4 },
          { speakerId: "naum", language: "mkd", replyIndex: 4 },
          { speakerId: "ivan", language: "ru", replyIndex: 4 },
          { speakerId: "ivan", language: "mkd", replyIndex: 4 },
          { speakerId: "natasha", language: "ru", replyIndex: 1 },
          { speakerId: "natasha", language: "mkd", replyIndex: 1 },
          { speakerId: "еmilia", language: "ru", replyIndex: 1 },
          { speakerId: "еmilia", language: "mkd", replyIndex: 1 },
          { speakerId: "natasha", language: "ru", replyIndex: 2 },
          { speakerId: "natasha", language: "mkd", replyIndex: 2 },
          { speakerId: "еmilia", language: "ru", replyIndex: 2 },
          { speakerId: "еmilia", language: "mkd", replyIndex: 2 },
          { speakerId: "ivan", language: "ru", replyIndex: 5 },
          { speakerId: "ivan", language: "mkd", replyIndex: 5 },
          { speakerId: "natasha", language: "ru", replyIndex: 3 },
          { speakerId: "natasha", language: "mkd", replyIndex: 3 },
          { speakerId: "naum", language: "ru", replyIndex: 5 },
          { speakerId: "naum", language: "mkd", replyIndex: 5 },
        ],
      },
    },
  ],
};

//  ѐ
