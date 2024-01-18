export interface UserData {
    id: number;
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

  export interface TUsers{
    id:number;
    img:string;
    first_name:string;
    last_name:string;
    email:string
  }

  export interface UserState {
    isAuthenticated: boolean;
    user: TUsers | null
    token:string;
  }