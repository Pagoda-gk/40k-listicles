import React from "react";
import ReactMarkdown from "react-markdown";
import { renderWithReferences } from "./utils/referenceRenderer.jsx";



export default function RuleModal({ rule, onClose, onSelectRule, registry }) {
    if (!rule) return null;

    const isWargear = rule._type === "wargear";

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h3 className="modal-title">{rule.name}</h3>

                {/* Description (rules or wargear) */}
                {rule.description && (
                    <div className="modal-description"
                    style={{ whiteSpace: "pre-line" }}
                    >
                        {renderWithReferences(rule.description, registry, onSelectRule)}
                    </div>
                )}

                {/* Related rules links */}
                {rule.links?.length > 0 && (
                    <div className="modal-related">
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
                    className="modal-close" onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
}
