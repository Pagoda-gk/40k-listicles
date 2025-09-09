import React from "react";
import ReactMarkdown from "react-markdown";



export default function RuleModal({ rule, onClose, onSelectRule, registry }) {
  if (!rule) return null;

  const isWargear = rule._type === "wargear";

  return (
    
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "#111",
          padding: "1rem 2rem",
          borderRadius: "10px",
          maxWidth: "500px",
          width: "90%",
          color: "#0ff",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h3>{rule.name}</h3>

        {/* Show description for general rules/game rules */}
        {!isWargear && (
          <ReactMarkdown>{rule.description || "No description available"}</ReactMarkdown>
        )}

        {/* Show weapon stats for wargear */}
        {isWargear && (
          <div>
            {rule.type && <p><strong>Type:</strong> {rule.type}</p>}
            {rule.range && <p><strong>Range:</strong> {rule.range}</p>}
            {rule.strength && <p><strong>S:</strong> {rule.strength}</p>}
            {rule.ap && <p><strong>AP:</strong> {rule.ap}</p>}
            {rule.description && <ReactMarkdown>{rule.description}</ReactMarkdown>}
          </div>
        )}

        {/* Related rules links */}
        {rule.links?.length > 0 && (
          <div>
            <h4>Related:</h4>
            <ul>
              {rule.links.map((rName) => {
                const related = registry.find((r) => r.name === rName);
                if (!related) return null;
                return (
                  <li key={rName}>
                    <button
                      onClick={() => onSelectRule(related)}
                      style={{
                        cursor: "pointer",
                        color: "#0ff",
                        background: "transparent",
                        border: "none",
                      }}
                    >
                      {rName} ({related._type})
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        <button
          onClick={onClose}
          style={{
            marginTop: "1rem",
            padding: "0.25rem 0.5rem",
            cursor: "pointer",
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}
