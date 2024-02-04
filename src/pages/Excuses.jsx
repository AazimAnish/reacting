import Axios from "axios";
import {Button, Card, CardBody} from "@nextui-org/react";
import React, { useEffect, useState } from "react";

export const Excuses = () => {

    const [excuse, setExcuse] = useState("");

    useEffect(() => {
        fetchExcuse();
      }, []);

    const fetchExcuse = (category = '') => {
        Axios.get(`https://excuser-three.vercel.app/v1/excuse/${category}`).then((res) => {
          setExcuse(res.data[0].excuse);
        });
      }

    return (
        <>
            <div className="p-4 grid grid-col gap-4">
                <Card>
                    <CardBody>
                        <p>{excuse}</p>
                    </CardBody>
                </Card>
            </div>
            <div className="grid grid-cols-10 ">
                <Button className="text-tiny col-start-2 col-span-2" variant="ghost" color="primary" radius="lg" onClick={() => fetchExcuse('developers')}>Developer</Button>
                <Button className="text-tiny col-start-5 col-span-2" variant="ghost" color="primary" radius="lg" onClick={() => fetchExcuse('family')}>Family</Button>
                <Button className="text-tiny col-start-8 col-span-2" variant="ghost" color="primary" radius="lg" onClick={() => fetchExcuse('office')}>Office</Button>
            </div>
        </>
    )
}