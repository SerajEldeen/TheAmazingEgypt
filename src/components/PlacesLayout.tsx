import PlacesSlideShow from "../hooks/SlideShow/PlacesSlideShow";
import Places from "./Places";

export default function PlacesLayout() {
  return (
    <div className="mt-20">
      <PlacesSlideShow />
      <Places />
    </div>
  );
}
