import { courses } from "./courses";
import { studyGroups } from "./studyGroups";

type Course = {
  id: number;
  studyGroupId: number;
  title: string;
  keywords: string[];
  eventType: string;
};

export type StudyGroup = {
  id: number;
  courseId: number;
  title: string;
  keywords: string[];
  eventType: string;
};

type SearchEventOptions = {
  query: string | number;
  eventType: string;
};

function searchEvents(options: SearchEventOptions) {
  const events: (Course | StudyGroup)[] =
    options.eventType === "courses" ? courses : studyGroups;
  return events.filter((event: Course | StudyGroup) => {
    if (typeof options.query === "number") {
      return options.query === event.id;
    }
    if (typeof options.query === "string") {
      return true === event.keywords.includes(options.query);
    }
  });
}

const enrolledEvents: (Course | StudyGroup)[] = [];

function enroll(event: Course | StudyGroup) {

  enrolledEvents.push(event)
  return enrolledEvents;
}

const searchResults = searchEvents({ query: 2, eventType: "art" });
console.log(searchResults);
console.log(enroll(searchResults[0]));

