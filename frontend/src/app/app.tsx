import { useVerifySession } from '@/entities/session';
import { SignIn } from '@/pages/sign-in';
import { SignUp } from '@/pages/sign-up';
import { Tasks } from '@/pages/tasks';
import { ROUTER_PATHS } from '@/shared/constants';
import { AnonymousRoute } from '@/widgets/anonymous-route/anonymous-route';
import { PrivateRoute } from '@/widgets/private-route/private-route';
import { RootLayout } from '@/widgets/root-layout/ui/root-layout';
import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: ROUTER_PATHS.HOME,
    element: <RootLayout />,
    children: [
      {
        path: '',
        loader: () => redirect(ROUTER_PATHS.TASKS),
      },
      {
        path: ROUTER_PATHS.SIGN_IN,
        element: (
          <AnonymousRoute>
            <SignIn />
          </AnonymousRoute>
        ),
      },
      {
        path: ROUTER_PATHS.SIGN_UP,
        element: (
          <AnonymousRoute>
            <SignUp />
          </AnonymousRoute>
        ),
      },
      {
        path: ROUTER_PATHS.TASKS,
        element: (
          <PrivateRoute>
            <Tasks />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export const App = () => {
  useVerifySession();

  return <RouterProvider router={router} />;
};
