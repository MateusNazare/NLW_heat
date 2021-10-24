import prismaClient from "../prisma";
import { io } from "../app";

class DeleteMessageService {
    async execute() {
        const message = await prismaClient.message.deleteMany({})

        return message;
    }
}

export { DeleteMessageService }