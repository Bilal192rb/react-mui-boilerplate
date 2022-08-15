import PropTypes, { InferProps } from 'prop-types';
import { useRef } from 'react';
import { SnackbarProvider } from 'notistack';
import { useTheme } from '@mui/material/styles';
import { GlobalStyles, IconButton } from '@mui/material';
import { Any } from '../types';
import SnackbarIcon from './SnackbarIcon';
import Iconify from './Iconify';

function SnackbarStyles() {
  const theme: Any = useTheme();
  const isLight = theme.palette.mode === 'light';

  return (
    <GlobalStyles
      styles={{
        '#root': {
          '& .SnackbarContent-root': {
            width: '100%',
            padding: theme.spacing(1),
            margin: theme.spacing(0.25, 0),
            boxShadow: theme.customShadows.z8,
            borderRadius: theme.shape.borderRadius,
            color: theme.palette.grey[isLight ? 0 : 800],
            backgroundColor: theme.palette.grey[isLight ? 900 : 0],
            '&.SnackbarItem-contentRoot, &.SnackbarItem-variantSuccess, &.SnackbarItem-variantError, &.SnackbarItem-variantWarning, &.SnackbarItem-variantInfo':
              {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.background.paper,
              },
            [theme.breakpoints.up('md')]: {
              minWidth: 240,
            },
          },
          '& .SnackbarItem-message': {
            padding: '0 !important',
            fontWeight: theme.typography.fontWeightMedium,
          },
          '& .SnackbarItem-action': {
            marginRight: 0,
            color: theme.palette.action.active,
            '& svg': { width: 20, height: 20 },
          },
        },
      }}
    />
  );
}

const NotistackProviderPropTypes = {
  children: PropTypes.node.isRequired,
};

type NotistackProviderTypes = InferProps<typeof NotistackProviderPropTypes>;

function NotistackProvider({ children }: NotistackProviderTypes) {
  const notistackRef: Any = useRef(null);

  return (
    <>
      <SnackbarStyles />

      <SnackbarProvider
        ref={notistackRef}
        dense
        maxSnack={5}
        // preventDuplicate
        autoHideDuration={3000}
        variant='default'
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        iconVariant={{
          default: <SnackbarIcon icon={'eva:bell-fill'} color='primary' />,
          info: <SnackbarIcon icon={'eva:info-fill'} color='info' />,
          success: <SnackbarIcon icon={'eva:checkmark-circle-2-fill'} color='success' />,
          warning: <SnackbarIcon icon={'eva:alert-triangle-fill'} color='warning' />,
          error: <SnackbarIcon icon={'eva:alert-circle-fill'} color='error' />,
        }}
        action={(snackbarId) => (
          <IconButton
            size='small'
            onClick={() => {
              console.log(snackbarId);

              notistackRef.current.closeSnackbar(snackbarId);
            }}
            sx={{ p: 0.5 }}
          >
            <Iconify icon={'eva:close-fill'} />
          </IconButton>
        )}
      >
        {children}
      </SnackbarProvider>
    </>
  );
}

NotistackProvider.propTypes = NotistackProviderPropTypes;

export default NotistackProvider;
