import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import factions from "./data/factions";
import ArmyBuilder from "./ArmyBuilder";

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
        <Route path="/army-saved/:listIndex" element={<ArmyBuilder saved />} />
        <Route
          path="/"
          element={
            <div style={{ padding: "2rem" }}>
              <h1>Systems</h1>

              <div style={{ marginBottom: "2rem" }}>
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
                  <div key={sectionName} style={{ marginBottom: "1rem" }}>
                    <h2
                      style={{ cursor: "pointer" }}
                      onClick={() => toggleSection(sectionName)}
                    >
                      {sectionName} {isOpen ? "▼" : "▶"}
                    </h2>
                    {isOpen && (
                      <ul>
                        {sectionFactions.map((f) => (
                          <li key={f.id}>
                            <Link to={`/army/${f.id}`}>{f.name}</Link>
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