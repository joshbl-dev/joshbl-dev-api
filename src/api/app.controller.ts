import { Body, Controller, Get, Post, ValidationPipe } from "@nestjs/common";
import { AppService } from "../domain/app.service";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

@ApiBearerAuth("access-token")
@ApiTags("app")
@Controller("app")
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get()
	getHello(): string {
		return this.appService.getHello();
	}

	@Post()
	postHello(@Body(new ValidationPipe()) test): string {
		return this.appService.getHello();
	}
}
