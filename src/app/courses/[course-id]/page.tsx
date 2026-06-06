import { notFound } from "next/navigation";
import CoursePageClient from "./CoursePageClient";

// All 6 course slugs — drives static generation
export function generateStaticParams() {
  return [
    { "course-id": "english-for-companies" },
    { "course-id": "esp-courses" },
    { "course-id": "learn-arabic" },
    { "course-id": "young-learners" },
    { "course-id": "online-classes" },
    { "course-id": "placement-test" },
  ];
}

const validCourses = new Set([
  "english-for-companies",
  "esp-courses",
  "learn-arabic",
  "young-learners",
  "online-classes",
  "placement-test",
]);

export default async function CoursePage(props: PageProps<"/courses/[course-id]">) {
  const params = await props.params;
  const courseId = params["course-id"];

  if (!validCourses.has(courseId)) return notFound();

  return <CoursePageClient courseId={courseId} />;
}
