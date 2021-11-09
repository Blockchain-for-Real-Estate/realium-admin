import { useEffect, useState, useRef } from "react";
import useModel from "context/queries/useModel";
import TextInput from "./inputs/TextInput";
import SelectInput from "./inputs/SelectInput";
import TextAreaInput from "./inputs/TextAreaInput";
import NumberInput from "./inputs/NumberInput";

const ModelCreateForm = ({ model, submit, isSubmitting }) => {
  const [state, setState] = useState({});
  const { data: fields, isLoading } = useModel("property");

  const handleSubmit = (e) => {
    e.preventDefault();
    submit(state);
  };

  const GetInput = (attr, options) => {
    switch (options.inputType) {
      case "text":
        return (
          <TextInput
            attr={attr}
            options={options}
            state={state}
            setState={setState}
          />
        );
      case "number":
        return (
          <NumberInput
            attr={attr}
            options={options}
            state={state}
            setState={setState}
            isSubmitting={isSubmitting}
          />
        );
      case "select":
        return (
          <SelectInput
            attr={attr}
            options={options}
            state={state}
            setState={setState}
            isSubmitting={isSubmitting}
          />
        );
      case "textarea":
        return (
          <TextAreaInput
            attr={attr}
            options={options}
            state={state}
            setState={setState}
            isSubmitting={isSubmitting}
          />
        );
      default:
        return <div>{options.name}</div>;
    }
  };

  if (isLoading)
    return <div className="m-4 w-full h-96 bg-gray-100 animate-pulse" />;
  return (
    <form
      className="border-b border-gray-200 bg-white rounded-lg shadow"
      onSubmit={handleSubmit}
    >
      <div>Create Property</div>
      <div className=" p-4">
        <div className="grid">
          {fields?.map((field) => {
            const attr = field[0];
            const options = field[1];
            const isHash = field[1].hashKey;

            if (isHash) return null;
            return (
              <div key={attr} className={`py-2 px-2`}>
                <label
                  htmlFor={attr}
                  className="block text-sm font-medium text-gray-700 required-field capitalize"
                >
                  {options.label}
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  {GetInput(attr, options)}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-gray-200 text-right px-4 py-2">
        <button className="btn-primary py-2 px-4">
          {isSubmitting ? "Submitting" : "Save"}
        </button>
      </div>
    </form>
  );
};

export default ModelCreateForm;
