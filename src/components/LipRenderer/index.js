import React from "react";
import { images } from "../../assets";
import { parts } from "../../utils/parts";

const LipRenderer = ({ lip = null, size = 200 }) => {
  if (!lip) {
    return null;
  }
  let rarity = images._r1;

  if (lip.rarity >= 80) {
    rarity = images._r2;
  }

  if (lip.rarity >= 95) {
    rarity = images._r3;
  }

  let dnaStr = String(lip.dna);
  while (dnaStr.length < 16) dnaStr = "0" + dnaStr;

  let lipDetails = {
    bg: dnaStr.substring(0, 2) % 5,
    mask: dnaStr.substring(2, 4) % 5,
    line: dnaStr.substring(4, 6) % 5,
    addon: dnaStr.substring(6, 8) % 5,
    addonMouth1: dnaStr.substring(8, 10) % 5,
    addonMouth2: dnaStr.substring(10, 12) % 5,
    addonMouth3: dnaStr.substring(12, 14) % 5,
    name: lip.name,
  };

  const lipStyle = {
    width: "100%",
    height: "100%",
    position: "absolute",
    borderRadius: "10px 100px / 120px",
  };

  return (
    <div
      style={{
        minWidth: size,
        minHeight: size,
        position: "relative",
        marginBottom: 10,
      }}
    >
      <img alt={"bg"} src={parts.bg[lipDetails.bg]} style={lipStyle} />

      <img alt={"mask"} src={parts.mask[lipDetails.mask]} style={lipStyle} />

      <img alt={"line"} src={parts.line[lipDetails.line]} style={lipStyle} />

      <img alt={"addon"} src={parts.addon[lipDetails.addon]} style={lipStyle} />

      <img
        alt={"addon_mouth"}
        src={parts.addonMouth1[lipDetails.addonMouth1]}
        style={lipStyle}
      />

      <img
        alt={"addon_mouth"}
        src={parts.addonMouth2[lipDetails.addonMouth2]}
        style={lipStyle}
      />

      <img
        alt={"addon_mouth"}
        src={parts.addonMouth3[lipDetails.addonMouth3]}
        style={lipStyle}
      />

      <img
        alt={"rarity"}
        src={rarity}
        style={{
          ...lipStyle,
          width: "140%",
          height: "140%",
        }}
      />
    </div>
  );
};

export default LipRenderer;
