"use client";

import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();

  return (
    <main>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold">👋 Welcome to Babble!</h1>
            <p className="pt-8">
              Join Babble to connect with those who truly matter.
            </p>
            <p className="pt-2 pb-16">
              Login or sign up to start your journey.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:space-x-4">
              <button
                className="btn btn-outline md:w-2/5 w-1/2 md:mb-0 mb-4"
                onClick={() => {
                  router.push("/login");
                }}
              >
                Login
              </button>
              <button
                className="btn btn-primary md:w-2/5 w-1/2"
                onClick={() => {
                  router.push("/signup");
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
