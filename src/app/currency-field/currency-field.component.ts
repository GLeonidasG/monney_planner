import { CurrencyPipe } from '@angular/common';
import {
  Component,
  Input,
  OnInit,
  Output,
  ViewChild,
  EventEmitter,
} from '@angular/core';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-currency-field',
  templateUrl: './currency-field.component.html',
  styleUrls: ['./currency-field.component.scss'],
  providers: [CurrencyPipe],
})
export class NumberInputComponent implements OnInit {
  private static backspaceKey = 'Backspace';
  private static backspaceInputType = 'deleteContentBackward';

  @Input() precision: number;

  @Input() amount: string;

  @Output() amountEntered = new EventEmitter<number>();

  @ViewChild('dummyFacade', { static: false }) private dummyFacade: IonInput;

  constructor(private currencyPipe: CurrencyPipe) {}

  ngOnInit() {
    if (this.amount && this.amount.trim() !== '') {
      this.amountEntered.emit(+this.amount);
    }
  }

  handleKeyUp(event: KeyboardEvent) {
    // this handles keyboard input for backspace
    if (event.key === NumberInputComponent.backspaceKey) {
      this.delDigit();
    }
  }

  handleInput(event: CustomEvent) {
    this.clearInput();
    // check if digit
    if (event.detail.data && !isNaN(event.detail.data)) {
      this.addDigit(event.detail.data);
    } else if (
      event.detail.inputType === NumberInputComponent.backspaceInputType
    ) {
      // this handles numpad input for delete/backspace
      this.delDigit();
    }
  }

  openInput() {
    this.dummyFacade.setFocus();
  }

  private addDigit(key: string) {
    this.amount = this.amount + key;
    this.amountEntered.emit(+this.amount);
  }

  private delDigit() {
    this.amount = this.amount.substring(0, this.amount.length - 1);
    this.amountEntered.emit(+this.amount);
  }

  private clearInput() {
    this.dummyFacade.value = ''; // ensures work for mobile devices
    // ensures work for browser
    this.dummyFacade.getInputElement().then((native: HTMLInputElement) => {
      native.value = '';
    });
  }

  get formattedAmount(): string {
    return this.currencyPipe.transform(
      +this.amount / Math.pow(10, this.precision),
      'R$'
    );
  }
}
