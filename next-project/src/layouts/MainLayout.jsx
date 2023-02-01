import Navbar from "@/components/navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="MainLayout">
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
