import { BaseProps } from "@/types";
import { CommonContent } from "@/types/baseTypes";

export interface CountriesNationalitiesProps extends BaseProps {
  type: string;
  title: string[];
  content: CommonContent;

  data?: Partial<CountriesNationalitiesProps>;
}
