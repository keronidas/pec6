import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Papa } from 'ngx-papaparse';
import { Observable, catchError, map, of } from 'rxjs';
import { DataDTO } from '../../models/DataDTO';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private csvUrl = 'assets/notas_alumnos.csv';

  constructor(private papa: Papa, private http: HttpClient) { }

  getData(): Observable<DataDTO[]> {
    return this.http.get(this.csvUrl, { responseType: 'text' }).pipe(
      map((data) => {
        const parsedData = this.papa.parse(data, { header: true, skipEmptyLines: true }).data;

        return parsedData.map((item: any) => ({
          id: item.ID_Alumno,
          name: item.Nombre,
          surname: item.Apellidos,
          sex: item.Sexo,
          mark: item.Nota_Final,
          fault: item.Faltas_Asistencia
        }));
      }),
      catchError((error) => {
        console.error('Error al obtener los datos', error);
        return of([]); // Devuelve un arreglo vacío o maneja el error según necesites
      })
    );
  }
}
