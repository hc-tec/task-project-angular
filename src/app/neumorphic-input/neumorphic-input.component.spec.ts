/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NeumorphicInputComponent } from './neumorphic-input.component';

describe('NeumorphicInputComponent', () => {
  let component: NeumorphicInputComponent;
  let fixture: ComponentFixture<NeumorphicInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeumorphicInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeumorphicInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
