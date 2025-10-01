// RightPanel.jsx
import React from "react";

export default function RightPanel({ armyState, registry, openRuleModal, renderWithReferences }) {
  const rwr = renderWithReferences ?? ((text) => text);
  function groupComposition(composition) {
    const counts = {};
    composition.forEach(item => {
      counts[item] = (counts[item] || 0) + 1;
    });
    return Object.entries(counts).map(([name, count]) =>
      count > 1 ? `${name} (${count})` : name
    );
  }

  return (
    <div className="panel panel-right">
      <h2>Army Reference</h2>

      {armyState.map(unit => (
        <div key={unit.id} className="unit-card" style={{ marginBottom: "1rem" }}>
          {/* --- Unit Name --- */}
          <h3>{unit.name}</h3>

          {/* --- Statlines --- */}
          {unit.statlines.length > 0 && (
            <table className="unit-table">
              <thead>
                <tr>
                  <th>Name</th>
                  {(() => {
                    // determine headers based on unit type
                    const profile = unit.statlines[0];
                    if (profile.isVehicle) {
                      return ["Front Armour", "Side Armour", "Rear Armour", "BS"].map(stat => (
                        <th key={stat}>{stat}</th>
                      ));
                    } else if (profile.isDreadnought) {
                      return ["WS", "BS", "S", "Fr", "Si", "Re", "I", "A"].map(stat => (
                        <th key={stat}>{stat}</th>
                      ));
                    } else {
                      return ["WS", "BS", "S", "T", "W", "I", "A", "Ld", "Sv"].map(stat => (
                        <th key={stat}>{stat}</th>
                      ));
                    }
                  })()}
                </tr>
              </thead>
              <tbody>{unit.statlines.length === 1
                ? (
                  // ✅ case: only one statline → always render
                  <tr>
                    <td className="unit-name">{unit.statlines[0].name}</td>
                    {(() => {
                      const profile = unit.statlines[0];
                      if (profile.isVehicle) {
                        return (
                          <>
                            <td>{profile.armourFront || profile.FrontArmour}</td>
                            <td>{profile.armourSide || profile.SideArmour}</td>
                            <td>{profile.armourRear || profile.RearArmour}</td>
                            <td>{profile.BS}</td>
                          </>
                        );
                      } else if (profile.isDreadnought) {
                        return (
                          <>
                            <td>{profile.WS}</td>
                            <td>{profile.BS}</td>
                            <td>{profile.S}</td>
                            <td>{profile.armourFront || profile.FrontArmour}</td>
                            <td>{profile.armourSide || profile.SideArmour}</td>
                            <td>{profile.armourRear || profile.RearArmour}</td>
                            <td>{profile.I}</td>
                            <td>{profile.A}</td>
                          </>
                        );
                      } else {
                        return (
                          <>
                            <td>{profile.WS}</td>
                            <td>{profile.BS}</td>
                            <td>{profile.S}</td>
                            <td>{profile.T}</td>
                            <td>{profile.W}</td>
                            <td>{profile.I}</td>
                            <td>{profile.A}</td>
                            <td>{profile.Ld}</td>
                            <td>{profile.Sv}</td>
                          </>
                        );
                      }
                    })()}
                  </tr>
                )
                : (
                  unit.statlines
                    .map((profile, i) => (
                      <tr key={i}>
                        <td className="unit-name">{profile.name}</td>
                        {(() => {
                          if (profile.isVehicle) {
                            return (
                              <>
                                <td>{profile.armourFront || profile.FrontArmour}</td>
                                <td>{profile.armourSide || profile.SideArmour}</td>
                                <td>{profile.armourRear || profile.RearArmour}</td>
                                <td>{profile.BS}</td>
                              </>
                            );
                          } else if (profile.isDreadnought) {
                            return (
                              <>
                                <td>{profile.WS}</td>
                                <td>{profile.BS}</td>
                                <td>{profile.S}</td>
                                <td>{profile.armourFront || profile.FrontArmour}</td>
                                <td>{profile.armourSide || profile.SideArmour}</td>
                                <td>{profile.armourRear || profile.RearArmour}</td>
                                <td>{profile.I}</td>
                                <td>{profile.A}</td>
                              </>
                            );
                          } else {
                            return (
                              <>
                                <td>{profile.WS}</td>
                                <td>{profile.BS}</td>
                                <td>{profile.S}</td>
                                <td>{profile.T}</td>
                                <td>{profile.W}</td>
                                <td>{profile.I}</td>
                                <td>{profile.A}</td>
                                <td>{profile.Ld}</td>
                                <td>{profile.Sv}</td>
                              </>
                            );
                          }
                        })()}
                      </tr>
                    ))
                )}
              </tbody>
            </table>
          )}

          {/* --- Composition List --- */}
          {unit.composition.length > 0 && (
            <>
              <h4>Unit Composition:</h4>
              <ul className="composition-list">
                {groupComposition(unit.composition).map((line, i) => {
                  // Split at the first comma
                  const [model, rest] = line.split(/,(.+)/);

                  return (
                    <li key={i}>
                      <strong className="comp-name">
                        {renderWithReferences(model.trim(), registry, openRuleModal)}
                      </strong>
                      {rest
                        ? <>
                          , {/* keep the comma */}
                          {renderWithReferences(rest.trim(), registry, openRuleModal)}
                        </>
                        : null}
                    </li>
                  );
                })}
              </ul>
            </>
          )}


          {/* --- Rules --- */}
          {unit.rules?.length > 0 && (
            <div className="unit-rules">
              <h4>Rules:</h4>
              {unit.rules.map(r => renderWithReferences(r, registry, openRuleModal)).reduce((prev, curr) => [prev, ", ", curr])}
            </div>
          )}

          {/* --- Unit-wide Wargear --- */}
          {unit.wargear?.length > 0 && (
            <div className="unit-rules">
              <h4>Wargear:</h4>
              {unit.wargear.map(w => renderWithReferences(w, registry, openRuleModal)).reduce((prev, curr) => [prev, ", ", curr])}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
