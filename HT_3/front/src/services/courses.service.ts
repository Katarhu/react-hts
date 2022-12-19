import axios from '../utils/axios';

import {ICourse, IGetCoursesSuccess} from '../models/course';

const sleep = (ms: number) => new Promise(res => setTimeout(res, ms));

export const getCourses = async () => {
    try {
        const {data} = await axios.get<IGetCoursesSuccess>('/courses/all');

        await sleep(1000);

        return data.result;

    } catch (error: any) {
        throw error?.response?.data?.result ?? "Could not get courses";
    }
}

export const addCourse = async (course: ICourse) => {
    try {
        return course;
    } catch (error) {
        return error;
    }
}

export const deleteCourse = async (id: string) => {
    try {
        return id;
    } catch(error: any) {
        throw error;
    }
}
