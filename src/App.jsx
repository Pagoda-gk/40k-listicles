import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import React from 'react';
import factions from "./data/factions";
import ArmyBuilder from "./ArmyBuilder";
import './index.css';



export default function App() {
  const [openSections, setOpenSections] = useState([]);
  const [savedLists, setSavedLists] = useState([]);

  useEffect(() => {
    const lists = JSON.parse(localStorage.getItem("savedLists") || "[]");
    setSavedLists(lists);
  }, []);

  // Group factions by their system (or category)
  const grouped = Object.entries(factions).reduce((acc, [id, faction]) => {
    const key = faction.system || "Other"; // fallback if no category
    if (!acc[key]) acc[key] = [];
    acc[key].push({ id, ...faction });
    return acc;
  }, {});

  // Sort categories alphabetically
  const sortedSectionKeys = Object.keys(grouped).sort();

  const toggleSection = (key) => {
    setOpenSections((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/army-saved/:listIndex" element={<ArmyBuilder saved={true} />} />
        <Route
          path="/"
          element={
            <div className="landing-container">
              <h1>Systems</h1>

              {/* Saved Lists */}
              <div className="saved-lists">
                <h2>Saved Lists</h2>
                {savedLists.length === 0 ? (
                  <p>No saved lists</p>
                ) : (
                  <ul>
                    {savedLists.map((list, i) => (
                      <li key={i}>
                        {list.system}, {list.name}{" "}
                        <Link to={`/army-saved/${i}`} style={{ marginLeft: "0.5rem" }}>
                          Open
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>


              {sortedSectionKeys.map((sectionName) => {
                const sectionFactions = grouped[sectionName];
                const isOpen = openSections.includes(sectionName);
                return (
                  <div key={sectionName} className="section-container">
                    <h2
                      sclassName="section-header"
                      onClick={() => toggleSection(sectionName)}
                    >
                      {sectionName} {isOpen ? "▼" : "▶"}
                    </h2>
                    {isOpen && (
                      <ul className="faction-list">
                        {sectionFactions.map((f) => (
                          <li key={f.id}>
                            <Link to={`/army/${f.id}`} className="faction-link">
                            {f.name}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>
          }
        />
        <Route path="/army/:factionId" element={<ArmyBuilder />} />
      </Routes>
    </Router>
  );
}