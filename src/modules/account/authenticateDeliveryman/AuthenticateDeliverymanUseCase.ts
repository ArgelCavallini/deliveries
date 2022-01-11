import { prisma } from "../../../database/prismaClient";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

interface IAuthenticateDeliveryman {
  username: String;
  password: String;
}

export class AuthenticateDeliverymanUseCase {
  // Recever username, password
  async execute({ username, password }: IAuthenticateDeliveryman) {

    // Verificar se username cadastrado
    const deliveryman = await prisma.deliveryman.findFirst({
      where: {
        username
      }
    });
    if (!deliveryman) {
      throw new Error("Username or password invalid!")
    }

    // Verificar se senha corresponde ao username
    const passwordMatch = await compare(password, deliveryman.password)
    if (!passwordMatch) {
      throw new Error("Username or password invalid!")
    }

    // Gerar o token
    const token = sign({ username }, "39b33e5fa15d34497a86b18a57a09140", {
      subject: deliveryman.id,
      expiresIn: "1d"
    })

    return token;
  }
}