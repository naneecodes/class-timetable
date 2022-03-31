import { Day } from "./Day";
function Week(props) {
  const { classData } = props;
  const {
    name,
    grades,
    homeroomTeachers,
    nativeTeachers,
    students,
    weeklySessions: { timeslot, subjects, teacher, room, days }
  } = classData;
  return (
    <div class="class-container">
      <div class="header">{classData.name + "(G" + classData.grades + ")"}</div>
      <Day sessions={classData.weeklySessions}></Day>
    </div>
  );
}
