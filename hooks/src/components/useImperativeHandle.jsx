import {useEffect, useRef, useImperativeHandle, forwardRef} from "react";

const CustomInput = forwardRef(({label, name, ...props}, ref) => {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      console.log("Hi there!");
      inputRef.current.focus();
    }
  }));

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input name={name} ref={inputRef} {...props} />
    </div>
  );
});

export const FormContent = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <CustomInput label="Name" type="text" name="name" id="name" ref={inputRef}/>

      {/* Other form fields */}
    </div>
  );
};
