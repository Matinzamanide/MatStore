import Navbar from "../navbar/navbar";

interface ILayout {
  children: React.ReactNode;
}
const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div className="bg-neutral-900 text-slate-300 ">
      <Navbar />

      {children}
    </div>
  );
};
export default Layout;
