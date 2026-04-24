import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';

const root = path.join(process.cwd(), 'content');

export type Category = 'travels' | 'notes';

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  summary?: string;
  location?: [number, number];
  locationName?: string;
  mood?: string;
  cover?: string;
  photos?: string[];
  tags?: string[];
}

// 把 frontmatter 里可能出现的 Date 对象、数组等规范化成可渲染的值
function normalize(data: Record<string, unknown>): Omit<PostMeta, 'slug'> {
  const d = data.date;
  let dateStr = '';
  if (d instanceof Date) {
    dateStr = d.toISOString().slice(0, 10); // YYYY-MM-DD
  } else if (typeof d === 'string') {
    dateStr = d;
  } else if (d) {
    dateStr = String(d);
  }
  return {
    title: String(data.title ?? ''),
    date: dateStr,
    summary: data.summary ? String(data.summary) : undefined,
    location: Array.isArray(data.location) ? (data.location as [number, number]) : undefined,
    locationName: data.locationName ? String(data.locationName) : undefined,
    mood: data.mood ? String(data.mood) : undefined,
    cover: data.cover ? String(data.cover) : undefined,
    photos: Array.isArray(data.photos) ? data.photos.map(String) : undefined,
    tags: Array.isArray(data.tags) ? data.tags.map(String) : undefined,
  };
}

export function getAllPosts(category: Category): PostMeta[] {
  const dir = path.join(root, category);
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md'));
  return files
    .map((file) => {
      const slug = file.replace(/\.md$/, '');
      const raw = fs.readFileSync(path.join(dir, file), 'utf8');
      const { data } = matter(raw);
      return { slug, ...normalize(data as Record<string, unknown>) };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPost(category: Category, slug: string) {
  const full = path.join(root, category, `${slug}.md`);
  const raw = fs.readFileSync(full, 'utf8');
  const { data, content } = matter(raw);
  const processed = await remark().use(gfm).use(html).process(content);
  return {
    meta: { slug, ...normalize(data as Record<string, unknown>) },
    html: processed.toString(),
  };
}