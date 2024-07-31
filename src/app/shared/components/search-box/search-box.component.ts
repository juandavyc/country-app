import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounce, debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent implements OnInit, OnDestroy {


  // debouncer - antirebote

  private tuboDeAgua: Subject<string> = new Subject<string>;

  private tuboDeAguaSuscription?: Subscription;
  @Input()
  public placeholder: string = '';

  @Input()
  public initialValue: string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onTuboDeAgua = new EventEmitter<string>();

  ngOnInit(): void {
    // tengo acceso a todo lo de rxjs
    this.tuboDeAguaSuscription = this.tuboDeAgua
      .pipe(
        debounceTime(300) // barrera
      )
      .subscribe(value => {
        this.onTuboDeAgua.emit(value);
      })
  }

  ngOnDestroy(): void {
    this.tuboDeAguaSuscription?.unsubscribe();
  }

  emitValue(value: string): void {
    this.onValue.emit(value)
  }

  onKeyPress(searchTerm: string): void {
    this.tuboDeAgua.next(searchTerm)
  }


}
