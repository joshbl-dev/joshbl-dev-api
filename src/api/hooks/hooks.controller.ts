import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { Controller, Logger, Post, UseGuards } from "@nestjs/common";
import { HooksService } from "../../domain/hooks/hooks.service";
import { GithubGuard } from "../../domain/auth/guards/github.guard";

@ApiBearerAuth("access-token")
@ApiTags("hooks")
@Controller("hooks")
export class HooksController {
	private readonly logger = new Logger(HooksController.name);

	constructor(private readonly hooksService: HooksService) {}

	@UseGuards(GithubGuard)
	@Post("/github")
	async getGithubData(data) {
		this.logger.log("Received Github hook...");
		return this.hooksService.processGithub(data);
	}
}
