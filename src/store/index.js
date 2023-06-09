import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {catalogReducer} from "../page/Catalog/CatelogReducer/catalogReducer";
import {certificateReducer} from "../components/Certificate/CertificateReducer/certificateReducer";
import {FeedbackReducer} from "./FeedbackReducer/feedbackReducer";
import {ResumeReducer} from "../page/Work/ResumeReducer/resumeReducer";
import {ReviewReducer} from "../components/Reviews/ReviewReducer/reviewReducer";

const rootReducer = combineReducers({
  catalogReducer,
  certificateReducer,
  FeedbackReducer,
  ResumeReducer,
  ReviewReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))