import firebaseApp from "../config";
import { signInWithEmailAndPassword, Auth } from "firebase/auth";

const auth: Auth = getAuth(firebaseApp);

export default async function signIn(email: string, password: string): Promise<{ result: any, error: any }> {
    let result: any = null;
    let error: any = null;
    try {
        result = await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
        error = e;
    }

    return { result, error };
}
