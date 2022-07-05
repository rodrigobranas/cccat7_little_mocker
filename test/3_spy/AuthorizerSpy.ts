import Authorizer from "../../src/Authorizer";

export default class AuthorizerSpy implements Authorizer {
	numberOfCalls = 0;
	calls: { params: any[] }[] = [];

	constructor (readonly authorizer: Authorizer) {
	}

	async authorize(username: string, password: string): Promise<any> {
		this.numberOfCalls++;
		const params = [];
		params.push(username);
		params.push(password);
		this.calls.push({ params });
		return this.authorizer.authorize(username, password);
	}

	once () {
		return this.numberOfCalls === 1;
	}

	twice () {
		return this.numberOfCalls === 2;
	}

	withParams (...params: any) {
		for (const call of this.calls) {
			let hasParams = true;
			for (const param of params) {
				if (!call.params.includes(param)) {
					hasParams = false;
					continue;
				}
			}
			if (hasParams) return true; 
		}
		return false;
	}
}