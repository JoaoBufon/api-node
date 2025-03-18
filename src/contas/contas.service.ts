import { Injectable } from '@nestjs/common';
import { retry } from 'rxjs';

@Injectable()
export class ContasService {

    constructor() {

    }

    findAll(){
        return "encontrou todos os objetos"
    }

    findOne(id: Number){
        return "encontrou o objeto"
    }
  
    create(conta: any)  {
        return "criou o objeto"
    }
  
    async update(id: number, conta: any)  {
        return "editou o objeto"
    }
  
    async remove(id: number)  {
        return "removeu o objeto"
    }
}

