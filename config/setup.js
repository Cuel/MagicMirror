const fs = require('fs')
const path = require('path')
const key = process.env.OPENWEATHER_API_KEY

if (!key) throw new Error('Openweather api key not set')
fs.writeFileSync(
	path.join(__dirname ,'locals.json'),
	JSON.stringify({OPENWEATHER_API_KEY: key})
)
