import { sign } from "jsonwebtoken"
import { cookies } from "next/headers";
import { ECOM_JWT_TOCKEN, TOCKEN_MAX_AGE } from "./globalVariables";


export const setJWTUser = (user) => {
    const secret = process.env.JWT_SECRET_KEY || "ecom";
    const tocken = sign({ user }, secret, { expiresIn: TOCKEN_MAX_AGE });
    cookies().set({
        name: ECOM_JWT_TOCKEN,
        value: tocken,
        httpOnly: true,
        maxAge: TOCKEN_MAX_AGE,
        path: "/"
    })
}