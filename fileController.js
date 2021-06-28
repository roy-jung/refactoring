import fs from 'fs'
import { resolve } from 'path'

const basePath = resolve()

export const readJSON = path => JSON.parse(fs.readFileSync(resolve(basePath, path), 'utf-8'))
