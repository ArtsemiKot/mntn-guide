import style from './style.module.scss'

function  Main() {
    return ( 
        <div className={style.main}>
            <div className={style.contacts}>
                <p className={style.textFollow}>Follow us</p>
                <div className={style.imgInst}></div>
                <div className={style.imgTwit}></div>
            </div>
            <div className={style.info}>
                <div className={style.quide}>
                <hr className={style.shortLine}></hr>
                <p className={style.textHiking}>A Hiking guide</p>
                </div>
                <h2 className={style.textMountains}>Be prepared for the Mountains and beyond!</h2>
                <div className={style.scroll}>
                    <p className={style.textScroll}>scroll down</p>
                    <div className={style.imgArrow}></div>
                </div>
            </div>
        </div>
     );
}

export default  Main