// Import the required modules
const express = require("express")
const router = express.Router()
// Import the Controllers
// Course Controllers Import
const {
  createCourse,
  getAllCourses,
  getCourseDetails,
  getFullCourseDetails,
  editCourse,
  getInstructorCourses,
  deleteCourse,
} = require("../controllers/Course")
// Categories Controllers Import

const {
  showAllCategories,
  createCategory,
  categoryPageDetails,
} = require("../controllers/Category")

const {
  createSection,
  updateSection,
  deleteSection,
} = require("../controllers/Section")
const {
  createSubSection,
  updateSubSection,
  deleteSubSection,
} = require("../controllers/Subsection")
/*
const {
  createRating,
  getAverageRating,
  getAllRating,
} = require("../controllers/RatingAndReview")
const {
  updateCourseProgress
} = require("../controllers/courseProgress");
*/
const { auth, isInstructor, isStudent, isAdmin } = require("../middelwares/auth")
router.post("/createCourse", auth, isInstructor, createCourse)
router.post("/addSection", auth, isInstructor, createSection)
router.post("/getCourseDetails", getCourseDetails)
router.post("/addSubSection", auth, isInstructor, createSubSection)
router.get("/showAllCategories", showAllCategories)

/*
router.post("/updateSection", auth, isInstructor, updateSection)
router.post("/deleteSection", auth, isInstructor, deleteSection)
router.post("/updateSubSection", auth, isInstructor, updateSubSection)
router.post("/deleteSubSection", auth, isInstructor, deleteSubSection)
router.get("/getAllCourses", getAllCourses)
router.post("/getFullCourseDetails", auth, getFullCourseDetails)
router.post("/editCourse", auth, isInstructor, editCourse)
router.get("/getInstructorCourses", auth, isInstructor, getInstructorCourses)
router.delete("/deleteCourse", deleteCourse)
router.post("/updateCourseProgress", auth, isStudent, updateCourseProgress);
router.post("/createCategory", auth, isAdmin, createCategory)

router.post("/getCategoryPageDetails", categoryPageDetails)
router.post("/createRating", auth, isStudent, createRating)
router.get("/getAverageRating", getAverageRating)
router.get("/getReviews", getAllRating)
*/
module.exports = router