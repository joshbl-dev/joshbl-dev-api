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
	postgresHostname: string;
	postgresPort: string;
	postgresUsername: string;
	postgresPassword: string;

	constructor() {
		this.nodeEnv = process.env.NODE_ENV;
		this.baseUrl = process.env.BASE_URL;
		this.azureClientId = process.env.AZURE_CLIENT_ID;
		this.azureSecret = process.env.AZURE_SECRET;
		this.azureTenantId = process.env.AZURE_TENANT_ID;
		this.onedriveMainFolderId = process.env.ONEDRIVE_PHOTOS_FOLDER;
		this.onedriveMemoriesFolderId = process.env.ONEDRIVE_MEMORIES_FOLDER;
		this.postgresHostname = process.env.POSTGRES_HOSTNAME;
		this.postgresPort = process.env.POSTGRES_PORT;
		this.postgresUsername = process.env.POSTGRES_USERNAME;
		this.postgresPassword = process.env.POSTGRES_PASSWORD;
	}
}
