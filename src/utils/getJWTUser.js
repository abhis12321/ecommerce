import { cookies } from "next/headers";
import { ECOM_JWT_TOCKEN } from "./globalVariables";
import { verify } from "jsonwebtoken";

export const getJWTUser = () => {    
    try {
        const tocken = cookies().get(ECOM_JWT_TOCKEN)?.value;
        const secret = process.env.JWT_SECRET_KEY || "ecom";
        const { user } = verify(tocken, secret);
        return user;
    } catch (error) {
        return null;
    }
}