const jwt = require("jsonwebtoken");

const genJWT = (email) => {

    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET no está definido en el .env");
    }

    const payload = { email };

    return jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
    );
};

module.exports = genJWT;