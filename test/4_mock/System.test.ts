import System from "../../src/System";
import AuthorizerMock from "./AuthorizerMock";


test("Deve testar o sistema com mock", async function () {
	const authorizerMock = new AuthorizerMock();
	const system = new System(authorizerMock);
	await system.login("rodrigobranas", "123456");
	authorizerMock.verify();
});
