export default function Day(props) {
  const { sessions } = props;
  const { period, subjects, teacher, room, days } = sessions;
  return (
    <div class="cell box-1">
      <p>Subject: {sessions.subjects}</p>
      <p>Teacher: {sessions.teacher}</p>
      <p>Room: {sessions.room}</p>
    </div>
  );
}
