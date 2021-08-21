import { Controller, Get, Query, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { AssetsService } from "../../domain/assets/assets.service";
import { ImagesQueryDTO } from "./models/requests/ImagesQuery.dto";
import { ImageResponseDTO } from "./models/responses/ImageResponse.dto";
import { QuotesQueryDTO } from "./models/requests/QuotesQuery.dto";
import { QuotesResponseDTO } from "./models/responses/QuotesResponse.dto";
import { JwtAuthGuard } from "../../domain/auth/guards/jwt.guard";

@ApiBearerAuth("access-token")
@ApiTags("assets")
@Controller("assets")
export class AssetsController {
	constructor(private readonly assetsService: AssetsService) {}

	@UseGuards(JwtAuthGuard)
	@Get("/images")
	async getImages(
		@Query() imagesQueryDTO: ImagesQueryDTO
	): Promise<ImageResponseDTO[]> {
		return await this.assetsService.getImages(imagesQueryDTO);
	}

	@Get("/quotes")
	async getQuotes(
		@Query() quotesQueryDTO: QuotesQueryDTO
	): Promise<QuotesResponseDTO[]> {
		return await this.assetsService.getQuotes(quotesQueryDTO);
	}

	@Get("/quote")
	async getQuote(@Query("id") id: string): Promise<QuotesResponseDTO> {
		return await this.assetsService.getQuote(id);
	}
}
