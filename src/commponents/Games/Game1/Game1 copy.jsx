import React from "react";
import s from "./Game1.module.css"

const Game1 = () => {
return <div>
    <body>
        {/* Game canvas */}
    <canvas id="c"></canvas>

    {/* Gameplay HUD  */}
    <div className={s.hud}>
        <div className={s.hud__score}>
            <div className={s.score_lbl}></div>
            <div className={s.cube_count_lbl}></div>
        </div>
        <div className={s.pause_btn}><div></div></div>
        <div className={s.slowmo}>
            <div className={s.slowmo__bar}></div>
        </div>
    </div>

    {/* Menu System  */}
    <div className={s.menus}>
        <div className={s.menu menu__main}>
            <h1>MENJA</h1>
            <button type="button" className={s.play_normal_btn}>PLAY GAME</button>
            <button type="button" className={s.play_casual_btn}>CASUAL MODE</button>
            <div className={s.credits}>An 8kB game by <a href="https://cmiller.tech">Caleb Miller</a></div>
        </div>
        <div className={s.menu menu__pause}>
            <h1>Paused</h1>
            <button type="button" className={s.resume_btn}>RESUME GAME</button>
            <button type="button" className={menu_btn__pause}>MAIN MENU</button>
        </div>
        <div className={s.menu menu__score}>
            <h1>Game Over</h1>
            <h2>Your Score:</h2>
            <div className={s.final_score_lbl}></div>
            <div className={s.high_score_lbl}></div>
            <button type="button" className={s.play_again_btn}>PLAY AGAIN</button>
            <button type="button" className={s.menu_btn__score}>MAIN MENU</button>
        </div>
    </div>
  </body>        
</div>
}

export default Game1