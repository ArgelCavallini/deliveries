import { prisma } from "../../../../database/prismaClient";

export class FindAllDeliveriesDeliverymanUseCase {
  async execute(id_deliveruman: string) {
    const deliveries = await prisma.deliveryman.findMany({
      where: {
        id: id_deliveruman
      },
      select: {
        deliveries: true,
        id: true,
        username: true,
      }
    });

    return deliveries;
  }
}