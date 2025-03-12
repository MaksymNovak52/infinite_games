const getNeonStyle = (probability: number) => {
  if (probability >= 80) {
    return {
      border: "1px solid #31C8EA",
      color: "#31C8EA",
      textShadow: "0 0 5px #31C8EA, 0 0 10px #31C8EA",
      background: "rgba(49, 200, 234, 0.1)",
    };
  }
  if (probability >= 60) {
    return {
      border: "1px solid #8DEA31",
      color: "#8DEA31",
      textShadow: "0 0 5px #8DEA31, 0 0 10px #8DEA31",
      background: "rgba(141, 234, 49, 0.1)",
    };
  }
  if (probability >= 40) {
    return {
      border: "1px solid #EAA631",
      color: "#EAA631",
      textShadow: "0 0 5px #EAA631, 0 0 10px #EAA631",
      background: "rgba(234, 166, 49, 0.1)",
    };
  }
  return {
    border: "1px solid #EA3A31",
    color: "#EA3A31",
    textShadow: "0 0 5px #EA3A31, 0 0 10px #EA3A31",
    background: "rgba(234, 58, 49, 0.1)",
  };
};
export { getNeonStyle };
