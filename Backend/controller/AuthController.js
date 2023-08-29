const Joi = require('joi')
const user = require('../models/user')

// creating authcontroller
const authcontroller = {
    async register() {
        //1. Validation
        const userRegisterSchema = Joi.object ({
            username: Joi.string().min(5).max(30).required(),
            name: Joi.string.max(30).required(),
            password: Joi.string.required(),
            conformPassword : Joi.ref('password')
        });

        const {error} = userRegisterSchema.validate(req.body)

        //2. if error in validation ---> return error in middle ware

       if (error){
            return next (error);
       }

        //3. if eamil or ouser name already register -----> return an error

        const {username, name, email, password} = req.body;
        try{
            const emailInUse = await user.exits({email});
            const UsernameInUse = await user.exits({username});

            if (emailInUse) {
                const error = {
                    status: 409,
                    message: "email already exists use another email"

                }

                return next (error)
            }

            if (UsernameInUse) {
                const error = {
                    status: 409,
                    message: "user name already exist choose another user name"

                }

                return next (error)
            }

        }
        catch(error){
            return next (error)

        }
        //4. password hash
        //5. Store data in db 
        //6. response send
    },
    async login(){},
}



module.exports= authcontroller;