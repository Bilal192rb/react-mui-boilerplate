import PropTypes, { InferProps } from 'prop-types';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField } from '@mui/material';
import { Any, AnyObject } from '../../types';

const FormTextFieldPropTypes = {
  name: PropTypes.string.isRequired,
};

type FormTextFieldTypes = InferProps<typeof FormTextFieldPropTypes> | AnyObject;

function FormTextField({ name, ...other }: FormTextFieldTypes) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }: Any) => (
        <TextField {...field} fullWidth error={!!error} helperText={error?.message} {...other} />
      )}
    />
  );
}

FormTextField.propTypes = FormTextFieldPropTypes;

export { FormTextField };
