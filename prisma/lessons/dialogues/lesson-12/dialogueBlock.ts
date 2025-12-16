import { DialogueBlockProps } from "@/types";

export const dialogueBlock: DialogueBlockProps = {
  slug: `lesson-12`,
  sections: [
    {
      type: "lecture",
      subtitle: {
        ru: "ДИАЛОГ",
        mkd: "ДИЈАЛОГ",
      },
      content: {
        description: {
          mkd: `<em>На*таша и И*ван ше*таат по кеj. На*еднаш е*дна же*на ѝ при*оѓа на На*таша.</em>`,
          ru: `<em>Наташа и Иван гуляют по набережной. Вдруг какая-то женщина подходит к Наташе.</em>`,
        },
        dialogue: [
          {
            speaker: {
              id: `ivan`,
              mkd: `И*ван:`,
              ru: `Иван:`,
            },
            mkd: [
              `Ми*ло ми е.`,
              `Од Ру*сиjа сум`,
              `На о*дмор во Буга*риjа. Се за*љубив на прв по*глед и ве*днаш jа по*барав На*таша за же*на.`,
            ],
            ru: [
              `Очень приятно.`,
              `Я из России.`,
              `На отдыхе в Болгарии. Я влюбился с первого взгляда и сразу же сделал Наташе предложение.`,
            ],
          },
          {
            speaker: {
              id: `elena`,
              mkd: `Е*лена:`,
              ru: `Елена:`,
            },
            mkd: [
              `На*таша? Ти ли си?`,
              `Е*лене Ива*носка, бе*вме ко*мшии.`,
              `Па, сум. Но се*га до*jдов на го*сти каj родни*ните. Мо*jот прв бра*тучед, Зо*ран, се же*ни. Пока*нета сум на сва*дбата.`,
              `И ме*не. Маж ми ме че*ка во о*наа слатка*рница. А*jде да се*днеме на ка*фе.`,
              `Џон, о*ва е На*таша, дру*гарка ми, и неjзи*ниот маж И*ван. Слу*чаjно ги сре*тнав. Не сме се ви*деле со На*таша по*веќе од
              де*сет го*дини!`,
              `Зо*што во О*хрид?`,
              `Нави*стина? Мно*гу у*баво збо*руваш маке*донски. А ка*ко се запо*знавте?`,
              `И ти се со*гласи?`,
              `Џон е тре*нер по те*нис, о*дев на ча*сови каj не*го. Е*днаш ме по*кани на со*станок и та*ка по*чнавме да излегу*ваме.`,
              `Да, то*кму та*ка. А ка*ко е брат ти? Же*нат ли е? Ми бе*ше пр*ва љу*бов.`,
              `Оф, мо*ри ма*jка. А ко*лку го*динки и*ма?`,
              `Да е жи*ва и здра*ва!`,
            ],
            ru: [
              `Наташа? Это ты?`,
              `Елена Ивановска, мы были соседями.`,
              `Я в Австралии, но сейчас приехала в гости к родственникам. Мой двоюродный брат Зоран женится. Я приглашена на свадьбу.`,
              `И мне. Мой муж ждёт меня в том каже-мороженом. Давайте посидим за кофе.`,
              `Джон, это Наташа, моя подруга, и её муж Иван. Я случайно их встретила. Мы с Наташей не виделись больше десяти лет!`,
              `Почему в Охриде?`,
              `Правда? Ты очень хорошо говоришь по-македонски. А как вы познакомились?`,
              `И ты согласилась?`,
              `Джон — тренер по теннису, я брала у него уроки. Однажды он пригласил меня на свидание, и так мы начали встречаться.`,
              `Да, именно так. А как твой брат? Он женат? Он был моей первой любовью.`,
              `Ох! А сколько ей лет?`,
              `Пусть растёт большая и здоровая!`,
            ],
          },
          {
            speaker: {
              id: `natasha`,
              mkd: `На*таша:`,
              ru: `Наташа:`,
            },
            mkd: [
              `Се позна*ваме ли?`,
              `Ле*ле, Е*лене, не те по*знав!`,
              `Ко*лку о*дамна не сме се ви*деле! Jас ми*слев де*ка ти си во Австра*лиjа.`,
              `Да ве запо*знаам. О*ва е маж ми, И*ван. И*ван о*ва е дру*гарка ми, Е*лена. Неjзи*ната фами*лиjа ни бе*а ко*мшии пред да 
              за*минат во Автра*лиjа.`,
              `Со задо*волство!`,
              `Не, не, живе*еме во О*хрид, а ту*ка сме на о*дмор.`,
              `Не, ми бе*ше страв. Ни*што не зна*ев то*гаш за не*го. Е*дна го*дина комуници*равме пре*ку Скаjп и социjа*лните мре*жи. По*тоа
              И*ван до*jде на го*сти во Македо*ниjа, па jас во Ру*сиjа и на краj се зе*довме. А ви*е ка*ко се запо*знавте?`,
              `Ле*ле, ви*ди нè нас. Во*зрасни ма*жени те*тки, а у*ште нео*дамна си и*гравме со игра*чките.`,
              `Нави*стина?! Не сум зна*ела. Не*над се о*жени пред де*сет го*дини, му се ро*ди ќе*ркичка, но о*ваа го*дина се разве*доа.
              Вну*ка ми о*стана да жи*вее со би*вшата сна*а, но Не*над поми*нува мно*гу вре*ме со не*а.`,
              `На*скоро ќе на*полни шест.`,
              `Фа*ла!`,
            ],
            ru: [
              `Мы знакомы?`,
              `Ой, Елена, я тебя не узнала!`,
              `Как давно мы не виделись! Я думала, ты в Австралии.`,
              `Давайте я вас познакомлю. Это мой муж, Иван. Иван, это моя подруга Елена. Её семья жила по соседству с нами, до того как 
              переехала в Австралию.`,
              `С удовольствием!`,
              `Нет, нет, мы живём в Охриде, а здесь мы на отдыхе.`,
              `Нет, мне было страшно. Я ничего тогда не знала о нём. Мы общались год по скайпу и через социальные сети. Потом Иван приехал
              в гости в Македонию, а я в Россию, и наконец мы поженились. А вы как познакомились?`,
              `Ох, посмотри на нас. Взрослые замужние тёти, а ещё недавно мы играли в игрушки.`,
              `Правда?! Я не знала. Ненад женился десять лет назад, у него родилась дочь, но в этом году они развелись. Племянница осталась 
              жить с бывшей невесткой, но Ненад проводит много времени с ней.`,
              `Ей скоро исполнится шесь.`,
              `Спасибо!`,
            ],
          },
          {
            speaker: {
              id: `john`,
              mkd: `Џон:`,
              ru: `Джон:`,
            },
            mkd: [`Ми*ло ми е што се запо*знавме. Живе*ете ту*ка во Ки*чево?`],
            ru: [`Очень приятно познакомиться. Вы живёте тут, в Кичево?`],
          },
          {
            speaker: {
              id: `description`,
            },
            mkd: [
              `<em>Се гу*шкаат и се бакну*ваат.</em>`,
              `<em>Разго*ворот продо*лжува.</em>`,
            ],
            ru: [
              `<em>Обнимаются и целуются.</em>`,
              `<em>Разговор продолжается.</em>`,
            ],
          },
        ],
        dialogueOrder: [
          { speakerId: "elena", language: "ru", replyIndex: 0 },
          { speakerId: "elena", language: "mkd", replyIndex: 0 },
          { speakerId: "natasha", language: "ru", replyIndex: 0 },
          { speakerId: "natasha", language: "mkd", replyIndex: 0 },
          { speakerId: "elena", language: "ru", replyIndex: 1 },
          { speakerId: "elena", language: "mkd", replyIndex: 1 },
          { speakerId: "natasha", language: "ru", replyIndex: 1 },
          { speakerId: "natasha", language: "mkd", replyIndex: 1 },

          { speakerId: "description", language: "ru", replyIndex: 0 },
          { speakerId: "description", language: "mkd", replyIndex: 0 },

          { speakerId: "natasha", language: "ru", replyIndex: 2 },
          { speakerId: "natasha", language: "mkd", replyIndex: 2 },
          { speakerId: "elena", language: "ru", replyIndex: 2 },
          { speakerId: "elena", language: "mkd", replyIndex: 2 },
          { speakerId: "natasha", language: "ru", replyIndex: 3 },
          { speakerId: "natasha", language: "mkd", replyIndex: 3 },
          { speakerId: "ivan", language: "ru", replyIndex: 0 },
          { speakerId: "ivan", language: "mkd", replyIndex: 0 },
          { speakerId: "elena", language: "ru", replyIndex: 3 },
          { speakerId: "elena", language: "mkd", replyIndex: 3 },
          { speakerId: "natasha", language: "ru", replyIndex: 4 },
          { speakerId: "natasha", language: "mkd", replyIndex: 4 },
          { speakerId: "elena", language: "ru", replyIndex: 4 },
          { speakerId: "elena", language: "mkd", replyIndex: 4 },
          { speakerId: "john", language: "ru", replyIndex: 0 },
          { speakerId: "john", language: "mkd", replyIndex: 0 },
          { speakerId: "natasha", language: "ru", replyIndex: 5 },
          { speakerId: "natasha", language: "mkd", replyIndex: 5 },
          { speakerId: "elena", language: "ru", replyIndex: 5 },
          { speakerId: "elena", language: "mkd", replyIndex: 5 },
          { speakerId: "ivan", language: "ru", replyIndex: 1 },
          { speakerId: "ivan", language: "mkd", replyIndex: 1 },
          { speakerId: "elena", language: "ru", replyIndex: 6 },
          { speakerId: "elena", language: "mkd", replyIndex: 6 },
          { speakerId: "ivan", language: "ru", replyIndex: 2 },
          { speakerId: "ivan", language: "mkd", replyIndex: 2 },
          { speakerId: "elena", language: "ru", replyIndex: 7 },
          { speakerId: "elena", language: "mkd", replyIndex: 7 },
          { speakerId: "natasha", language: "ru", replyIndex: 6 },
          { speakerId: "natasha", language: "mkd", replyIndex: 6 },
          { speakerId: "elena", language: "ru", replyIndex: 8 },
          { speakerId: "elena", language: "mkd", replyIndex: 8 },
          { speakerId: "natasha", language: "ru", replyIndex: 7 },
          { speakerId: "natasha", language: "mkd", replyIndex: 7 },
          { speakerId: "elena", language: "ru", replyIndex: 9 },
          { speakerId: "elena", language: "mkd", replyIndex: 9 },
          { speakerId: "natasha", language: "ru", replyIndex: 8 },
          { speakerId: "natasha", language: "mkd", replyIndex: 8 },
          { speakerId: "elena", language: "ru", replyIndex: 10 },
          { speakerId: "elena", language: "mkd", replyIndex: 10 },
          { speakerId: "natasha", language: "ru", replyIndex: 9 },
          { speakerId: "natasha", language: "mkd", replyIndex: 9 },
          { speakerId: "elena", language: "ru", replyIndex: 11 },
          { speakerId: "elena", language: "mkd", replyIndex: 11 },
          { speakerId: "natasha", language: "ru", replyIndex: 10 },
          { speakerId: "natasha", language: "mkd", replyIndex: 10 },

          { speakerId: "description", language: "ru", replyIndex: 1 },
          { speakerId: "description", language: "mkd", replyIndex: 1 },
        ],
      },
    },
  ],
};

//  ѐ
