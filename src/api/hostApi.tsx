//get Hosts from public API https://randomuser.me/
export async function getHosts() {
    const response = await fetch('https://randomuser.me/api/?results=50&nat=de')

    if (!response.ok) {
        throw new Error('Error: No hosts today');
    }

    const data = await response.json();

    return data.results.map(host => ({
        id: host.login.uuid,
        name: `${host.name.first} ${host.name.last}`,
        city: 'Munich',
        avatar: host.picture.large,
        age: host.dob.age,
    }));
}