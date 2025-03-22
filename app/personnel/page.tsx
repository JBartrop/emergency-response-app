'use client';
import React, { useEffect } from "react";
import { Table,  TableBody,  TableCaption,   TableCell,   TableFooter,   TableHead,   TableHeader,   TableRow } from "../../components/ui/table"
import { useRouter } from "next/navigation";

interface TableProps{
    serviceNumber: string;
    name:string;
    email:string;
    phoneNumber: string;
};

interface TableHeadProps{
    id:string;
    title:string;
};

const tableHead: TableHeadProps[] = [
    {
        id:"1",
        title:"SERVICE NUMBER"
    },
    {
        id:"2",
        title:"NAME"
    },
    {
        id:"3",
        title:"EMAIL"
    },
    {
        id:"4",
        title:"TELEPHONE NUMBER"
    }
]


const invoices: TableProps[]  = [
    {
        serviceNumber: "10000111",
        name: "Sarpong",
        email: "sarpong@gmail.com",
        phoneNumber: "0203778989",
    },
    {
        serviceNumber: "10005611",
        name: "Kwaku",
        email: "Kwaku@gmail.com",
        phoneNumber: "0203778989",
    },
    {
        serviceNumber: "10000222",
        name: "Mafia",
        email: "Mafia@gmail.com",
        phoneNumber: "0245778989",
    },
    {
        serviceNumber: "10033311",
        name: "Killua",
        email: "Killua@gmail.com",
        phoneNumber: "0203669989",
    },
    {
        serviceNumber: "10334611",
        name: "Georgia",
        email: "Georgia@gmail.com",
        phoneNumber: "0243686989",
    },
    {
        serviceNumber: "10043111",
        name: "Ayanakoji",
        email: "Ayanakoji@gmail.com",
        phoneNumber: "0267878989",
    },
  ]

const Personnel: React.FC = () => {

    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem("emergencyResponseProfile"); 
      if (!token) {
        router.push("/auth/login"); 
      }
    }, []);


    return (
        <section className=" ml-50 p-16 min-h-screen w-screen">
            <Table className="w-10/12 m-auto">
                <TableCaption>A list of your service personnels.</TableCaption>
                <TableHeader>
                  <TableRow>
                    {tableHead.map((heads) => (
                        <TableHead className="first:w-[200px] last:text-right " key={heads.id}>{heads.title}</TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoices.map((invoice) => (
                    <TableRow key={invoice.serviceNumber}>
                      <TableCell className="font-medium">{invoice.serviceNumber}</TableCell>
                      <TableCell>{invoice.name}</TableCell>
                      <TableCell>{invoice.email}</TableCell>
                      <TableCell className="text-right">{invoice.phoneNumber}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                {/* <TableFooter>
                  <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">$2,500.00</TableCell>
                  </TableRow>
                </TableFooter> */}
            </Table>
        </section>
    )
}

export default Personnel;