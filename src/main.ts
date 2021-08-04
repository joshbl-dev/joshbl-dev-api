import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { json, urlencoded } from "express";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
	const version = process.env.npm_package_version;
	const app = await NestFactory.create(AppModule);
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

	await app.listen(process.env.PORT);
}

bootstrap();
