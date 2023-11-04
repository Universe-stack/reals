import { getAuth, signInWithEmailAndPassword, Auth } from "firebase/auth";
import firebaseApp from "../config";

const auth: Auth = getAuth(firebaseApp);

export default async function signIn(email: string, password: string): Promise<{ result: any, error: any }> {
    try {
        const result = await signInWithEmailAndPassword(auth, email, password);
        return { result, error: null };
    } catch (e) {
        return { result: null, error: e };
    }
}
