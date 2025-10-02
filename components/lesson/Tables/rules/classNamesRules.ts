import { styles } from "@/components/lesson/Tables/styles";

const {
  table,
  tableWithoutBorder,
  tableLayoutAuto,
  headerRow,
  headerCell,
  headerCellStart,
  secondRowCell,
  headerCellBorderLeft,
  cell,
  cellWithoutBorder,
  cellColorized,
  cellItalic,
  textCenter,
} = styles.generic;

export const tableClassName = `${table}`;

export const tableWithoutBorderClassName = `${table} ${tableWithoutBorder}`;

export const tableWithoutBorderLayoutAutoClassName = `${tableWithoutBorder} ${tableLayoutAuto}`;

export const tdClassName = `${cell}`;

export const tdColorizedClassName = `${cell} ${cellColorized}`;

export const tdColorizedWithoutBorderClassName = `${cell} ${cellColorized} ${cellWithoutBorder}`;

const tdRules: Record<number, string> = {
  0: `${cell} ${cellWithoutBorder} ${cellColorized}`,
  1: `${cell} ${cellWithoutBorder} ${cellItalic}`,
};

export const getColorizedItalicTdClassName = (cellIndex: number) =>
  tdRules[cellIndex] ?? `${cell} ${cellWithoutBorder}`;

export const getColorizedExceptFirstTdClassName = (cellIndex: number) =>
  cellIndex === 0
    ? `${cell} ${cellWithoutBorder}`
    : `${cell} ${cellWithoutBorder} ${cellColorized}`;

export const getColorizedFirstTdClassName = (cellIndex: number) =>
  cellIndex === 0
    ? `${cell} ${cellWithoutBorder} ${cellColorized}`
    : `${cell} ${cellWithoutBorder}`;

export const thClassName = `${cell} ${headerCell}`;

export const thColorizedClassName = `${cell} ${headerCellStart} ${headerCell} ${cellColorized}`;

export const getColorizedThClassName = (index: number) =>
  `${headerRow} ${headerCell} ${secondRowCell} ${
    index > 0 ? headerCellBorderLeft : ""
  }`;

export const textCenterClassName = `${textCenter}`;
