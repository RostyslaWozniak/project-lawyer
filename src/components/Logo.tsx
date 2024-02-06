import { twMerge } from "tailwind-merge";
import { lightColor } from "../helpers/globalVariables";

type LogoProps = {
  className?: string;
  color?: string;
  size?: { width: number; height: number };
};

const Logo = ({
  className,
  color = lightColor,
  size = { width: 70, height: 60 },
}: LogoProps) => {
  return (
    <div className={twMerge(className)}>
      <svg
        width={size.width}
        height={size.height}
        viewBox="0 0 91 74"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M31.382 49.948C29.811 52.45 26.342 54.199 22.34 54.199H9.041C5.039 54.199 1.57 52.45 0 49.948H0.585C0.585 49.889 0.595 49.832 0.616 49.771L14.32 11.644C13.602 11.619 12.883 11.501 12.157 11.273C11.469 11.055 11.086 10.321 11.303 9.632C11.52 8.944 12.255 8.561 12.943 8.778C15.65 9.633 18.737 8.095 22.204 6.368C28.052 3.455 34.856 0.066 43.845 4.967V0H45.649V4.879C54.507 0.184999 61.237 3.536 67.028 6.42C70.495 8.147 73.582 9.685 76.289 8.83C76.977 8.613 77.713 8.995 77.93 9.683C78.147 10.372 77.764 11.106 77.076 11.323C76.506 11.504 75.938 11.614 75.376 11.666L89.161 50.018C89.182 50.078 89.193 50.136 89.193 50.194H90.082C88.49 52.697 84.975 54.445 80.917 54.445H67.437C63.38 54.445 59.864 52.697 58.271 50.194H59.164C59.164 50.136 59.174 50.078 59.193 50.018L73.016 11.562C71.053 11.229 69.078 10.344 66.995 9.322C66.623 9.139 66.246 8.951 65.866 8.761C60.9 6.287 55.171 3.434 47.991 6.645C47.312 6.948 46.621 7.305 45.915 7.723C45.83 7.773 45.742 7.812 45.651 7.842V11.572H46.691V47.644H47.85V63.928C51.372 64.384 54.438 65.67 56.55 67.465H60.217V71.072H61.248V73.906H28.138V71.072H29.684V67.466H33.481C35.542 65.716 38.51 64.447 41.924 63.963V47.644H42.826V11.572H43.847V7.845C43.667 7.826 43.488 7.769 43.321 7.671C42.746 7.331 42.179 7.031 41.622 6.768C34.267 3.283 28.423 6.192 23.372 8.709C22.895 8.946 22.425 9.181 21.96 9.407C20.182 10.273 18.48 11.024 16.793 11.398L30.586 49.772C30.607 49.833 30.616 49.89 30.616 49.949L31.382 49.948ZM88.117 50.194L74.701 12.867V50.194H88.117ZM73.655 50.194V50.192V12.867L60.274 50.094L60.238 50.194H73.655ZM16.123 12.62V49.948H29.54L16.123 12.62ZM1.66 49.948H15.077V49.945V12.62L1.696 49.848L1.66 49.948Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default Logo;
