import { prisma } from "../../../database/prismaClient";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

interface IAuthenticateClient {
  username: String;
  password: String;
}

export class AuthenticateClientUseCase{
  // Recever username, password
  async execute({username, password}: IAuthenticateClient){
   
    // Verificar se username cadastrado
    const client = await prisma.clients.findFirst({
      where: {
        username
      }
    });
    if(!client) {
      throw new Error("Username or password invalid!")
    }

    // Verificar se senha corresponde ao username
    const passwordMatch = await compare(password, client.password)
    if(!passwordMatch){
      throw new Error("Username or password invalid!")
    }

    // Gerar o token
    const token = sign({ username }, "39b33e5fa15d34497a86b18a57a09140", {
      subject: client.id,
      expiresIn: "1d"
    })

    return token;
  }
}