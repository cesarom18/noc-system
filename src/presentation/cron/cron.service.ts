import { CronJob } from "cron";

// Create A Service To Manage Jobs/Task (Created With Cron)
// That Will Be Monitored In The App
export class CronService {
    // Function To Create And Start A New Job To Be Monitored In The System
    static createJob(cronTime: string | Date, onTick: () => void): CronJob {
        const job = new CronJob(cronTime, onTick);
        job.start();
        return job;
    }
}