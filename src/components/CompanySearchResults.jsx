import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Job from './Job'
import { useParams } from 'react-router-dom'
import { showJobEntWithThunk } from '../redux/action'
import { useDispatch, useSelector } from 'react-redux'

const CompanySearchResults = () => {
  const jobEntAnn = useSelector((state) => state.showJob.jobEnt.content)
  const params = useParams()
  const dispatch = useDispatch()
  console.log(params)
  const baseEndpoint =
    'https://strive-benchmark.herokuapp.com/api/jobs?company='

  useEffect(() => {
    dispatch(showJobEntWithThunk(params.companyName))
  }, [])

  // const getJobs = async () => {
  //   try {
  //     const response = await fetch(baseEndpoint + params.companyName)
  //     if (response.ok) {
  //       const { data } = await response.json()
  //       console.log(data)
  //       setJobs(data)
  //     } else {
  //       alert('Error fetching results')
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  return (
    <Container>
      <Row>
        <Col>
          {jobEntAnn.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default CompanySearchResults
