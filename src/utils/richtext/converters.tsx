import { QuotationIcon } from "@/icons/QuotationIcon";
import {
  defaultJSXConverters,
  type JSXConverters,
} from "@payloadcms/richtext-lexical/react";
import { getMediaUrl } from "@/utils/getMediaUrl";
import Image from "next/image";
import type { Media } from "../../payload-types";

export const converters = {
  ...defaultJSXConverters,

  upload: ({ node }) => {
    const url =
      typeof node.value === "object" && node.value !== null
        ? (node.value as Media).url
        : node.fields?.url;
    const src = getMediaUrl(url);

    if (!src) return null;

    const alt =
      typeof node.value === "object" && node.value !== null
        ? (node.value as Media).alt
        : (node.fields?.alt ?? "");

    return (
      <div className="flex max-w-[600px] items-center justify-center">
        <Image
          alt={alt}
          src={src}
          width={300}
          height={300}
          className="my-6 w-full rounded-lg object-cover"
          loading="lazy"
        />
      </div>
    );
  },

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
      <blockquote className="text-gray-800 relative my-8 flex flex-col rounded-md bg-greenLight px-3 pb-5 pt-16 font-courier text-sm leading-relaxed contrast:bg-yellowContrast contrast:text-black00 desktop:px-14 desktop:py-7">
        <div className="absolute left-3 top-3 desktop:-left-[10px]">
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
