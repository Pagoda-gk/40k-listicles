// src/data/gameRules.js
export const gameRules = [

  //-------WEAPON TYPES------------------
  {
    name: "Rapid Fire",
    description: "Models with rapid fire weapons may fire twice at half range if they remained stationary, or once only at half range if they moved."
  },
  {
    name: "Pistol",
    description: "This is a ranged weapon, but also counts as a [Close Combat Weapon], allowing an extra attack if paired with one in assault."
  },
  {
    name: "Close Combat Weapon",
    description: "Allows for attacks in Assault. A model armed with two Close Combat Weapons gain an extra attack.",
  },
  {
    name: "Flame",
    description: `Instead of rolling to hit place the template so its narrow end is touching the base of the firing model, and the rest covers the maximum number of models in the target unit.

    Models fully or partially under the template are hit automatically.

All cover is ignored when resolving hits.

Casualties inflicted by flame weapons must be taken from amongst the models actually covered by the template.`
  },
  {
    name: "Heavy",
    description: `If a unit moves then it cannot shoot heavy weapons. Remember that even if the model armed with the heavy weapon doesn't move it still can't fire if other members of its unit move.
    
    When shooting heavy weapons always fire the number of times indicated.`
  },
  {
    name: "Assault",
    description: `These weapons shoot the number of times indicated whether you move or not and always to their full range.`
  },
  {
    name: "Barrage",
    description: `Weapons like these fire by guessing the range to the target. They are shown by their maximum range being preceded by a G (Guess), e.g. G48".
    
    When you fire barrage weapons you have to state the target unit and then guess the range to it in inches from the firing unit. Intervening obs1acles and terrain do not block the line of fire for these weapons, so you don't need a line of sight to the target in order to shoot at it.

    Place the Blast marker for the weapon at the distance guessed and then see if it landed on target by rolling the Scatter dice and a D6 together. If you roll a HIT symbol the shot lands at the range guessed. If an arrow symbol is rolled the marker is shifted in the direction indicated by the arrow a number of inches equal to the roll on the D6. Calculate hits on enemy models and remove casualties as for blast weapons (i.e. from beneath the Blast markers).

If a unit has more than one barrage weapon they will all be fired together in a salvo, with one Blast marker landing for each weapon firing. Guess the range and roll for any potential scatter with the first shot as above, this is the 'ranging shot' for the salvo and all the other shots will land nearby. Once the first marker is in place roll a Scatter dice for each other Blast marker in the salvo. If an arrow is rolled place the marker in the direction indicated so that its edge is touching the edge of the marker placed for the ranging shot. If a hit is rolled the firing player may place the marker so that its edge is touching the edge of any of the Blast markers in the salvo which have already landed.

Note: If a Barrage Weapon lands in close combat, all underneath the template can be hit.


Barrage Pinning

Units that suffer casualties from a barrage must pass a Leadership test to avoid being pinned down. If the unit fails it may not move, shoot or assault in its following tum. At the end of its following turn the unit recovers and may act normally again.

A unit pinned down does not have to take a Morale test if it sustains 25% casualties from enemy fire, the fact it is pinned overrides the Morale test.

A unit must take a Pinning test every time it suffers casualties from a Pinning attack from a different enemy unit.

If assaulted by the enemy the pinned unit will fight normally, ignoring the falling shells under the more pressing circumstances of battle.`
  },


  //--------WEAPON SPECIAL RULES----------------

  {
    name: "Twin-Linked",
    description: `This weapon may reroll failed [To Hit] rolls.`
  },
  {
    name: "Power Weapon",
    description: "Uses wielders base strength, but ignores [Armour Saves].",
  },
  {
    name: "Dreadnought Close Combat Weapon",
    description: `This weapon increases the users Strength to 10, included in the profile. It also ignores [Armour Saves]`,
  },
  {
    name: "Power Fist",
    description: `The User may double the Strength characteristic up to a maximum of 10 when rolling to [Wound]
    This weapon always ignores [Armour Saves]
    This weapon always strikes last`,
  },
  {
    name: "Jam",
    description: `If a triple 1 is rolled on the To Hit dice for the assault cannon it jams and is destroyed.`
  },
  {
    name: "Melta",
    description: `Melta weapons roll an extra D6 to penetrate vehicles at half range or under (12" for multi-meltas or 6" for meltaguns).`
  },
  {
    name: "Sniper",
    description: `Always hits on 2+ and its Strength always equals the Toughness of the target (so it wounds on a 4+ regardless of Toughness).
  
  Units suffering casualties from sniper rifles must test to avoid pinning as for a barrage. 
  
  A sniper rifle only has an armour penetration of D6 against a vehicle.`
  },
  {
    name: "Get Hot!",
    description: `If you roll a 1 to hit the weapon has overheated and injured the model firing it. Make an armour save for the model otherwise it will suffer a wound. If the model is killed the plasma weapon is lost as well.
  
  Plasma weapons on vehicles are not affected by overheating.`
  },
  {
    name: "Fusion",
    description: `Roll an extra D6 to penetrate vehicles at half range or under.`
  },
  {
    name: "Blast",
    description: `Roll to hit as normal. If the shot misses it has no effect. If it hits place the appropriately sized Blast marker over the target unit to see which models are affected.

    Models partially covered are hit on a D6 roll of 4 or more, models completely covered are hit automatically.
    
    The defending player has to remove any casualties inflicted from the models directly beneath the Blast marker.

    Unscrupulous players may be tempted to use blast weapons to pick off leaders and heavy weapons in an unrealistic fashion. To prevent this the following rule applies. The owner of the target unit can move an incoming Blast marker onto a different part of the target unit providing that:

a) The Blast marker covers the same number of models (or more) in the same unit.

b) The new target is within the firer's range and line of sight.`
  },
  {
    name: "Krak Grenades",
    description: `Give troops S6 for close combat hits scored against vehicles, making their Armour Penetration scores 6+D6.
    
    Krak grenades need both hands to trigger so models using them can only make a single attack and don't get bonus attacks for charging, additional hand weapons or anything else. Krak grenades can also be used to make a Death or Glory attack on an overrunning tank.`
  },
  {
    name: "Frag Grenades",
    description: `Allows the user to fight at initiative order when Assaulting a uit in cover.`
  },
  {
    name: "Force Weapon",
    description: `Counts as Power Weapon.`
  },
  {
    name: "Rule",
    description: `Placeholder .`
  },


  //---------UNIT RULES-----------------

  {
    name: "Deep Strike",
    description: "Units with this ability may arrive via deep strike."
  },
  {
    name: "Infiltrators",
    description: 'Makes use of special rules for Infiltrators as noted by the [Mission].'
  },
  {
    name: "Individual",
    description: `This model does not form a unit with others from the selection and moves as an individual unit.`,
  },




  //-----------------INDEPENDENT CHARACTERS------------------------------
  {
    name: "Independent Character",
    description: `Independent characters are allowed to move freely around the battlefield and can temporarily join other units if desired. While an independent character is part of a unit, they must obey the usual coherency rules until they leaves the unit as detailed below.

    If a unit falls back with an Independent Character of a different unit type attached to it, it falls back at the speed of the slowest unit.

In order to join a unit an independent character simply has to move within the 2" coherency distance of the unit during their movement phase. Note that if an independent character joins a unit which has special abilities such as infiltrators, jump pack troops, cavalry etc. they do not gain any of the abilities of the unit.

An independent character may leave a unit during the movement phase by moving out of coherency distance with it. An independent Character cannot leave a unit they join, which subsequently falls back, until it regroups. Therefore, if the unit can't regroup, the character can't leave it. If an Independent Character has joined a unit, which later falls back, and is subsequently eliminated (by shooting, for example), the character can then test for regrouping by himself.

An independent character may only join or leave a unit during the movement phase - once assaults are launched it is too late to join in or duck out! `
  },

  //----------------------TRANSPORTS---------------------------------------

  {
    name: "Transport",
    description: `
No more than one unit can ever be embarked on a single transport.
Dedicated transports may only be used to transport the squad they are selected with, plus any independent characters who have joined the squad, An independent character may disembark and leave the squad that owns the transport embarked, but if the
squad disembarks then any independent characters must do so as well.`,
  },
  {
    name: "Dedicated Transport",
    description: `This follows [Transport] rules, and may only be used to transport the squad they are selected with, plus any independent characters who have joined the squad.
    
    An independent character may disembark and leave the squad that owns the transport embarked, but if the squad disembarks then any independent characters must do so as well.`,
  },


  //--------MODEL TYPES-----------------


  {
    name: "Monstrous Creature",
    description: `This model ignores all armour saves.`
  },
  {
    name: "Vehicle",
    description: `Add in the movement rules.`
  },
  {
    name: "Open-Topped",
    description: `models shoot out, entire hull is an access point, takes extra damage.`
  },
  {
    name: "Walker",
    description: `This model ignores all armour saves.`
  },
  {
    name: "Skimmer",
    description: `This model ignores all armour saves.`
  },
  {
    name: "Fast",
    description: `This model ignores all armour saves.`
  },
  {
    name: "Bike",
    description: `This model ignores all armour saves.`
  },
  {
    name: "Cavalry",
    description: `Moves 6 charges 12.`
  },
  {
    name: "Jump Pack",
    description: `Jump pack troops can move up to 12" during their movement phase, and charges the usual 6".

This unit ignores the effects of terrain unless they move in it. If jump pack troops enter difficult terrain roll a D6 for each model in the unit. On a 2-6 the model lands without incident, on a 1 the model is removed as a casualty - No armour saves are allowed. RThis unit may instead choose to 'walk' in the movement phase and are therefore treated as normal infantry.

Troops with jump packs may not move over enemy troops. 

This unit advances and falls back 3D6" `
  },

  //----------------GENERAL RULES----------------------------------------

    {
    name: "Fearless",
    description: `This unit automatically passes morale checks`
  },
  {
    name: "",
    description: ``
  },

];
