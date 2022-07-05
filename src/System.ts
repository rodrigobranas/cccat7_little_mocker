import Authorizer from "./Authorizer";

export default class System {
	loginCounter: number;
	loggedUsers: string[] = [];

	constructor (readonly authorizer: Authorizer) {
		this.loginCounter = 0;
	}

	async login (username: string, password: string) {
		const loggedIn = await this.authorizer.authorize(username, password);
		if (loggedIn) {
			this.loginCounter++;
			this.loggedUsers.push(username);
		}
		return loggedIn;
	}

	loginCount () {
		return this.loginCounter;
	}

	isUserLogged (username: string) {
		return this.loggedUsers.some(loggedUser => loggedUser === username);
	}
}
