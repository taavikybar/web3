const fs = require('fs')

const BUILD_DIR = './build'

const inputDir = `${BUILD_DIR}/contracts`
const outputDir = `${BUILD_DIR}/abi`
const contractFiles = fs.readdirSync(inputDir)

if (fs.existsSync(outputDir)) {
    fs.rmSync(outputDir, { recursive: true })
}

fs.mkdirSync(outputDir)

for (const file of contractFiles) {
    const json = fs.readFileSync(`${inputDir}/${file}`, 'utf8')
    const parsed = JSON.parse(json)
    const abi = JSON.stringify(parsed.abi)

    fs.writeFileSync(`${outputDir}/${file}`, abi)
}
