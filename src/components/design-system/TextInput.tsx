import { ErrorMessage, Field } from 'formik';

type TextInputProps = {
  label?: string;
  inputName: string;
  type: string;
  placeholder: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  error?: string;
}

export default function TextInput({
  label,
  inputName,
  type,
  placeholder,
  onChange,
  onBlur,
  onKeyDown,
  value,
}: TextInputProps) {
  return (
    <div className="w-full md:w-full mb-6">
      <label
        htmlFor={inputName}
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
      >
        {label}
      </label>
      <Field
        className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
        type={type}
        name={inputName}
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onBlur={onBlur}
        value={value}
      />
      <ErrorMessage
          name={inputName}
          className="text-danger-800"
      />
    </div>
  )
}
