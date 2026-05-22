// import Link from "next/link";
import { lesson6 } from "@/prisma/lessons/lesson-6";
import { HeadingGenerator } from "@/components/contents/generator";

export const Heading = () => {
  return <HeadingGenerator lesson={lesson6} />;
  // const title = lesson6.title as { ru: string; mkd: string };
  // const section = lesson6.sections?.[0];
  // const sectionTitle = section?.title as
  //   | { ru: string; mkd: string }
  //   | undefined;

  // return (
  //   <>
  //     <ul style={{ listStyle: "none" }}>
  //       <li>
  //         <Link href="/lesson/6">
  //           <h2 style={{ textIndent: 0 }}>
  //             {title.ru} <span>{title.mkd}</span>
  //           </h2>
  //         </Link>

  //         <Link href="/lesson/6#car_rental">
  //           <h3
  //             style={{
  //               display: "flex",
  //               flexDirection: "column",
  //               textIndent: 0,
  //             }}
  //           >
  //             {sectionTitle?.ru}
  //             <span>{sectionTitle?.mkd}</span>
  //           </h3>
  //         </Link>
  //       </li>
  //     </ul>
  //   </>
  // );
};
