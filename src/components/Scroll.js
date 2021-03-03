const Scroll = (props) => {
  return (
    <div style={{marginTop: '50px', overflowY: 'scroll', height:'65vh'}}>
      {props.children}
    </div>
  )
}

export default Scroll;