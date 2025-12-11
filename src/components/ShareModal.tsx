"use client";

import { useState } from "react";
import { getUsername, getVisibleName, getBestScore } from "@/utils/storage";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ShareModal({ isOpen, onClose }: ShareModalProps) {
  const [copied, setCopied] = useState(false);
  const username = getUsername();
  const visibleName = getVisibleName();
  const bestScore = getBestScore();

  if (!isOpen) return null;

  const handleCopy = async () => {
    const text = `Check out my score: ${bestScore}x on Blue Square Game! @${username}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg max-w-sm w-full flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Content Area */}
        <div className="p-6 flex-1 flex flex-col items-center">
          {/* User Profile */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center text-white font-semibold text-xl">
              {visibleName.charAt(0).toUpperCase()}
            </div>
            <div>
              <div className="font-semibold text-gray-900 text-lg">
                {visibleName}
              </div>
              <div className="text-sm text-gray-600">@{username}</div>
            </div>
          </div>

          {/* Score Display with Blue Box - Centered */}
          <div className="flex items-center gap-3 mb-8">
            <span className="text-4xl font-bold text-gray-900">{bestScore}x</span>
            <div
              className="w-16 h-16 rounded-[7px]"
              style={{ backgroundColor: "#0000ff" }}
            />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-gray-800 text-white py-4 px-4 rounded-b-lg">
          <button
            onClick={handleCopy}
            className="w-full text-center font-medium"
          >
            {copied ? "Copied to Clipboard!" : "Copy to Clipboard"}
          </button>
        </div>
      </div>
    </div>
  );
}

