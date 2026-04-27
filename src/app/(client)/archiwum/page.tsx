import { List } from "@/app/(client)/archiwum/_components/List";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";
import Container from "@/components/shared/Container";
import { Heading } from "@/components/shared/Heading/Heading";
import { Pagination } from "@/components/shared/Pagination";
import { fetchCollection } from "@/dataAccess/fetchPayloadCollection";

const ITEMS_PER_PAGE = 5;

type PageProps = {
  searchParams: Promise<{
    page?: string;
  }>;
};

export default async function ArchivePage({ searchParams }: PageProps) {
  const params = await searchParams;
  const { docs: posts } = await fetchCollection({ collection: "news" });

  const page = parseInt(params.page || "1", 10);
  const currentPage = isNaN(page) || page < 1 ? 1 : page;
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedData = posts.slice(start, start + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(posts.length / ITEMS_PER_PAGE);

  return (
    <section>
      <Container
        as="main"
        className="tablet:px-10 tablet:pb-10 desktop:px-24 desktop:pb-20"
      >
        <div className="mb-10">
          <Breadcrumbs />
          <Heading variant="h2" color="green" contrast="yellow" className="mt-6">
            Archiwum
          </Heading>
        </div>
        <List data={paginatedData} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          basePath="/archiwum"
        />
      </Container>
    </section>
  );
}
