import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
export default function Banner() {
    return (
        <div>
            <Link href="/hiring">
                <Image
                    src="/static/images/Home/estekhdam-baner.png"
                    alt="Banner Image"
                    width={1920}
                    height={1080}
                />
            </Link>
        </div>
    )
}
