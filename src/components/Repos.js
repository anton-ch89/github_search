import React from 'react'

export const Repos = ({repos}) => (
    <>
    {repos.map((repo, index)=>(
        <div className="card mb-3" key={index}>
            <div className="card-body">
                <h5>
                    <a href={repo.html_url} rel="noreferrer" target="_blank">{repo.name}</a>
                </h5>
            </div>
        </div>
    ))}
    </>
)
