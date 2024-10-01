import { useState } from "react";

// Custom hook
function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,  // Update the specific form field
    });
  };

  return [values, handleChange];  // Return the form values and change handler
}

export default useForm;
