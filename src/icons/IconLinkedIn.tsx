import { DefaultIconProps } from "@/types";

interface Props extends DefaultIconProps {
  size?: number;
}

export default function IconLinkedIn({ className, size = 32 }: Props) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" rx="3" fill="#0077B5" />
      <path
        fill="white"
        d="M6.94 8.5c-.86 0-1.56-.7-1.56-1.56s.7-1.56 1.56-1.56 1.56.7 1.56 1.56-.7 1.56-1.56 1.56ZM5.67 9.83h2.55v8.52H5.67V9.83Zm4.74 0h2.45v1.17h.04c.34-.64 1.16-1.31 2.39-1.31 2.55 0 3.02 1.68 3.02 3.87v4.79h-2.55v-4.24c0-1.01-.02-2.3-1.4-2.3-1.4 0-1.61 1.09-1.61 2.22v4.32h-2.55V9.83Z"
      />
    </svg>
  );
}
