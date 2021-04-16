module.exports = {
    getRequests: async (req, res) => {
        const db = req.app.get('db');

        const questions = await db.RequestInfo.get_requests()

        res.status(200).send(questions)
    },

    addRequest: async (req, res) => {
        const db = req.app.get('db');
        const { first, last, phone, question, date } = req.body
        console.log(req.body)

        const questions = await db.RequestInfo.add_request(first, last, phone, question, date)

        res.status(200).send(questions)
    },

    deleteRequest: async (req, res) => {
        const db = req.app.get('db');
        const { question_id } = req.params

        const questions = await db.RequestInfo.delete_request(question_id)

        res.status(200).send(questions)
    }

}