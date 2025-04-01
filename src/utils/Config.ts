import { Injectable } from "@nestjs/common";

@Injectable()
export class Config {
	nodeEnv: string;
	baseUrl: string;
	jwtSecret: string;
	etherwakeMac: string;
	githubSecret: string;
	admin: string;
	serverUser: string;
	deployKeyPath: string;

	constructor() {
		this.nodeEnv = process.env.NODE_ENV;
		this.baseUrl = process.env.BASE_URL;
		this.jwtSecret = process.env.JWT_SECRET;
		this.etherwakeMac = process.env.ALIENWARE_MAC;
		this.githubSecret = process.env.GITHUB_SECRET;
		this.admin = process.env.ADMIN;
		this.serverUser = process.env.SERVER_USER;
		this.deployKeyPath = process.env.DEPLOY_KEY_PATH;
	}
}
