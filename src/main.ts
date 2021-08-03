import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { json, urlencoded } from "express";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
	const version = process.env.npm_package_version;
	const options = {
		origin: process.env.BASE_URL,
		methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
		preflightContinue: false,
		optionsSuccessStatus: 204,
		credentials: true
	};
	const app = await NestFactory.create(AppModule);
	app.enableCors(options);
	app.use(json({ limit: "50mb" }));
	app.use(urlencoded({ extended: true, limit: "50mb" }));
	// app.useGlobalFilters()
	app.setGlobalPrefix(`api/v${version}`);

	const config = new DocumentBuilder()
		.setTitle("joshbl.dev API")
		.setDescription("joshbl.dev Documentation")
		.setVersion("1.0")
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

	await app.listen(3001);
}

bootstrap();
