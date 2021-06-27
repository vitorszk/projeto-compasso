export const goToHome = (history) => {
    history.push("/")
}

export const goToResults = (history) => {
    history.push("/results")
}

export const goToUser = (history) => {
    history.push("/user")
}

export const goToRepos = (history) => {
    history.push(`/${id}/repos`)
}

export const goToStarred = (history) => {
    history.push(`/${id}/starred`)
}