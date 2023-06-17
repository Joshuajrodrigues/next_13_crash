import Repo from "@/app/components/Repo"
import { IRepos } from "../page"
import Link from "next/link"
import RepoDirs from "@/app/components/RepoDirs"
import { Suspense } from "react"


const RepoContainer: React.FC<{
    params: IRepos
}> = ({ params: { name } }) => {
    return (
        <div>
            <Link href={'/code/repos'}>
                Back to repos
            </Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Repo name={name} />
            </Suspense>
            <Suspense fallback={"Loading directories"}>

                <RepoDirs name={name} />
            </Suspense>
        </div>
    )
}

export default RepoContainer