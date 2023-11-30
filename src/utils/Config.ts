import { Injectable } from "@nestjs/common";

@Injectable()
export class Config {
	nodeEnv: string;
	baseUrl: string;
	azureClientId: string;
	azureSecret: string;
	azureTenantId: string;
	onedriveMainFolderId: string;
	onedriveMemoriesFolderId: string;
	mariaDBHostname: string;
	mariaDB: string;
	mariaDBPort: string;
	mariaDBUsername: string;
	mariaDBPassword: string;
	jwtSecret: string;
	alienwareMac: string;
	ngrokToken: string;
	ngrokEdge: string;
	githubSecret: string;

	constructor() {
		this.nodeEnv = process.env.NODE_ENV;
		this.baseUrl = process.env.BASE_URL;
		this.azureClientId = process.env.AZURE_CLIENT_ID;
		this.azureSecret = process.env.AZURE_SECRET;
		this.azureTenantId = process.env.AZURE_TENANT_ID;
		this.onedriveMainFolderId = process.env.ONEDRIVE_PHOTOS_FOLDER;
		this.onedriveMemoriesFolderId = process.env.ONEDRIVE_MEMORIES_FOLDER;
		this.mariaDBHostname = process.env.MARIADB_HOSTNAME;
		this.mariaDB = process.env.MARIADB;
		this.mariaDBPort = process.env.MARIADB_PORT;
		this.mariaDBUsername = process.env.MARIADB_USERNAME;
		this.mariaDBPassword = process.env.MARIADB_PASSWORD;
		this.jwtSecret = process.env.JWT_SECRET;
		this.alienwareMac = process.env.ALIENWARE_MAC;
		this.ngrokToken = process.env.NGROK_TOKEN;
		this.ngrokEdge = process.env.NGROK_EDGE;
		this.githubSecret = process.env.GITHUB_SECRET;
	}
}
