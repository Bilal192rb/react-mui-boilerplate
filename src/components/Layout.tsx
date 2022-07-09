import PropTypes, { InferProps } from 'prop-types';
import { ForwardedRef, forwardRef } from 'react';
import { ANY } from '../types';

const LayoutPropTypes = {
  children: PropTypes.node.isRequired,
};

type LayoutTypes = InferProps<typeof LayoutPropTypes>;

const Page = forwardRef(
  (
    { children, ...other }: LayoutTypes,
    ref: ForwardedRef<ANY>
  ) => (
    <>
      <div ref={ref} {...other}>
        {children}
      </div>
    </>
  )
);

Page.propTypes = LayoutPropTypes;

export default Page;
