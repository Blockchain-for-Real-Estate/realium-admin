const TextInput = ({ attr, options, state, setState, isSubmitting }) => {
  return (
    <input
      name={attr}
      id={attr}
      type={options.inputType}
      value={state[attr]}
      required={options.required}
      onChange={(e) => setState({ ...state, [attr]: e.target.value })}
      disabled={isSubmitting}
      className="focus:ring-indigo-500 focus:border-indigo-500 block w-full border border-gray-300 rounded-md disabled:bg-gray-100 py-1"
    />
  );
};

export default TextInput;
