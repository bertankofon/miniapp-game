"use client";

import { useState } from "react";
import { sdk } from "@farcaster/miniapp-sdk";

export default function AddMiniAppButton() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAddMiniApp = async () => {
    setIsLoading(true);
    setError(null);

    try {
      await sdk.actions.addMiniApp();
      // Success - the app has been added
    } catch (err: any) {
      if (err?.code === "RejectedByUser") {
        setError("Request was cancelled");
      } else if (err?.code === "InvalidDomainManifestJson") {
        setError("Domain mismatch. Please check your manifest configuration.");
      } else {
        setError("Failed to add app. Please try again.");
      }
      console.error("Error adding miniapp:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-1">
      <button
        onClick={handleAddMiniApp}
        disabled={isLoading}
        className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors whitespace-nowrap"
      >
        {isLoading ? "Adding..." : "Add to Base"}
      </button>
      {error && (
        <p className="text-xs text-red-600 absolute top-full mt-1 whitespace-nowrap">{error}</p>
      )}
    </div>
  );
}

