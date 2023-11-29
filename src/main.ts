import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { json, urlencoded } from "express";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { INestApplication, ValidationPipe } from "@nestjs/common";
import * as fs from "fs";
import { DnsService } from "./domain/dns/dns.service";

async function bootstrap() {
	const version = process.env.npm_package_version;

	let app: INestApplication;
	if (fs.existsSync(process.env.HTTPS_PRIVATE_KEY)) {
		const httpsOptions = {
			key: fs.readFileSync(process.env.HTTPS_PRIVATE_KEY),
			cert: fs.readFileSync(process.env.HTTPS_CERTIFICATE)
		};
		app = await NestFactory.create(AppModule, {
			httpsOptions
		});
	} else {
		app = await NestFactory.create(AppModule);
	}
	app.use(json({ limit: "50mb" }));
	app.use(urlencoded({ extended: true, limit: "50mb" }));
	// app.useGlobalFilters()
	app.enableCors();
	app.useGlobalPipes(new ValidationPipe());
	app.setGlobalPrefix(`api`);

	const config = new DocumentBuilder()
		.setTitle("joshbl.dev API")
		.setDescription("joshbl.dev Documentation")
		.setVersion(version)
		.addBearerAuth(
			{ type: "http", scheme: "bearer", bearerFormat: "JWT" },
			"access-token"
		)
		.build();
	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup("api", app, document, {
		customSiteTitle: "joshbl.dev API",
		swaggerOptions: {
			tagsSorter: "alpha",
			operationsSorter: "method"
		}
	});

	const port = Number(process.env.PORT) || 3001;

	await app.listen(port);

	const address = app.getHttpServer().address().address;

	console.log(
		`Listening at http://${
			address === "::" ? "localhost" : address
		}:${port}/api`
	);

	if (process.env.NODE_ENV === "ngrok") {
		const dnsService = app.get(DnsService);

		await dnsService.startNgrok(port);
	}
}

bootstrap();
