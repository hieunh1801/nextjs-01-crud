import { NextPage } from "next";
import { Employee } from "interfaces/employee";
import { makeStyles, Card, CardContent, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

type Props = {
  employee: Employee
}

const EmployeeDetail: NextPage<Props> = ({ employee }) => {
  return (
    <div >
      Employee Detail
      {employee.id}

      {employee.gender}

      <Card>
        <CardContent>
          <Typography>
            {employee.full_name}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default EmployeeDetail;