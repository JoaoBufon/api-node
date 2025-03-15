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

    }
  
    async update(id: number, conta: any)  {

    }
  
    async remove(id: number)  {
        
    }
}

