let baseUrl: string
let env = process.env.NODE_ENV

if (env === "development"){
    baseUrl = "http://localhost:8000/api"
} else {
    baseUrl = "http://localhost/api"
}

export {
    baseUrl,
    env
}