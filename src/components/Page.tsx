import { Box } from '@mui/material';
import PropTypes, { InferProps } from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { ForwardedRef, forwardRef } from 'react';
import { Any, AnyObject } from '../types';
import ErrorBoundary from './ErrorBoundary';

const PagePropTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  meta: PropTypes.node,
};

type PageTypes = InferProps<typeof PagePropTypes> | AnyObject;

const Page = forwardRef(
  (
    { children, title = 'React MUI Boilerplate', meta, ...other }: PageTypes,
    ref: ForwardedRef<Any>
  ) => (
    <ErrorBoundary>
      <Helmet>
        <title>{`${title} | React MUI Boilerplate`}</title>
        {meta}
      </Helmet>
      <Box ref={ref} {...other}>
        {children}
      </Box>
    </ErrorBoundary>
  )
);

Page.propTypes = PagePropTypes;

export default Page;
