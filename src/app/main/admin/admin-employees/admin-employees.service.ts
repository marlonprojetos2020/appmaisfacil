import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class AdminEmployeesService {

    constructor(private httpClient: HttpClient) {}

}


