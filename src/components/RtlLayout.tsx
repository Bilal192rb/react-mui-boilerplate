import PropTypes, { InferProps } from 'prop-types';
import { useEffect } from 'react';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { useTheme } from '@mui/material/styles';

const RtlLayoutPropTypes = {
  children: PropTypes.node,
};

type RtlLayoutTypes = InferProps<typeof RtlLayoutPropTypes>;

function RtlLayout({ children }: RtlLayoutTypes) {
  const theme = useTheme();

  const isRtl = theme.direction === 'rtl';

  useEffect(() => {
    document.dir = theme.direction;
  }, [theme.direction]);

  const cacheRtl = createCache({
    key: isRtl ? 'mui-rtl' : 'mui-ltr',
    stylisPlugins: isRtl ? [prefixer, rtlPlugin] : [],
  });

  return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
}

RtlLayout.propTypes = RtlLayoutPropTypes;

export default RtlLayout;
