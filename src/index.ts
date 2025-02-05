import Phaser from "phaser";

import loadingScene from "./scenes/loading";
import menuScene from "./scenes/menu";
import levelselectScene from "./scenes/levelselect";
// import settingScene from "./scenes/settingScene";
import editorScene from "./scenes/editor";
import gameScene from "./scenes/game";
import exploreScene from "./scenes/explore";
import newScene from "./scenes/new";
import Settings from "./game/settings";

const config = {
    type: Phaser.AUTO,
    width: 960,
    height: 540,
    // antialias: false,
    // roundPixels: true,
    // pixelArt: true,
    // zoom: 0.8,
    physics: {
        default: "arcade",
        arcade: {
            debug: Settings.IS_DEBUG,
            gravity: { y: 2500 },
        },
    },
    parent: "game",
    scene: [
        loadingScene,
        menuScene,
        levelselectScene,
        gameScene,
        editorScene,
        exploreScene,
        newScene,
    ],
};

new Phaser.Game(config);
