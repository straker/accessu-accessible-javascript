import { Component, Input } from '@angular/core';
import { formatStat } from '../../utils';

@Component({
  selector: 'social-button',
  templateUrl: './social-button.component.html',
  styleUrls: ['./social-button.component.css']
})
export class SocialButtonComponent {
  @Input() title: string = '';
  @Input() icon: string = '';

  public get count(): number {
   return this._count;
  }

  @Input()
  public set count(count: number) {
    this._count = count;
    this.formattedCount = formatStat(count);
  }

  public get pressed(): boolean {
   return this._pressed;
  }

  @Input()
  public set pressed(pressed: boolean) {
    this._pressed = pressed;
    this.className = `social-button ${pressed ? 'pressed' : ''}`;
    this.iconName = `${this.icon}${pressed ? '_filled' : ''}`;
  }

  className: string = '';
  formattedCount: number = 0;
  iconName: string = '';

  private _count: number = 0;
  private _pressed: boolean = false;

  onClick(): void {
    this.pressed = !this.pressed;
    this.count = this.count + (this.pressed ? 1 : -1);
  }
}
