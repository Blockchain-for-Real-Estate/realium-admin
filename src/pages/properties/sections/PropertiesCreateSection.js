import ModelCreateForm from "components/forms/ModelCreateForm";
import useCreatePropertyMutation from "context/mutations/useCreatePropertyMutation";

const PropertiesCreateSection = () => {
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

export default PropertiesCreateSection;
