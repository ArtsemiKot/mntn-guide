import style from "./style.module.scss";

function Footer() {
  return (
    <>
      <div className={style.wrapperFooter}>
        <div className={style.oneColumn}>
          <p className={style.mntn}>MNTN</p>
          <p className={style.textGetOutThere}>
            Get out there & discover your next <br />
            slope, mountain & destination!
          </p>
          <p className={style.textCopyright}>
            Copyright 2023 MNTN, Inc. Terms & Privacy
          </p>
        </div>
        <div className={style.secondColumn}>
          <p className={style.textMoreOnTheBlog}>More on The Blog</p>
          <p>About MNTN</p>
          <p>Contributors & Writers</p>
          <p>Write For Us</p>
          <p>Contact Us</p>
          <p>Privacy Policy</p>
        </div>
        <div className={style.thirdColumn}>
          <p className={style.textmoreOnMNTN}>More on MNTN</p>
          <p>The Team</p>
          <p>Jobs</p>
          <p>Press</p>
        </div>
      </div>
    </>
  );
}

export default Footer;