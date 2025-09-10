// utils/referenceRenderer.js
import React from "react";
import ReactMarkdown from "react-markdown";

/**
 * Renders markdown text with clickable [References] that open your modal.
 * @param {string} text - The markdown string (e.g. "This unit has [Dodge]")
 * @param {object} registry - Built reference registry { "Dodge": ruleObject, ... }
 * @param {function} openRuleModal - Callback to open modal with a rule/wargear
 */
export function renderWithReferences(text, registry, onSelectRule) {
  if (!text) return null;

  const parts = [];
  const regex = /\[([^\]]+)\]/g; // matches [Name]
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }

    const name = match[1];
    const ref = registry[name];

    if (ref) {
      parts.push(
        <span
          key={lastIndex}
          style={{ color: "#0ff", textDecoration: "underline", cursor: "pointer" }}
          onClick={() => onSelectRule(ref)}
        >
          {name}
        </span>
      );
    } else {
      parts.push(name); // fallback if not found
    }

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return <>{parts}</>;
}

