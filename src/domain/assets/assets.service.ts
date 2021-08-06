import { Injectable } from "@nestjs/common";
import { ImagesRepository } from "../../data/repositories/MariaDB/images.repository";
import { ImagesQueryDTO } from "../../api/assets/models/requests/ImagesQuery.dto";
import { Image } from "../../data/entities/Image";
import { Quote } from "../../data/entities/Quote";
import { QuotesRepository } from "../../data/repositories/MariaDB/quotes.repository";
import { QuotesQueryDTO } from "../../api/assets/models/requests/QuotesQuery.dto";

@Injectable()
export class AssetsService {
	constructor(
		private imagesRepository: ImagesRepository,
		private quotesRepository: QuotesRepository
	) {}

	async getImages(imagesQueryDTO: ImagesQueryDTO): Promise<Image[]> {
		return await this.imagesRepository.getImages(imagesQueryDTO?.category);
	}

	async getQuotes(quoteQueryDTO: QuotesQueryDTO): Promise<Quote[]> {
		return await this.quotesRepository.getQuotes(quoteQueryDTO.category);
	}

	async getQuote(id: string): Promise<Quote> {
		return await this.quotesRepository.getQuote(id);
	}
}
