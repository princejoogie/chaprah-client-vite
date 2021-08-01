export type TSignin = {
  email: string;
  password: string;
};

export type TSigninResponse = {
  success: boolean;
  message?: string;
  jwtToken?: string;
  refreshToken: string;
};
