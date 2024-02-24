'use client'
import { FunctionComponent, useEffect, useState } from 'react'

interface IRepo {
    name: string
}

const GitReposComponent: FunctionComponent = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://api.github.com/users/devdeer-kevin/repos')
            const data = await response.json()
            const repoData = data.map((repo: IRepo) => repo.name)
            setProjects(repoData)
            console.log(repoData)
        }
        fetchData()
    }, [])

    return (
        <div>
            <button className="text-slate-100">{projects}</button>
        </div>
    )
}
export default GitReposComponent
