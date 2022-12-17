import {RootState} from '../index';

export const selectCourses = (state: RootState) => state.courses.courses;
export const selectCourseById = (id?: string) =>
    (state: RootState) => state.courses.courses.find((course) => course.id === id);

export const selectCoursesError = (state: RootState) => state.courses.error;
export const selectCoursesLoading = (state: RootState) => state.courses.loading;