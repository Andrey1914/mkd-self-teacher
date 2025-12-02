import { MetadataRoute } from "next";

const baseUrl = "https://mkd-self-teacher.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString().split("T")[0];

  const lessons = Array.from({ length: 10 }, (_, i) => ({
    url: `${baseUrl}/lesson/${i + 1}`,
    lastModified: today,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [
    {
      url: baseUrl,
      lastModified: today,
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    ...lessons,
  ];
}
