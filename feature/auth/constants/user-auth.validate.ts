import { Effect, sample } from "effector";
import { Form } from "effector-react-form";
import { ErrorResponse } from "../api/auth.api";

const validateRequired = (value: string) =>
  !value?.length ? "Поля должны быть заполнены" : undefined;

const validateLogin = (value: string) => {
  const requiredError = validateRequired(value);
  if (requiredError) return requiredError;

  if (value.length < 5) return "Минимум 5 символов";
  if (value.length > 20) return "Максимум 20 символов";
};

const validateEmail = (value: string) => {
  const requiredError = validateRequired(value);
  if (requiredError) return requiredError;

  const charValidationRegexp =
    /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
  const charValidation = charValidationRegexp.test(value);
  if (!charValidation) return "Неверный формат email";
};

const validatePassword = (value: string) => {
  const requiredError = validateRequired(value);
  if (requiredError) return requiredError;

  const charValidationRegexp =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&_-])[A-Za-z\d@$!%*#?&_-]{8,}$/;
  const charValidation = charValidationRegexp.test(value);
  if (!charValidation) return "Минимум 8 символов, 1 буква и цифра, символ";
};

const createServerErrors = (
  form: Form<any, any>,
  effect: Effect<void, any>,
  inputFields: ErrorResponse["fields"]
) => {
  if (inputFields)
    for (const inputField of inputFields) {
      sample({
        clock: effect.doneData,
        filter: (registrationResponse) =>
          registrationResponse.hasError &&
          registrationResponse.fields?.includes(inputField)!,
        fn: (registrationResponse) => ({
          field: inputField,
          error: registrationResponse.message,
        }),
        target: form.setOrDeleteError,
      });
    }
};

export { validateEmail, validatePassword, validateLogin, createServerErrors };
