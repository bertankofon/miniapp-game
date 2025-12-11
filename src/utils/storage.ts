export interface Score {
  username: string;
  visibleName: string;
  score: number;
  timestamp: number;
}

const STORAGE_KEY = "blue-square-scores";
const USERNAME_KEY = "blue-square-username";
const VISIBLE_NAME_KEY = "blue-square-visible-name";

export const getScores = (): Score[] => {
  if (typeof window === "undefined") return [];
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

export const saveScore = (score: number): void => {
  if (typeof window === "undefined") return;
  
  const username = getUsername();
  const visibleName = getVisibleName();
  const scores = getScores();
  
  // Add new score
  const newScore: Score = {
    username,
    visibleName,
    score,
    timestamp: Date.now(),
  };
  
  scores.push(newScore);
  
  // Sort by score descending, then by timestamp (newest first for same score)
  scores.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    return b.timestamp - a.timestamp;
  });
  
  // Keep only top 100 scores
  const topScores = scores.slice(0, 100);
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(topScores));
};

export const getBestScore = (): number => {
  const username = getUsername();
  const scores = getScores();
  const userScores = scores.filter((s) => s.username === username);
  
  if (userScores.length === 0) return 0;
  
  return Math.max(...userScores.map((s) => s.score));
};

export const getUserRank = (): number => {
  const username = getUsername();
  const bestScore = getBestScore();
  
  if (bestScore === 0) return 0;
  
  const scores = getScores();
  // Get unique users with their best scores
  const userBestScores = new Map<string, number>();
  
  scores.forEach((score) => {
    const current = userBestScores.get(score.username) || 0;
    if (score.score > current) {
      userBestScores.set(score.username, score.score);
    }
  });
  
  // Convert to array and sort
  const sortedUsers = Array.from(userBestScores.entries())
    .map(([username, score]) => ({ username, score }))
    .sort((a, b) => b.score - a.score);
  
  const rank = sortedUsers.findIndex((u) => u.username === username) + 1;
  return rank || 0;
};

export const getTopPlayers = (limit: number = 10): Score[] => {
  const scores = getScores();
  
  // Get best score per user
  const userBestScores = new Map<string, Score>();
  
  scores.forEach((score) => {
    const current = userBestScores.get(score.username);
    if (!current || score.score > current.score) {
      userBestScores.set(score.username, score);
    }
  });
  
  // Sort by score descending
  const sorted = Array.from(userBestScores.values()).sort(
    (a, b) => b.score - a.score
  );
  
  return sorted.slice(0, limit);
};

export const getUsername = (): string => {
  if (typeof window === "undefined") return "username";
  return localStorage.getItem(USERNAME_KEY) || "username";
};

export const setUsername = (username: string): void => {
  if (typeof window === "undefined") return;
  localStorage.setItem(USERNAME_KEY, username);
};

export const getVisibleName = (): string => {
  if (typeof window === "undefined") return "Visible Name";
  return localStorage.getItem(VISIBLE_NAME_KEY) || "Visible Name";
};

export const setVisibleName = (name: string): void => {
  if (typeof window === "undefined") return;
  localStorage.setItem(VISIBLE_NAME_KEY, name);
};

