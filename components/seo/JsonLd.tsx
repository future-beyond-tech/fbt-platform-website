interface JsonLdProps {
  /** Schema.org JSON-LD object or array of objects */
  data: object | object[];
}

/**
 * Renders Schema.org JSON-LD script tag for structured data.
 * Use for Article, BreadcrumbList, FAQPage, etc. per page.
 */
export default function JsonLd({ data }: JsonLdProps) {
  const payload = Array.isArray(data) ? data : [data];
  return (
    <>
      {payload.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
