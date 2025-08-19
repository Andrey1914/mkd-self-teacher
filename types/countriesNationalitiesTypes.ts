import { BaseProps } from "@/types";
import { CommonContent } from "@/types/baseTypes";

export interface CountriesNationalitiesProps extends BaseProps {
  // slug?: string;
  type: string;
  // category?: string;
  // title: string[];
  // subtitle?: string;
  content: CommonContent;
  // content: {
  //   subtitle: string[];
  //   words: {
  //     land: string;
  //     nationality: string;
  //     adjective: string;
  //   }[];
  // };

  data?: Partial<CountriesNationalitiesProps>;
}
