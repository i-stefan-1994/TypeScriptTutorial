const norseGods: string[] = ['Thor', 'Odin', 'Freya', 'Njord', 'Tyr']
// const godPower: number[] = []
const godPower: Array<number> = []

type Users = {
    name: string;
    isActive: boolean;
}

const allUsers: Users[] = []

norseGods.push('Skadi')
godPower.push(1)
// allUsers.push({}); // will error out since we don't provide name and isActive
allUsers.push({name: 'whatever', isActive: true})