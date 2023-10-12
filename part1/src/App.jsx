const Header = () => {
  const course = "Half Stack application development";
  return (
    <>
      <h1>{course}</h1>
    </>
  );
}

const Content = (props) => {
  const parts = [
    { name: "Fundamentals of React", exercise: 10 },
    { name: "Using props to pass data", exercise: 7 },
    { name: "State of Component", exercise: 14 }
  ];
  return (
    <>
      <p>{parts[0].name} {parts[0].exercise}</p>
      <p>{parts[1].name} {parts[1].exercise}</p>
      <p>{parts[2].name} {parts[2].exercise}</p>
    </>
  );
}

const Total = (props) =>{
  const totalExercises = props.parts.reduce((sum, part) => sum + part.exercise, 0);


  return (
    <>
    <p> Number of exercises {totalExercises}</p>
    </>
  )
}

const App = () => {
  const course = {Header}
  const parts = [
    { name: "Fundamentals of React", exercise: 10 },
    { name: "Using props to pass data", exercise: 7 },
    { name: "State of Component", exercise: 14 }
  ];
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts}/>
    </div>
  );
}

export default App;
