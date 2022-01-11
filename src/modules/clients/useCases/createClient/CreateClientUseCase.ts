import { prisma } from "../../../../database/prismaClient";
import { hash } from "bcrypt"

interface ICreateClient {
  username: string;
  password: string;
}

export class CreateClientUseCase {

  async execute({ password, username }: ICreateClient) {
    // Validar se usuário existe
    const clientExist = await prisma.clients.findFirst({
      where: {
        username: {
          equals: username,
          mode: "insensitive", // ignora diferença entre letras
        }
      }
    });

    if (clientExist){
      throw new Error("Client already exists")
    }

    // Criptografar a senha
    const hashPassword = await hash(password, 10);

    // Salvar o cliente
    const client = await prisma.clients.create({
      data:{
        username,
        password: hashPassword
      }
    });

    return client;
  }
}
