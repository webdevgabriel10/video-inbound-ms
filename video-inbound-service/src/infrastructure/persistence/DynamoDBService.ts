import { Injectable } from "@nestjs/common";

@Injectable()
export class DynamoDBService {
    constructor() {
    }

    async saveVideoMetaData(video: any): Promise<any> {
        console.log('Saving video metadata', video);
        return true;
    }
}