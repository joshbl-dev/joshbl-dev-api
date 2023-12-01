import { Injectable, Logger } from "@nestjs/common";
import { Config } from "../../utils/Config";
import { exec } from "child_process";

@Injectable()
export class DnsService {
	private readonly logger = new Logger(DnsService.name);

	constructor(private config: Config) {}

	async startNgrok(port: number) {
		const command = `ngrok tunnel --label edge=${this.config.ngrokEdge} https://localhost:${port} --authtoken ${this.config.ngrokToken}`;
		exec(command, (error, stdout, stderr) => {
			if (error) {
				this.logger.error(`error: ${error.message}`);
				return;
			}
			if (stderr) {
				this.logger.error(`stderr: ${stderr}`);
				return;
			}
			this.logger.log(`stdout: ${stdout}`);
		});
	}
}
