import env from "@/config/env";
import BuiltWith from "@/features/built-with";
import GithubStarButton from "@/features/github-star-button";

export function HomePage() {
  return (
    <div className="flex h-screen">
      <div className="m-auto space-y-3 text-center">
        <div className="space-y-3">
          <BuiltWith />
          <h1 className="items-center text-3xl">
            Welcome to Tauri React template!
          </h1>
          <p>
            This template is a starting point for building Tauri apps with Vite,
            React, and Tailwind CSS.
          </p>
          <p>Env variable: {env.API_URL}</p>
        </div>
        <GithubStarButton />
      </div>
    </div>
  );
}

// Necessary for react router to lazy load.
export const Component = HomePage;
