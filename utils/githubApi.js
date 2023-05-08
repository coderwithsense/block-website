export default async function getRepositories(username, token) {
    const baseUrl = 'https://api.github.com';
    const url = `${baseUrl}/users/${username}/repos`;

    const response = await fetch(url, {
        headers: {
            Authorization: `token ${token}`
        }
    })

    if(response.ok) {
        const repositories = await response.json();
        return repositories;
    }
}