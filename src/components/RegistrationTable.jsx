import Table from 'react-bootstrap/Table';

function RegistrationTable({ data }) {
  return (
    <div className="table-responsive" style={{marginBottom: 50}}>
      <Table border striped hover>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.lastName}>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.email}</td>
            <td>{item.password}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    </div>
  )
} 

export default RegistrationTable;