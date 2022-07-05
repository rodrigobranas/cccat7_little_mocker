import Authorizer from "../../src/Authorizer";

export default class AuthorizerFake implements Authorizer {

	async authorize(username: string, password: string): Promise<any> {
		if (username === "rodrigobranas" && password === "123456") {
			return true;
		}
		return false;
	}

}