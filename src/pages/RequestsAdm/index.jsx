import { Container, ButtonText } from './styles'
import { HeaderTwo } from '../../components/HeaderTwo'
import { FooterTwo } from '../../components/FooterTwo'
import { SlArrowLeft } from 'react-icons/sl'
import { useState, useEffect } from 'react'
import { api } from "../../services/api"
import { BsTrashFill } from "react-icons/bs"

export function RequestsAdm() {
  const [request, setRequest] = useState([])
  //const [status, setStatus] = useState("")
  //const [id, setId] = useState(33)

  useEffect(() => {
    async function fetchRequests() {
      const response = await api.get("/requestsadm")
      setRequest(response.data.allRequestsUsers)
    }
    fetchRequests()
  }, [request])

  async function handleOption(value, id) {
    console.log(value, id)
    if (value === "valueOne") {
      const status = "🔴Pending"
      await api.put("/requestsadm", { status, id })
    } else if (value === "valueTwo") {
      const status = "🔴Pending"
      await api.put("/requestsadm", { status, id })
    } else if (value === "valueThree") {
      const status = "🟢Delivered"
      await api.put("/requestsadm", { status, id })
    }
  }

  async function handleDelete(id, status) {
    if (status === "🔴Pending" || status === "🟡Preparing") {
      alert("You can't delete if your order isn't delivered yet")
      return
    } else if (confirm("Are you sure? If you delete this order, it will be deleted from your customer's account as well")) {
      await api.delete(`/allrequests/${id}`)
    }
  }

return (
  <Container>
    <HeaderTwo />
    <main>
      <ButtonText to="/adm"><SlArrowLeft />Back</ButtonText>
      <h1 >All orders</h1>
      <table>
        <thead>
          <tr>
            <th>Status</th>
            <th>Customer's name</th>
            <th>Code</th>
            <th>Details</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {
            request.map(request => (
              <tr key={String(request.id)}>
                <td>
                  <select name="select" onChange={(e) => handleOption(e.target.value, request.id)}>
                    <option selected={request.status === "🔴Pending"} value="valueOne">🔴Pending</option>
                    <option selected={request.status === "🔴Pending"} value="valueTwo">🔴Pending</option>
                    <option selected={request.status === "🟢Delivered"} value="valueThree">🟢Delivered</option>
                  </select>
                </td>
                <td>{request.name}</td>
                <td>{request.id}</td>
                <td>{request.details}</td>
                <td>{request.created_at} <button onClick={() => handleDelete(request.id, request.status)} ><BsTrashFill />Delete</button></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </main>
    <FooterTwo />
  </Container>
)
}