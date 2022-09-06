import * as Yup from "yup";

export const signUpSchema = Yup.object({
    name: Yup.string().min(2).max(24).required("please enter your name"),
    email: Yup.string().email().required("please enter your email"),
    password: Yup.string().min(4).required("please enter the password"),
    confirmPwd: Yup.string()
        .required()
        .oneOf([Yup.ref("password"), null], "password must match"),
});