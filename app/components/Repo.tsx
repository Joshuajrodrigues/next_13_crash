import { IRepos } from "../code/repos/page";

async function fetchRepo(name: string): Promise<IRepos> {
    const response = await fetch(`https://api.github.com/repos/joshuajrodrigues/${name}`)
    const repo = await response.json()
    return repo

}


interface RepoProps {
    name: string;
}
{/* @ts-expect-error Server Component */ }
const Repo: React.FC<RepoProps> = async ({ name }) => {
    const repo = await fetchRepo(name);
    return <div>
        <h2>{repo.name}</h2>
        <p>{repo.description}</p>
        <div>
            <span>
                Stars:  {repo.stargazers_count},
            </span>
            <span>
                Forks:  {repo.forks_count},
            </span>
            <span>
                Watchers: {repo.watchers_count},
            </span>
        </div>
    </div>;
};

export default Repo