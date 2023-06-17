import Link from "next/link"




async function fetchRepoContents(name: string) {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    const response = await fetch(`https://api.github.com/repos/joshuajrodrigues/${name}/contents`)
    const contents = await response.json()
    return contents

}




/** @ts-ignore-error Server Component */
const RepoDirs: React.FC<{
    name: string
}> = async ({ name }) => {
    const contents = await fetchRepoContents(name)
    const dirs = contents.filter((item: any) => item.type === 'dir')

    return (
        <div>
            <h3>Directories</h3>
            <ul>
                {
                    dirs.map((dir: any) => (
                        <li key={dir.path}>
                            <Link href={`code/repos/${name}/${dir.path}`}>
                                {dir.path}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default RepoDirs