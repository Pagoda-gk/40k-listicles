import React from "react";
import ReactMarkdown from "react-markdown";
import { renderWithReferences } from "./utils/referenceRenderer.jsx";



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

                {/* Description (rules or wargear) */}
                {rule.description && (
                    <div style={{ marginTop: "0.5rem" }}>
                        {renderWithReferences(rule.description, registry, onSelectRule)}
                    </div>
                )}

                {/* Related rules links */}
                {rule.links?.length > 0 && (
                    <div>
                        <h4>Related:</h4>
                        <ul>
                            {rule.links.map((rName) => {
                                const related = registry[rName]; // changed to registry lookup
                                if (!related) return null;
                                return (
                                    <li key={rName}>
                                        {renderWithReferences(`[${rName}]`, registry, onSelectRule)}
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
