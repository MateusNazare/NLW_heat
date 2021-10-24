import { Request, Response } from 'express';
import { AuthenticateUserService } from '../services/AuthenticateUserService';
import { DeleteMessageService } from '../services/DeleteMessageService';

class DeleteMessageController {
    async hendle(request: Request, response: Response) {
        const { message } = request.body;

        const service = new DeleteMessageService();
        const result = await service.execute();

        return response.json(result);
    }
}

export { DeleteMessageController };