import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";
import { ProjectList } from "../../../utils/data";

const Slider = () => {
  return (
    <Splide
      className="bg-secondary rounded-md container w-11/12 lg:w-3/4  "
      aria-label="My Favorite Images"
      data-aos="fade-up"
      data-aos-delay="150"
      options={{
        rewind: true,
        gap: "2rem",
      }}
    >
      {ProjectList.map((project) => (
        <SplideSlide>
          <div className="flex flex-col md:flex-row gap-5 sm:mx-2 p-4 border-2 border-gray border-opacity-50 rounded-lg mx-2 h-full overflow-auto">
            {/* <div className=" md:w-[35%] h-2/5 md:h-full rounded-md overflow-hidden">
              <img src={project.image} className="w-full h-full  border-tesier object-cover object-top " alt="img-project" />
            </div> */}
            <img src={project.image} alt="Image 2" className="hover:opacity-50 transition-all rounded-md object-cover object-top md:w-2/5 h-48 xl:h-48 md:h-full" />
            <div className="flex flex-col justify-between  md:w-3/5 h-3/5 sm:h-full ">
              <div className="mb-4">
                <h1 className="poppins-semibold text-white text-lg mb-2 md:mb-0 transition-all hover:text-tesier">{project.name}</h1>
                <p className="text-gray ">{project.desc}</p>
              </div>
              <p className="text-gray ">{project.tech}</p>
            </div>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default Slider;
