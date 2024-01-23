"use client";

import { useState } from "react";
import { baseUrl, env } from "@src/config/index";

interface Now {
  now: string;
}

export default function Button() {
  const [now, setNow] = useState<Now>();
  async function fetchData() {
    const res = fetch(`${baseUrl}/now/`);
    if ((await res).ok) {
      const now = await (await res).json();
      setNow(now);
      alert("The time is: " + now.now)
      console.log("baseUrl", baseUrl)
      console.log("env", env)
    }
  }
  return (
    <div>
      <button
        type="button"
        className="px-6 py-3.5 text-base font-medium text-white inline-flex items-center bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 rounded-lg text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
        onClick={fetchData}
      >
        Test API
      </button>
    </div>
  );
}
