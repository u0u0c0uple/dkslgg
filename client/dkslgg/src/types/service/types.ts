// Validation Service User
export interface IValidationUser {
  name: string;
  clientId: string;
  password: string;
  passwordCheck: string;
  phone: string;
  email: string;
}

// UserService
export interface ISignupUser {
  name: string;
  clientId: string;
  password: string;
  phone: string;
  email: string;
}

export interface ISigninUser {
  clientId: string;
  password: string;
}

export interface IUserToken {
  name: string;
  tier: {
    id: string;
    name: string;
    orderNum: number;
  };
  rank: number;
  profileIconId: number;
  level: number;
}
