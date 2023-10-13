import { z } from 'zod'

export const validationSchema = z.object({
  email: z.string().nonempty(),
  password: z.string().nonempty(),
  check: z.boolean(),
  additionalInput: z.string()
})

export type FormFields = z.infer<typeof validationSchema>
