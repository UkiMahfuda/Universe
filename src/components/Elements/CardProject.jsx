import { Link } from "react-router-dom";

const CardProject = (props) => {
  const { children } = props;
  return <div className="group transition-all lg:duration-300 my-1 border-2 lg:mx-3 overflow-hidden border-opacity-50 rounded-lg border-gray flex flex-col gap-3">{children}</div>;
};

const Image = (props) => {
  const { slug, image } = props;
  return (
    <Link to={`/project/desc/${slug}`}>
      <div className="w-full h-[175px] group-hover:scale-110 transition-all overflow-hidden">
        <img loading="lazy" src={image} alt={slug} className="h-full object-cover w-full object-top" />
      </div>
    </Link>
  );
};

const title = (props) => {
  const { title, children } = props;
  return (
    <div className=" h-[115px] overflow-hidden flex flex-col justify-between">
      <div>
        <h1 className="group-hover:text-tesier transition-all text-white text-base xl:text-lg poppins-semibold">{title}</h1>
        <div className="w-0 h-0.5 bg-tesier group-hover:w-full transition-all duration-500"></div>
      </div>
      <p className=" text-gray h-2/5 text-base line-clamp-2">{children}</p>
    </div>
  );
};

const tech = (props) => {
  const { tech } = props;
  return <img loading="lazy" src={tech} alt="tech" className="md:h-7 h-6" />;
};

CardProject.Image = Image;
CardProject.Title = title;
CardProject.Tech = tech;

export default CardProject;
