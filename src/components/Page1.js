import React from "react";
import { TEAM1, TEAM2 } from "./constants";
import { usePlayerContext } from "../context/playerContext";
import PlayerList from "./PlayerList";

const   StatsBox = ({ label, value }) => {
  return (
    <div className="statsBox">
      <div>{value}</div>
      <div>{label}</div>
    </div>
  );
};

const Page1 = () => {
  const { stats, handleProceed } = usePlayerContext();
  return (
    <>
      {/* stats board */}
      <div className="header">
       
        <h1 >Pick Player</h1>
        <div className="statsBlock">
          <StatsBox label="Players" value={stats.players} />
          <StatsBox label={TEAM1} value={stats.team1} />
          <StatsBox label={TEAM2} value={stats.team2} />
          <StatsBox label="Cr Left" value={stats.credits} />
        </div>
      </div>
      <button type="submit" className="proceed-btn" onClick={handleProceed}>
          Proceed
        </button>
      <div className="playerListBlock">
        
          <div className="col"><PlayerList role="Wicket-Keeper" label="min-1 , max-5" /></div>
          <br></br>
          
          <div className="col"><PlayerList role="Batsman" label="min-3 , max-7" /></div>
          
          
        
        
        
          <div className="col"><PlayerList role="All-Rounder" label="min-0 , max-4" /></div>
          <div className="col"><PlayerList role="Bowler" label="min-3 , max-7" /></div>
        
        
        
        
        
      </div>
      <button type="submit" className="proceed-btn" onClick={handleProceed}>
          Proceed
        </button>
      <div>
        
      </div>
    </>
  );
};

export default Page1;
