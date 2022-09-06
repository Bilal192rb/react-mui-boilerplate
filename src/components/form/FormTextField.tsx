import PropTypes, { InferProps } from 'prop-types';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField } from '@mui/material';

const formTextFieldPropTypes = {
  name: PropTypes.string.isRequired,
};

type FormTextFieldTypes = InferProps<typeof formTextFieldPropTypes>;

function FormTextField({ name, ...other }: FormTextFieldTypes) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField {...field} fullWidth error={!!error} helperText={error?.message} {...other} />
      )}
    />
  );
}

FormTextField.propTypes = formTextFieldPropTypes;

export { FormTextField };
