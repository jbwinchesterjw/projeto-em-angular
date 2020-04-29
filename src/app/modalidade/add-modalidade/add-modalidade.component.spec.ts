import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModalidadeComponent } from './add-modalidade.component';

describe('AddModalidadeComponent', () => {
  let component: AddModalidadeComponent;
  let fixture: ComponentFixture<AddModalidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddModalidadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddModalidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
