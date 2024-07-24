import { useParams } from "react-router-dom";
import { ProjectList } from "../../../utils/data";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useState, useEffect, Fragment } from "react";

const Video = () => {
  const params = useParams();
  const [videoLoaded, setVideoLoaded] = useState(false);

  let project = ProjectList.find((data) => {
    return data.slug === params.slug;
  });

  useEffect(() => {
    setVideoLoaded(false);
  }, [project]);

  return (
    <Fragment>
      {!videoLoaded && (
        <div data-aos="fade-up" data-aos-delay="175">
          <SkeletonTheme baseColor="#191E29" duration={0.7} highlightColor="#232A39">
            <p>
              <Skeleton count={7} />
            </p>
          </SkeletonTheme>
        </div>
      )}
      {project && project.video && (
        <div data-aos="fade-up" data-aos-delay="175" className="h-[225px] flex justify-center">
          <video className={`h-[225px] ${!videoLoaded ? "hidden" : "block"}`} autoPlay loop muted onLoadedData={() => setVideoLoaded(true)}>
            <source src={project.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </Fragment>
  );
};

export default Video;
