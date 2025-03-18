import { Injectable } from '@nestjs/common';

@Injectable()
export class ClientesService {
    constructor(){

    }

    remove(id: number) {
        return "removeu cliente";
    }
    update(id: number, cliente: any) {
       return "atualizou cliente";
    }
    create(cliente: any) {
        return "criou cliente";
    }
    findAll() {
        return "encontrou todos os cliente";
    }
}
