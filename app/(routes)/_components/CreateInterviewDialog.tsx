import React from 'react'
import { Button } from '@/components/ui/button'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


function CreateInterviewDialog() {
  return (
    <Dialog>
  <DialogTrigger>
    <Button>Create Interview </Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Please submit following details.</DialogTitle>
      <DialogDescription>
       
        <Tabs defaultValue="resume-upload" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="resume-upload">Resume upload</TabsTrigger>
    <TabsTrigger value="job-description">Job Description</TabsTrigger>
  </TabsList>
  <TabsContent value="resume-upload">Make changes to your account here.</TabsContent>
  <TabsContent value="job-description">Change your password here.</TabsContent>
</Tabs>


      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
  )
}

export default CreateInterviewDialog