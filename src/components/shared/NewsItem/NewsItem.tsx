// import parse from "html-react-parser";

import { NewsHeader } from "../NewsHeader/NewsHeader";
import { NewsImage } from "../NewsImage/NewsImage";
import { NewsContent } from "../NewsContent/NewsContent";

// import { getImage } from "@/dataAccess/image";
// import { cleanHTML, truncateText } from "@/utils";
// import type { Post } from "@/types";
// import type { News } from "@/types";
import { truncateText } from "@/utils";

import { Asset, News } from "@/../payload-types";
// import {
//   convertLexicalToPlaintext,
//   PlaintextConverters,
// } from "@payloadcms/richtext-lexical/plaintext";
// import {
//   DefaultNodeTypes,
//   SerializedBlockNode,
// } from "@payloadcms/richtext-lexical";

interface Props {
  // post: Post;
  post: News;
}

// const converters: PlaintextConverters<
//   DefaultNodeTypes | SerializedBlockNode<any>
// > = {
//   blocks: { textBlock: ({ node }) => node.fields.text ?? "" },
//   link: ({ node }) => node.fields.url ?? "",
// };

export const NewsItem = ({
  // post: { id, title, date, featured_media, excerpt },
  post: { id, title, teaser, createdAt, heroImage },
}: Props) => {
  // const image = await getImage(featured_media);
  // const cleanedExcerpt = cleanHTML(excerpt);
  // const decodedCleanExcerpt = parse(cleanedExcerpt).toString();
  // const truncatedExcerpt = truncateText(decodedCleanExcerpt, 230);

  const truncatedTeaser = truncateText(teaser, 230);
  const image = heroImage as Asset;

  const href = `/archiwum/${id}`;

  return (
    <>
      <article id={id} className="flex flex-col p-4 desktop:hidden">
        <NewsHeader title={title} date={createdAt} />
        <NewsImage src={image.url!} alt={image.alt} />
        <NewsContent excerpt={truncatedTeaser} href={href} />
      </article>

      <article id={id} className="hidden gap-2 p-4 desktop:flex">
        <NewsImage src={image.url!} alt={image.alt} />

        <div className="flex flex-col gap-2">
          <NewsHeader title={title} date={createdAt} />
          <NewsContent excerpt={truncatedTeaser} href={href} />
        </div>
      </article>
    </>
  );
};
