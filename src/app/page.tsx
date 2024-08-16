"use client";
import { useState } from "react";
import { client } from "./client";
import { ConnectButton } from "thirdweb/react";
import NavBar from "../../components/NavBar";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleConnect = () => {
    setIsLoading(true);
    setTimeout(() => {
      router.push("/dashboard");
    }, 1000);
  };

  return (
    <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
      <div className="py-20">
        <NavBar />

        <div className="flex justify-center mb-20">
          {isLoading ? (
            <div className="flex flex-col items-center">
              <p className="mb-4 text-lg text-gray-700">
                Redirecting to dashboard...
              </p>
              <div className="w-8 h-8 border-4 border-t-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
            </div>
          ) : (
            <ConnectButton
              client={client}
              appMetadata={{
                name: "Example App",
                url: "https://example.com",
              }}
              onConnect={handleConnect}
            />
          )}
        </div>
      </div>
    </main>
  );
}
