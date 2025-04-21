import s from "./ProfileEdit.module.scss";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";

const ProfileEdit = () => {
  const save = useSelector((state) => state.profile.saveNick);
  const avatar = useSelector((state) => state.profile.avatar);
  return (
    <section className={s.edit}>
      <div className={s.header}>
        <img
          id={s.img}
          src={
            avatar
              ? avatar
              : "https://avatars.fastly.steamstatic.com/2748eee8dc517550da4f72e41d8b2a0a240a68cf_full.jpg"
          }
        />
        <span id={s.name}>{save}</span>
      </div>
      <main className={s.main}>
        <section className={s.main__menu}>
          <Link to="main">
            <div>Основное</div>
          </Link>

          <Link to="avatar">
            <div>Аватар</div>
          </Link>
          <div>Фон профиля</div>
          <div>Мини-профиль</div>
          <div>Тема</div>
          <div>Значок на показ</div>
          <div>Витрины</div>
        </section>
        <section>
          <Outlet />
        </section>
      </main>
      {/* <div className={s.block}>
        <button className={s.btn}>Кнопка</button>
      </div> */}
    </section>
  );
};

export default ProfileEdit;
