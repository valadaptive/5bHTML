import { SpriteType } from "../classes/sprite";

export default [
    {
        name: "book",
        type: "character",
        friction: 2.8,
        size: {
            x: 128,
            y: 128
        }
    },
    {
        name: "match",
        type: "character",
        size: {
            x: 128,
            y: 128
        }
    },
    {
        name: "icecube",
        type: "character",
        size: {
            x: 128,
            y: 128
        }
    },

    {
        name: "crate",
        type: "sprite",
        mass: 5,
        size: {
            x: 128,
            y: 128
        }
    },
    {
        name: "metal",
        type: "sprite",
        mass: 6.5,
        size: {
            x: 128,
            y: 128
        }
    },
    {
        name: "parcel",
        type: "sprite",
        mass: 4,
        size: {
            x: 256,
            y: 128
        }
    }
] as SpriteType[]