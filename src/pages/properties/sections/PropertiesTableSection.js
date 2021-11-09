import useProperties from "context/queries/useProperties";

const PropertiesTableSection = () => {
  const { data: properties, isLoading } = useProperties();

  return (
    <table className="w-full">
      <thead>
        <tr>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
        </tr>
      </thead>
      <tbody>
        {properties.map((property) => {
          return <></>;
        })}
      </tbody>
    </table>
  );
};

export default PropertiesTableSection;
