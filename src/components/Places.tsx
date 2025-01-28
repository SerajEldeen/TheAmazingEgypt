import { Link } from "react-router-dom";
import Cities from "../constants/Cities";
import { InView } from "react-intersection-observer";

export default function Places() {
  return (
    <div className="mt-10 flex justify-center items-center gap-10 flex-wrap mb-20">
      {Cities.map((e, i) => (
        <InView key={e.Governrate} triggerOnce threshold={0.2}>
          {({ inView, ref }) => (
            <Link
              ref={ref}
              style={{
                transitionDelay: `${i * 180}ms`,
              }}
              className={`w-[250px] h-[300px] rounded-md relative cursor-pointer group overflow-hidden transition-all duration-[700ms] ease-[cubic-bezier(0.22, 1, 0.36, 1)] hover:scale-105
                ${
                  inView
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-10 scale-95"
                }
              `}
              to={e.path}
            >
              <img
                src={e.ImgSrc}
                alt={e.Governrate}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <span className="absolute bottom-0 text-center py-6 bg-gray-100 w-full transition-transform duration-700 group-hover:translate-y-full group-hover:bg-gray-100 uppercase font-semibold text-yellow-500">
                {e.Governrate}
              </span>
            </Link>
          )}
        </InView>
      ))}
    </div>
  );
}
