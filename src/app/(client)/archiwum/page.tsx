import { List } from "@/app/(client)/archiwum/_components/List";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";
import Container from "@/components/shared/Container";
import { Heading } from "@/components/shared/Heading/Heading";
import { Pagination } from "@/components/shared/Pagination";
import { fetchCollection } from "@/dataAccess/fetchPayloadCollection";

const ITEMS_PER_PAGE = 5;
const ARCHIVE_LIST_ID = "archive-list";

type PageProps = {
  searchParams: Promise<{
    page?: string;
  }>;
};

export default async function ArchivePage({ searchParams }: PageProps) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;

  const { docs: posts, totalPages } = await fetchCollection({
    collection: "news",
    query: { limit: ITEMS_PER_PAGE, pagination: true, page: currentPage },
  });

  return (
    <section>
      <Container
        as="main"
        className="tablet:px-10 tablet:pb-10 desktop:px-24 desktop:pb-20"
      >
        <div className="mb-10">
          <Breadcrumbs />
          <Heading
            variant="h2"
            color="green"
            contrast="yellow"
            className="mt-6"
          >
            Archiwum
          </Heading>
        </div>
        <div id={ARCHIVE_LIST_ID}>
          <List data={posts} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            basePath="/archiwum"
            scrollTargetId={ARCHIVE_LIST_ID}
          />
        </div>
      </Container>
    </section>
  );
}
