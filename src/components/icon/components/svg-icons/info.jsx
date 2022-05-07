import * as React from 'react'
import PropTypes from 'prop-types'

function Info({ fill, style, ...props }) {
    return (
        <div style={style} {...props}>
            <svg viewBox="0 0 512 512" height="2rem" width="2rem" {...props}>
                <title>{'Information Circle'}</title>
                <path
                    d="M248 64C146.39 64 64 146.39 64 248s82.39 184 184 184 184-82.39 184-184S349.61 64 248 64z"
                    fill="none"
                    stroke={fill || '#fff'}
                    strokeMiterlimit={10}
                    strokeWidth={32}
                />
                <path
                    fill="none"
                    stroke={fill || '#fff'}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={32}
                    d="M220 220h32v116"
                />
                <path
                    fill="none"
                    stroke={fill || '#fff'}
                    strokeLinecap="round"
                    strokeMiterlimit={10}
                    strokeWidth={32}
                    d="M208 340h88"
                />
                <path fill={fill || '#fff'} d="M248 130a26 26 0 1 0 26 26 26 26 0 0 0-26-26z" />
            </svg>
        </div>
    )
}

Info.propTypes = {
    fill: PropTypes.string,
    style: PropTypes.object,
}

export default Info
