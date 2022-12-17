import {CourseAction, CourseActions, CoursesLoadingType, ICoursesInitialState} from './courses.types';


const initialState: ICoursesInitialState = {
    loading: CoursesLoadingType.NONE,
    courses: [],
    error: ''
}

export const coursesReducer = (state = initialState, action: CourseAction) => {
    switch (action.type) {
        case CourseActions.GET_COURSES:
            return {
                ...state,
                loading: CoursesLoadingType.LOADING_COURSES,
            }

        case CourseActions.GET_COURSES_SUCCESS:
            return {
                ...state,
                loading: CoursesLoadingType.NONE,
                courses: action.payload,
            }

        case CourseActions.GET_COURSES_FAILURE:
            return {
                ...state,
                loading: CoursesLoadingType.NONE,
                error: action.payload
            }

        case CourseActions.CLEAR_STATE:
            return initialState;

        default:
            return state;
    }
}