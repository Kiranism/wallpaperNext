"use client";
import Masonry from "react-masonry-css";
import Pin from "./Pin";
import { Category } from "../../types";

const breakpointColumnsObj = {
  default: 4,
  3000: 5,
  2000: 6,
  1200: 3,
  1000: 2,
  500: 1,
};

interface MyComponentProps {
  pins: Category[];
  isHome: boolean;
}

const MasonryLayout: React.FC<MyComponentProps> = ({ pins, isHome }) => (
  <Masonry
    className="flex container animate-slide-fwd"
    breakpointCols={breakpointColumnsObj}
  >
    {pins?.map((pin, index) => (
      <Pin key={pin._id} product={pin} isHome={isHome} />
    ))}
  </Masonry>
);

export default MasonryLayout;
