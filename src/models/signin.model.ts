export type TSignin = {
  email: string;
  password: string;
};

export type TSigninErrorResponse = {
  success: boolean;
  message: string;
};

export type TSigninSuccessResponse = {
  success: boolean;
  jwtToken?: string;
  refreshToken: string;
};

export type TRefreshTokenResponse = {
  success: boolean;
  jwtToken?: string;
  refreshToken: string;
};
