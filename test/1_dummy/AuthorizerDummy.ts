import Authorizer from "../../src/Authorizer";

export default class AuthorizerDummy implements Authorizer {

	async authorize(username: string, password: string): Promise<any> {
		return null;
	}
}