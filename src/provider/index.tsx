'use client';
import { store } from '@/app/redux/store';
import envConfig from '@/config/envConfig';
import { GoogleOAuthProvider } from '@react-oauth/google';
import React from 'react';
import * as ReactRedux from 'react-redux';
import { Toaster } from 'sonner';

type TProvider = {
  children: React.ReactNode;
};

export default function Provider({ children }: TProvider) {
  const clientId = envConfig.google_client_id as string;

  return (
    <ReactRedux.Provider store={store}>
      <GoogleOAuthProvider clientId={clientId}>
        {children}
        <Toaster />
      </GoogleOAuthProvider>
    </ReactRedux.Provider>
  );
}
