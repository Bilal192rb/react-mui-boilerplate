import { createContext, useEffect, useReducer } from 'react';
import PropTypes, { InferProps } from 'prop-types';
import http from '../utils/http';
import { isValidToken, setSession, getSession } from '../utils/jwt';
import { Any } from '../types';

enum AuthActions {
  INITIALIZE = 'INITIALIZE',
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
}

type Action = {
  type: AuthActions;
  payload?: Any;
};

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const handlers: Any = {
  [AuthActions.INITIALIZE]: (state: Any, action: Action) => {
    const { isAuthenticated, user } = action.payload;
    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user,
    };
  },
  [AuthActions.LOGIN]: (state: Any, action: Action) => {
    const { user } = action.payload;
    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },
  [AuthActions.LOGOUT]: (state: Any) => ({
    ...state,
    isAuthenticated: false,
    user: null,
  }),
};

const reducer = (state: Any, action: Action) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

const AuthContext = createContext({
  ...initialState,
  method: 'jwt',
  login: (identifier: string, password: string) => Promise.resolve(),
  logout: () => Promise.resolve(),
});

AuthProvider.propTypes = {
  children: PropTypes.node,
};

const AuthProviderPropTypes = {
  children: PropTypes.node.isRequired,
};

type AuthProviderTypes = InferProps<typeof AuthProviderPropTypes>;

function AuthProvider({ children }: AuthProviderTypes) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const initialize = async () => {
      try {
        const accessToken: Any = getSession();
        if (accessToken && isValidToken(accessToken)) {
          setSession(accessToken);
          const response: Any = await http.get('/account/my-account');
          const { user } = response.data;
          dispatch({
            type: AuthActions.INITIALIZE,
            payload: {
              isAuthenticated: true,
              user,
            },
          });
        } else {
          dispatch({
            type: AuthActions.INITIALIZE,
            payload: {
              isAuthenticated: false,
              user: null,
            },
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: AuthActions.INITIALIZE,
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    };

    initialize();
  }, []);

  const login = async (identifier: string, password: string) => {
    const response: Any = await http.post('/auth/login', {
      identifier,
      password,
    });
    const { accessToken, user } = response.data;
    setSession(accessToken);
    dispatch({
      type: AuthActions.LOGIN,
      payload: {
        user,
      },
    });
  };

  const logout = async () => {
    await http.post('/auth/logout');
    setSession(null);
    dispatch({
      type: AuthActions.LOGOUT,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: 'jwt',
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = AuthProviderPropTypes;

export { AuthContext, AuthProvider };
