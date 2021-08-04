import { Controller, Get, Query } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { AssetsService } from "../../domain/assets/assets.service";
import { ImagesQueryDTO } from "./models/requests/ImagesQueryDTO";
import { ImageResponseDTO } from "./models/responses/ImageResponse.dto";

@ApiBearerAuth("access-token")
@ApiTags("assets")
@Controller("assets")
export class AssetsController {
	constructor(private readonly assetsService: AssetsService) {}

	@Get("/images")
	async getImages(
		@Query() imagesQueryDTO: ImagesQueryDTO
	): Promise<ImageResponseDTO[]> {
		return await this.assetsService.getImages(imagesQueryDTO);
	}
}
