import { DialogueBlockProps } from "@/types";

export const dialogueBlock: DialogueBlockProps = {
  slug: `lesson-1`,
  sections: [
    {
      type: "lecture",
      title: {
        ru: "ЛЕКСИКА",
        mkd: "ЛЕКСИКА",
      },

      subtitle: {
        ru: "ДИАЛОГ",
        mkd: "ДИЈАЛОГ",
      },
      content: {
        subtitle: {
          mkd: `На аеродро*м`,
          ru: `В аэропорту`,
        },
        description: {
          mkd: `Де*неска И*ван и На*таша пату*ваат за Ско*пје. Ти*е се сопру*жници. И*ван е Ру*син, а На*таша е Маке*донка. Жи*веат во
          Мо*сква, но доволно често помину*ваат о*дмор во Македо*нија. Де*неска стану*ваат мно*гу рано, поjду*ваат, пи*jат ка*фе, паку*ваат
          ку*фери, ви*каат та*кси и о*даат со та*кси на аеродро*м. Та*му бр*зо се приjаву*ваат за лет, го преда*ваат ба*гажот, бр*зо
          помину*ваат ца*ренска контро*ла за*тоа што не*маат ни*што за деклари*рање и че*каат ред за па*сошка контро*ла.`,
          ru: `Сегодня Иван и Наташа отправляются в Скопье. Они муж и жена. 
                Иван — русский, а Наташа — македонка. Они живут в Москве, но довольно часто проводят отпуск в Македонии.
                Сегодня они встают очень рано, завтракают, пьют кофе, собирают чемоданы, вызывают такси и едут в аэропорт.
                Там они регистрируются на рейс, сдают багаж, быстро проходять таможенный контроль, потому что им нечего декларировать,
                и ждут очередь на паспортный контроль.`,
        },
        dialogue: [
          {
            speaker: {
              id: `servant`,
              mkd: `Службе*никот:`,
              ru: `Служащий:`,
            },
            mkd: [
              `До*бар ден! Ва*ши те па*соши, ве мо*лам!`,
              `Каде патува*те?`,
              `Цел та на патува*њето?`,
              `При*jатно патува*ње.`,
            ],
            ru: [
              `Добрый день! Ваши паспорта, пожалуйста!`,
              `Куда направляетесь?`,
              `Цель путешествия?`,
              `Приятного путешествия.`,
            ],
          },
          {
            speaker: {
              id: `ivan`,
              mkd: `И*ван:`,
              ru: `Иван:`,
            },
            mkd: [
              `До*бар ден! Пове*лете.`,
              `За Македо*нија пре*ку Бе*лград.`,
              `Тури*зам.`,
              `Ви благо*дарам. При*јатно.`,
              `Да.`,
              `Та*ка пишува* на авио*нските биле*ти.`,
              `Не*ма на*што.`,
              `Пату*ваме за Ско*пjе пре*ку Бе*лград.`,
              `Ми*ло ми е. Се викам И*ван, а о*ва е же*на ми На*таша.`,
            ],
            ru: [
              `Добрый день! Пожалуйста.`,
              `В Македонию через Белград.`,
              `Туризм.`,
              `Спасибо. Всего доброго.`,
              `Да.`,
              `Так написано в авиабилетах.`,
              `Не за что.`,
              `Мы едем в Скопье через Белград.`,
              `Очень приятно. Меня зовут Иван, а это моя жена Наташа.`,
            ],
          },
          {
            speaker: {
              id: `natasha`,
              mkd: `На*таша:`,
              ru: `Наташа:`,
            },
            mkd: [`Jас сум Маке*донка, а маж ми е Ру*син.`],
            ru: [`Я македонка, а мой муж русский.`],
          },
          {
            speaker: {
              id: `stranger`,
              mkd: `Не*познат чо*век:`,
              ru: `Незнакомец:`,
            },
            mkd: [
              `Изви*нете, о*ва е и*злезот за патни*ците за Бе*лград?`,
              `Да*ли сте си*гурни?`,
              `Ви благо*дарам.`,
              `А, ви*е, и*сто та*ка, пату*вате за Бе*лград?`,
              `И jас! Да не сте Маке*донци?`,
              `Што у*баво! Jас сум Дими*триja. А ви*е ка*ко се вика*те?`,
            ],
            ru: [
              `Извините, это выход для пассажиров в Белград?`,
              `Вы уверены?`,
              `Спасибо.`,
              `А вы тоже едете в Белград?`,
              `И я! Вы не македонцы?`,
              `Как хорошо! Я Димитрия, а вас как зовут?`,
            ],
          },
          {
            speaker: {
              id: `description`,
            },
            mkd: [
              `<em>По пасо*шката контро*ла И*ван и На*таша и*маат до*волно вре*ме и 
                за*тоа о*дат во бесца*ринска прода*вница. Купу*ваат пода*роци за при*jатели и ро*днини
                во Македо*нија. По*тоа о*дат во и*злезот и че*каат за да се ка*чат на авио*н.</em>`,
            ],
            ru: [
              `<em>После паспортного контроля у Ивана и Наташи довольно много времени, поэтому они идут в магазин дьюти фри. Они покупают
                    подарки для друзей и родственников в Македонии. Потом идут в выходу и ждут посадки в самолёт.</em>`,
            ],
          },
        ],
        dialogueOrder: [
          { speakerId: "servant", language: "ru", replyIndex: 0 },
          { speakerId: "servant", language: "mkd", replyIndex: 0 },
          { speakerId: "ivan", language: "ru", replyIndex: 0 },
          { speakerId: "ivan", language: "mkd", replyIndex: 0 },
          { speakerId: "servant", language: "ru", replyIndex: 1 },
          { speakerId: "servant", language: "mkd", replyIndex: 1 },
          { speakerId: "ivan", language: "ru", replyIndex: 1 },
          { speakerId: "ivan", language: "mkd", replyIndex: 1 },
          { speakerId: "servant", language: "ru", replyIndex: 2 },
          { speakerId: "servant", language: "mkd", replyIndex: 2 },
          { speakerId: "ivan", language: "ru", replyIndex: 2 },
          { speakerId: "ivan", language: "mkd", replyIndex: 2 },
          { speakerId: "servant", language: "ru", replyIndex: 3 },
          { speakerId: "servant", language: "mkd", replyIndex: 3 },
          { speakerId: "ivan", language: "ru", replyIndex: 3 },
          { speakerId: "ivan", language: "mkd", replyIndex: 3 },

          { speakerId: "description", language: "ru", replyIndex: 0 },
          { speakerId: "description", language: "mkd", replyIndex: 0 },

          { speakerId: "stranger", language: "ru", replyIndex: 0 },
          { speakerId: "stranger", language: "mkd", replyIndex: 0 },
          { speakerId: "ivan", language: "ru", replyIndex: 4 },
          { speakerId: "ivan", language: "mkd", replyIndex: 4 },
          { speakerId: "stranger", language: "ru", replyIndex: 1 },
          { speakerId: "stranger", language: "mkd", replyIndex: 1 },
          { speakerId: "ivan", language: "ru", replyIndex: 5 },
          { speakerId: "ivan", language: "mkd", replyIndex: 5 },
          { speakerId: "stranger", language: "ru", replyIndex: 2 },
          { speakerId: "stranger", language: "mkd", replyIndex: 2 },
          { speakerId: "ivan", language: "ru", replyIndex: 6 },
          { speakerId: "ivan", language: "mkd", replyIndex: 6 },
          { speakerId: "stranger", language: "ru", replyIndex: 3 },
          { speakerId: "stranger", language: "mkd", replyIndex: 3 },
          { speakerId: "ivan", language: "ru", replyIndex: 7 },
          { speakerId: "ivan", language: "mkd", replyIndex: 7 },
          { speakerId: "stranger", language: "ru", replyIndex: 4 },
          { speakerId: "stranger", language: "mkd", replyIndex: 4 },
          { speakerId: "natasha", language: "ru", replyIndex: 0 },
          { speakerId: "natasha", language: "mkd", replyIndex: 0 },
          { speakerId: "stranger", language: "ru", replyIndex: 5 },
          { speakerId: "stranger", language: "mkd", replyIndex: 5 },
          { speakerId: "ivan", language: "ru", replyIndex: 8 },
          { speakerId: "ivan", language: "mkd", replyIndex: 8 },
        ],
      },
    },
  ],
};
