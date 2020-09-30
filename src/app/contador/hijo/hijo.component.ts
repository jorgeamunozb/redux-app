import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { MultiplicarAction, DividirAction } from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: [
  ]
})
export class HijoComponent implements OnInit {

  contador: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('contador')
      .subscribe(contador => this.contador = contador);
  }

  multiplicar() {
    const accion = new MultiplicarAction(5);
    this.store.dispatch(accion);
    //this.contador *= 2;
    //this.contadorCambio.emit(this.contador);
  }

  dividir() {
    const accion = new DividirAction(5);
    this.store.dispatch(accion);
    //this.contador /= 2;
    //this.contadorCambio.emit(this.contador);
  }

}
