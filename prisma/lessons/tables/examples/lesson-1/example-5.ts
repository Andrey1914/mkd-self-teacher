import { ExampleSection } from "@/types/exampleTypes";

export const example5: ExampleSection = {
  type: "example-5",
  content: {
    words: [
      {
        mkd: `<span>На\u0301таша ли жи\u0301вее во Ско\u0301пjе?</span>`,
        ru: `Наташа живет ли в Скопье?`,
      },
      {
        mkd: `<span>Жи\u0301вее ли На\u0301таша во Ско\u0301пjе?</span>`,
        ru: `Живет ли Наташа в Скопье?`,
      },
      {
        mkd: `<span>Во Ско\u0301пjе ли жи\u0301вее На\u0301таша?</span>`,
        ru: `В Скопье ли живет Наташа?`,
      },
    ],
  },
};

// export default example5;
