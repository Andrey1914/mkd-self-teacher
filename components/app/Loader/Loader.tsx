import { Oval } from "react-loader-spinner";
import { styles } from "./styles";
import { LoaderProps } from "./types";

const { container: defaultContainerClass } = styles.loader;

export const Loader = ({
  size = 100,
  color = "var(--oval-loader)",
  secondaryColor = "#c1c1c1",
  withContainer = true,
  className = "",
}: LoaderProps) => {
  const ovalLoader = (
    <Oval
      height={size}
      width={size}
      color={color}
      secondaryColor={secondaryColor}
    />
  );

  if (!withContainer) {
    return ovalLoader;
  }

  return (
    <div className={`${defaultContainerClass} ${className}`}>{ovalLoader}</div>
  );
};
