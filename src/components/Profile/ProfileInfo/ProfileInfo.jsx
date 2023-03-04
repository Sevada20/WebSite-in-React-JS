import s from "./ProfileInfo.module.css";
const ProfileInfo = ({ profile }) => {
  if (!profile) {
    return <h1>Loading</h1>;
  }
  return (
    <div>
      <div>
        <img src="http://giffun.ru/wp-content/uploads/2019/04/kachat_krasivye_kartinki_na_telefon_besplatno_29_23075447-500x313.jpg" />
      </div>
      <div className={s.discriptionBlock}>
        <img src={profile.photos.small} />
        ava + description
      </div>
    </div>
  );
};

export default ProfileInfo;
