const sizes = {
    mobileS: { min: '320px', max: '375px' },
    mobileM: { min: '375px', max: '425px' },
    mobileL: { min: '425px', max: '768px' },
    tablet: { min: '768px', max: '1024px' },
    laptop: { min: '1024px', max: '1440px' },
    laptopL: { min: '1440px', max: '2560px' },
}

export const device = {
    mobileS: { min: `(min-width: ${sizes.mobileS.max})`, max: `(max-width: ${sizes.mobileS.max})` },
    mobileM: { min: `(min-width: ${sizes.mobileM.max})`, max: `(max-width: ${sizes.mobileM.max})` },
    mobileL: { min: `(min-width: ${sizes.mobileL.max})`, max: `(max-width: ${sizes.mobileL.max})` },
    tablet: { min: `(min-width: ${sizes.tablet.max})`, max: `(max-width: ${sizes.tablet.max})` },
    laptop: { min: `(min-width: ${sizes.laptop.max})`, max: `(max-width: ${sizes.laptop.max})` },
    laptopL: { min: `(min-width: ${sizes.laptopL.max})`, max: `(max-width: ${sizes.laptopL.max})` },
}
