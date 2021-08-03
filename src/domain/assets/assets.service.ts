import { Injectable } from "@nestjs/common";
import { ImagesRepository } from "../../data/repositories/Postgres/images.repository";

@Injectable()
export class AssetsService {
	constructor(private imagesRepository: ImagesRepository) {}
}
