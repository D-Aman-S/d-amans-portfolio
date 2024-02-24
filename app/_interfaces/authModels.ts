export interface CreateEmailUserDetails {
  username: string;
  email: string;
  password: string;
}

export interface LoginDetails {
  email: string;
  password: string;
}

export const defaultLoginData: LoginDetails = {
  email: "",
  password: "",
}

export const defaultSignupData: CreateEmailUserDetails = {
  username: "",
  email: "",
  password: "",
}