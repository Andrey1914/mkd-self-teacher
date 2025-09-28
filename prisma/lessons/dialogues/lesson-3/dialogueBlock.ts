import { DialogueBlockProps } from "@/types";

export const dialogueBlock: DialogueBlockProps = {
  slug: `lesson-3`,
  sections: [
    {
      type: "lecture",
      subtitle: {
        ru: "ДИАЛОГ",
        mkd: "ДИЈАЛОГ",
      },
      content: {
        description: {
          mkd: `<em>На*таша и И*ван ма*лку одмо*раат. По*тоа На*таша се дого*вара во е*дно ка*фуле во це*нтарот на гра*дот. И*ван и На*таша
          се туши*раат, се облеку*ваат и о*дат во кафу*лето. Друга*рите на На*таша Зла*тко и Би*лjана ве*ќе се та*му.</em>`,
          ru: `<em>Наташа и Иван немного отдыхают. Потом Наташа договаривается встретиться со своими друзьями в кафе в центре города.
          Иван и Наташа принимают душ, одеваются и идут в кафе. Друзья Наташи Златко и Биляна уже там.</em>`,
        },
        dialogue: [
          {
            speaker: {
              id: `zlatko`,
              mkd: `Зла*тко:`,
              ru: `Златко:`,
            },
            mkd: [
              `Ми*ло ми е.`,
              `Нави*стина? Jас сум по по*текло од О*хрид. Ми*слам де*ка мо*jот град е на*jубав на 
              све*тот.`,
              `А што ра*ботиш во Мо*сква?`,
              `Jас сум еко*номист по образова*ние, и*наку се*га и*мам сво*jа тури*стичка
              аге*нциjа. А Би*лjана е учи*телка по а*нглиски jа*зик во сре*дно учи*лиште.
              А ви*е и*мате ка*де да се сме*стите во О*хрид?`,
              `Дру*гарка ми е професио*нален во*дич, зна*е се за гра*дот.`,
              `Се ви*ка Ле*jла, и*ма три*есет го*дини.`,
              `Ту*рчинка е. Од е*дна ста*ра ту*рска фами*лиjа. Ти*е ни се ко*мшии. Та*тко ми и
              та*тко и* на Ле*jла се го*леми дру*гари. Се*га ќе и* се jа*вам и ќе jа
              пр*ашам да*ли и*ма вре*ме.`,
            ],
            ru: [
              `Очень приятно.`,
              `Правда? Я родом из Охрида. Я думаю, что мой город - самый красивый в мире.`,
              `А чем ты занимаешся в Москве?`,
              `Я экономист по образованию, но сейчас у меня своё туристическое агенство. А Биляна - учительница английского языка в средней
              школе. А вам есть где разместиться в Охриде?`,
              `Моя подруга - профессиональный экскурсовод, она знает все в городе.`,
              `Её зовут Лейла, ей тридцать лет.`,
              `Турчанка. Из одной старой турецкой семьи. Они наши соседи. Мой отец и отец Лейлы большие друзья. Сейчас я ей позвоню и
              спрошу, есть ли у неё время.`,
            ],
          },
          {
            speaker: {
              id: `ivan`,
              mkd: `И*ван:`,
              ru: `Иван:`,
            },
            mkd: [
              `Ми*ло ми е, И*ван.`,
              `На*таша ме у*чи. Збо*рувам, но не знам да пи*шувам. Во Македо*ниjа сум ве*ќе пе*тти пат.
              Мно*гу ми се до*паѓа ту*ка. О*воj пат плани*раме да о*диме во О*хрид`,
              `Не, не, по по*текло сум од Санкт-Пе*тербург, а во Мо*сква жи*веам и ра*ботам ве*ќе 
              де*сет го*дини. Ми*слам де*ка си*те о*вие гра*дови се мно*гу у*бави,
              се*коj на своj на*чин.`,
              `Ра*ботам ка*ко програме*р во е*дна го*лема амери*канска компа*ниjа. А ви*е со што
              се занима*вате?`,
              `О*длично! Фа*ла ти на*jмонгу!`,
            ],
            ru: [
              `Очень приятно, Иван.`,
              `Наташа меня учит. Я говорю, но не умею писать. В Македонии я в пятый раз. Мне здесь очень нравится. В этот раз мы планируем
              поехать в Охрид.`,
              `Нет, нет, я родом из Санкт-Петербурга, а в Москве живу и работаю уже десять лет. Я думаю, что все эти города очень красивые,
              каждый по-своему.`,
              `Я работаю программистом в одной большой американской компании. А вы чем занимаетесь?`,
              `Отлично! Спасибо тебе большое!`,
            ],
          },
          {
            speaker: {
              id: `natasha`,
              mkd: `На*таша:`,
              ru: `Наташа:`,
            },
            mkd: [
              `Здра*во! Са*кам да ве запо*знаам. О*ва е маж ми И*ван. И*ван, о*ва се мо*ите
              дру*гари, Зла*тко и Би*лjана.`,
              `Да, по*веќе ни тре*ба дру*штво. Не*коj коj мо*же да ра*скаже за О*хрид и да не
              про*шета`,
              `Ка*ко се ви*ка? Ко*лку го*дини и*ма?`,
              `Ле*jла? Што е по национа*лност`,
            ],
            ru: [
              `Привет! Я хочу вас познакомить. Это мой муж Иван. Иван. Это мои друзья Златко и Биляна.`,
              `Да, нам больше нужна компания. Кто-нибудь, кто может рассказать об Охриде и прогуляться с нами.`,
              `Как её зовут? Сколько ей лет?`,
              `Лейла? Кто она по национальности?`,
            ],
          },
          {
            speaker: {
              id: `bilyana`,
              mkd: `Би*лjана:`,
              ru: `Биляна:`,
            },
            mkd: [
              `Ми*ло ми е. И*ван, пр*впат си во Македо*ниjа? Мн*огу у*баво збо*руваш маке*донски.`,
              `Зла*тко, И*ван е од Мо*сква, си*гурно ми*сли де*ка Мо*сква е на*jубав град.`,
            ],
            ru: [
              `Очень приятно. Иван, ты впервые в Македонии? Ты очень хорошо говоришь по-македонски.`,
              `Златко, Иван из Москвы, наверняка он думает, что Москва - самый красивый город.`,
            ],
          },
        ],
        dialogueOrder: [
          { speakerId: "natasha", language: "ru", replyIndex: 0 },
          { speakerId: "natasha", language: "mkd", replyIndex: 0 },
          { speakerId: "ivan", language: "ru", replyIndex: 0 },
          { speakerId: "ivan", language: "mkd", replyIndex: 0 },
          { speakerId: "zlatko", language: "ru", replyIndex: 0 },
          { speakerId: "zlatko", language: "mkd", replyIndex: 0 },
          { speakerId: "bilyana", language: "ru", replyIndex: 0 },
          { speakerId: "bilyana", language: "mkd", replyIndex: 0 },
          { speakerId: "ivan", language: "ru", replyIndex: 1 },
          { speakerId: "ivan", language: "mkd", replyIndex: 1 },
          { speakerId: "zlatko", language: "ru", replyIndex: 1 },
          { speakerId: "zlatko", language: "mkd", replyIndex: 1 },
          { speakerId: "bilyana", language: "ru", replyIndex: 1 },
          { speakerId: "bilyana", language: "mkd", replyIndex: 1 },
          { speakerId: "ivan", language: "ru", replyIndex: 2 },
          { speakerId: "ivan", language: "mkd", replyIndex: 2 },
          { speakerId: "zlatko", language: "ru", replyIndex: 2 },
          { speakerId: "zlatko", language: "mkd", replyIndex: 2 },
          { speakerId: "ivan", language: "ru", replyIndex: 3 },
          { speakerId: "ivan", language: "mkd", replyIndex: 3 },

          { speakerId: "zlatko", language: "ru", replyIndex: 3 },
          { speakerId: "zlatko", language: "mkd", replyIndex: 3 },
          { speakerId: "natasha", language: "ru", replyIndex: 1 },
          { speakerId: "natasha", language: "mkd", replyIndex: 1 },
          { speakerId: "zlatko", language: "ru", replyIndex: 4 },
          { speakerId: "zlatko", language: "mkd", replyIndex: 4 },
          { speakerId: "natasha", language: "ru", replyIndex: 2 },
          { speakerId: "natasha", language: "mkd", replyIndex: 2 },
          { speakerId: "zlatko", language: "ru", replyIndex: 5 },
          { speakerId: "zlatko", language: "mkd", replyIndex: 5 },
          { speakerId: "natasha", language: "ru", replyIndex: 3 },
          { speakerId: "natasha", language: "mkd", replyIndex: 3 },
          { speakerId: "zlatko", language: "ru", replyIndex: 6 },
          { speakerId: "zlatko", language: "mkd", replyIndex: 6 },
          { speakerId: "ivan", language: "ru", replyIndex: 4 },
          { speakerId: "ivan", language: "mkd", replyIndex: 4 },
        ],
      },
    },
  ],
};
