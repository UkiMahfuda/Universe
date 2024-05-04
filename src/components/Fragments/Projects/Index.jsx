import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";
import mobilebooking from "/static/projects/mobilebooking.svg";
import webbooking from "/static/projects/webbooking.svg";
import bookshelf from "/static/projects/bookshelf.svg";

const Projects = () => {
  return (
    <div className="flex justify-center items-center sm:h-dvh pb-28 sm:pb-0 bg-primary ">
      <div className="container flex flex-col items-center">
        <div className="mb-7 w-11/12 lg:w-3/4 mt-24 sm:mt-0">
          <h1 className="text-white text-lg sm:text-xl montserrat-bold">Showing My Project's</h1>
          <div className="w-2/3 sm:w-1/2 h-0.5 bg-tesier"></div>
          <p className="mt-3 text-gray montserrat text-sm sm:text-base">These are all projects I've worked on, using the programming I use.</p>
        </div>
        <Splide
          className="bg-secondary rounded-md container w-11/12 lg:w-3/4"
          aria-label="My Favorite Images"
          options={{
            rewind: true,
          }}
        >
          <SplideSlide>
            <div className="flex flex-col md:flex-row border-2 border-gray rounded-md border-opacity-20 sm:mx-2 p-4">
              <img src={mobilebooking} alt="Image 2" className="rounded-md object-cover object-center w-full md:w-2/5 h-48 " />
              <div className="flex flex-col justify-between md:mx-5 mt-5 md:mt-0">
                <div>
                  <h1 className="poppins-semibold text-white text-lg">Room Booking's Web</h1>
                  <p className="text-gray ">This website was designed and developed as a final assignment in a Web Programming course. On this website, students can book campus rooms easily and efficiently.</p>
                </div>
                <p className="text-gray ">Javascript, Laravel, Bootstrap, MySql.</p>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="flex flex-col md:flex-row border-2 border-gray rounded-md border-opacity-20 sm:mx-2 p-4">
              <img src={webbooking} alt="Image 2" className="rounded-md object-cover object-center w-full md:w-2/5 h-48 " />
              <div className="flex flex-col justify-between md:mx-5 mt-5 md:mt-0">
                <div>
                  <h1 className="poppins-semibold text-white text-lg">Room Booking's Web</h1>
                  <p className="text-gray ">This website was designed and developed as a final assignment in a Web Programming course. On this website, students can book campus rooms easily and efficiently.</p>
                </div>
                <p className="text-gray ">Javascript, Laravel, Bootstrap, MySql.</p>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="flex flex-col md:flex-row border-2 border-gray rounded-md border-opacity-20 sm:mx-2 p-4">
              <img src={bookshelf} alt="Image 2" className="rounded-md object-cover object-center w-full md:w-2/5 h-48 " />
              <div className="flex flex-col justify-between md:mx-5 mt-5 md:mt-0">
                <div>
                  <h1 className="poppins-semibold text-white text-lg">Room Booking's Web</h1>
                  <p className="text-gray ">This website was designed and developed as a final assignment in a Web Programming course. On this website, students can book campus rooms easily and efficiently.</p>
                </div>
                <p className="text-gray ">Javascript, Laravel, Bootstrap, MySql.</p>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};
export default Projects;
