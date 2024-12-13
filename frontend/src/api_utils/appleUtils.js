import jwt from 'jsonwebtoken';

export var token = jwt.sign({ foo: 'bar' }, 'shhhhh');

console.log(token)
export const hashAppleToken = () => {

}
const iat = Math.floor(Date.now() / 1000);
export const generateDeveloperToken = (alg, kid, iss, iat, exp, origin) => {
    return {
        header: {
            "alg": "ES286",
            "kid": "V5HX3QL2R3"
        },
        claims: {
            "iss": "D989JLJWGD",
            "iat": iat,
            "exp": 15777000

        }

    }
}