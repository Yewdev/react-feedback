import PropTypes from 'prop-types'

function Card({children, reverse}) {
  // return (<div className={`card ${reverse && 'reverse'}`}>{children}</div>)

  return (
    <div className="card" 
    style={{
      backgroundColor: reverse ? '#1d3557' : '#f1faee',
      color: reverse ? '#f1faee' : '#1d3557',
      }}>
      {children}
    </div>
  )
}

Card.defaultProps = {
  reverse: false,
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,

}

export default Card