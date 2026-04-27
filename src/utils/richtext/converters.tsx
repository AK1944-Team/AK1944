import { QuotationIcon } from "@/icons/QuotationIcon";
import {
  defaultJSXConverters,
  type JSXConverters,
} from "@payloadcms/richtext-lexical/react";

export const converters = {
  ...defaultJSXConverters,

  paragraph: ({ node, nodesToJSX }) => {
    const children = nodesToJSX({ nodes: node.children });

    return <p className="text-gray-800 mb-5 leading-7">{children}</p>;
  },

  heading: ({ node, nodesToJSX }) => {
    const children = nodesToJSX({ nodes: node.children });

    const tag = node.tag;

    if (tag === "h1") {
      return <h1 className="mb-6 mt-10 text-4xl font-bold">{children}</h1>;
    }

    if (tag === "h2") {
      return <h2 className="mb-4 mt-10 text-3xl font-bold">{children}</h2>;
    }

    return <h3 className="mb-3 mt-8 text-2xl font-semibold">{children}</h3>;
  },

  quote: ({ node, nodesToJSX }) => {
    const children = nodesToJSX({ nodes: node.children });

    return (
      <blockquote className="relative my-8 flex flex-col rounded-md bg-greenLight px-16 py-7 font-courier text-sm leading-relaxed text-gray-800 contrast:bg-yellowContrast contrast:text-black00">
        <div
          style={{
            left: "-10px",
          }}
          className="absolute"
        >
          <QuotationIcon />
        </div>
        {children}
      </blockquote>
    );
  },

  list: ({ node, nodesToJSX }) => {
    const children = nodesToJSX({ nodes: node.children });
    const ListTag = node.tag;
    const className =
      node.tag === "ol"
        ? "text-gray-800 my-6 list-decimal space-y-2 pl-6"
        : "text-gray-800 my-6 list-disc space-y-2 pl-6";

    return <ListTag className={className}>{children}</ListTag>;
  },

  listitem: ({ node, nodesToJSX }) => {
    const children = nodesToJSX({ nodes: node.children });

    return <li className="leading-7">{children}</li>;
  },

  link: ({ node, nodesToJSX }) => {
    const children = nodesToJSX({ nodes: node.children });
    const href = node.fields.linkType === "custom" ? node.fields.url : "#";

    return (
      <a
        href={href}
        className="text-green-700 hover:text-green-900 underline"
        rel={node.fields.newTab ? "noopener noreferrer" : undefined}
        target={node.fields.newTab ? "_blank" : undefined}
      >
        {children}
      </a>
    );
  },
} satisfies JSXConverters;
