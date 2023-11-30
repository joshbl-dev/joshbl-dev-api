import { Injectable } from "@nestjs/common";
import { Config } from "../../utils/Config";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class HooksService {
	constructor(private config: Config, private authService: AuthService) {}

	async processGithub(data) {
		console.log("Processing Github hook...");
		console.log(data);
	}
}
