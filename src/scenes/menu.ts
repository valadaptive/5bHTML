import { levels } from "../game/core/jsonmodule";
import { hexColourFromSeed, openExternalLink } from "../game/core/misc/other";
import Settings from "../game/settings";
const devdate = new Date(2020, 12, 31)

class menuScene extends Phaser.Scene {
    constructor() { super("menuScene"); }

    create(): void {
        // this.scene.start("gameScene"); // go straight into gameplay
        const textStyle = {
            fontFamily: "Helvetica, Arial, sans-serif",
            // backgroundColor: "#fff",
            color: "#fff",
        };

        const buttonStyle = {
            fontFamily: "Helvetica, Arial, sans-serif",
            fontSize: "26px",
            fontStyle: "bold",
            align: "center",
            fixedWidth: 300,
            backgroundColor: "#fff",
            color: "#666",
            padding: {
                y: 4,
                x: 4,
            },
        };
        // Background
        this.add.rectangle(0, 0, 960, 540, 0x666666).setOrigin(0, 0);

        // 5b LOGO
        this.add.image(260, 400, "5b_logo");
        this.add.image(305, 175, "5b_people").setScale(0.9);

        const buttonlist = [];

        const newnewButton = this.add.text(
            640, 125, "New to 5bHTML?", buttonStyle,
        ).setInteractive();

        const watchButton = this.add.text(
            640, 175, "WATCH BFDIA 5a", buttonStyle,
        ).setInteractive();

        this.add.text(675, 260, "Happy new year! :)", textStyle).setFontSize(28);

        const newButton = this.add.text(
            640, 350, "NEW GAME", buttonStyle,
        ).setInteractive();

        const continueButton = this.add.text(
            640, 400, "LEVEL SELECT", buttonStyle,
        ).setInteractive();

        // const levelButton = this.add.text(
        //    640, 350, "LEVEL EDITOR (old)", buttonStyle,
        // ).setInteractive();
        const exploreButton = this.add.text(
            640, 450, "EXPLORE", buttonStyle,
        ).setInteractive();
        // const settingsButton = this.add.text(
        //    640,450,"Settings",buttonStyle,
        // ).setInteractive();

        buttonlist.push(newnewButton, watchButton, newButton, continueButton, exploreButton);
        // ,settingsButton);

        buttonlist.forEach((btn) => {
            btn.on("pointerover", () => btn.setBackgroundColor("#d4d4d4"));
            btn.on("pointerout", () => btn.setBackgroundColor("#fff"));
        });
        newnewButton.on("pointerdown", () => this.scene.start("newScene"));
        watchButton.on("pointerdown", () => openExternalLink("https://www.youtube.com/watch?v=4q77g4xo9ic"));
        newButton.on("pointerdown", () => this.scene.start("gameScene", {
            levelfile: levels,
            levelnumber: 1,
        }));
        continueButton.on("pointerdown", () => this.scene.start("levelselectScene"));
        // levelButton.on('pointerdown', () => openExternalLink("https://zolo101.github.io/5beam-edit/index.html"));
        exploreButton.on("pointerdown", () => this.scene.start("exploreScene"));
        // settingsButton.on('pointerdown', () => );

        if (Settings.IS_DEBUG) {
            this.add.text(685, 500, "Development Build", textStyle)
                .setFontSize(32)
                .setBackgroundColor("#000")
                .setColor("#f11")
        }

        // Credits
        this.add.text(612, 10, "Original By Cary Huang", textStyle).setFontSize(32);
        this.add.text(686, 55, "Music by Michael Huang", textStyle).setFontSize(24);
        this.add.text(785, 92, "Remake by Zelo101", textStyle).setFontSize(18);

        // Version
        const versionText = this.add.text(831, 500, "v3 Alpha", textStyle)
            .setBackgroundColor(hexColourFromSeed(devdate.getTime()))
            .setFontSize(28)
            .setColor("#000");

        // Debug Version
        if (Settings.IS_DEBUG) {
            versionText.setFontFamily("cursive")
                .setText("dev-20w52a")
                .setDisplaySize(150, 30)
                .setPosition(525, 502)
        }
    }
}

export default menuScene;
