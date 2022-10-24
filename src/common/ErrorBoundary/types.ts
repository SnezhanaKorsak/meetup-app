import { ReactNode } from 'react';

export type ErrorBoundaryProps = {
  children: ReactNode;
};

export type State = {
  hasError: boolean;
};
