const express = require('express');
const config = require('config');
const logger = require('./config/logger');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const mongoose = require('mongoose');
const cors = require('./config/cors');
mongoose.Promise = global.Promise;

// Authenctication.
const authenticateJwt = require('./auth/authenticate');
const adminOnly = require('./auth/adminOnly');
const authHandler = require('./auth/authHandler');

const swaggerDocument = YAML.load('./docs/swager.yaml');

const { host } = config.get('database');
mongoose
    .connect(`mongodb://${host}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        // Data seeds
        require('./seed/seeder');
        logger.info('MongoDB connection has been established successfully.')
    })
    .catch(err => {
        logger.error(err);
        process.exit();
    });

app.use(cors());

app.use(morgan('combined', { stream: logger.stream }));
app.use(express.static('public'));
app.use(bodyParser.json());

// Router.
app.post('/login', authHandler.login);
app.post('/refresh', authHandler.refresh);
app.post('/logout', authHandler.logout);

app.use('/subscribers', authenticateJwt, adminOnly, require('./controllers/subscriber/subscriber.routes'));
app.use('/certificate', authenticateJwt, adminOnly, require('./controllers/certificate/certificate.routes'));
app.use('/colleague', authenticateJwt, adminOnly, require('./controllers/colleague/colleague.routes'));
app.use('/archive', authenticateJwt, adminOnly, require('./controllers/archive/archive.routes'));
app.use('/users', authenticateJwt, adminOnly, require('./controllers/user/user.routes'));
app.use('/person', authenticateJwt, require('./controllers/person/person.routes'));
app.use('/post', authenticateJwt, adminOnly, require('./controllers/post/post.routes'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((err, req, res, next) => {
    res.status(err.statusCode);
    res.json({
        hasError: true,
        message: err.message
    });
});

module.exports = app;
