import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='about-container'>
      <p>Hello, I'm Zahra Mosayebi, a front-end developer passionate about building functional, user-friendly applications. This project is a simple yet efficient to-do list built with React and react-router-dom. It allows users to manage tasks with options to add, toggle reminders, and delete tasks seamlessly. This app demonstrates essential front-end skills, including component-based development, state management, and asynchronous API interactions, all styled for a smooth user experience.</p>
      <Link to='/' >Go Back</Link>
    </div>
  )
}

export default About