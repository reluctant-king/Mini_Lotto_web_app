import React from "react";
import "./games.css";
import {
  FaDice,
  FaCoins,
  FaCrown,
  FaGem,
  FaChess,
  FaBrain,
  FaBolt,
  FaRocket,
  FaTrophy,
  FaGamepad
} from "react-icons/fa";

const trendingGames = [
  { name: "Quiz Master", icon: <FaBrain /> },
  { name: "Lucky Dice", icon: <FaDice /> },
  { name: "Royal Spin", icon: <FaCrown /> },
  { name: "Gold Rush", icon: <FaCoins /> },
  { name: "Power Slots", icon: <FaBolt /> },
  { name: "Rocket Crash", icon: <FaRocket /> }
];

const allGames = [
  { name: "Quiz Master", icon: <FaBrain /> },
  { name: "Classic Dice", icon: <FaDice /> },
  { name: "Treasure Spin", icon: <FaCoins /> },
  { name: "Royal Cards", icon: <FaChess /> },
  { name: "Golden Crown", icon: <FaCrown /> },
  { name: "Diamond Hunt", icon: <FaGem /> },
  { name: "Crash Rocket", icon: <FaRocket /> },
  { name: "Lightning Spin", icon: <FaBolt /> },
  { name: "Champion Arena", icon: <FaTrophy /> },
  { name: "Arcade Battle", icon: <FaGamepad /> },
  { name: "Mega Dice", icon: <FaDice /> },
  { name: "Treasure Vault", icon: <FaCoins /> }
];

export default function CasinoGamesPage() {
  return (
    <div className="casinoGamesPageShell">

      <div className="casinoTrendingGamesBlock">
        <h2 className="casinoTrendingGamesTitle">Trending Games</h2>

        <div className="casinoTrendingGamesGrid">
          {trendingGames.map((game, index) => (
            <div key={index} className="casinoTrendingGameCard">
              <div className="casinoTrendingGameIcon">
                {game.icon}
              </div>
              <p>{game.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="casinoAllGamesBlock">
        <h2 className="casinoAllGamesTitle">All Games</h2>

        <div className="casinoAllGamesList">
          {allGames.map((game, index) => (
            <div key={index} className="casinoAllGameRow">
              <div className="casinoAllGameIcon">
                {game.icon}
              </div>
              <span>{game.name}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}