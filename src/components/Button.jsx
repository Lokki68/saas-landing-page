import { clsx } from "clsx";
import { Marker } from "./Marker.jsx";

const Button = ({
  icon,
  children,
  onClick,
  href,
  containerClassName,
  markerFill,
}) => {
  const baseClass = "relative p-0.5 g5 rounded-2xl shadow-500 group";

  const Inner = () => (
    <>
      <span className="relative flex items-center min-h-[60px] px-4 g4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden">
        <span className="absolute -left-[1px]">
          <Marker fill={markerFill} />
        </span>
        {icon && (
          <img
            src={icon}
            alt="circle"
            className="size-10 mr-5 object-contain z-10"
          />
        )}
        <span className="relative z-2 font-poppins base-bold text-p1 uppercase">
          {children}
        </span>
      </span>

      <span className="glow-before glow-after" />
    </>
  );

  return href ? (
    <a href={href} className={clsx(baseClass, containerClassName)}>
      <Inner />
    </a>
  ) : (
    <button className={clsx(baseClass, containerClassName)} onClick={onClick}>
      <Inner />
    </button>
  );
};
export default Button;
