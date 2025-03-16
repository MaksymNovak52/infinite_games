const getColumnStyles = (columnKey: string) => {
  switch (columnKey) {
    case "eventKey":
      return { textAlign: "left" };
    case "marketType":
      return { textAlign: "center", paddingLeft: "40px" };
    case "eventOutput":
      return { textAlign: "left", paddingRight: "" };
    case "yourScore":
      return { textAlign: "left", paddingRight: "16px" };
    case "avgSubnetScore":
      return { textAlign: "left", paddingRight: "10px" };
    case "diff":
      return { textAlign: "roight", paddingLeft: "10px" };
    case "yourEffectiveScore":
      return { textAlign: "right", paddingLeft: "2px" };
    case "uniqueEvent":
      return { textAlign: "right" };
    default:
      return { textAlign: "left" };
  }
};

const getRowAnimationStyles = (isExpanding: boolean, index: number) => {
  if (!isExpanding || index < 3) return {};

  return {
    animation: "fadeInRow 0.4s ease-in-out forwards",
    animationDelay: `${(index - 3) * 0.1}s`,
  };
};
export { getColumnStyles, getRowAnimationStyles };
