import { Injectable } from "@nestjs/common";

@Injectable()
export class S3StorageService {
    constructor() {
    }

    async storeVideo(video: any): Promise<any> {
        console.log('Storing video', video);
        return true;
    }
}