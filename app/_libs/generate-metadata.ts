import { Metadata } from "next";

const siteName = "津江歯科 狛江市 歯科 世田谷区喜多見";
const siteDescription =
  "狛江市 世田谷区喜多見駅徒歩３分の歯科医院です。診療科目は一般歯科、矯正歯科、小児歯科、口腔外科です。";

/**
 * @see https://nextjs.org/docs/app/building-your-application/optimizing/metadata
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-metadata
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons
 */

export const generateMetadata = (
  metadata: Omit<Metadata, "title"> & {
    title?: string;
  } = {}
) => {
  const title = metadata.title ? `${siteName} | ${metadata.title}` : siteName;
  const description = metadata.description ?? siteDescription;

  return {
    description,
    keywords: "狛江市歯科,世田谷区喜多見歯科,矯正歯科,小児歯科,口腔外科",
    openGraph: {
      description,
      locale: "ja_JP",
      siteName,
      title,
      type: "website",
      url: process.env.NEXT_PUBLIC_SITE_URL,
      ...metadata.openGraph,
    },
    title,
    // twitter: {
    //   card: "summary_large_image",
    //   creator: "@news_ent214",
    //   site: "@news_ent214",
    //   ...metadata.twitter,
    // },
    // verification: {
    //   google: "サーチコンソールのやつ",
    //   ...metadata.verification,
    // },
  } satisfies Metadata;
};
