const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db');
        const { username, password } = req.body;

        const [ existingUser ] = await db.Auth.get_user_by_username(username);
        if (existingUser) {
            return res.status(409).send('Username already exists')
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const [ newUser ] = await db.Auth.register_user(username, hash);
        delete newUser.password;

        req.session.user = newUser;

        res.status(200).send(req.session.user);
    },

    login: async (req, res) => {
        const db = req.app.get('db');
        const { username, password } = req.body;

        const [ existingUser ] = await db.Auth.get_user_by_username(username);
        if (!existingUser) {
            return res.status(404).send('Username does not exist')
        }

        const isAuthenticated = bcrypt.compareSync(password, existingUser.password);
        if (!isAuthenticated) {
            return res.status(403).send('Incorrect password')
        }
        delete existingUser.password;

        req.session.user = existingUser;

        res.status(200).send(req.session.user)
    },

    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200)
    },

    getSession: (req, res) => {
        if (req.session.user) {
            return res.status(200).send(req.session.user)
        } else {
            return res.sendStatus(403)
        }
    }
}