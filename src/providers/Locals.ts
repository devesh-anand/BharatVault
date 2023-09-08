import * as path from "path";
import * as dotenv from "dotenv";

class Locals {
    /**
     * Makes env configs available for your app
     * throughout the app's runtime
     */
    public static config() {
        dotenv.config({ path: path.join(__dirname, "../../.env") });

        const port = process.env.PORT;
        const databaseUrl = process.env.DATABASE_URL;
        if (!port) {
            console.error("Insufficient env params");
            process.exit(1);
        }
        return {
            databaseUrl,
            port,
        };
    }
}

export default Locals;
