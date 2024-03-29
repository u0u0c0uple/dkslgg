export type SignupFields = {
  [key: string]: string;
};

export type SignupInfo = {
  clientId: string;
  password: string;
  name: string;
  passwordCheck: string;
  phone: string;
  email: string;
};

export type SignupSetter = (args: SignupInfo) => void;

export interface SignupComponentProps {
  getter: SignupInfo;
  setter: SignupSetter;
  onSignup: () => void;
  onInfo: () => void;
}
