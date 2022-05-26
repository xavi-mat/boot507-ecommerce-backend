const request = require("supertest");
const app = require("../main");
const { User, Order } = require("../models/index.js");

console.warn(User.destroy);
describe("testing/users", () => {

    // Reset data
    afterAll(() => {
        return User.destroy({ where: {}, truncate: true });
    });

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

    // Tests
    test("Create a user", async () => {

        // let usersCount = await User.count();
        // expect(usersCount).toBe(0);
        const res = await request(app)
            .post('/users')
            .send(userTest)
            .expect(201);
        expect(res.body.user.id).toBeDefined();
        expect(res.body.user.createdAt).toBeDefined();
        expect(res.body.user.updatedAt).toBeDefined();
        // usersCount = await User.count();
        // expect(usersCount).toBe(1);
        const sendUser = {
            ...userTest,
            password: res.body.user.password,
            id: res.body.user.id,
            birthDate: res.body.user.birthDate,
            createdAt: res.body.user.createdAt,
            updatedAt: res.body.user.updatedAt,
            confirmed: false,
            role: "user",
            active: true
        };
        const newUser = res.body.user;
        expect(newUser).toEqual(sendUser);
    });

    test("Try to create a user with the same email", async () => {
        const res = await request(app)
            .post('/users')
            .send(userTest)
            .expect(400);
    });

    test("Try to create a user without password", async () => {
        const res = await request(app)
            .post('/users')
            .send({username: "some username"})
            .expect(400);
        expect(res.body.message).toEqual("Password required");
    });

    test("Confirm a user", async () => {

    });

});