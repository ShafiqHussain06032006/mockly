"use client"
import { createContext } from 'react';
import { UserDetailContext } from '@/context/UserDetailContext';
import React, { useEffect , useState} from 'react'
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";




const Provider = ({children} : any) => {


    const {user} = useUser();
    const CreateUser = useMutation(api.users.CreateNewUser);
    //state
    const [userDetail , setUserDetail] =useState<any>();
        
          
         useEffect(() => {
            user && CreateNewUser();
         }, [user])

       const CreateNewUser = async ()=>{
        if(user){
        const result = await CreateUser({
            email:user?.primaryEmailAddress?.emailAddress ?? '' ,
            imageUrl:user?.imageUrl ,
            name: user?.fullName ?? ''

        });
        console.log(result)
        setUserDetail(result);
    }
       }

  return (
    <UserDetailContext.Provider value={{userDetail , setUserDetail}}>
    <div>
      {children}
    </div>
    </UserDetailContext.Provider>
  )
}

export default Provider
export const useUserDetailContext=()=>{
  return createContext(UserDetailContext);
}
