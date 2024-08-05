interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const TextInput = ({ placeholder, value, onChange }: TextInputProps) => (
  <div className="text-input">
    <input className="input" placeholder={placeholder} value={value} onChange={onChange} />
  </div>
);
