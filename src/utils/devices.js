export const sizes = {
    mobileS: { min: 320, max: 375 },
    mobileM: { min: 375, max: 425 },
    mobileL: { min: 425, max: 768 },
    tablet: { min: 768, max: 1024 },
    laptop: { min: 1024, max: 1440 },
    laptopL: { min: 1440, max: 2560 },
}

export const device = {
    mobileS: { min: `(min-width: ${sizes.mobileS.max}px)`, max: `(max-width: ${sizes.mobileS.max}px)` },
    mobileM: { min: `(min-width: ${sizes.mobileM.max}px)`, max: `(max-width: ${sizes.mobileM.max}px)` },
    mobileL: { min: `(min-width: ${sizes.mobileL.max}px)`, max: `(max-width: ${sizes.mobileL.max}px)` },
    tablet: { min: `(min-width: ${sizes.tablet.max}px)`, max: `(max-width: ${sizes.tablet.max}px)` },
    laptop: { min: `(min-width: ${sizes.laptop.max}px)`, max: `(max-width: ${sizes.laptop.max}px)` },
    laptopL: { min: `(min-width: ${sizes.laptopL.max}px)`, max: `(max-width: ${sizes.laptopL.max}px)` },
}
