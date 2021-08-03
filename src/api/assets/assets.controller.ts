import { Body, Controller, Get, Post, ValidationPipe } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { AssetsService } from "../../domain/assets/assets.service";

@ApiBearerAuth("access-token")
@ApiTags("assets")
@Controller("assets")
export class AssetsController {
	constructor(private readonly assetsService: AssetsService) {}

	@Get()
	getHello(): string {
		return;
	}

	@Post()
	postHello(@Body(new ValidationPipe()) test): string {
		return;
	}
}
