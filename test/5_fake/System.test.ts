import System from "../../src/System";
import AuthorizerFake from "./AuthorizerFake";

test("Deve testar o sistema com fake usuário válido", async function () {
	const authorizerFake = new AuthorizerFake();
	const system = new System(authorizerFake);
	await system.login("rodrigobranas", "123456");
	expect(system.loginCount()).toBe(1);
});

test("Deve testar o sistema com fake usuário inválido", async function () {
	const authorizerFake = new AuthorizerFake();
	const system = new System(authorizerFake);
	await system.login("joaosilva", "123456");
	expect(system.loginCount()).toBe(0);
});
