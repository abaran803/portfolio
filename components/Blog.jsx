"use client";
import Section from "@/components/Section";
import { useEffect, useState } from "react";
export default function Blog() {
  const [articles, setArticles] = useState([]);
  const [loadingArticles, setLoadingArticles] = useState(true);
  const mediumArticle =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@abaran803";

  useEffect(() => {
    fetch(mediumArticle)
      .then((res) => res.json())
      .then((data) =>
        setArticles(
          data.items.slice(0, 3).map((item) => ({
            title: item.title,
            desc: `${item.description.split(".")[0]}.`,
            href: item.link,
          }))
        )
      )
      .finally(() => setLoadingArticles(false));
  }, []);

  if (loadingArticles) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <Section id="blog" eyebrow="Writing" title="Notes & Case Studies">
      <div className="grid md:grid-cols-3 gap-4">
        {articles.map((p) => (
          <a
            target="_blank"
            key={p.title}
            href={p.href}
            className="card p-6 hover:shadow-lg transition-shadow"
          >
            <div className="font-semibold">{p.title}</div>
            <p
              className="mt-2 text-slate-700 dark:text-slate-300"
              dangerouslySetInnerHTML={{ __html: p.desc }}
            ></p>
            <div className="mt-4 link">Read →</div>
          </a>
        ))}
      </div>
    </Section>
  );
}
