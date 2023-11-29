import { Injectable } from "@nestjs/common";
import { Config } from "../../utils/Config";
import { exec } from "child_process";

@Injectable()
export class DnsService {
	constructor(private config: Config) {}

	async startNgrok(port: number) {
		const command = `ngrok tunnel --label edge=${this.config.ngrokEdge} http://localhost:${port} --authtoken ${this.config.ngrokToken}`;
		exec(command, (error, stdout, stderr) => {
			if (error) {
				console.error(`error: ${error.message}`);
				return;
			}
			if (stderr) {
				console.error(`stderr: ${stderr}`);
				return;
			}
			console.log(`stdout: ${stdout}`);
		});
	}
}
