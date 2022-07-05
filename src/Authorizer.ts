export default interface Authorizer {
	authorize (username: string, password: string): Promise<any>;
}
