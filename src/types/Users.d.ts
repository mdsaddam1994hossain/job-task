export interface UserData {
    email: string;
    first_name?:string;   
  }

  export interface LoginUser {   
    email: string;
    password:string;  
  }

  export interface TRegisterUer{
    email:string;
    first_name:string;
    password:string
  }

  export interface TUser{
    id:number;
    avater:string;
    first_name:string;
    last_name:string;
    email:string
  }

  export interface CreateUser{
    name?:string;
    job:string
  }

  export interface CreateUserResponse {
    id: number;
    name?: string;
    job: string;
    createdAt: string;
  }

  export interface UserState {
    isAuthenticated: boolean;
    user: TUser | null
   
  }