const enquiryModel = require("../../Models/enquiry.model");

let enquiryInsert = (req, res) => {
  let { name, email, phone, message } = req.body;

  // Debug log
  console.log("Received data:", req.body);

  let enquiry = new enquiryModel({
    name,
    email,
    phone,
    message
  });

  enquiry.save()
    .then(() => {
      res.send({ status: 1, message: "Enquiry saved successfully" });
    })
    .catch((err) => {
      console.error("Mongoose save error:", err); // ✅ Log error
      res.send({ status: 0, message: "Error while saving enquiry", error: err.message });
    });
};
let EnquiryList=async(req,res)=>{
    let enquiry=await enquiryModel.find();
    res.send({status:1, EnquiryList:enquiry});


}

let enquiryDelete = async (req,res)=>{
  let enId=req.params.id;
  let enquiry = await enquiryModel.deleteOne({_id:enId});
  res.send({status:1, message:"Enquiry successfully",enquiry});
}

module.exports = { enquiryInsert , EnquiryList,enquiryDelete}; 
