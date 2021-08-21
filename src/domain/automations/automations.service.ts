import { Injectable } from "@nestjs/common";
import { exec } from "child_process";
import { Config } from "../../utils/Config";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class AutomationsService {
	constructor(private config: Config, private authService: AuthService) {}

	startAlienware() {
		this.authService.validateAdmin();
		exec(`sudo etherwake -i eth0 ${this.config.alienwareMac}`);
	}
}
