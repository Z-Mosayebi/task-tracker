import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({title, onAdd ,showAdd}) => {
  const location = useLocation()
  return (
    <heasder className = 'header'>
      <h1 >{title}</h1>  
      {location.pathname=== '/' &&(
        <Button  color={showAdd ? 'red':'green'} text={showAdd ? 'Close':'Add'} 
      onClick = {onAdd}/>)}
    </heasder>
  )
}


Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}


export default Header