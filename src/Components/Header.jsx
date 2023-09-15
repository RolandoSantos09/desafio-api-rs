const Header = ({ title }) => {
  return (
    <h2 className="titulo" style={{ color: "white" }}>
      Feriados en Chile
      {title}
    </h2>
  );
};

export default Header;
