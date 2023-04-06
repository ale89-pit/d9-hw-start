import { Row, Col, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Job = ({ data }) =>{
  const preferenceCom = useSelector((state)=> state.favorits)
  const dispatch = useDispatch()
  // const deselected = []
  //    console.log(preferenceCom)
  //    if (preferenceCom !== []){className={deselected}
  //      deselected = preferenceCom.content.company_name.filter(data.company_name) ? "d-none" : "d-block";
  //    }
  
    return (
      <> 
  <Row
    className="mx-0 mt-3 p-3"
    style={{ border: '1px solid #00000033', borderRadius: 4 }}
  >
    
    <Col xs={3}>
      <Link  to={`/${data.company_name}`}>{data.company_name}</Link><Button  onClick={()=>{
        dispatch({
          type:"ADD_TO_FAVORITE",
          payload : data,
        })
      }}>Add to favorite</Button>
    </Col>
    <Col xs={9}>
      <a href={data.url} target="_blank" rel="noreferrer">
        {data.title}
      </a>
    </Col>
  </Row>
  </>
)
} 

export default Job
