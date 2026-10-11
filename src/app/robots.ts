import { MetadataRoute } from "next";
import { clinicConfig } from "@/config/clinic";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = clinicConfig.meta.siteUrl.replace(/\/$/, "");

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
