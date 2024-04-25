import { ChangeEvent, FocusEvent, FormEvent, useState } from 'react';
import {
  FormErrors,
  FormTouched,
  FormValues,
  UseFormProps,
} from '@/type/formType';

export default function useForm<T extends FormValues>({
  values,
  setValues,
  validate,
  onSubmit,
}: UseFormProps<T>) {
  const [errors, setErrors] = useState<FormErrors<T>>({} as FormErrors<T>);
  const [touched, setTouched] = useState<FormTouched<T>>({} as FormTouched<T>);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    const fieldName = name;
    const fieldErrors = validate({
      ...values,
      [fieldName]: value,
    });

    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: fieldErrors[fieldName],
    }));
  };

  // TODO: 분리시킬 수 있을까?
  const handleExpirationMonthBlur = (value: string) => {
    if (value.length === 1) {
      return value.padStart(2, '0');
    }

    return value;
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    // eslint-disable-next-line prefer-const
    let { value, name } = e.target;

    if (name === 'expirationMonth') {
      value = handleExpirationMonthBlur(value);
    }

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // 필드 방문 표시
    const nextTouched = Object.keys(values).reduce(
      (touched: FormTouched<T>, field: keyof T) => {
        touched[field] = true;

        return touched;
      },
      {} as FormTouched<T>
    );
    setTouched(nextTouched);

    const errors = validate(values);
    setErrors(errors);

    if (Object.values(errors).some(Boolean)) {
      return;
    }

    onSubmit();
  };

  const getFieldProps = (name: keyof T) => {
    const value = values[name];
    const onBlur = handleBlur;
    const onChange = handleChange;

    return {
      name,
      value,
      onBlur,
      onChange,
    };
  };

  return {
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    getFieldProps,
  };
}
