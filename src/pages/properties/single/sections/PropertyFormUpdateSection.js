import ModelForm from "components/forms/ModelForm";
import useUpdateProperty from "context/mutations/useUpdateProperty";
import useProperty from "context/queries/useProperty";

const PropertyFormUpdateSection = ({ propertyId }) => {
  const { data: property } = useProperty(propertyId);
  const { mutate, isLoading } = useUpdateProperty(propertyId);

  return (
    <div className="p-4">
      <ModelForm
        model={"property"}
        data={property}
        submit={mutate}
        isSubmitting={isLoading}
      />
    </div>
  );
};

export default PropertyFormUpdateSection;
