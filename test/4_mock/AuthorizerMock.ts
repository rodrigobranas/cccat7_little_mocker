import Authorizer from "../../src/Authorizer";

export default class AuthorizerMock implements Authorizer {
	numberOfCalls = 0;

	async authorize(username: string, password: string): Promise<any> {
		this.numberOfCalls++;
		return true;
	}

	verify () {
		if (this.numberOfCalls !== 1) {
			throw new Error("Mock Failed");
		}
	}
}