"use client";

// next 13, moves most of the js to the serverside, since sanity is going to be rendered on the client side,
// we need to specify that it has to be on the client side

import { NextStudio } from "next-sanity/studio";
import config from "../../../sanity.config";

export default function AdminPage(){
    return <NextStudio config={config}/>
}