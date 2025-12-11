"use client";

import { useState, useEffect, useCallback } from "react";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import { saveScore } from "@/utils/storage";

export default function Home() {
  const [clicks, setClicks] = useState(0);
  const [timeLeft, setTimeLeft] = useState(5);
  const [isGameActive, setIsGameActive] = useState(false);
  const [showInstruction, setShowInstruction] = useState(true);

  // Timer effect
  useEffect(() => {
    if (!isGameActive || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsGameActive(false);
          setShowInstruction(true);
          // Save score when round ends
          if (clicks > 0) {
            saveScore(clicks);
          }
          return 5; // Reset to 5 seconds
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isGameActive, timeLeft, clicks]);

  const handleSquareClick = useCallback(() => {
    if (!isGameActive && timeLeft === 5) {
      // Start a new round - reset clicks
      setIsGameActive(true);
      setShowInstruction(false);
      setClicks(0);
    }

    if (isGameActive) {
      // Increment clicks for current round
      setClicks((prev) => prev + 1);
    }
  }, [isGameActive, timeLeft]);

  // Calculate square size based on clicks (max size at 10 clicks as per wireframe)
  const baseSize = 150;
  const squareSize = Math.min(baseSize + clicks * 5, baseSize + 50);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      
      <main className="flex-1 flex flex-col items-center justify-center px-4 pb-20 relative">
        {/* Top bar with click counter and share */}
        <div className="absolute top-4 left-0 right-0 flex justify-between items-center px-4">
          <div className="text-sm font-medium text-gray-900">
            Max click: {clicks}x
          </div>
          <button className="p-2 text-gray-600 hover:text-gray-800">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.59 13.51L15.42 17.49M15.41 6.51L8.59 10.49"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Game area */}
        <div className="flex flex-col items-center justify-center gap-6">
          {showInstruction && (
            <p className="text-base text-gray-600 text-center">
              Tap to blue square to start!
            </p>
          )}

          {/* Blue square */}
          <div className="relative flex items-center justify-center">
            {/* Outer glow effect when active */}
            {isGameActive && clicks > 0 && (
              <div
                className="absolute rounded-[7px] opacity-30"
                style={{
                  width: `${squareSize * 1.5}px`,
                  height: `${squareSize * 1.5}px`,
                  backgroundColor: "#0000ff",
                }}
              />
            )}
            {/* Main blue square */}
            <div
              onClick={handleSquareClick}
              className="cursor-pointer transition-all duration-200 active:scale-95 relative z-10"
              style={{
                width: `${squareSize}px`,
                height: `${squareSize}px`,
              }}
            >
              <div
                className="w-full h-full rounded-[7px]"
                style={{ backgroundColor: "#0000ff" }}
              />
            </div>
          </div>

          {/* Timer */}
          <div className="text-2xl font-mono font-semibold text-gray-900">
            {formatTime(timeLeft)}
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
