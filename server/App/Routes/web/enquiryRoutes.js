let express = require('express');
const { enquiryInsert, EnquiryList, enquiryDelete } = require('../../Controller/web/enquirycontroller');

let enquiryRouter = express.Router();

enquiryRouter.post('/insert', enquiryInsert);
enquiryRouter.get('/view', EnquiryList); 
enquiryRouter.delete('/delete/:id', enquiryDelete);



module.exports = enquiryRouter;
