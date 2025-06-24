import { DialogueBlockProps } from "@/types/dailogueTypes";

const dialogueBlock: DialogueBlockProps = {
  slug: `lesson-1`,
  sections: [
    {
      type: "lecture",
      title: [`ЛЕКСИКА`, `<span>ЛЕКСИКА</span>`],
      subtitle: [`ДИАЛОГ`, `<span>ДИЈАЛОГ</span>`],
      content: {
        subtitle: {
          mkd: `<em>На аеродром</em>`,
          ru: `<em>В аэропорту</em>`,
        },
        description: {
          mkd: `<em>Де\u0301неска И\u0301ван и На\u0301таша пату\u0301ваат за Ско\u0301пје. Ти\u0301е се сопру\u0301жници. 
                И\u0301ван е Ру\u0301син, а На\u0301таша е Маке\u0301донка. Жи\u0301веат во Мо\u0301сква,
                но доволно често помину\u0301ваат о\u0301дмор во Македо\u0301нија. Де\u0301неска стану\u0301ваат мно\u0301гу рано,
                поjду\u0301ваат, пи\u0301jат ка\u0301фе, паку\u0301ваат ку\u0301фери, ви\u0301каат та\u0301кси и о\u0301даат со та\u0301кси
                на аеродро\u0301м. Та\u0301му бр\u0301зо се приjаву\u0301ваат за лет, го преда\u0301ваат ба\u0301гажот, бр\u0301зо
                помину\u0301ваат ца\u0301ренска контро\u0301ла за\u0301тоа што не\u0301маат ни\u0301што за деклари\u0301рање и
                че\u0301каат ред за па\u0301сошка контро\u0301ла.</em>`,
          ru: `<em>Сегодня Иван и Наташа отправляются в Скопье. Они муж и жена. 
                Иван — русский, а Наташа — македонка. Они живут в Москве, но довольно часто проводят отпуск в Македонии.
                Сегодня они встают очень рано, завтракают, пьют кофе, собирают чемоданы, вызывают такси и едут в аэропорт.
                Там они регистрируются на рейс, сдают багаж, быстро проходять таможенный контроль, потому что им нечего декларировать,
                и ждут очередь на паспортный контроль.</em>`,
        },
        dialogue: [
          {
            speaker: {
              id: `servant`,
              mkd: `Службе\u0301никот:`,
              ru: `Служащий:`,
            },
            mkd: [
              `До\u0301бар ден! Ва\u0301ши те па\u0301соши, ве мо\u0301лам!`,
              `Каде патува\u0301те?`,
              `Цел та на патува\u0301њето?`,
              `При\u0301jатно патува\u0301ње.`,
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
              mkd: `И\u0301ван:`,
              ru: `Иван:`,
            },
            mkd: [
              `До\u0301бар ден! Пове\u0301лете.`,
              `За Македо\u0301нија пре\u0301ку Бе\u0301лград.`,
              `Тури\u0301зам.`,
              `Ви благо\u0301дарам. При\u0301јатно.`,
              `Да.`,
              `Та\u0301ка пишува\u0301 на авио\u0301нските биле\u0301ти.`,
              `Не\u0301ма на\u0301што.`,
              `Пату\u0301ваме за Ско\u0301пjе пре\u0301ку Бе\u0301лград.`,
              `Ми\u0301ло ми е. Се викам И\u0301ван, а о\u0301ва е же\u0301на ми На\u0301таша.`,
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
              mkd: `На\u0301таша:`,
              ru: `Наташа:`,
            },
            mkd: [`Jас сум Маке\u0301донка, а маж ми е Ру\u0301син.`],
            ru: [`Я македонка, а мой муж русский.`],
          },
          {
            speaker: {
              id: `stranger`,
              mkd: `Не\u0301познат чо\u0301век:`,
              ru: `Незнакомец:`,
            },
            mkd: [
              `Изви\u0301нете, о\u0301ва е и\u0301злезот за патни\u0301ците за Бе\u0301лград?`,
              `Да\u0301ли сте си\u0301гурни?`,
              `Ви благо\u0301дарам.`,
              `А, ви\u0301е, и\u0301сто та\u0301ка, пату\u0301вате за Бе\u0301лград?`,
              `И jас! Да не сте Маке\u0301донци?`,
              `Што у\u0301баво! Jас сум Дими\u0301триja. А ви\u0301е ка\u0301ко се вика\u0301те?`,
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
              `<em>По пасо\u0301шката контро\u0301 И\u0301ван и На\u0301таша и\u0301маат до\u0301волно вре\u0301ме и 
                за\u0301тоа о\u0301дат во бесца\u0301ринска прода\u0301вница. Купу\u0301ваат пода\u0301роци за при\u0301jатели и ро\u0301днини
                во Македо\u0301нија. По\u0301тоа о\u0301дат во и\u0301злезот и че\u0301каат за да се ка\u0301чат на авио\u0301н.</em>`,
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

export default dialogueBlock;
