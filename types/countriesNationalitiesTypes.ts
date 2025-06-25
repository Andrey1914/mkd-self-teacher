export type CountriesNationalitiesProps = {
  type: string;
  title: string[];
  content: {
    subtitle: string[];
    words: {
      land: string;
      nationality: string;
      adjective: string;
    }[];
  };
};
