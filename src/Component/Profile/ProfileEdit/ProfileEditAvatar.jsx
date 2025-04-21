import React, { useRef, useState } from "react";
import s from "./ProfileEdit.module.scss";
import { useDispatch } from "react-redux";
import { addImg } from "../../../redux/slices/profileSlice";

const ProfileEditAvatar = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedImg, setSelectedImg] = useState();

  const dispatch = useDispatch();

  const refInput = useRef();
  const fileReader = new FileReader();

  fileReader.onloadend = () => {
    setSelectedImg(fileReader.result);
  };

  const handleChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    fileReader.readAsDataURL(file);
  };

  const handlePick = () => {
    refInput.current.click();
  };

  const loadImg = () => {
    dispatch(addImg(selectedImg));
  };
  return (
    <div className={s.avatar}>
      <div className={s.avatar__title}>Аватар</div>
      <div className={s.avatar__text}>
        Выберите изображение и рамку аватара.
      </div>

      {selectedImg && (
        <div>
          <img className={s.avatar__img} src={selectedImg} />
        </div>
      )}
      <input id={s.input} ref={refInput} type="file" onChange={handleChange} />
      <button className={s.avatar__btn1} onClick={handlePick}>
        Загрузите свой аватар
      </button>

      {selectedImg && (
        <button className={s.avatar__btn2} onClick={loadImg}>
          Сохранить
        </button>
      )}
    </div>
  );
};

export default ProfileEditAvatar;
