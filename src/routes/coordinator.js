

export const goToHome = (history) => {
    history.push("/")
}

export const goToResults = (history) => {
    history.push("/results")
}

export const goToUser = (history, userName) => {
    history.push(`/user?userName=${userName}`)
}

export const goToRepos = (history, userName) => {
    history.push(`/repos?userName=${userName}`)
}

export const goToStarred = (history, userName) => {
    history.push(`/starred?userName=${userName}`)
}

export const goBack = (history) => {
    history.goBack()
}