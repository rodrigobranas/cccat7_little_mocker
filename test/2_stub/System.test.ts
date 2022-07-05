import System from "../../src/System";
import AuthorizerStub from "./AuthorizerStub";


test("Deve testar o sistema se a quantidade de usuários é um", async function () {
	const authorizer = new AuthorizerStub();
	const system = new System(authorizer);
	await system.login("rodrigobranas", "123456");
	expect(system.loginCount()).toBe(1);
});
