import PropTypes, { InferProps } from 'prop-types';
import { FormProvider as Form } from 'react-hook-form';

const FormProviderPropTypes = {
  children: PropTypes.node.isRequired,
  methods: PropTypes.any.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

type FormProviderTypes = InferProps<typeof FormProviderPropTypes>;

function FormProvider({ children, onSubmit, methods }: FormProviderTypes) {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </Form>
  );
}

FormProvider.propTypes = FormProviderPropTypes;

export { FormProvider };
