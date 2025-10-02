// import React from "react";
// import { TablesProps } from "@/types";
// import { formatText } from "@/utils";

// import { styles } from "./styles";

// interface Props {
//   data: TablesProps;
// }

// export const NumeralsTable = ({ data }: Props) => {
//   const content = data.content;

//   const { container, headerRow, headerCell, cell } = styles.numerals;

//   if (
//     !content ||
//     !Array.isArray(content.subtitle) ||
//     !Array.isArray(content.words) ||
//     content.words.length === 0
//   ) {
//     return null;
//   }

//   const { subtitle, words } = content;

//   return (
//     <div className={container}>
//       <table>
//         <thead>
//           <tr className={headerRow}>
//             {subtitle.map((col, idx) => (
//               <th
//                 key={idx}
//                 style={{ borderLeft: idx > 0 ? "0.5px solid #fff" : "none" }}
//                 className={headerCell}
//               >
//                 {col}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {words.map((word, idx) => (
//             <tr key={idx}>
//               <td className={cell}>{formatText(`${word.numbers}`)}</td>
//               <td className={cell}>
//                 {formatText(`<span>${word.cardinal}</span>`)}
//               </td>
//               <td className={cell}>
//                 {formatText(`<span>${word.ordinal}</span>`)}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };
