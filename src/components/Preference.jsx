import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import favoriteReducer from "../redux/reducers/favoriteReducer"
import { removeFromFav } from "../redux/action"
const Preference = () => {
  const preferenceCom = useSelector((state) => state.favorits.favorits.content)
  const dispatch = useDispatch()


  return (
    <>
      {
        preferenceCom.map((name, i) => <><Button onClick={() => {
          // dispatch({
          //   type: "",
          //   payload: i,
          // })
          dispatch(removeFromFav(i))
        }}>Del</Button><h1>{name.company_name}</h1></>)
      }

      <Link to="/">Home</Link>
    </>
  )
}

export default Preference