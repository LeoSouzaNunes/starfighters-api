import joi from "joi";

const schema = joi.object({
    firstUser: joi.string().required(),
    secondUser: joi.string().required(),
});

export default schema;
