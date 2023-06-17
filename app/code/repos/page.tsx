import Link from "next/link"

export interface IRepos {
    id: string;
    name: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    watchers_count: number;
}



async function fetchRepos(): Promise<IRepos[]> {
    const response = await fetch('https://api.github.com/users/joshuajrodrigues/repos', {
        next: {
            revalidate: 60
        }
    })
    //  await new Promise((resolve) => setTimeout(resolve, 2000))
    const data = await response.json()
    return data

}
const CodeRepoPage = async () => {
    const repos = await fetchRepos()

    return (
        <div>
            <h1>Code Repo</h1>
            <section>
                <ul>
                    {
                        repos?.map((item) => (
                            <li key={item.id}>

                                <Link href={'/code/repos/' + item.name} >
                                    <h3>{item.name}</h3>
                                    <p>{item.description}</p>
                                </Link>
                                <div>
                                    <span>
                                        Stars:  {item.stargazers_count},
                                    </span>
                                    <span>
                                        Forks:  {item.forks_count},
                                    </span>
                                    <span>
                                        Watchers: {item.watchers_count},
                                    </span>
                                </div>
                            </li>
                        ))
                    }
                </ul>

            </section>

        </div>
    )
}

export default CodeRepoPage