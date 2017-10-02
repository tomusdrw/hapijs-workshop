// npm install joi --save

const passwordSchema = joi.string()
    .min(8)
    .max(30);

joi.validate('password123', passwordSchema);
// { error: null, value: 'password123' }

joi.validate('hello', passwordSchema);
// { error: {...}, value: 'hello' }

