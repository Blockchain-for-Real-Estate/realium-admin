import DefaultHeader from "./headers/DefaultHeader";

const DefaultLayout = ({ children }) => {
  return (
    <div className="h-full flex flex-col">
      <div>
        <DefaultHeader />
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default DefaultLayout;
