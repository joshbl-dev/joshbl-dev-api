import { Injectable } from "@nestjs/common";
import { ImagesRepository } from "../data/repositories/Postgres/images.repository";

@Injectable()
export class AppService {
	constructor(private imagesRepository: ImagesRepository) {}
	getHello(): string {
		return "Hello World!";
	}
}
