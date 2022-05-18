import { Style } from "../../../types";

const rainbowColors = [
  "#FF0D8B",
  "#FD751F",
  "#FDB400",
  "#65EE56",
  "#00D7A4",
  "#0061FB",
];

const style: Style = {
  category: "gradient",
  background: [
    {
      type: "gradient",
      data: {
        dir: "radial",
        colors: rainbowColors,
      },
    },
  ],
  dark: {
    type: "solid",
    data: {
      color: "#00000020",
    },
  },
  light: {
    type: "solid",
    data: {
      color: "#ffffff40",
    },
  },
  moveIndicator: {
    color: "#ff00ff55",
  },
  border: [
    {
      type: "gradient",
      data: {
        dir: "radial",
        colors: [...rainbowColors],
      },
    },
    {
      type: "solid",
      data: {
        color: "#00000040",
      },
    },
  ],
  coords: {
    onLight: "#00000077",
    onDark: "#ffffffaa",
    onBorder: "#fff",
  },
};

export default style;