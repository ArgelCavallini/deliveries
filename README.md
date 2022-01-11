#projeto 1

Prisma 
Typescript
Bcrypt
JWT
Express
ts-node-dev

yarn add typescript ts-node-dev @types/express @types/jsonwebtoken @types/bcrypt prisma -D

yarn add express bcrypt jsonwebtoken @prisma/client

yarn tsc --init

https://www.prisma.io/docs/guides/upgrade-guides/upgrade-from-prisma-1/upgrading-prisma-binding-to-nexus#12-configure-typescript
tsconfig.json
{
  "compilerOptions": {
    "skipLibCheck": true,
    "strict": true,
    "rootDir": "src",
    "noEmit": true
  },
  "include": ["src/**/*"]
}

start config prisma
yarn prisma init

# gerar o que doi escrito no arquivo schema.prisma
yarn prisma migrate dev

# prisma adicionar as referencias
yarn prisma formmat

#start projeto
yarn dev

# ver banco no navegador pelo prisma
yarn prisma studio

# express para pegar os erros e entender
yarn add express-async-errors


# verificar se tem alguma alteração necessária no prisma
yarn prisma generete# deliveries
