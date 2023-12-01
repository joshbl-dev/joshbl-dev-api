import { Injectable, Logger } from "@nestjs/common";
import { exec } from "child_process";
import { Config } from "../../utils/Config";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class AutomationsService {
	private readonly logger = new Logger(AutomationsService.name);

	constructor(private config: Config, private authService: AuthService) {}

	startAlienware() {
		this.authService.validateAdmin();
		this.logger.log("Starting Alienware");
		exec(`sudo etherwake -i eth0 ${this.config.alienwareMac}`);
	}
}
