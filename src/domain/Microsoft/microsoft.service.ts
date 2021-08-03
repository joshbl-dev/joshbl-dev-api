import { Injectable } from "@nestjs/common";
import { Client } from "@microsoft/microsoft-graph-client";
import { AuthProvider } from "./MsAuthProvider";
import { Config } from "../../utils/Config";

require("isomorphic-fetch");

@Injectable()
export class MicrosoftService {
	private client: Client;
	private readonly authProvider: AuthProvider;

	constructor(private config: Config) {
		this.authProvider = new AuthProvider(config);
		this.client = Client.initWithMiddleware({
			authProvider: this.authProvider
		});
	}

	async getPhotos() {
		await this.client.api("me/drive/root/children").get();
	}
}
