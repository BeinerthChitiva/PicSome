import React from "react"
import { useContext } from "react"
import { Context } from "../Context"
import Image from "../components/Image"
import {getClass} from "../utils/index"

function Photos() {
    const {allPhotos} = useContext(Context)

    const imageElements = allPhotos.map((img, i) => (
        <Image key={img.id} img={img} className={getClass(i)} />
        //We're passing the whole Img Object down, to later access its properties.
    ))

    return (
        <main className="photos">
            {imageElements}
        </main>
    )
}

export default Photos