import React from "react";

import { DialogueMeetingWithFriends } from "@/components/Lessons/Lesson-3/Lecture/Dialogue";
import { PayAttentionBlock } from "@/components/lesson/PayAttentionBlock/PayAttentionBlock";
// import { Vocabulary } from "@/components/lesson/Vocabulary/Vocabulary";
// import { Paragraph } from "@/components/lesson/Paragraph/Paragraph";
// import { CountriesNationalitiesTable } from "@/components/lesson/Tables";

import { payAttention1 } from "@/prisma/lessons/pay-attention/lesson -3";
// import { vocabulary1, vocabulary2 } from "@/prisma/lessons/vocabulary/lesson-1";
// import { paragraph } from "@/prisma/lessons/paragraph";
// import { countriesNationalitiesTable } from "@/prisma/lessons/tables";

const Lecture = () => {
  return (
    <>
      <DialogueMeetingWithFriends />
      <PayAttentionBlock data={payAttention1} />
      {/* <Vocabulary lesson={vocabulary1} />{" "} */}
      {/* <PayAttentionBlock data={payAttention2} /> */}
      {/* <Vocabulary lesson={vocabulary2} /> */}
      {/* <Paragraph data={paragraph.explanation} /> */}
      {/* <CountriesNationalitiesTable data={countriesNationalitiesTable} /> */}
    </>
  );
};

export default Lecture;
