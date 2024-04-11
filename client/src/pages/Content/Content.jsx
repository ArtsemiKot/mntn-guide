import style from './style.module.scss'
function Content() {
    return (
        <>
            <div className={style.contentOne}>
                <div className={style.wrapperContenOne}>
                    <div className={style.text01}>01</div>
                    <div className={style.title1}>
                        <div className={style.shrortLine1}></div>
                        <p className={style.textGetStartied}>Get Started</p>
                    </div>
                    <h2 className={style.titleTextOne}>What level of  hiker are you?</h2>
                    <p className={style.contentTextOne}>Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? </p>
                </div>
                <div className={style.imgContent01}></div>
            </div>
            <div className={style.contentTwo}>
                <div className={style.wrapperContenTwo}>
                    <div className={style.text02}>02</div>
                    <div className={style.title2}>
                        <div className={style.shrortLine2}></div>
                        <p className={style.textGetStartied}>Hiking Essentials</p>
                    </div>
                    <h2 className={style.titleTextTwo}>Picking the right Hiking Gear!</h2>
                    <p className={style.contentTextTwo}> The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have.
                        Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet. </p>
                </div>
                <div className={style.imgContent02}></div>
            </div>
            <div className={style.contentThree}>
                <div className={style.wrapperContenThree}>
                    <div className={style.text03}>03</div>
                    <div className={style.title3}>
                        <div className={style.shrortLine3}></div>
                        <p className={style.textGetStartied}>where you go is the key</p>
                    </div>
                    <h2 className={style.titleTextThree}>Understand Your Map & Timing</h2>
                    <p className={style.contentTextThree}>To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction.</p>
                </div>
                <div className={style.imgContent03}></div>
            </div>

        </>
    );
}

export default Content;