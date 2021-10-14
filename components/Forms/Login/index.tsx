import React, { useRef } from 'react'
import { SubmitHandler, FormHandles } from '@unform/core'
import { Form } from '@unform/mobile'

interface FormData {
  name: string
  email: string
}
export default function LoginForm() {
  const formRef = useRef<FormHandles>(null)
  const handleSubmit: SubmitHandler<FormData> = data => {
    console.log(formRef)
  }
  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
     
    </Form>
  )
}