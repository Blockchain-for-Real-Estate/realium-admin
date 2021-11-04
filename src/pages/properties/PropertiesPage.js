import useProperties from "context/queries/useProperties";

const PropertiesPage = () => {
  const { data: properties } = useProperties();
  return <div>PropertiesPage</div>;
};

export default PropertiesPage;
