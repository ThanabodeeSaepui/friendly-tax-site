import { useState } from "react"

export default function SignIn() {
  const [currentPage, setCurentPage] = useState(1)
  return(
  <div>
    <table>
      <thead>
        <th>ID</th>
        <th>Email</th>
      </thead>
      <tbody>
        <tr>1
          <td>test</td>
        </tr>
        <tr>2
          <td>cat</td>
        </tr>
      </tbody>
    </table>
  </div>
  )
}