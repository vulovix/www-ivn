import { PropsWithChildren } from "react";
import { timeline, attachments } from "./static";
import { Content } from "./Content";
import { Article, ContentComponent, TimelineRecord } from "./types";

export const DescriptionComponent: ContentComponent = (
  props: PropsWithChildren<unknown>
) => <>{props.children}</>;

const fetchArticles = async (): Promise<Article[]> => {
  try {
    const response = await fetch("/oazaapi/articles/public");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return (await response.json()) as Promise<Article[]>;
  } catch (e) {
    console.error("Failed to fetch articles:", e);
    return [];
  }
};

const createTimelineRecordFromArticle = (article: Article): TimelineRecord => ({
  title: article.title,
  date: new Date(article.createdAt),
  url: `https://oaza.dev/articles/${article.slug}`,
  content: () => (
    <Content
      description={
        <DescriptionComponent>{article.subtitle}</DescriptionComponent>
      }
      categories={article.categories}
      attachments={attachments[article.title]}
    />
  ),
});

const createTimelineRecordFromStatic = (
  record: TimelineRecord
): TimelineRecord => ({
  date: record.date,
  title: record.title,
  content: () => (
    <Content
      description={
        <DescriptionComponent>
          <record.content />
        </DescriptionComponent>
      }
      categories={[]}
      attachments={attachments[record.title]}
    />
  ),
  url: record.url,
});

export const getTimeline = async (): Promise<TimelineRecord[]> => {
  const blog = await fetchArticles();

  const blogTimelineRecords = blog.map(createTimelineRecordFromArticle);
  const staticTimelineRecords = timeline.map(createTimelineRecordFromStatic);

  return [...blogTimelineRecords, ...staticTimelineRecords].sort(
    (a, b) => b.date.getTime() - a.date.getTime()
  );
};
