import Gallery from "react-photo-gallery";
import { photos } from "./photos";

export default function Image() {
  return <Gallery photos={photos} />;
}