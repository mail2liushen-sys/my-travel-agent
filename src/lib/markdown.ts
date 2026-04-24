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

export function getAllPosts(category: Category): PostMeta[] {
  const dir = path.join(root, category);
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md'));
  return files
    .map((file) => {
      const slug = file.replace(/\.md$/, '');
      const raw = fs.readFileSync(path.join(dir, file), 'utf8');
      const { data } = matter(raw);
      return { slug, ...(data as Omit<PostMeta, 'slug'>) };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPost(category: Category, slug: string) {
  const full = path.join(root, category, `${slug}.md`);
  const raw = fs.readFileSync(full, 'utf8');
  const { data, content } = matter(raw);
  const processed = await remark().use(gfm).use(html).process(content);
  return { meta: { slug, ...(data as Omit<PostMeta, 'slug'>) }, html: processed.toString() };
}