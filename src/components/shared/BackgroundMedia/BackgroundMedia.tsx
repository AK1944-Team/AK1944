import { cn } from "@/utils";
import Image, { ImageProps } from "next/image";

export type BackgroundMediaProps =
  | {
      videoSrc: string;
      children?: React.ReactNode;
      className?: string;
      src?: never;
      alt?: never;
      sizes?: never;
    }
  | ({
      src: ImageProps["src"];
      alt: string;
      children?: React.ReactNode;
      className?: string;
      videoSrc?: never;
    } & Omit<ImageProps, "fill">);

export const BackgroundMedia = ({
  children,
  src,
  alt,
  sizes,
  className,
  videoSrc,
  ...props
}: BackgroundMediaProps) => {
  return (
    <div className="relative h-full w-full">
      {videoSrc ? (
        <div>
          <video
            autoPlay
            muted
            loop
            playsInline
            className={cn(
              "absolute inset-0 z-0 h-full w-full object-cover",
              className,
            )}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ) : src ? (
        <Image
          src={src}
          alt={alt ?? ""}
          fill
          priority
          sizes={sizes ?? "100vw"}
          quality={80}
          className={cn("z-0 object-cover", className)}
          {...props}
        />
      ) : null}

      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};
