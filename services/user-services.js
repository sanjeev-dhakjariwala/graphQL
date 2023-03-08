const { UserList } = require("../FakeData.js");

const userService = () => {
    return UserList;
};

module.exports = { userService };
