import { combineReducers } from "redux";
import errors from "./errors";
import message from "./message";
import auth from "./auth";
import countries from "./country_reducers";
import school_list from "./school_reducers";
import subscription from "./subscription_reducers";
import bundles from "./BundleReducer";
import subjectsList from "./SubjectReducers";
import QuestionPaper from "./QuestionPaperReducer";
import ExamList from "./ExamReducer";

export default combineReducers({
  errors,
  message,
  auth,
  countries,
  school_list,
  subscription,
  bundles,
  subjectsList,
  QuestionPaper,
  ExamList,
});