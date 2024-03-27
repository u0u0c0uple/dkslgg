// React, router
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
// Jotai
import { Provider } from 'jotai';
// Component
import ErrorComponent from './components/common/ErrorComponent.jsx';
// Container
import MainContainer from './pages/MainContainer';
import UserContainer from './pages/UserContainer.jsx';
import RecordContainer from './pages/RecordContainer.jsx';
import GroupContainer from './pages/GroupContainer.jsx';
import LbtiContainer from './pages/LbtiContainer.jsx';
import LoadingComponent from './components/common/LoadingComponent.jsx';
import NotFound from './components/common/NotFound.jsx';
import ArenaContainer from './pages/ArenaContainer.jsx';     
// Styled
import GlobalStyles from './styles/globalStyles.style.js';

// Routing 설정
const router = createBrowserRouter([
  { path: '/', element: <MainContainer /> },
  { path: '/user/:type', element: <UserContainer /> },
  { path: '/record/:summoner', element: <RecordContainer /> },
  { path: '/group/:type', element: <GroupContainer /> },
  { path: '/lbti/:type', element: <LbtiContainer /> },
  { path: '/arena/:matchId', element: <ArenaContainer /> },
  { path: '*', element: <NotFound /> },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ErrorBoundary FallbackComponent={ErrorComponent}>
    <Provider>
      <React.StrictMode>
        <Suspense fallback={<LoadingComponent white={false} />}>
          <GlobalStyles />
          <RouterProvider router={router} />
        </Suspense>
      </React.StrictMode>
    </Provider>
  </ErrorBoundary>
);
