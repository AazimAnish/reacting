import Axios from "axios";
import {Button, Card, CardBody} from "@nextui-org/react";
import React, { useEffect, useState } from "react";

export const CatFact = () => {

    const [fact, setFact] = useState("");

    const fetchFact = () => {
        Axios.get("https://catfact.ninja/fact").then((res) => {
          setFact(res.data.fact);
        });
      } 

    useEffect(() => {
        fetchFact();
    }, []);

    return (
        <>
            <div className="p-4 grid grid-col gap-4">
                <Card>
                    <CardBody>
                        <p>{fact}</p>
                    </CardBody>
                </Card>
            </div>
            <Button className="text-tiny" variant="ghost" color="primary" radius="lg" onClick={fetchFact}>Next</Button>
        </>
    )
}