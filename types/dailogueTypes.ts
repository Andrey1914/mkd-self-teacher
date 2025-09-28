export type DialogueBlockProps = {
  slug: string;
  sections: {
    type: string;
    title?: string[] | { ru: string; mkd: string };
    subtitle?: string[] | { ru: string; mkd: string };

    content: {
      subtitle?: {
        mkd?: string;
        ru?: string;
      };
      description?: {
        mkd?: string;
        ru?: string;
      };
      dialogue?: {
        speaker: {
          id: string;
          mkd?: string;
          ru?: string;
        };
        mkd?: string[];
        ru?: string[];
      }[];
      dialogueOrder?: {
        speakerId: string;
        language: "mkd" | "ru";
        replyIndex: number;
      }[];
    };
  }[];
};
