import PropTypes, { InferProps } from 'prop-types';
import { useFormContext, Controller } from 'react-hook-form';
import { Switch, FormControlLabel } from '@mui/material';

const formSwitchPropTypes = {
  name: PropTypes.string.isRequired,
};

type FormSwitchTypes = InferProps<typeof formSwitchPropTypes>;

function FormSwitch({ name, ...other }: FormSwitchTypes) {
  const { control } = useFormContext();

  return (
    <FormControlLabel
      control={
        <Controller
          name={name}
          control={control}
          render={({ field }) => <Switch {...field} checked={field.value} />}
        />
      }
      label={''}
      {...other}
    />
  );
}

FormSwitch.propTypes = formSwitchPropTypes;

export { FormSwitch };
