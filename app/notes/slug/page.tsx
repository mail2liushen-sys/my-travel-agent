import { getAllPosts, getPost } from '@/src/lib/markdown';

export async function generateStaticParams() {
  return getAllPosts('notes').map((p) => ({ slug: p.slug }));
}

export default async function NoteDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { meta, html } = await getPost('notes', slug);
  return (
    <article className="bg-white rounded-xl p-8 shadow">
      <div className="text-sm text-gray-500">{meta.date}</div>
      <h1 className="text-3xl font-bold mt-2 mb-6">{meta.title}</h1>
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
}