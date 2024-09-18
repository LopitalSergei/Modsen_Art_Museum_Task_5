import { object, string } from 'yup';

export const validationInputSchema = object().shape({
  value: string().trim().min(3, 'Enter at least 3 characters'),
});
