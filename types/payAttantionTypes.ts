export type PayAttentionSection = {
  type: string;
  slug: string;
  title: string;
  content: {
    text: string;
  };
};

export type PayAttentionBlockProps = {
  sections: PayAttentionSection[];
};
