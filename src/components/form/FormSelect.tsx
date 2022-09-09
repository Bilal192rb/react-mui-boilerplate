import PropTypes, { InferProps } from 'prop-types';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField } from '@mui/material';
import { Any, AnyObject } from '../../types';

const FormSelectPropTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
};

type FormSelectTypes = InferProps<typeof FormSelectPropTypes> | AnyObject;

function FormSelect({ name, children, ...other }: FormSelectTypes) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }: Any) => (
        <TextField
          {...field}
          select
          fullWidth
          SelectProps={{ native: true }}
          error={!!error}
          helperText={error?.message}
          {...other}
        >
          {children}
        </TextField>
      )}
    />
  );
}

FormSelect.propTypes = FormSelectPropTypes;

export { FormSelect };
