const Card = ({name, email, id}) => {
  return (
        <div className='tc bg-light-blue dib grow pa3 br3 shadow-5 h6 w6 mh2 mv2'>
          <img alt='robots' src={`https://robohash.org/${id}?200x200`}/>
          <div>
          <h2>{name}</h2>
          <p>{email}</p>
          </div>
        </div>
  )
}

export default Card;