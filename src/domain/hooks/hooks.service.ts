import { Injectable, Logger } from "@nestjs/common";
import { exec } from "child_process";

@Injectable()
export class HooksService {
	private readonly logger = new Logger(HooksService.name);

	constructor() {}

	async processGithub(data: GithubPayload) {
		this.logger.log("Processing Github hook...");
		this.logger.log(data);
		this.mainUpdated(data);
	}

	private mainUpdated(data: GithubPayload) {
		if (data.ref === "refs/heads/main") {
			this.pullChanges();
		}
	}

	private pullChanges() {
		this.logger.log("Pulling changes to project...");
		exec(
			`eval "$(ssh-agent -s)" && ssh-add ~/.ssh/deploy_key && git pull`,
			(error, stdout, stderr) => {
				if (error) {
					this.logger.error(`Error pulling changes: ${error}`);
					return;
				}
				this.logger.log(`Changes pulled successfully: ${stdout}`);
			}
		);
	}
}