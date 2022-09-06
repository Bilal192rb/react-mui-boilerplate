import PropTypes, { InferProps } from 'prop-types';
import { useFormContext, Controller } from 'react-hook-form';
import { Radio, RadioGroup, FormHelperText, FormControlLabel } from '@mui/material';
import { Any, AnyObject } from '../../types';

const formRadioGroupPropTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  getOptionLabel: PropTypes.arrayOf(PropTypes.string),
};

type FormRadioGroupTypes = InferProps<typeof formRadioGroupPropTypes> | AnyObject;

function FormRadioGroup({ name, options, getOptionLabel, ...other }: FormRadioGroupTypes) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
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

FormRadioGroup.propTypes = formRadioGroupPropTypes;

export { FormRadioGroup };
