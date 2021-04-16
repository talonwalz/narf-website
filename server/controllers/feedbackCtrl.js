module.exports = {
    getFeedback: async (req, res) => {
        const db = await req.app.get('db');
        const feedback = await db.Feedback.get_all_feedback()

        res.status(200).send(feedback)
    },

    addFeedback: async (req, res) => {
        const db = await req.app.get('db');
        const { first, last, feedback } = req.body
        console.log(req.body)

        const review = await db.Feedback.add_feedback(first, last, feedback)
        res.status(200).send(review)
    },

    deleteFeedback: async (req, res) => {
        const db = await req.app.get('db');
        const { feedback_id } = req.params;

        const review = await db.Feedback.delete_feedback(feedback_id);

        res.status(200).send(review)
    }
}