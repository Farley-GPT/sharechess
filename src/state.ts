import { createStore } from "solid-js/store";
import { BoardConfig, GameConfig } from "./types";

const boardConfig: BoardConfig = {
  size: 1024,
  tiles: 8,
  boardStyle: "calm",
  piecesStyle: "tatiana",
  showBorder: true,
  showExtraInfo: true,
  showMaterial: true,
  showMoveIndicator: true,
  showChecks: true,
  showCoords: true,
  flipped: false,
};

const gameConfig: GameConfig = {
  titleScreen: true,
  fromPly: null,
  toPly: null,
  loop: true,
  format: "GIF",
  picSize: "M",
  animationSize: "M",
};

export type State = {
  board: BoardConfig;
  game: GameConfig;
  pgn: string | null;
  fen: string;
  moves: string[];
  ply: number;
};

const initialState: State = {
  board: boardConfig,
  game: gameConfig,
  pgn: null,
  fen: "",
  moves: [],
  ply: 0,
};

const [state, setState] = createStore(initialState);

export { state, setState };
