import * as React from 'react'
import { File, GitHub, Info, Instagram, Linkedin } from './svg-icons'

// eslint-disable-next-line react/display-name
const rendered = (Component) => (props) => <Component {...props} />

const icons = {
    file: { render: rendered(File) },
    github: { render: rendered(GitHub) },
    info: { render: rendered(Info) },
    instagram: { render: rendered(Instagram) },
    linkedin: { render: rendered(Linkedin) },
}

export default icons
