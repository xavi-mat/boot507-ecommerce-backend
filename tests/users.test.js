const request = require("supertest");
const app = require("../main");

describe("testing/users", () => {
    // Global constants
    const userTest = {
        username: "New username",
        firstName: "New First Name",
        lastName: "New Last Name",
        email: "new@email.com",
        password: "123456",
        gender: "F",
        birthDate: "2000-01-01",
        avatar: "avatarimagefilename"
    };

    test("Create a user", async () => {
        const res = await request(app)
            .post('/users')
            .send(userTest)
            .expect(201);
        const sendUser = {
            ...userTest,
            password: res.body.user.password,
            id: res.body.user.id,
            createdAt: res.body.user.createdAt,
            updatedAt: res.body.user.updatedAt,
        };
        const newUser = res.body.user;
        expect(newUser).toEqual(sendUser);
    });
});