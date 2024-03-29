export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IUserCreateRequest {
  name: string;
  email: string;
  password: string;
}

export interface IUserFindByIdRequest {
  id: string;
}

export interface IUserFindByEmailRequest {
  email: string;
}

export interface IUserUpdateRequest {
  id: string;
  name?: string;
  email?: string;
  password?: string;
}

export interface IUserDeleteRequest {
  id: string;
}