import { Request, Response} from 'express';
import { getRepository } from 'typeorm';
import { User } from "../models/User";

class UserController{

    async create(request: Request, response: Response){
        const { name, email } = request.body;

        const usersRepository = getRepository(User);

        const userAllreadyExists = await usersRepository.findOne({
            email
        });

        if(userAllreadyExists) {
            return response.status(400).json({
                error: "User already exists!"
            });
        }

        const user = usersRepository.create({
            name, 
            email
        });

        await usersRepository.save(user);

        // return response.send();
        return response.json(user);
    }
}

export { UserController }