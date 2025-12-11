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
    <div className="flex flex-col gap-2">
      <button
        onClick={handleAddMiniApp}
        disabled={isLoading}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {isLoading ? "Adding..." : "Add to Base"}
      </button>
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}

