import { getPage } from "@/sanity/sanity-utils"
import { PortableText } from "@portabletext/react"

type Props = {
    params: { slug: string }
}

export default async function Page({ params }: Props) {
    const page = await getPage(params.slug)

    return (
        <div>
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-700 via-green-900 to-slate-700 bg-clip-text text-transparent">
                {page.title}
            </h1>
            <div className="text-lg text-gray-700 mt-5">
                <PortableText value={page.content} />
            </div>
        </div>
    )
}