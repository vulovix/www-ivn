import { BlogContent } from "./components";
import staticRecords from "./static";

export interface TimelineRecord {
  date: Date;
  title: string;
  content: string | React.FC;
  url?: string;
}

export const getTimeline = async (): Promise<TimelineRecord[]> => {
  let blog = [];
  try {
    blog = await fetch("/oaza/api/articles/public").then((res) => res.json());
    // for (let i = 0; i < blog.length; i++) {
    //   const article = { ...blog[i] };
    //   const data = await fetch(
    //     `/oaza/api/articles/public/images/${article.slug}`
    //   ).then((res) => res.text());
    //   if (data) {
    //     article.image = data;
    //   }
    //   blog[i] = article;
    // }
  } catch (e) {
    console.log(e);
  } finally {
    // timeline = [...blog, ...defaultRecords];
  }
  const timeline: TimelineRecord[] = [
    // ...staticRecords,
    ...blog.map((article) => ({
      // title: `Oaza・${article.title}`,
      title: `${article.title}`,
      date: new Date(article.createdAt),
      url: `https://blog.ivn.dev/articles/${article.slug}`,
      content: () =>
        BlogContent({
          description: article.subtitle,
          image: article.image,
          categories: article.categories,
        }),
    })),
  ];
  return timeline.sort((a, b) => b.date.getTime() - a.date.getTime());
};
