import { mutation } from "./_generated/server";
import {v} from "convex/values";


export const CreateNewUser = mutation({
    args:{
        name:v.string(),
        email:v.string(),
        imageUrl:v.string()

    },
    handler:async(ctx,args)=>{
        // if user already exists in DB

      const user = await ctx.db.query("userTable").filter(q=>q.eq(q.field("email"),args.email)).collect()
         // if not then insert new user to DB
         if(user?.length === 0){
                const data ={
                    email: args.email,
                    imageUrl: args.imageUrl,
                     name: args.name
                }
            const result = await ctx.db.insert('userTable',{
                   ...data,
                  
                 });

                 console.log(result)
                 return {
                        ...data,
                         result
                        //_id: result._id
                 }
                 
         }

            return user[0];
    }
})