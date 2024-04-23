import useForm from '@/hooks/useForm';
import { Input } from '../atoms/Input';

type CardNumberProps = {
  getFieldProps: ReturnType<typeof useForm>['getFieldProps'];
  touched: ReturnType<typeof useForm>['touched'];
  errors: ReturnType<typeof useForm>['errors'];
};

export default function CardNumber({
  getFieldProps,
  touched,
  errors,
}: CardNumberProps) {
  return (
    <>
      <Input.Container>
        <Input.Title>카드 번호</Input.Title>
        <Input.Box>
          <Input type='text' maxLength={4} {...getFieldProps('cardNumber1')} />
          <div>-</div>
          <Input type='text' maxLength={4} {...getFieldProps('cardNumber2')} />
          <div>-</div>
          <Input
            type='password'
            maxLength={4}
            {...getFieldProps('cardNumber3')}
          />
          <div>-</div>
          <Input
            type='password'
            maxLength={4}
            {...getFieldProps('cardNumber4')}
          />
        </Input.Box>
      </Input.Container>

      {[
        touched.cardNumber1,
        touched.cardNumber2,
        touched.cardNumber3,
        touched.cardNumber4,
      ].every(Boolean) &&
        [
          errors.cardNumber1,
          errors.cardNumber2,
          errors.cardNumber3,
          errors.cardNumber4,
        ].some(Boolean) && (
          <span>
            {errors.cardNumber1 ||
              errors.cardNumber2 ||
              errors.cardNumber3 ||
              errors.cardNumber4}
          </span>
        )}
    </>
  );
}
