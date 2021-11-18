import ModelCreateForm from "components/forms/ModelForm";
import useCreatePropertyMutation from "context/mutations/useCreateProperty";

const PropertyFormCreateSection = () => {
  const { mutate, isLoading } = useCreatePropertyMutation();

  return (
    <div>
      <ModelCreateForm
        model={"property"}
        submit={mutate}
        isSubmitting={isLoading}
      />
    </div>
  );
};

export default PropertyFormCreateSection;
