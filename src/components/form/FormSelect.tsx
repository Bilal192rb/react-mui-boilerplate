import PropTypes, { InferProps } from 'prop-types';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField } from '@mui/material';

const formSelectPropTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
};

type FormSelectTypes = InferProps<typeof formSelectPropTypes>;

function FormSelect({ name, children, ...other }: FormSelectTypes) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
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

FormSelect.propTypes = formSelectPropTypes;

export { FormSelect };
