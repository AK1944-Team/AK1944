import { BackgroundMedia } from "@/components/shared/BackgroundMedia/BackgroundMedia";
import { FeaturedImage } from "@/components/shared/FeaturedImage/FeaturedImage";
import { Heading } from "@/components/shared/Heading/Heading";
import { StampIcon } from "@/icons/StampIcon";
import { StripesIcon } from "@/icons/StripesIcon";
import type { Biogram } from "@/payload-types";

export const BiogramHistory = ({ biogram }: { biogram: Biogram }) => {
  const paragraphs = biogram.biography
    ?.split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
  const biogramData = [
    { label: "Data i miejsce urodzenia:", value: biogram.birthDate },
    { label: "Data i miejsce śmierci:", value: biogram.deathDate },
    { label: "Miejsce pochówku:", value: biogram.burialPlace },
  ];

  return (
    <>
      <BackgroundMedia
        alt=""
        src="/images/history/main/paper.png"
        className="absolute object-fill contrast:hidden"
        sizes="100vw"
        aria-hidden="true"
      >
        <div className="mx-auto w-full max-w-[767px] px-6 py-12 mobile:pt-28 tablet:max-w-[1279px] tablet:pt-0 desktop:max-w-[1440px] desktop:px-18 desktop:py-28">
          <Heading variant="h2" contrast="yellow" color="green">
            {biogram.name}
          </Heading>
          {biogram.pseudonym ? (
            <Heading className="h4" contrast="yellow" color="greenB">
              ps. {biogram.pseudonym}
            </Heading>
          ) : null}

          <div className="desktop:flow-root">
            <div className="relative mx-auto my-6 aspect-[0.79] h-[400px] w-full max-w-[600px] tablet:h-[600px] desktop:float-right desktop:mb-6 desktop:ml-10 desktop:mt-2 desktop:h-[600px] desktop:w-[450px] desktop:max-w-[450px]">
              <FeaturedImage
                featuredImage={biogram.portrait}
                fallbackAlt={"Zdjęcie weterana Armii Krajowej"}
                fill
                className="rounded object-cover"
              />
              <div className="absolute -right-3 -top-3 tablet:-right-6 tablet:-top-6 desktop:-right-12 desktop:-top-10">
                <StripesIcon className="h-full w-full max-w-[120px] tablet:max-w-[252px]" />
              </div>
              <div className="absolute -bottom-6 -left-6 tablet:-bottom-6 tablet:-left-6 desktop:-bottom-10 desktop:-left-10">
                <StampIcon className="h-full w-full max-w-[80px] tablet:max-w-[158px]" />
              </div>
            </div>

            <div className="pt-5 font-courier text-18">
              {biogramData.map((item, index) => (
                <div key={index}>
                  <span>{item.label}&nbsp;</span>
                  <span className="font-bold text-textDarkGreen">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            <div>
              {paragraphs?.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="my-6 font-courier text-18 text-textDarkGreen"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </BackgroundMedia>
    </>
  );
};
