import { Component, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  input!: string
  @Input() placeholder = 'input'
  @Input() label = 'input'
  @Input() type = 'text'
  @Input() error? = ''
  @Input() valid: ValidationErrors | null | undefined

  onChange: any = () => {}
	onTouched: any = () => {}

  registerOnChange(fn: any): void {
		this.onChange = fn
  }

	registerOnTouched(fn: any): void {
		this.onTouched = fn
	}
}
