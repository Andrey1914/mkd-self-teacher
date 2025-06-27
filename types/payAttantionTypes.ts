export type PayAttentionSection = {
  type: string;
  title: string[];
  attention?: boolean;
  content: {
    text: string;
  };
};

export type PayAttentionBlockProps = {
  sections: PayAttentionSection[];
};
