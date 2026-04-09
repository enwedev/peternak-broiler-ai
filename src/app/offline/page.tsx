"use client";

import React from "react";

export default function OfflinePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <div className="rounded-full bg-blue-100 p-6 mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-12 w-12 text-blue-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5-11.5L3 18.75V21"
          />
        </svg>
      </div>
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        You are offline
      </h1>
      <p className="mt-4 text-lg leading-8 text-gray-600">
        It looks like you don't have an internet connection. Some features of
        Peternak Broiler AI might be unavailable.
      </p>
      <div className="mt-10">
        <button
          onClick={() => window.location.reload()}
          className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          Retry Connection
        </button>
      </div>
    </div>
  );
}
