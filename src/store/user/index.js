import { action } from 'mobx'
class User {
    name = 'zs'
    @action
    getName(name) {
        this.name = name
    }
}
const user = new User()

export default user
