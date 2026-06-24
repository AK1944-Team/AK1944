import { SocialMediaLink } from "@/components/shared/SocialMedia/SocialMediaLink";
import { SocialMedia } from "@/payload-types";

interface Props {
  className?: string;
  iconsSize?: number;
  socialMediaLinks?: SocialMedia[];
}

export const SocialMediaTray = ({
  className,
  iconsSize,
  socialMediaLinks,
}: Props) => {
  return (
    <nav className={className}>
      {socialMediaLinks?.map((item) => (
        <SocialMediaLink
          key={item.id}
          size={iconsSize}
          url={item.url}
          name={item.name}
          svg={item.icon}
        />
      ))}
    </nav>
  );
};
