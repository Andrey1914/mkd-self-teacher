// import { BaseProps } from "@/types";

export interface ExercisesProps {
  type?: string;
  slug?: string;
  title?: string;
  // sections: ExercisesSection[];
  sections: {
    type?: "static-exercise" | "exercises" | "exercise-fill-in" | string;
    title?: string;
    prompt?: string[];
    // content: ExercisesContent;
    content: {
      exercise?: string | string[];
      original?: string;
      answer?: string[];
      // sentences?: ExercisesSentences[];
      sentences?: {
        mkd?: string; // текст с ___
        answer?: string[];
      }[];
    };
  }[];

  data?: Partial<ExercisesProps>; // For client-side data fetching and state management
}

// export interface ExercisesSection {
//   type?: "static-exercise" | "exercises" | "exercise-fill-in" | string;
//   title?: string;
//   prompt?: string[];
//   content: ExercisesContent;
// }

// export interface ExercisesContent {
//   exercise?: string | string[];
//   original?: string;
//   answer?: string[];
//   sentences?: ExercisesSentences[];
// }

// export interface ExercisesSentences {
//   mkd?: string; // текст с ___
//   answer?: string[];
// }

//-------------------------------------------
// export interface StaticExerciseData extends BaseProps {
//   title?: string;
//   slug: string;
//   sections: {
//     type?: "static-exercise" | "exercises" | string;
//     title?: string;
//     prompt?: string[];
//     content: {
//       exercise?: string | string[];
//     };
//   }[];
// }

// export interface FillInExerciseData extends BaseProps {
//   title: string;
//   slug: string;
//   sections: {
//     type: "exercise-fill-in" | string;
//     prompt?: string[];
//     content: {
//       sentences: {
//         mkd: string; // текст с ___
//         answer: string[];
//       }[];
//     };
//   }[];
// }
