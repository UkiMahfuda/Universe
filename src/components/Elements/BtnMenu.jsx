export const ButtonMenu = (props) => {
  const { classname, children, onClick } = props;
  return (
    <button onClick={onClick} className={`transistion-all duration-300 hover:bg-secondary hover:border-opacity-50 px-5 py-2 w-[150px] text-start ${classname}`}>
      {children}
    </button>
  );
};
