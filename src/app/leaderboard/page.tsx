"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import ShareModal from "@/components/ShareModal";
import {
  getTopPlayers,
  getBestScore,
  getUserRank,
  getUsername,
  getVisibleName,
  type Score,
} from "@/utils/storage";

export default function Leaderboard() {
  const [topPlayers, setTopPlayers] = useState<Score[]>([]);
  const [userRank, setUserRank] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const loadLeaderboard = () => {
    const players = getTopPlayers(10);
    setTopPlayers(players);
    setUserRank(getUserRank());
    setBestScore(getBestScore());
  };

  useEffect(() => {
    // Load leaderboard data
    loadLeaderboard();
    
    // Refresh when page becomes visible (user might have played a game)
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        loadLeaderboard();
      }
    };
    
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1 pb-20">
        {/* User Rank Bar */}
        <div className="bg-gray-100 px-4 py-3 flex items-center justify-between">
          <div className="text-sm font-medium text-gray-900">
            Your rank: {userRank > 0 ? userRank : "—"} with {bestScore}x
          </div>
          <button
            onClick={() => setIsShareModalOpen(true)}
            className="bg-blue-600 text-white px-4 py-1.5 rounded text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            SHARE
          </button>
        </div>

        {/* Leaderboard Table */}
        <div className="px-4 py-4">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 text-sm font-semibold text-gray-700">
                    Rank
                  </th>
                  <th className="text-left py-2 text-sm font-semibold text-gray-700">
                    Name
                  </th>
                  <th className="text-right py-2 text-sm font-semibold text-gray-700">
                    Clicked
                  </th>
                </tr>
              </thead>
              <tbody>
                {topPlayers.length === 0 ? (
                  <tr>
                    <td colSpan={3} className="text-center py-8 text-gray-500">
                      No scores yet. Play the game to appear on the leaderboard!
                    </td>
                  </tr>
                ) : (
                  topPlayers.map((player, index) => (
                    <tr
                      key={`${player.username}-${player.timestamp}`}
                      className="border-b border-gray-100"
                    >
                      <td className="py-3 text-sm text-gray-900">
                        {index + 1}
                      </td>
                      <td className="py-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                          <span className="text-sm text-gray-900">
                            {player.visibleName} @{player.username}
                          </span>
                        </div>
                      </td>
                      <td className="py-3 text-right text-sm font-medium text-gray-900">
                        {player.score}x
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <BottomNav />
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
      />
    </div>
  );
}
