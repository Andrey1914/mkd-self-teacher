export type CountriesNationalitiesProps = {
  slug?: string;
  type: string;
  category?: string;
  title: string[];
  subtitle?: string;
  content: {
    subtitle: string[];
    words: {
      land: string;
      nationality: string;
      adjective: string;
    }[];
  };

  data?: Partial<CountriesNationalitiesProps>;
};
