import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";
import { Link } from "react-router-dom";
import { ProjectList } from "../../../utils/data";

const Slider = () => {
  return (
    <Splide
      className="bg-secondary rounded-md container w-full sm:w-11/12 lg:w-3/4"
      aria-label="My Favorite Images"
      data-aos="fade-up"
      data-aos-delay="150"
      key={"slider"}
      options={{
        rewind: true,
        type: "loop",
        perPage: 3,
        breakpoints: {
          1024: {
            gap: "1rem",
            perPage: 2,
            arrows: false,
          },
          640: {
            perPage: 1,
          },
        },
      }}
    >
      {ProjectList.map((project) => (
        <SplideSlide key={project.slug}>
          <div className="group transition-all lg:duration-300 my-1 hover:-translate-y-1 border-2 lg:mx-3 overflow-hidden border-opacity-50 rounded-lg border-gray flex flex-col gap-3">
            <Link to={`/project/desc/${project.slug}`}>
              <div className="w-full h-[175px] group-hover:opacity-65 opacity-100 transition-all ">
                <img src={project.image} alt="Image 2" className="h-full object-cover w-full object-top" />
              </div>
            </Link>
            <div className=" flex flex-col gap-3 px-2 pb-2 ">
              <div className=" h-[115px] overflow-hidden flex flex-col justify-between">
                <h1 className="group-hover:text-tesier group-hover:opacity-90 transition-all text-white text-base xl:text-lg poppins-semibold">{project.name}</h1>
                <p className=" text-gray h-2/5 text-base line-clamp-2">{project.desc}</p>
              </div>
              <div className="flex flex-row gap-3">
                {project.tech.map((tech, index) => (
                  <img key={index} src={tech} alt="tech" className="md:h-7 h-6" />
                ))}
              </div>
            </div>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default Slider;
