'use client'
import React, {useState, ChangeEvent, FormEvent, useEffect} from 'react';
import Link from 'next/link';
import { db } from "@/firebase/initFirebase"
import {collection, addDoc,getDocs, query,where} from 'firebase/firestore'
import { UserAuth } from '../../context/AuthContext';
import  { useRouter } from 'next/navigation';


const createCollectionIfNotExists = async (collectionName:any) => {
    const querySnapshot = await getDocs(collection(db, collectionName));
  
    if (querySnapshot.empty) {
      // The collection doesn't exist, so create it
      console.log(`Creating collection: ${collectionName}`);
      await addDoc(collection(db, collectionName), { dummy: "data" });
    }
};
  
  // Call the function to create the "user" collection

async function WriteToCloudFirestore (name:string,email:string,password:string,rememberMe:boolean,id:string) {
    try {
        await createCollectionIfNotExists("user");

        const docRef = await addDoc(collection(db, "user"), {
            name:name,
            email:email,
            password:password,
            rememberMe:rememberMe,
            id:id
        });
        console.log("Document written with ID:",docRef.id )
        return true
    }catch(error){
        console.error("Error adding data", error)
        return false;
    }
}



const Signup = () => {
    const router = useRouter()
    const [loading,setLoading] = useState(true);
    const [storedInDb,setStoredInDb] = useState(false);
    const [dbData, setDbData] = useState();
    const [queryResult, setQueryResult] = useState(false)
    const authContext = UserAuth();
    const { user, googleSignIn, logOut } = authContext || {}
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        rememberMe: false
      }); 

    
      async function ReadFromCloudFirestore () {
        try {
            console.log("user  ID", user?.uid)
            const q = query(collection(db, "user"), where("id", "==", `${user?.uid}`));
            const querySnapshot = await getDocs(q);
            
            if(querySnapshot.size > 0) {
                const data = querySnapshot.docs.map((doc)=> ({
                    id: doc.id,
                    ...doc.data()
                }))
            
            console.log('Doc found', data)
            return true;
            }else{
                console.log('No matching docs',user?.uid)
                return false;
            }
        }catch(error:any){
            console.log('Error querying Firestore', error.message)
            throw error
        }

    }
    //ReadFromCloudFirestore();
    
        useEffect(()=> {
            const fetchData = async () => {
                try {
                  const result = await ReadFromCloudFirestore();
                  console.log('result', result)
                  setQueryResult(result);
                } catch (error) {
                  console.error('Error in fetchData:', error);
                  setQueryResult(false);
                }
              };
          
              user?fetchData():console.log('user is not ready')
        }, [user])

    const handleSignIn = async ()=> {
        try {
            await googleSignIn?.()
        }catch(error){
            console.log(error)
        }
      }

    const handleSignOut = async ()=>{
        try {
            await logOut?.();
        }catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        const checkAuthentication = async ()=> {
            await new Promise((resolve)=> setTimeout(resolve,50))
            setLoading(false)
        }
        checkAuthentication();
    }, [])


            
       

      // Handle form field changes
      const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
        const { name, value,type,checked } = e.target;
        const inputValue = type === 'checkbox' ? checked : value;
        setFormData({
          ...formData,
          [name]: inputValue
        });
      };
    
      // Handle form submission
      const handleSubmit = async (e:FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        const added = await WriteToCloudFirestore(formData.name,formData.email,formData.password,formData.rememberMe,user?.uid as string)
        console.log("added",added)
        if(added){
            setStoredInDb(true);
            setFormData({
                name: '',
                email: '',
                password: '',
                rememberMe: false
            })
            alert("Data added to firestore!")
            router.push('/dashboard');
        }
      };



      const renderLoginForm =()=>(
        <>
                        <form onSubmit={handleSubmit} className='mt-[2.81rem]'>
                {/* Name Field */}
                <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                    Name:
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-1 p-2 w-full border rounded-md"
                />
                </div>

                {/* Email Field */}
                <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                    Email:
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 p-2 w-full border rounded-md"
                />
                </div>

                {/* Password Field */}
                <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                    Password:
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="mt-1 p-2 w-full border rounded-md"
                />
                </div>

                <div className='mt-[1.88rem] flex justify-between'>
                    <span className=' flex gap-2'>
                        <input
                        type="checkbox"
                        id="rememberMe"
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleInputChange}
                        className="cursor-pointer"
                    />

                    <p className='text-[0.873rem] text-[#18181B] '>Remember me</p>
                    </span>

                    <Link href={'#'} className='text-[0.875rem] font-[400] leading-[1.375rem] text-[#2563EB]'> Forgot password?</Link>
                </div>

                <div className='mt-[2.81rem] flex gap-6'>
                                    {/* Sign Up Button */}
                    <button
                    type="submit"
                    className="bg-[#2563EB] text-white p-[0.8rem] w-[10rem] rounded-[0.5635rem] hover:bg-blue-600"
                    >
                    Submit
                    </button>

                    {/* Sign Up with Google Button */}
                    <button
                    type="button"
                    onClick={handleSignIn}
                    className="bg-[#F8FAFC] text-black p-[0.8rem] rounded-[0.5635rem] hover:white flex gap-2">
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                    <path d="M23.5194 9.91358L13.7299 9.91312C13.2977 9.91312 12.9473 10.2635 12.9473 10.6957V13.823C12.9473 14.2552 13.2977 14.6056 13.7299 14.6056H19.2427C18.639 16.1722 17.5124 17.4842 16.0749 18.3179L18.4255 22.387C22.1963 20.2063 24.4256 16.3799 24.4256 12.0966C24.4256 11.4867 24.3806 11.0507 24.2907 10.5598C24.2224 10.1868 23.8985 9.91358 23.5194 9.91358Z" fill="#167EE6"/>
                    <path d="M12.4241 19.3043C9.72629 19.3043 7.37109 17.8303 6.10616 15.6491L2.03711 17.9944C4.10782 21.5833 7.98694 24 12.4241 24C14.6009 24 16.6548 23.4139 18.4242 22.3926V22.387L16.0735 18.3178C14.9983 18.9414 13.754 19.3043 12.4241 19.3043Z" fill="#12B347"/>
                    <path d="M18.4258 22.3925V22.3869L16.0752 18.3177C14.9999 18.9413 13.7558 19.3043 12.4258 19.3043V24C14.6025 24 16.6566 23.4139 18.4258 22.3925Z" fill="#0F993E"/>
                    <path d="M5.12146 12.0001C5.12146 10.6703 5.48437 9.42616 6.10786 8.35099L2.03881 6.00565C1.01182 7.76941 0.425781 9.81776 0.425781 12.0001C0.425781 14.1824 1.01182 16.2307 2.03881 17.9945L6.10786 15.6491C5.48437 14.574 5.12146 13.3299 5.12146 12.0001Z" fill="#FFD500"/>
                    <path d="M12.4241 4.69566C14.1834 4.69566 15.7994 5.32078 17.0616 6.36061C17.373 6.61711 17.8256 6.59859 18.1108 6.31336L20.3266 4.09758C20.6502 3.77395 20.6272 3.24422 20.2815 2.94431C18.1667 1.10967 15.4151 0 12.4241 0C7.98694 0 4.10782 2.41673 2.03711 6.00558L6.10616 8.35092C7.37109 6.16969 9.72629 4.69566 12.4241 4.69566Z" fill="#FF4B26"/>
                    <path d="M17.0632 6.36061C17.3746 6.61711 17.8273 6.5986 18.1125 6.31336L20.3282 4.09758C20.6518 3.77395 20.6288 3.24422 20.2831 2.94431C18.1683 1.10963 15.4168 0 12.4258 0V4.69566C14.185 4.69566 15.801 5.32078 17.0632 6.36061Z" fill="#D93F21"/>
                    </svg>
                    
                    </span>Finish
                    </button>
                </div>
            </form>
            <div className='mt-[1.25rem]'><p className='text-[#64748B] text-[0.875rem] font-[400] leading-[1.375rem]'>Dont have an account? <Link href={'#'} className='text-[#2563EB] text-[0.8125rem] font-[500] leading-[1.325rem]'>Create new account</Link></p></div>
            </>
      )
      
      const renderLoginButtons=()=>(
        <ul className='flex'>
                    <li onClick={handleSignIn} className='p-2 cursor-pointer'>Login</li>
                    <li onClick={handleSignOut} className='p-2 cursor-pointer'>Logout</li>
                </ul>
      )

      const renderLoggedInMessage = ()=>(
        <>
        <p>Youre already logged in!</p>
      </>
      )
  return (
   <div className='w-full flex justify-center ml-[-4rem] align-middle'>
        <div className='w-[50%] self-center my-[6.88rem]'>
            <p className='text-[2.3rem] leading-[3.875rem] tracking-[-0.125rem] font-[600]'>Join Reals</p>
            <p className='text-[1rem] leading-[1.575rem] font-[400] text-[#52525B]'>Reals gives you the blocks and components you need to create a truly professional website.</p>

            {
                !user? (
                    renderLoginButtons()
                 ): (queryResult) ? (
                     renderLoggedInMessage()
                ) : (!storedInDb) ?(
                    renderLoginForm()
               ): null
            }                
        </div>
   </div>
  )
}

export default Signup