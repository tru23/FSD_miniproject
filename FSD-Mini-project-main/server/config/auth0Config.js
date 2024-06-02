import { auth } from 'express-oauth2-jwt-bearer'

const jwtCheck = auth({
    audience: "http://localhost:8000/",
    issuerBaseURL: "https://dev-paczqfoazon7jk64.us.auth0.com",
    tokenSigningAlg: "RS256" //default method
})

export default jwtCheck