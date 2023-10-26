export interface RegisterForm {
    email: string;
    name: string;
    password: string;
    confirmPassword: string;
    profilePictureURL?: string;
  }
  
  export interface UserData {
      uid: string | null
      name: string | null;
      email: string | null;
      profilePictureURL: string | null;
    }
  
  export interface AuthContextProps {
    user: UserData | null;
    googleSignIn: () => Promise<void>;
    logOut: () => void;
    registerUser: (formData: RegisterForm) => Promise<void>;
    signInUser: (email: string, password: string) => Promise<void>;
  }
  