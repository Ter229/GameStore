import React from "react";
import s from "./LibraryGame.module.scss";
import { useDispatch } from "react-redux";
import { addCurrentGame } from "../../redux/slices/librarySlice";

const LibraryGame = (props) => {
  const dispatch = useDispatch();
  const throwId = (props) => {
    dispatch(addCurrentGame(props));
  };
  return (
    <div>
      <div className={s.wrapper}>
        <img className={s.wrapper__icon} src={props.img} />
        <div onClick={() => throwId(props)} className={s.wrapper__title}>
          {props.title}
        </div>
      </div>
    </div>
  );
};

export default LibraryGame;
