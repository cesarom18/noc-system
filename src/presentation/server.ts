import { CronService } from "../presentation/cron/cron.service";

export class Server {
    static start() {
        console.log("[INFO-SV]: Server Started")
        CronService.createJob("*/5 * * * * *",
            () => {
                console.log("Every 5 Seconds");
            }
        );
    }
}