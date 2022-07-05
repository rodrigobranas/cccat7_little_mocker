import RealAuthorizer from "../../src/RealAuthorizer";
import System from "../../src/System";
import AuthorizerStub from "../2_stub/AuthorizerStub";
import AuthorizerSpy from "./AuthorizerSpy";


test("Deve testar o sistema com spy", async function () {
	const realAuthorizer = new RealAuthorizer();
	const authorizerSpy = new AuthorizerSpy(realAuthorizer);
	const system = new System(authorizerSpy);
	await system.login("rodrigobranas", "123456");
	expect(authorizerSpy.once()).toBe(true);
	expect(authorizerSpy.withParams("rodrigobranas", "123456")).toBe(true);
});

test("Deve testar o sistema com spy e stub", async function () {
	const authorizerStub = new AuthorizerStub();
	const authorizerSpy = new AuthorizerSpy(authorizerStub);
	const system = new System(authorizerSpy);
	await system.login("rodrigobranas", "123456");
	expect(authorizerSpy.once()).toBe(true);
	expect(authorizerSpy.withParams("rodrigobranas", "123456")).toBe(true);
});
