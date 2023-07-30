export const pageview = (path: string) => {
  window.gtag("config", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
    page_path: path,
  });
};
