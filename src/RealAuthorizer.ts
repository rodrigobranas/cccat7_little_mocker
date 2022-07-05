import Authorizer from "./Authorizer";
import fs from "fs/promises";

export default class RealAuthorizer implements Authorizer {

	async authorize(username: string, password: string) {
		const usersData = (await fs.readFile("./users.csv", "utf8")).split("\n");
		for (const userData of usersData) {
			const [usernameData, passwordData] = userData.split(";");
			if (username === usernameData && password === passwordData) return true;
		}
		return false;
	}
}
