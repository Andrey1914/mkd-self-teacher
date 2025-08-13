import React from "react";

import { DialogueMeetingWithFriends } from "@/components/Lessons/Lesson-3/Lecture/Dialogue";
import { PayAttentionBlock } from "@/components/lesson/PayAttentionBlock/PayAttentionBlock";
import { Vocabulary } from "@/components/lesson/Vocabulary/Vocabulary";
import { OccupationTable } from "@/components/lesson/Tables";
// import { Paragraph } from "@/components/lesson/Paragraph/Paragraph";

import { payAttention1 } from "@/prisma/lessons/pay-attention/lesson-3";
import { vocabulary } from "@/prisma/lessons/vocabulary/lesson-3";
import { occupation } from "@/prisma/lessons/tables";
// import { paragraph } from "@/prisma/lessons/paragraph";

const { occupationTable } = occupation;

const Lecture = () => {
  return (
    <>
      <DialogueMeetingWithFriends />
      <PayAttentionBlock data={payAttention1} />
      <Vocabulary lesson={vocabulary} />
      <OccupationTable data={occupationTable} />
      {/* <PayAttentionBlock data={payAttention2} /> */}
      {/* <Vocabulary lesson={vocabulary2} /> */}
      {/* <Paragraph data={paragraph.explanation} /> */}
    </>
  );
};

export default Lecture;
