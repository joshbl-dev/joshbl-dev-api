import { Module } from "@nestjs/common";
import { HooksService } from "./hooks.service";
import { AuthModule } from "../auth/auth.module";

@Module({
	imports: [AuthModule],
	exports: [HooksService],
	providers: [HooksService]
})
export class HooksModule {
}
