import { Box } from '@mui/material';
import PropTypes, { InferProps } from 'prop-types';
import { ForwardedRef, forwardRef } from 'react';
import { Any, AnyObject } from '../types';
import ErrorBoundary from './ErrorBoundary';

const LayoutPropTypes = {
  children: PropTypes.node.isRequired,
};

type LayoutTypes = InferProps<typeof LayoutPropTypes> | AnyObject;

const Page = forwardRef(({ children, ...other }: LayoutTypes, ref: ForwardedRef<Any>) => (
  <ErrorBoundary>
    <Box ref={ref} {...other}>
      {children}
    </Box>
  </ErrorBoundary>
));

Page.propTypes = LayoutPropTypes;

export default Page;
