"use client";
import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};
// On Change Function
export function useContactFormChange(event: any) {
  const [inputs, setInputs] = useState(initialState);
  const { name, value } = event.target;

  setInputs({
    ...inputs,
    [name]: value
  })

  return {
    inputs,
    setInputs
  }
}
//  Clean input and toastr confirm
