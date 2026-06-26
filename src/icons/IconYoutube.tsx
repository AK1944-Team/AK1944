import { DefaultIconProps } from "@/types";

interface Props extends DefaultIconProps {
  size?: number;
}

export default function IconYoutube({ className, size = 32 }: Props) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.5 23.6306V8.3714C0.5 3.76762 4.26664 0.000976562 8.87043 0.000976562H24.1296C28.7334 0.000976562 32.5 3.76762 32.5 8.3714V23.6306C32.5 28.2343 28.7334 32.001 24.1296 32.001H8.87043C4.26664 32.001 0.5 28.2343 0.5 23.6306Z"
        fill="url(#paint0_linear_2034_5534)"
      />
      <path
        d="M25.0657 13.6742C25.0657 11.5523 23.3454 9.83203 21.2236 9.83203H11.3988C9.27691 9.83203 7.55664 11.5523 7.55664 13.6742V18.2462C7.55664 20.3681 9.27691 22.0884 11.3988 22.0884H21.2236C23.3454 22.0884 25.0657 20.3681 25.0657 18.2462V13.6742ZM19.2877 16.3027L14.882 18.4826C14.7091 18.5756 14.1225 18.4509 14.1225 18.255V13.7803C14.1225 13.5812 14.7146 13.4564 14.8875 13.5549L19.105 15.8497C19.2811 15.9504 19.4672 16.2064 19.2877 16.3027Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2034_5534"
          x1="30.0415"
          y1="2.45969"
          x2="2.9585"
          y2="29.5427"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF0000" />
          <stop offset="1" stopColor="#850000" />
        </linearGradient>
      </defs>
    </svg>
  );
}
