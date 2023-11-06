"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const VerificationPage = () => {
  const router = useRouter();

  useEffect(() => {

  }, []);

  return (
    <div className="container mx-auto h-screen flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Email Verification Required</h1>
        <p className="text-lg mb-8">
          Please verify your email address to proceed.
        </p>
      </div>
    </div>
  );
};

export default VerificationPage;
