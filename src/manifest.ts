import { defineManifest } from '@crxjs/vite-plugin'

import package_json from '../package.json' assert { type: 'json' }

const { version } = package_json

// Convert from Semver (example: 0.1.0-beta6)
const [major, minor, patch, label = '0'] = version
    // can only contain digits, dots, or dash
    .replace(/[^\d.-]+/g, '')
    // split into version parts
    .split(/[.-]/)

export default defineManifest(env => ({
    manifest_version: 3,
    name:
        env.mode === 'development'
            ? `DEV: ${package_json.name}`
            : package_json.name,
    description: package_json.description,
    // up to four numbers separated by dots
    version: `${major}.${minor}.${patch}.${label || 0}`,
    permissions: ['storage'],
    // semver is OK in "version_name"
    version_name: package_json.version,
    action: {
        default_popup: 'src/pages/popup/index.html',
        default_icon: {
            '128': 'icons/128.png'
        }
    },
    icons: {
        16: 'icons/16.png',
        48: 'icons/48.png',
        128: 'icons/128.png'
    }
}))
