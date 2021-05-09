import Joi from 'joi'

// const noteId = Joi.string().regex(/^[0-9a-fA-F]{24}$/)

/*
export const userIdSchema = Joi.object({
  id: userId.required()
})
*/

export const createNoteSchema = Joi.object({
  name: Joi.string().required(),
  number: Joi.string().required()
})

/*
export const updateUserSchema = Joi.object({
  name: Joi.string().required(),
  number: Joi.string().required()
})
*/
