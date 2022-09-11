import PropTypes, { InferProps } from 'prop-types';
import { useFormContext, Controller } from 'react-hook-form';
import { Checkbox, FormGroup, FormControlLabel } from '@mui/material';
import { Any, AnyObject } from '../../types';

const FormCheckboxPropTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

const FormMultiCheckboxPropTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

type FormCheckboxTypes = InferProps<typeof FormCheckboxPropTypes> | AnyObject;

type FormMultiCheckboxTypes = InferProps<typeof FormMultiCheckboxPropTypes> | AnyObject;

function FormCheckbox({ name, label, ...other }: FormCheckboxTypes) {
  const { control } = useFormContext();

  return (
    <FormControlLabel
      control={
        <Controller
          name={name}
          control={control}
          render={({ field }: Any) => <Checkbox {...field} checked={field.value} />}
        />
      }
      label={label}
      {...other}
    />
  );
}

function FormMultiCheckbox({ name, options, ...other }: FormMultiCheckboxTypes) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }: Any) => {
        const onSelected = (option: Any) =>
          field.value.includes(option)
            ? field.value.filter((value: Any) => value !== option)
            : [...field.value, option];

        return (
          <FormGroup>
            {options.map((option: Any) => (
              <FormControlLabel
                key={option}
                control={
                  <Checkbox
                    checked={field.value.includes(option)}
                    onChange={() => field.onChange(onSelected(option))}
                  />
                }
                label={option}
                {...other}
              />
            ))}
          </FormGroup>
        );
      }}
    />
  );
}

FormCheckbox.propTypes = FormCheckboxPropTypes;

FormMultiCheckbox.propTypes = FormMultiCheckboxPropTypes;

export { FormCheckbox, FormMultiCheckbox };
