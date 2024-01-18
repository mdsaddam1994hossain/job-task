export interface UserData {
    id: number;
    email: string;
    username?:string;
   
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