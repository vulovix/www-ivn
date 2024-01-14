import { BlogContent } from "./components";
import { timeline, attachments } from "./static";

export interface TimelineRecord {
  date: Date;
  title: string;
  content: string | React.FC;
  url?: string;
}

export interface Article {
  slug: string;
  title: string;
  subtitle: string;
  createdAt: number;
  image: string;
  categories: Array<{ name: string; slug: string }>;
}

export const getTimeline = async (): Promise<TimelineRecord[]> => {
  let blog: Array<Article> = [];
  try {
    blog = (await fetch("/oazaapi/articles/public").then((res) =>
      res.json()
    )) as Array<Article>;
    // for (let i = 0; i < blog.length; i++) {
    //   const article = { ...blog[i] };
    //   const data = await fetch(
    //     `/oazaapi/articles/public/images/${article.slug}`
    //   ).then((res) => res.text());
    //   if (data) {
    //     article.image = data;
    //   }
    //   blog[i] = article;
    // }
  } catch (e) {
    console.log(e);
  }
  const t: TimelineRecord[] = [
    ...blog.map((article: Article) => ({
      // title: `Oaza・${article.title}`,
      title: `${article.title}`,
      date: new Date(article.createdAt),
      url: `https://oaza.dev/articles/${article.slug}`,
      content: () =>
        BlogContent({
          description: article.subtitle,
          image: article.image,
          categories: article.categories,
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
          attachments: (attachments[article.title] as any) || undefined,
        }),
    })),
    ...timeline.map((record) => ({
      ...record,
      content: () =>
        BlogContent({
          description: record.content,
          image: "",
          categories: [],
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
          attachments: (attachments[record.title] as any) || undefined,
        }),
    })),
  ];
  return t.sort((a, b) => b.date.getTime() - a.date.getTime());
};
