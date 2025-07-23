export type CountriesNationalitiesProps = {
  type: string;
  category?: string;
  title: string[];
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
