import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";
import Container from "@/components/shared/Container";
import { FeaturedImage } from "@/components/shared/FeaturedImage/FeaturedImage";
import { Heading } from "@/components/shared/Heading/Heading";
import { fetchBySlug } from "@/dataAccess/fetchPayloadCollection";
import { getGalleryByNewsId } from "@/dataAccess/galleries";
import { converters } from "@/utils/richtext/converters";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { GallerySection } from "@/components/Gallery/GallerySection";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ArchivePage({ params }: PageProps) {
  const { slug } = await params;
  const { doc: post } = await fetchBySlug("news", slug);

  const gallery = post?.id ? await getGalleryByNewsId(post.id) : null;

  return (
    <section>
      <Container
        as="main"
        className="tablet:px-10 tablet:pb-10 desktop:px-24 desktop:pb-20"
      >
        <div className="mb-10">
          <Breadcrumbs />
          <Heading variant="h2" color="green" contrast="yellow" className="mt-6">
            {post?.title || "Nie znaleziono artykułu"}
          </Heading>
          <article className="mt-6 flow-root">
            <div className="relative mb-6 aspect-[10/7] w-full overflow-hidden rounded-lg sm:float-right sm:mb-4 sm:ml-8 sm:w-[320px] lg:w-[420px] xl:w-[500px]">
              <FeaturedImage
                featuredImage={post?.featuredImage}
                fallbackAlt="Zdjęcie główne"
                fill
                sizes="(min-width: 1280px) 500px, (min-width: 1024px) 420px, (min-width: 640px) 320px, 100vw"
                className="object-cover"
              />
            </div>
            <RichText
              data={post?.content}
              converters={converters}
              className="min-w-0"
            />
          </article>

          {gallery && (
            <GallerySection
              title={gallery.title}
              date={gallery.date}
              images={gallery.images}
            />
          )}
        </div>
      </Container>
    </section>
  );
}
