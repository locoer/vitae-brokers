import { useEffect, useRef } from 'react';

const Input = ({type = 'text', name, value, className, autoComplete, required, isFocused, handleChange, ...props}) => {
  
  const input = useRef()

  useEffect(() => {
    if (isFocused) {
      input.current.focus()
    }
  }, []);

  return (
    <div className="flex flex-col items-start">
      <input
      type={type}
      name={name}
      value={value}
      className={
      `border-gris-300 focus:border-rojo focus:ring focus:ring-rojo-300 focus:ring-opacity-50 rounded-lg shadow-sm ` +
      className
      }
      ref={input}
      autoComplete={autoComplete}
      required={required}
      onChange={(e) => handleChange(e)}
      />
    </div>
  )
}

const Label = ({ forInput, value, className, children }) => {
    return (
        <label htmlFor={forInput} className={`block font-medium text-sm text-gray-700 ` + className}>
            {value ? value : children}
        </label>
    );
}

Input.label = Label

export default Input