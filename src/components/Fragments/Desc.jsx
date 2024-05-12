import webbooking from "/static/projects/webbooking.svg";

const Desc = () => {
  return (
    <div className="h-dvh bg-primary">
      <div className="relative h-2/6">
        <img src={webbooking} className="w-full h-full object-cover object-top opacity-25" alt="" />
        <div className="absolute top-[60%] left-[15%]">
          <h1 className="text-white text-3xl montserrat-bold">Sistem Peminjaman Ruangan Berbasis Website</h1>
          <div className="text-gray montserrat flex gap-3">
            <p>Link Website: </p>
            <a href="" className="hover:text-tesier transition-all">
              Peminjaman Ruangan
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desc;
