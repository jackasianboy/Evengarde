"use client"

import { useUser } from "@clerk/nextjs"
import EventForm from "./EventForm"

const ClientEventForm = () => {
  const { user } = useUser()
  const userId = user?.id || ""

  return <EventForm userId={userId} type="Create" />
}

export default ClientEventForm
