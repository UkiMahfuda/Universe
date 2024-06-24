import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";
import CardProject from "../../../../Elements/CardProject";
import { ProjectList } from "../../../../utils/data";

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
          <CardProject>
            <CardProject.Image slug={project.slug} image={project.image} />
            <div className="flex flex-col gap-3 px-2 pb-2">
              <CardProject.Title title={project.name}>{project.desc}</CardProject.Title>
              <div className="flex flex-row gap-3">
                {project.tech.map((tech) => (
                  <CardProject.Tech key={tech} tech={tech} />
                ))}
              </div>
            </div>
          </CardProject>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default Slider;
