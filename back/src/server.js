require("dotenv").config();
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('../swagger_output.json')
const errorHandler  = require('./middlewares/errorHandler');
const routes = require('./routes')



const app = express();

app.use(express.urlencoded({extended:true}));
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(errorHandler);

app.use("/api", routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});