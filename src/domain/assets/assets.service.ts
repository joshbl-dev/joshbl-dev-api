import { Injectable } from "@nestjs/common";
import { ImagesRepository } from "../../data/repositories/Postgres/images.repository";
import { ImagesQueryDTO } from "../../api/assets/models/requests/ImagesQuery.dto";
import { DEFAULT_AMOUNT, DEFAULT_OFFSET } from "../../utils/constants";
import { Image } from "../../data/entities/Image";

@Injectable()
export class AssetsService {
	constructor(private imagesRepository: ImagesRepository) {}

	async getImages(imagesQueryDTO: ImagesQueryDTO): Promise<Image[]> {
		const offset: number = imagesQueryDTO.offset || DEFAULT_OFFSET;
		const amount: number = imagesQueryDTO.amount || DEFAULT_AMOUNT;
		return await this.imagesRepository.getImageBatch(offset, amount);
	}
}
