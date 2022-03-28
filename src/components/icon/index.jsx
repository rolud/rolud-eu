import _ from 'lodash'

import customIcons from './components/custom-icons'

const defaultStyle = {
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}

export const Icon = ({ style = {}, name, fill }) => {
    const mergedStyles = _.merge(
        {},
        defaultStyle,
        Array.isArray(style)
            ? style.reduce((acc, item) => {
                  return { ...acc, ...item }
              }, {})
            : style,
    )

    return customIcons[name].render({ style: mergedStyles, fill })
}

export default Icon
