import { renderMarkdown } from "@/lib/blog";

function InlineText({ text }: { text: string }) {
  const parts = text.split(/(`[^`]+`)/g);

  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("`") && part.endsWith("`")) {
          return <code key={`${part}-${index}`}>{part.slice(1, -1)}</code>;
        }

        return <span key={`${part}-${index}`}>{part}</span>;
      })}
    </>
  );
}

export function MarkdownBody({ content }: { content: string }) {
  return (
    <div className="markdown-body">
      {renderMarkdown(content).map((block) => {
        if (block.type === "h1") return <h1 key={block.key}>{block.text}</h1>;
        if (block.type === "h2") return <h2 key={block.key}>{block.text}</h2>;
        if (block.type === "ul") {
          return (
            <ul key={block.key}>
              {block.items.map((item) => (
                <li key={item}>
                  <InlineText text={item} />
                </li>
              ))}
            </ul>
          );
        }

        return (
          <p key={block.key}>
            <InlineText text={block.text} />
          </p>
        );
      })}
    </div>
  );
}
