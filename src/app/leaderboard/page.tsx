"use client";

import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";

export default function Leaderboard() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1 pb-20">
        <div className="p-4">
          <h1 className="text-xl font-semibold mb-4">Leaderboard</h1>
          <p className="text-gray-600">Leaderboard content coming soon...</p>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}

