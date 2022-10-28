import "./styles.css";

export function Input({ label, type, placeholder, ...rest }) {
  return (
    <div {...rest} className="input-group">
      <label htmlFor={type}>{label}</label>
      <input
        {...rest}
        type={type}
        name={type}
        id={type}
        placeholder={placeholder}
      />
    </div>
  );
}
