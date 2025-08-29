"use client"
import React, { useEffect } from 'react'
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";



const Provider = ({children} : any) => {


    const {user} = useUser();
    const CreateUser = useMutation(api.users.CreateNewUser);
        
          
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
    }
       }

  return (
    <div>
      {children}
    </div>
  )
}

export default Provider
