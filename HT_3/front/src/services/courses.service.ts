import axios from '../utils/axios';
import {ICourse, IGetCoursesSuccess} from '../models/course';

export const getCourses = async () => {
    try {
        const {data} = await axios.get<IGetCoursesSuccess>('/courses/all');

        return data.result;

    } catch (error: any) {
        throw error?.response?.data?.result ?? "Could not get courses";
    }
}
