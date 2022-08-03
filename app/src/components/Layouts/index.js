import Header from "../Header";

const MayinLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default MayinLayout;