let autoId = 1
export class Capturar{
    constructor(email,senha){
      this.id = autoId++
      this.email = email
      this.senha = senha
    }
}