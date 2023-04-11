import { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import Job from './Job'
import { Link } from 'react-router-dom'
import { addJobAnnWithThunk } from '../redux/action'
import { useDispatch, useSelector } from 'react-redux'

const MainSearch = () => {
  const [query, setQuery] = useState('')
  const jobs = useSelector((state) => state.jobAnn.jobAnn.content)
  const dispatch = useDispatch()


  const handleChange = (e) => {
    setQuery(e.target.value)


  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log()
    dispatch(addJobAnnWithThunk(query))
    //al dispatch passo la query come valore della ricerca nell'inputform


  }

  return (
    <Container>
      <Row>
        <Col>
          <Link to="/preference">Favorite</Link>
        </Col>
      </Row>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">


          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default MainSearch
