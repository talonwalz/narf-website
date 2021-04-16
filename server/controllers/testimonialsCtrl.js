module.exports = {
    getTestimonials: async (req, res) => {
        const db = req.app.get('db');
        const testimonials = await db.Testimonials.get_testimonials()

        res.status(200).send(testimonials)
    },
    addTestimonial: async (req, res) => {
        const db = req.app.get('db');
        const { post } = req.body;
        const { employee_id } = req.session.user;

        const testimonials = await db.Testimonials.add_testimonial(employee_id, post)

        res.status(200).send(testimonials)
    },
    editTestimonial: async (req, res) => {
        const db = req.app.get('db');
        const { updatePost } = req.body;
        const { post_id } = req.params;

        const testimonials = await db.Testimonials.edit_testimonial(post_id, updatePost)
        
        res.status(200).send(testimonials)
    },
    deleteTestimonial: async (req, res) => {
        const db = req.app.get('db');
        const { post_id } = req.params;

        const testimonials = await db.Testimonials.delete_testimonial(post_id)

        res.status(200).send(testimonials)
    },
}