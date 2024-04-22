export type EventType = {
    _id: string,
    imgSrc: {
        alt: string,
        image: string
    },
    category: string,
    location: string,
    time: string,
    title: string,
    longTitle: string,
    slug: string,
    desc: string,
    organizer: string,
    price: number,
    color: string,
}

export type CourseType = {
    _id: string,
    imgSrc: {
        alt: string,
        image: string
    },
    category: string,
    price: number,
    color: string,
    date: string,
    title: string,
    slug: string,
    description: string,
    instructor: string,
    lessons: number,
    rating: number,
    students: number,
    review: number,
    instructorImg: {
        alt: string,
        image: string
    }
}
export type AlumniType = {
    _id: string,
    name: String,
    address: String,
    phoneNumber: Number,
    presentAddress: String,
    designation: String,
    batch: String,
    image: String,
    message: String,
    __v: number,
}
export type BlogType = {
    _id: string,
    imgSrc: {
        alt: string,
        image: string
    },
    category: string,
    color: string,
    date: string,
    title: string,
    longTitle: string,
    slug: string,
    desc: string,
    author: string,
}
export type StaffType = {
    _id: string,
    staffImage: string,
    staffName: string,
    staffDescription: string,
    __v: number,
}
export type AchievementType = {
    _id: string,
    title: string,
    image: string,
    __v: number,
}
export type StudentType = {
    _id: string,
    studentImage: string,
    studentName: string,
    studentAward: string,
    studentClass: string,
    __v: number,
}
export type ContactType = {
    name: string,
    email: string,
    message: string,
}
export type JoinType = {
    _id: string,
    fullName: string,
    phoneNumber: Number,
    email: string,
    address: string,
    position: string,
    qualification: string,
    workExperience?: string,
    companyName?: string,
    jobTitle?: string,
    resume: string,
    __v: number,
}

export type ActivityType = {
    _id: string,
    iClassName: string,
    title: string,
    color: string,
}

export type FaqType = {
    _id: string,
    color: string,
    question: string,
    answer: string,
}

export type ServiceType = {
    _id: string,
    iClassName: string,
    title: string,
    desc: string,
    color: string,
}

export type TestimonialType = {
    _id: string,
    imgSrc: {
        alt: string,
        image: string
    },
    desc: string,
    name: string,
    designation: string,
}

export type WorkType = {
    _id: string,
    imgSrc: {
        alt: string,
        image: string
    },
    task: string,
    color: string,
    class: string,
    desc: string,
}

export type CategoryType = {
    _id: string,
    icon: string,
    desc: string,
    title: string,
    color: string,
}

export type AchievementImgType = {
    _id: string,
    _img: string,
}