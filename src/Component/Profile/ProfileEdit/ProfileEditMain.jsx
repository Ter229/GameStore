import React, { useRef } from "react";
import s from "./ProfileEdit.module.scss";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  addNick,
  saveNick,
  addName,
  addDescription,
} from "../../../redux/slices/profileSlice";

const ProfileEditMain = () => {
  const dispatch = useDispatch();
  const nick = useSelector((state) => state.profile.nick);

  const inputRef = useRef();
  const textRef = useRef();
  const handlerNick = (event) => {
    dispatch(addNick(event.target.value));
  };

  const saveNicks = () => {
    dispatch(addName(inputRef.current.value));
    dispatch(addDescription(textRef.current.value));
    dispatch(saveNick(nick));
  };
  return (
    <div>
      <div>
        <div className={s.main__title}>ОСНОВНОЕ</div>
        <div className={s.main__sub__title}>
          <div>ИМЯ ПРОФИЛЯ</div>
          <input value={nick} onChange={handlerNick} />
        </div>
        <div className={s.main__sub__title}>
          <div>НАСТОЯЩЕЕ ИМЯ</div>
          <input ref={inputRef} />
        </div>
      </div>
      <div>
        <div className={s.main__title}>О СЕБЕ</div>
        <textarea
          ref={textRef}
          placeholder="Информация отсутствует."
        ></textarea>
      </div>
      <div></div>
      <div></div>
      <div className={s.main__setting}>
        <span>Отмена</span>
        <span onClick={saveNicks}>Сохранить</span>
      </div>
    </div>
  );
};

export default ProfileEditMain;
