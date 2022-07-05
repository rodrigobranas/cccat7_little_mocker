import Authorizer from "../../src/Authorizer";

export default class AuthorizerStub implements Authorizer {

	async authorize(username: string, password: string): Promise<any> {
		return true;
	}
}