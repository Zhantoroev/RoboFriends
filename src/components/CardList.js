import Card from './Card';

const CardList = ({robots}) => {
  return (
    robots.map((user, i) => {
    return <Card key={i} name={robots[i].name} email={robots[i].email} id={robots[i].id} website={robots[i].website}/>
    })
    
  )
}

export default CardList;