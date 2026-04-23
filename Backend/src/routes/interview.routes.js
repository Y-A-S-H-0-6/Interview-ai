const express = require("express");
const authMiddleware = require("../middleware/auth.middleware")
const interviewController = require("../controllers/interview.controller")
const upload = require("../middleware/file.middleware")

const interviewRouter = express.Router();

/**
 * @route POST /api/interview
 * @description generate new interview report on the basis of user self description, resume and job description
 * @access Private
 */
interviewRouter.post("/", authMiddleware.Usermodel,
  upload.single("resume"),
  interviewController.generateInterviewReportController)

  /**
   * @route GET /api/interview/report/:interviewId
   * @description get interview report by interviewId
   * @access Private
   */
interviewRouter.get("/report/:interviewId", authMiddleware.Usermodel, interviewController.getInterviewReportByIdController)
   
/**
 * @route GET /api/interview/
 * @description get all interview reports of logged in user
 * @access Private
 */
interviewRouter.get("/", authMiddleware.Usermodel, interviewController.getAllInterviewReportsController)  
 
/**
 * @route GET /api/interview/resume/pdf
 * @description generate resume pdf on the basis of user self description, resume content and job description.
 * @access private
 */
interviewRouter.post("/resume/pdf/:interviewReportId", authMiddleware.Usermodel, interviewController.generateResumePdfController)




module.exports = interviewRouter