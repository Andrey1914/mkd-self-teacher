import { Paragraph } from "@/components/lesson/Paragraph";
import {
  AoristASubtype,
  AoristOSubtype,
  AoristESubtype,
  AoristNullSubtype,
} from "./Subtypes";

import { grammarLesson10 } from "@/prisma/lessons/paragraph";

const { aorist } = grammarLesson10;

export const Aorist = () => {
  return (
    <>
      <Paragraph data={aorist} titleIconSrc="/grammar.png" />
      <AoristASubtype />
      <AoristOSubtype />
      <AoristESubtype />
      <AoristNullSubtype />
    </>
  );
};
