import { MetadataRoute } from "next";

const baseUrl = "https://mkd-self-teacher.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const lessons = Array.from({ length: 9 }, (_, i) => ({
    url: `${baseUrl}/lesson/${i + 1}`,
    lastModified: "2025-11-30",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: "2025-11-30",
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    ...lessons,
  ];
}
