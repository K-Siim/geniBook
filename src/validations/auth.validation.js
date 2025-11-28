import Joi from "joi";

export const authSchema = Joi.object({
    email: Joi.string().email().required().messages({
        'any.required': 'Palun pane reaalne email - Vajalik väli',
    }),
    password: Joi.string().min(8).required().messages({
        'string.min': 'Minimaalne pikkus on 8 tähemärki',
        'any.required': 'Parool on vajalik',
    })
});