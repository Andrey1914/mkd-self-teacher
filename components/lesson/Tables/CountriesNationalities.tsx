// import React from "react";
// import { TablesProps } from "@/types";
// import { formatText } from "@/utils";

// import { styles } from "./styles";

// export const CountriesNationalitiesTable = ({
//   data,
// }: {
//   data: TablesProps;
// }) => {
//   const { table, headerRow, headerCell, cell } = styles.countriesNationalities;

//   if (
//     !Array.isArray(data.content?.subtitle) ||
//     !Array.isArray(data.content?.words)
//   ) {
//     return null;
//   }

//   return (
//     <>
//       {Array.isArray(data.subtitle) && data.subtitle[0] && (
//         <h3 style={{ margin: "2rem 0 1rem" }}>{data.subtitle[0]}</h3>
//       )}

//       <table className={table}>
//         <thead>
//           <tr className={headerRow}>
//             {data.content.subtitle.map((title, idx) => (
//               <th
//                 key={idx}
//                 style={{ borderLeft: idx > 0 ? "0.5px solid #fff" : "none" }}
//                 className={headerCell}
//               >
//                 {title}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {data.content.words.map((row, idx) => (
//             <tr key={idx}>
//               <td className={cell}>{formatText(`<span>${row.land}</span>`)}</td>
//               <td className={cell}>
//                 {formatText(`<span>${row.nationality}</span>`)}
//               </td>
//               <td className={cell}>
//                 {formatText(`<span>${row.adjective}</span>`)}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </>
//   );
// };
