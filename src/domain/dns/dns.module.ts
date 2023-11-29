import { Module } from "@nestjs/common";
import { DnsService } from "./dns.service";
import { UtilsModule } from "../../utils/utils.module";

@Module({
	imports: [UtilsModule],
	exports: [DnsService],
	providers: [DnsService]
})
export class DnsModule {}
