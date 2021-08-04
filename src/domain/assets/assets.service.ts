import { Injectable } from "@nestjs/common";
import { ImagesRepository } from "../../data/repositories/Postgres/images.repository";
import { ImagesQueryDTO } from "../../api/assets/models/requests/ImagesQuery.dto";
import { Image } from "../../data/entities/Image";

@Injectable()
export class AssetsService {
	constructor(private imagesRepository: ImagesRepository) {}

	async getImages(imagesQueryDTO: ImagesQueryDTO): Promise<Image[]> {
		return await this.imagesRepository.getImages(imagesQueryDTO?.category);
	}
}
