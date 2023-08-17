import { ContainerOne, ContainerTwo, ButtonText } from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { SlArrowLeft } from 'react-icons/sl'
import { useState, useEffect } from 'react'
import { api } from "../../services/api"
import { BsTrashFill } from "react-icons/bs"
import { useStatePage } from '../../hooks/statePage'

export function Requests() {
  const [request, setRequest] = useState([])
  const { statePage } = useStatePage()

  useEffect(() => {
    async function fetchRequests() {
      const response = await api.get("/allrequests")
      setRequest(response.data.allRequests)
    }
    fetchRequests()
  }, [request])

  async function handleDelete(id) {
    await api.delete(`/allrequests/${id}`)
  }

  return (
    <ContainerOne>
      <ContainerTwo className={statePage ? "containerLight" : "containerDark"}>
        <Header />
        <main className={statePage ? "light" : "dark"}>
          <ButtonText to="/"><SlArrowLeft className={statePage ? "svgLight" : "svgDark"} /><p className={statePage ? "light" : "dark"}>Back to Home</p></ButtonText>
          <h1 className={statePage ? "h1Light" : "h1Dark"}>Orders</h1>
          <table className={statePage ? "tableLight" : "tableDark"}>
            <thead>
              <tr>
                <th className={statePage ? "thLight" : "thDark"}>Status</th>
                <th className={statePage ? "thLight" : "thDark"}>Code</th>
                <th className={statePage ? "thLight" : "thDark"}>Details</th>
                <th className={statePage ? "thLight" : "thDark"}>Date</th>
              </tr>
            </thead>
            <tbody>
              {
                request.map(request => (
                  <tr key={String(request.id)}>
                    <td className={statePage ? "tdLight" : "tdDark"}>{request.status}</td>
                    <td className={statePage ? "tdLight" : "tdDark"}>{request.id}</td>
                    <td className={statePage ? "tdLight" : "tdDark"}>{request.details}</td>
                    <td className={statePage ? "tdLight" : "tdDark"}>{request.created_at} <button onClick={() => handleDelete(request.id)} className={request.status === "🟢Delivered" ? "" : "none"}><BsTrashFill />Delete</button></td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </main>
        <Footer />
      </ContainerTwo>
    </ContainerOne >
  )
}