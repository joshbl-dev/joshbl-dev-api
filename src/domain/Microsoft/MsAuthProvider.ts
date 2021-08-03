import { AuthenticationProvider } from "@microsoft/microsoft-graph-client";
import {
	AuthenticationResult,
	ConfidentialClientApplication
} from "@azure/msal-node";
import { cachePlugin } from "./MsCache";
import { Config } from "../../utils/Config";
import { azureLoginUrl, azureRegion, azureScope } from "../../utils/constants";

// Todo: Implement Refresh Token
export class AuthProvider implements AuthenticationProvider {
	private creatingToken: boolean;
	private authResults: AuthenticationResult;
	private accessToken: string;
	private config: Config;
	private cca: ConfidentialClientApplication;

	constructor(config: Config) {
		const config_azure = {
			auth: {
				clientId: config.azureClientId,
				authority: azureLoginUrl + config.azureTenantId,
				clientSecret: config.azureSecret
			},
			cache: { cachePlugin, cacheLocation: "localStorage" }
		};
		this.cca = new ConfidentialClientApplication(config_azure);
		this.config = config;
		this.getAccessToken();
	}

	async getAccessToken(): Promise<string> {
		if (!this.authResults || this.authResults.expiresOn < new Date()) {
			await this.acquireTokenSilently(true);
		} else {
			this.acquireTokenSilently();
		}
		return this.accessToken;
	}

	async acquireTokenSilently(newToken?: boolean) {
		if (!this.creatingToken) {
			this.creatingToken = true;
			if (newToken) {
				console.log("Acquiring New MS Token...");
			}
			this.authResults = await this.cca.acquireTokenByClientCredential({
				scopes: [azureScope],
				azureRegion: azureRegion,
				skipCache: false
			});
			if (newToken) {
				console.log("Generated New MS Token...");
			}
			this.accessToken = this.authResults.accessToken;
			this.creatingToken = false;
		} else {
			await this.wait();
		}
	}

	async wait(): Promise<void> {
		return new Promise<void>((resolve) => {
			setInterval(() => {
				if (!this.creatingToken) {
					resolve();
				}
			}, 1000);
		});
	}
}
