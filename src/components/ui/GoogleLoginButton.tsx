'use client';
import { googleCallBack } from '@/services/auth.service';
import { useGoogleLogin } from '@react-oauth/google';
import React, { useState } from 'react';
import errorToast from '../toast/ErrorToast';
import LoadingModal from '../loading/LoadingModal';
import { useRouter, useSearchParams } from 'next/navigation';
import { PageProps } from '../../../.next/types/app/layout';

function GoogleLoginButton() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const redirectUrl = useSearchParams().get('redirect');
  const login = useGoogleLogin({
    onSuccess: async (response) => {
      setIsLoading(true);
      try {
        const res = await googleCallBack(response.access_token);
        if (!res.success) {
          throw new Error(res.message);
        }

        if (redirectUrl) {
          router.replace(redirectUrl);
        } else {
          router.push('/');
        }
      } catch (error: any) {
        errorToast(error.message || 'Something went wrong');
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <>
      <div className="flex justify-between items-center gap-5">
        <button
          onClick={() => login()}
          className="w-full flex items-center justify-center gap-2 px-4 py-2  border rounded-md dark:text-white"
        >
          <img
            className="w-8"
            src="https://i.ibb.co.com/x1KW6kh/Remove-bg-ai-1726161918623.png"
            alt=""
          />
          <span className="font-semibold">Google</span>
        </button>
      </div>
      {isLoading ? <LoadingModal message="Just a moment..." /> : null}
    </>
  );
}

export default GoogleLoginButton;
