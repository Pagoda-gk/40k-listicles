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
    name: "Sniper Rifles",
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
    description: `This model ignores all armour saves.`
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
    description: `Can move by up to 12" in the movement phase.
    
    Ignores terrain but if the model lands in difficult terrain roll a D6, on a 1 the model is removed as a casualty; no armour saves allowed.`
  }

];
