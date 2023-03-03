import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  // input!: string
  @Output() data: EventEmitter<string> = new EventEmitter<string>();
  @Input() placeholder: string = 'input';
  @Input() label: string = 'input';
  @Input() type: string = 'text';
  @Input() error?: string = '';
  @Input() valid: ValidationErrors | null | undefined

  onChange: any = () => {}
	onTouched: any = () => {}

  registerOnChange(input: any): void {
    this.data.emit(input.value);
		// this.onChange = fn;
  }

	registerOnTouched(fn: any): void {
		this.onTouched = fn
	}
}
