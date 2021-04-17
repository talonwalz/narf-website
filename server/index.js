require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive');

const session = require('express-session');

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;
const authCtrl = require('./controllers/authCtrl');
const feedbackCtrl = require('./controllers/feedbackCtrl');
const testimonialsCtrl = require('./controllers/testimonialsCtrl');
const requestCtrl = require('./controllers/requestInfoCtrl')
const emailCtrl = require('./controllers/nodemailerCtrl')

app.use(express.json());

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}))

// Auth Endpoints
app.post('/auth/register', authCtrl.register); //endpoint checked :)
app.post('/auth/login', authCtrl.login); //endpoint checked :)
app.delete('/auth/logout', authCtrl.logout); //endpoint checked :)
app.get('/auth/session', authCtrl.getSession); //endpoint checked :)

// Feedback Endpoints
app.get('/api/feedback', feedbackCtrl.getFeedback); //endpoint checked :)
app.post('/api/feedback', feedbackCtrl.addFeedback); //endpoint checked :)
app.delete('/api/feedback/:feedback_id', feedbackCtrl.deleteFeedback); //endpoint checked :)

// Testimonials Endpoints
app.get('/api/testimonials', testimonialsCtrl.getTestimonials); //endpoint checked :)
app.post('/api/testimonials', testimonialsCtrl.addTestimonial); //endpoint checked :)
app.put('/api/testimonials/:post_id', testimonialsCtrl.editTestimonial); //endpoint checked :)
app.delete('/api/testimonials/:post_id', testimonialsCtrl.deleteTestimonial); //endpoint checked :)

// RequestInfo Endpoints
app.post('/api/request-info', requestCtrl.addRequest); //endpoint checked :)
app.get('/api/request-info', requestCtrl.getRequests); //endpoint checked :)
app.delete('/api/request-info/:question_id', requestCtrl.deleteRequest); //endpoint checked :)

// NodeMailer Endpoint
app.post('/api/email-from-us',emailCtrl.emailFromUs); //endpoint checked :)
app.post('/api/email-us',emailCtrl.emailUs); //endpoint checked :)


massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then((dbInstance) => {
    app.set('db', dbInstance)
    app.listen(SERVER_PORT, () => console.log(`Server and db are running on ${SERVER_PORT}`))
})
.catch(err => console.log(err));

