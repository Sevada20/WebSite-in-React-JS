import s from "./SiteBar.module.css";
function SiteBar(props) {
  return (
    <div className={s.sitebarContainer}>
      <div>
        <h3>Friends</h3>
      </div>
      <div className={s.flex}>
        {props.sitebar.map((sit) => (
          <div key={sit.id}>
            <div className={s.nameDiv}></div>
            <div>{sit.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SiteBar;
