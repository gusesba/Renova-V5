export class User {
  name?: string;
  email?: string;
  password?: string;
}

export class UserSignUp {
  nome?: string;
  email?: string;
  password?: string;
  repPassword?: string;
}

export class Credentials {
  email?: string;
  password?: string;
}

export class AccessToken {
  accessToken?: string;
}

export class UserSessionToken {
  nome?: string;
  email?: string;
  accessToken?: string;
  expiration?: string;
}
