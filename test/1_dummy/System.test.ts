import System from "../../src/System";
import AuthorizerDummy from "./AuthorizerDummy";

test("Deve testar o sistema se a quantidade de usuários é vazia", async function () {
	const authorizer = new AuthorizerDummy();
	const system = new System(authorizer);
	expect(system.loginCount()).toBe(0);
});
