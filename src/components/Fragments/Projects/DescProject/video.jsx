import { useParams } from "react-router-dom";
import { ProjectList } from "../../../utils/data";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Video = () => {
  const params = useParams();

  let project = ProjectList.find((data) => {
    return data.slug === params.slug;
  });
  return (
    <SkeletonTheme baseColor="#191E29" width="50%" duration={1} highlightColor="#232A39">
      <div data-aos="fade-up" data-aos-delay="175" className=" h-[225px] flex justify-center">
        <video className="h-[225px]" autoPlay loop muted>
          <source src={project.video || <Skeleton count={5} />} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </SkeletonTheme>
  );
};
export default Video;
