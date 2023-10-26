
//Interfaz para los datos del registro de usuarios
export interface RegisterForm {
    email: string;
    name: string;
    password: string;
    confirmPassword: string;
    profilePictureURL?: string;
  }
  
  //Interfaz para los datos del usuario
  export interface UserData {
      uid: string
      name: string;
      email: string;
      profilePictureURL: string | null;
    }
  
  //Interfaz para los props que le son pasados al contexto de autenticación
  export interface AuthContextProps {
    user: UserData;
    googleSignIn: () => Promise<void>;
    logOut: () => void;
    registerUser: (formData: RegisterForm) => Promise<void>;
    signInUser: (email: string, password: string) => Promise<void>;
  }
  