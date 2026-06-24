import Image from "next/image";
import Container from "@/components/shared/Container";
import { SocialMediaTray } from "@/components/shared/SocialMedia/SocialMediaTray";
import { FooterNavigation } from "./FooterNavigation";
import { FooterSupport } from "./FooterSupport";
import { FooterLegalInfo } from "./FooterLegalInfo";
import { getSocialMediaLinks } from "@/dataAccess/fetchPayloadCollection";

export const Footer = async () => {
  const { data: socialMediaLinks } = await getSocialMediaLinks();

  return (
    <footer className="w-full bg-greenMain px-6 py-8 text-white">
      <Container>
        <div className="flex flex-col gap-8 md:grid md:grid-cols-[minmax(150px,200px)_1fr] md:gap-4 desktop:grid desktop:grid-cols-[200px_1fr] desktop:items-start desktop:gap-8">
          <FooterColumn>
            <Logo />
            <SocialMediaTray
              className="flex items-center gap-4"
              socialMediaLinks={socialMediaLinks}
            />
          </FooterColumn>

          <FooterColumn>
            <FooterNavigation />
            <FooterSupport />
          </FooterColumn>
        </div>

        <Divider />

        <FooterLegalInfo />
      </Container>
    </footer>
  );
};

const FooterColumn = ({ children }: { children: React.ReactNode }) => (
  <div className="flex h-full flex-col items-center justify-between gap-8">
    {children}
  </div>
);

const Logo = () => (
  <Image
    src="/images/LogoFooterDesktop.png"
    alt="Związek AK Logo"
    width={149}
    height={182}
    className="h-auto w-[149px]"
  />
);

const Divider = () => <hr className="my-8 w-full border-white" />;
