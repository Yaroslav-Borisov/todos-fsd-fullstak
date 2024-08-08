import { useVerifySession } from '@/entities/session';
import { SignIn } from '@/pages/sign-in';
import { SignUp } from '@/pages/sign-up';
import { Tasks } from '@/pages/tasks';
import { ROUTER_PATHS } from '@/shared/constants';
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
        element: <SignIn />,

        // element: <AnonymousRoute component={<SignIn />} />,
      },
      {
        path: ROUTER_PATHS.SIGN_UP,
        element: <SignUp />,

        // element: <AnonymousRoute component={<SignUp />} />,
      },
      {
        path: ROUTER_PATHS.TASKS,
        element: <Tasks />,
        // element: <PrivateRoute component={<Tasks />} />,
      },
    ],
  },
]);

export const App = () => {
  useVerifySession();

  return <RouterProvider router={router} />;
};
