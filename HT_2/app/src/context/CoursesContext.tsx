import {createContext, ReactNode, useContext, useState} from 'react';
import {ICourse} from '../models/course';

interface CoursesProviderProps {
    children: ReactNode;
}

interface ICoursesContext {
    courses: ICourse[];
    handleGetCourses: () => void;
    handleGetFilteredCourses: () => void;
    handleGetCourse: () => void;
    handleCreateCourse: () => void;
    handleDeleteCourse: () => void;
    handleEditCourse: () => void;
}

const CoursesContext = createContext({} as ICoursesContext);

export function useCourses() {
    return useContext(CoursesContext);
}

export default function CoursesProvider({ children }: CoursesProviderProps) {
    const [courses, setCourses] = useState<ICourse[]>([]);

    const handleGetCourses = () => {}

    const handleGetFilteredCourses = () => {}

    const handleCreateCourse = () => {}

    const handleGetCourse = () => {}

    const handleEditCourse = () => {}

    const handleDeleteCourse = () => {}

    return (
        <CoursesContext.Provider value={{
            courses,
            handleGetCourses,
            handleGetFilteredCourses,
            handleGetCourse,
            handleCreateCourse,
            handleEditCourse,
            handleDeleteCourse
        }}>
            {children}
        </CoursesContext.Provider>
    )
}