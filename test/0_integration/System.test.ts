import RealAuthorizer from "../../src/RealAuthorizer";
import System from "../../src/System";

test("Deve testar o sistema com a senha certa", async function () {
	const realAuthorizer = new RealAuthorizer();
	const system = new System(realAuthorizer);
	const loggedIn = await system.login("rodrigobranas", "123456");
	expect(loggedIn).toBe(true);
});

test("Deve testar o sistema com a senha errada", async function () {
	const realAuthorizer = new RealAuthorizer();
	const system = new System(realAuthorizer);
	const loggedIn = await system.login("rodrigobranas", "1234567");
	expect(loggedIn).toBe(false);
});
