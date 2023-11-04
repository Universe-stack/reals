import { getAuth, createUserWithEmailAndPassword, Auth } from "firebase/auth";
import firebaseApp from "../config";

const auth: Auth = getAuth(firebaseApp);

export default async function signUp(email: string, password: string): Promise<{ result: any, error: any }> {
    try {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        return { result, error: null };
    } catch (e) {
        return { result: null, error: e };
    }
}
