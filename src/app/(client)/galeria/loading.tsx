import Container from "@/components/shared/Container";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";
import { Heading } from "@/components/shared/Heading/Heading";

export default function GalleryLoading() {
  return (
    <Container className="py-5">
      <Breadcrumbs />
      <div className="mb-8 mt-5">
        <Heading variant="h2" color="green" contrast="yellow">
          Galeria zdjęć
        </Heading>
      </div>

      <div className="space-y-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="animate-pulse border-b border-gray-200 pb-8">
            <div className="mb-6">
              <div className="h-8 w-64 rounded bg-gray-200"></div>
              <div className="mt-2 h-6 w-40 rounded bg-gray-200"></div>
            </div>

            <div className="grid grid-cols-2 gap-4 tablet:grid-cols-3 desktop:grid-cols-4">
              {[1, 2, 3, 4].map((j) => (
                <div
                  key={j}
                  className="aspect-square w-full rounded bg-gray-200"
                ></div>
              ))}
            </div>

            <div className="mt-6 flex justify-center gap-2">
              {[1, 2, 3].map((k) => (
                <div key={k} className="h-2 w-2 rounded-full bg-gray-200"></div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-6 flex justify-center gap-2">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-8 w-8 rounded bg-gray-200"></div>
        ))}
      </div>
    </Container>
  );
}
