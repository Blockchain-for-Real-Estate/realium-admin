import useProperties from "context/queries/useProperties";

const PropertiesPage = () => {
  const { data: properties } = useProperties();
  if (properties) debugger;
  return <div>PropertiesPage</div>;
};

export default PropertiesPage;
