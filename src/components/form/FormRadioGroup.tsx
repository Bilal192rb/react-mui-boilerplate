import PropTypes, { InferProps } from 'prop-types';
import { useFormContext, Controller } from 'react-hook-form';
import { Radio, RadioGroup, FormHelperText, FormControlLabel } from '@mui/material';
import { Any, AnyObject } from '../../types';

const FormRadioGroupPropTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  getOptionLabel: PropTypes.arrayOf(PropTypes.string),
};

type FormRadioGroupTypes = InferProps<typeof FormRadioGroupPropTypes> | AnyObject;

function FormRadioGroup({ name, options, getOptionLabel, ...other }: FormRadioGroupTypes) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }: Any) => (
        <div>
          <RadioGroup {...field} row {...other}>
            {options.map((option: Any, index: number) => (
              <FormControlLabel
                key={option}
                value={option}
                control={<Radio />}
                label={getOptionLabel?.length ? getOptionLabel[index] : option}
              />
            ))}
          </RadioGroup>

          {!!error && (
            <FormHelperText error sx={{ px: 2 }}>
              {error.message}
            </FormHelperText>
          )}
        </div>
      )}
    />
  );
}

FormRadioGroup.propTypes = FormRadioGroupPropTypes;

export { FormRadioGroup };
