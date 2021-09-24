import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DestacarDirective } from './destacar.directive';

function makeKeyEvent(
  keyName: string,
  keyCode: number,
  charCode: number
) {
  const event = new KeyboardEvent('keydown');
  Object.defineProperties(event, {
    charCode: { value: charCode },
    keyCode: { value: keyCode },
    keyIdentifier: { value: keyName },
    which: { value: keyCode }
  });
  return event;
}

@Component({
  template: `
  <input appDestacar specificInputRegExp= "\\d+" />`,

})
class TestComponent {

}



describe('DestacarDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let inputElement: DebugElement;
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [DestacarDirective, TestComponent],
      // schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .createComponent(TestComponent);


    inputElement = fixture.debugElement.query(By.directive(DestacarDirective));
    fixture.detectChanges(); // initial binding

  });


  it('should create an instance', () => {
    expect(inputElement).toBeTruthy();
  });

  it('should display only numbers', () => {
    const input = inputElement.nativeElement;
    input.dispatchEvent(makeKeyEvent('Digit1', 49, 49))
    input.dispatchEvent(makeKeyEvent('KeyA', 65, 65))
    input.dispatchEvent(makeKeyEvent('Digit2', 50, 50))
    input.dispatchEvent(makeKeyEvent('KeyB', 66, 66))
    input.dispatchEvent(makeKeyEvent('Digit3', 51, 51))
    fixture.detectChanges();
    expect(input.value).toBe('123');

  })
});



