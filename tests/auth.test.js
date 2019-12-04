const fs = require("fs");
const path = require("path");
const EasyGraphQLTester = require("easygraphql-tester");
const schemaCode = fs.readFileSync(path.join(__dirname, "..", "schema.gql"), "utf8");

// describe('test for the auth mutations', () => {
//     it('register new user', () => {});
//     it('login', () => {});
//     it('get user details', () => {});
// });

describe("Test my schema, Query", () => {
    let tester;
    beforeAll(() => {
        tester = new EasyGraphQLTester(schemaCode);
    });
    describe("Queries & Mutations", () => {
        test("Should be a valid mutation", () => {
            const mutation = `
                mutation CreateUsers {
                    createUsers {
                    email
                    }
                }
            `;
            //Error: fullName argument is missing on createUsers
            tester.test(true, mutation, [{
                email: "demo@demo.com",
                username: "demo"
            }]);
        });
    });
});