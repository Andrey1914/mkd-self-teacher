import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://mkd-self-teacher.vercel.app/sitemap.xml",
    host: "https://mkd-self-teacher.vercel.app",
  };
}
