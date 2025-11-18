import React from "react";

import { GenericTable } from "@/components/lesson/Tables/GenericTable";

import { grammarTables } from "@/prisma/lessons/tables";

import {
  tableClassName,
  thColorizedClassName,
  tdColorizedClassName,
} from "@/components/lesson/Tables/rules";

const { aorist, iClassVerbs, perfectiveVerbs } = grammarTables;

export const Aorist = () => {
  return (
    <>
      <GenericTable
        data={aorist}
        classNames={{
          table: tableClassName,
          th: thColorizedClassName,
          td: tdColorizedClassName,
        }}
        titleIconSrc="/grammar.png"
      />
      <GenericTable
        data={iClassVerbs}
        classNames={{
          table: tableClassName,
          th: thColorizedClassName,
          td: tdColorizedClassName,
        }}
      />
      <GenericTable
        data={perfectiveVerbs}
        classNames={{
          table: tableClassName,
          th: thColorizedClassName,
          td: tdColorizedClassName,
        }}
      />
    </>
  );
};
