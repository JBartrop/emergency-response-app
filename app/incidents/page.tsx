import React from "react";
import { Table,  TableBody,  TableCaption,   TableCell,   TableHead,   TableHeader,   TableRow } from "../../components/ui/table"





interface TableProps{
    reportNumber: string;
    Location:string;
    status:string;
    date: string;
};

interface TableHeadProps{
    id:string;
    title:string;
};

const tableHead: TableHeadProps[] = [
    {
        id:"1",
        title:"REPORT NUMBER"
    },
    {
        id:"2",
        title:"LOCATION"
    },
    {
        id:"3",
        title:"STATUS"
    },
    {
        id:"4",
        title:"DATE"
    }
]


const invoices: TableProps[]  = [
    {
        reportNumber: "10020111",
        Location: "Accra, Ghana",
        status: "Resolved",
        date: "09/08/2024",
    },
    {
        reportNumber: "10005612",
        Location: "Cape Coast, Ghana",
        status: "Resolved",
        date: "25/08/2024",
    },
    {
        reportNumber: "10300223",
        Location: "Tema, Ghana",
        status: "Pending",
        date: "12/06/2024",
    },
    {
        reportNumber:"14033314",
        Location: "Dzorwulu, Ghana",
        status: "Ongoing",
        date: "17/04/2024",
    },
    {
       reportNumber: "15334615",
        Location: "Georgia",
        status: "Ongoing",
        date: "17/01/2024",
    },
    {
        reportNumber: "16043116",
        Location: "Kumasi, Ghana",
        status: "Resolved",
        date: "15/02/2024",
    },
  ]


const Incidents: React.FC = () => {
    return (
        <section className=" ml-50 p-16 min-h-screen">
            <Table className="w-10/12 m-auto">
                <TableCaption>A list of incidents happening.</TableCaption>
                <TableHeader>
                  <TableRow>
                    {tableHead.map((heads) => (
                        <TableHead className="first:w-[200px] last:text-right " key={heads.id}>{heads.title}</TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoices.map((invoice) => (
                    <TableRow key={invoice.reportNumber}>
                      <TableCell className="font-medium">{invoice.reportNumber}</TableCell>
                      <TableCell>{invoice.Location}</TableCell>
                      <TableCell>{invoice.status}</TableCell>
                      <TableCell className="text-right">{invoice.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
            </Table>
        </section>
    )
}

export default Incidents;