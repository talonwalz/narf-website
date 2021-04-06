module.exports = {
    getFeedback: async (req, res) => {
        const db = await req.app.get('db');
        const feedback = await db.Feedback.get_all_feedback()

        res.status(200).send(feedback)
    },

    addFeedback: async (req, res) => {
        const db = await req.app.get('db');
        const { first_name, last_name, feedback } = req.body

        await db.Feedback.add_feedback(first_name, last_name, feedback)
        res.sendStatus(200)
    },

    deleteFeedback: async (req, res) => {
        const db = await req.app.get('db');
        const { feedback_id } = req.params;

        await db.Feedback.delete_feedback(feedback_id);

        res.sendStatus(200)
    }
}