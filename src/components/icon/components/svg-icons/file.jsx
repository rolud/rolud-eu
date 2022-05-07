import * as React from 'react'
import PropTypes from 'prop-types'

function File({ fill, style, ...props }) {
    return (
        <div style={style} {...props}>
            <svg viewBox="0 0 512 512" height="2rem" width="2rem" {...props}>
                <title>{'File'}</title>
                <path
                    d="M416 221.25V416a48 48 0 0 1-48 48H144a48 48 0 0 1-48-48V96a48 48 0 0 1 48-48h98.75a32 32 0 0 1 22.62 9.37l141.26 141.26a32 32 0 0 1 9.37 22.62z"
                    fill="none"
                    stroke={fill || '#fff'}
                    strokeLinejoin="round"
                    strokeWidth={32}
                />
                <path
                    d="M256 56v120a32 32 0 0 0 32 32h120"
                    fill="none"
                    stroke={fill || '#fff'}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={32}
                />
            </svg>
        </div>
    )
}

File.propTypes = {
    fill: PropTypes.string,
    style: PropTypes.object,
}

export default File
