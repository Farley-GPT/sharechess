import { Component, For, createSignal } from "solid-js";
import { Handlers, StyleCategory, BoardStyle, Style } from "../../types";
import Scrollable from "./reusable/Scrollable";
import "./Boards.css";
import styles from "../../board/styles-board";
import Board from "../../board/Board";
import { state, setState } from "../../state";

type BoardPreview = {
  key: keyof typeof styles;
  name: string;
  category: StyleCategory;
  img: string;
};

const prepareBoards = async () => {
  const boards = [];

  const board = new Board({
    size: 144,
    tiles: 2,
    showBorder: true,
    showExtraInfo: false,
  });

  for (const [key, style] of Object.entries(styles) as [BoardStyle, Style][]) {
    let img: string;

    if (style.ico) {
      img = style.ico;
    } else {
      await board.updateConfig({ boardStyle: key });
      await board.frame(null);
      board.render();
      img = board.toImgUrl();
    }

    boards.push({
      key,
      name: style.name,
      category: style.category,
      img,
    } as BoardPreview);
  }

  return boards;
};

const Boards: Component<{ handlers: Handlers }> = (props) => {
  const [boards, setBoards] = createSignal<BoardPreview[]>([]);

  prepareBoards().then((data) => setBoards(data));

  return (
    <Scrollable class="boards">
      <For each={boards()}>
        {(board) => {
          return (
            <img
              class={
                "boards__ico" +
                (state.boardConfig.boardStyle === board.key
                  ? " boards__ico--active"
                  : "")
              }
              onClick={() => {
                setState("boardConfig", "boardStyle", board.key);
                props.handlers.changeBoardStyle(board.key);
              }}
              src={board.img}
              title={board.name}
              draggable={false}
            />
          );
        }}
      </For>
    </Scrollable>
  );
};

export default Boards;