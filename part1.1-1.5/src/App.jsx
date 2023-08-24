// Exercise 1.2


// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14
//   const Header=(props)=>{
//     return(
//       <h1>{props.course}</h1>
//     )
//   }
//   const Part=(props)=>{
//    return(
//       <p>{props.part}{props.exercise}</p>
//     )
//   }
//   const Content=(props)=>{
//     return(
//       <div>
//        <Part part={part1} exercise={exercises1}/>
//        <Part part={part2} exercise={exercises2}/>
//        <Part part={part3} exercise={exercises3}/>
//       </div>
//       )
//   }
//   const Total=()=>{
//     return(
//       <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
//     )
//   }

//   return (
//     <div>
//     <Header course={course}/>
//     <Content/>
//     <Total/>
     
     
//     </div>
//   )
// }

// export default App



// Exercise 1.3
// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = {
//     name: 'Fundamentals of React',
//     exercises: 10
//   }
//   const part2 = {
//     name: 'Using props to pass data',
//     exercises: 7
//   }
//   const part3 = {
//     name: 'State of a component',
//     exercises: 14
//   }

//   return (
//     <div>
//       <h1>{course}</h1>
//       <p>{part1.name} {part1.exercises}</p>
//       <p>{part2.name} {part2.exercises}</p>
//       <p>{part3.name} {part3.exercises}</p>
//       <p>Number of exercises {part1.exercises + part2.exercises + part3.exercises} </p>

//     </div>
//   )
// }

// export default App


//Exercise 1.4
// const App = () => {
//   const course = 'Half Stack application development'
//   const parts = [
//     {
//       name: 'Fundamentals of React',
//       exercises: 10
//     },
//     {
//       name: 'Using props to pass data',
//       exercises: 7
//     },
//     {
//       name: 'State of a component',
//       exercises: 14
//     }
//   ]

//   return (
//     <div>
//       <h1>{course}</h1>
//       <p>{parts[0].name} {parts[0].exercises}</p>
//       <p>{parts[1].name} {parts[1].exercises}</p>
//       <p>{parts[2].name} {parts[2].exercises}</p>
//       <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
//     </div>
//   )
// }

// export default App



// Exercise 1.5
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
     <h1>{course.name}</h1>
     <p>{course.parts[0].name} {course.parts[0].exercises}</p>
     <p>{course.parts[1].name} {course.parts[1].exercises}</p>
     <p>{course.parts[2].name} {course.parts[2].exercises}</p>
     <p>Number of exercises {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}</p>
    </div>
  )
}

export default App
