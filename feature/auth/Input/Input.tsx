import { Controller } from "effector-react-form";

type InputProps = {
  controller: Controller;
  label: React.ReactNode;
  placeholder: string;
  type: string;
};

const Input: React.FC<InputProps> = ({
  controller,
  label,
  placeholder,
  type,
}) => {
  const { input, error, isShowError } = controller();

  const inputErrorStyles = isShowError ? "input_block red" : "input_block";

  return (
    <div className={inputErrorStyles}>
      <label>{label}</label>
      <input
        {...input}
        value={input.value || ""}
        className="input"
        {...{ placeholder, type }}
      />
      {isShowError && (
        <p className="danger">
          <img src="/images/primary/danger2.svg" alt="" />
          {error}
        </p>
      )}
    </div>
  );
};

export { Input };
