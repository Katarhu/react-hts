import {RootState} from '../index';

export const selectCourses = (state: RootState) => state.courses.courses;
export const selectFilteredCourses = (state: RootState) => state.courses.filteredCourses;

export const selectCoursesFilter = (state: RootState) => state.courses.filter;

export const selectCourseById = (id?: string) =>
    (state: RootState) => state.courses.courses.find((course) => course.id === id);

export const selectCoursesError = (state: RootState) => state.courses.error;
export const selectCoursesLoading = (state: RootState) => state.courses.loading;